import { elizaLogger, generateObjectDeprecated } from "@elizaos/core"; // Eliza OS의 로깅 유틸리티 가져오기
import {
    ActionExample,
    Content,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    ModelClass,
    type Action,
} from "@elizaos/core"; // Eliza OS의 핵심 타입과 인터페이스 가져오기
import { composeContext } from "@elizaos/core"; // 컨텍스트 생성 유틸리티 가져오기
import { createUserWalletClient } from "../viem"; // Viem을 사용해 지갑 클라이언트 생성
import { createAcrossClient } from "@across-protocol/app-sdk"; // Across 프로토콜 클라이언트 생성
import { Address, parseUnits } from "viem"; // Viem에서 주소와 단위 변환 유틸리티 가져오기
import {
    adjustInputAmountForOuput,
    createTransactionUrl,
} from "src/environments"; // 환경 설정에서 금액 조정 및 트랜잭션 URL 생성 함수 가져오기
import { supportedChains } from "src/constants"; // 지원되는 체인 목록 가져오기
import { stat } from "node:fs";

// 입금 내용의 인터페이스 정의, Content를 확장
export interface DepositContent extends Content {
    recipient: string;
    amount: string | number; // 전송 금액
    sourceChain: string; // 출발 체인 이름
    destinationChain: string; // 도착 체인 이름
    tokenName: string; // 토큰 이름
}

function isValidAddress(value: any): value is Address {
    return typeof value === "string" && /^0x[0-9a-fA-F]+$/.test(value);
}

// 타입 가드: 주어진 내용이 DepositContent인지 확인
function isDepositContent(content: any): content is DepositContent {
    console.log("Content for Bridge", content); // 디버깅용 콘솔 로그
    return (
        isValidAddress(content.recipient) && // 수신자 주소가 문자열인지 확인
        (typeof content.amount === "string" || typeof content.amount === "number") && // 금액이 문자열 또는 bigint인지 확인
        typeof content.sourceChain === "string" && // 출발 체인 이름이 문자열인지 확인
        typeof content.destinationChain === "string" && // 도착 체인 이름이 문자열인지 확인
        typeof content.tokenName === "string" // 토큰 이름이 문자열인지 확인
    );
}

// 템플릿에서 추출한 변수 이름과 interface와 변수 이름이 차이가 나면 매칭을 시켜주지 않는다..!!!!!!!!

// 메시지에서 입금 정보를 추출하기 위한 템플릿
const depositTemplate = `Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined.

Example response:
\`\`\`json
{
    "recipient": "0x2badda48c062e861ef17a96a806c451fd296a49f45b272dee17f85b0e32663fd",
    "amount": "1000",
    "sourceChain": "arbitrum",
    "destinationChain": "base",
    "tokenName": "USDC",
}
\`\`\`

{{recentMessages}}

Given the recent messages, extract the following information about the requested token transfer:
- Recipient wallet address
- Amount to transfer
- source chain id
- destination chain id
- token name or token address

Respond with a JSON markdown block containing only the extracted values.`;

// 액션 정의
export default {
    name: "BRIDGE_DEPOSIT", // 액션 이름
    similes: ["DEPOSIT", "BRIDGE_TOKEN", "SEND", "bridge", "Bridge", "BRIDGE"], // 이 액션을 트리거할 수 있는 유사 표현
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        console.log("Validating bridging from user:", message.userId); // 사용자 ID로 브리징 유효성 검사 로그
        return true; // 항상 유효로 간주
    },
    description: "Transfer tokens from the agent's wallet to another address", // 액션 설명
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        console.log("Starting BRIDGE_DEPOSIT handler..."); // 핸들러 시작 로그
        if (!state) {
            state = (await runtime.composeState(message)) as State; // 상태가 없으면 메시지로 상태 구성
        } 

        // 입금 컨텍스트 생성
        const depositContext = composeContext({
            state,
            template: depositTemplate,
        });

        // AI 모델을 사용해 입금 내용 생성
        const content = await generateObjectDeprecated({
            runtime,
            context: depositContext,
            modelClass: ModelClass.SMALL, // 작은 모델 사용
        });
        console.log("content generate", content)
        // 생성된 내용이 유효한지 확인
        if (!isDepositContent(content)) {
            console.error("Invalid content for BRIDGE_DEPOSIT action."); // 유효하지 않은 내용 로그
            if (callback) {
                callback({
                    text: "Unable to process bridge request. Invalid content provided.", // 오류 메시지
                    content: { error: "Invalid transfer content" },
                });
            }
            return false; // 실패 반환
        }

        try {
            // 내용에서 정보 추출
            const sourceChainName = content.sourceChain;
            const destinationChainName = content.destinationChain;
            const WETH_DECIMALS = 18; // USDC의 소수점 자리수
            const inputAmount = parseUnits(
                content.amount.toString(),
                WETH_DECIMALS
            ); // 금액을 단위로 변환


            // 런타임 설정에서 개인 키 가져오기
            const privateKey = runtime.getSetting("ACROSS_PRIVATE_KEY");
            
            // 지원 체인 목록에서 출발 및 도착 체인 찾기
            const sourceChainConfig = supportedChains.find(
                (chain) => chain.chainName === sourceChainName
            );
            const destinationChainConfig = supportedChains.find(
                (chain) => chain.chainName === destinationChainName
            );

            console.log(sourceChainConfig, destinationChainConfig)

            
            // 지갑 클라이언트 생성
            const wallet = createUserWalletClient(
                privateKey,
                sourceChainConfig.viemChain
            );
            
            // Across 클라이언트 생성
            const acrossClient = createAcrossClient({
                integratorId: "0xdead",
                chains: [
                    sourceChainConfig.viemChain,
                    destinationChainConfig.viemChain,
                ],
                useTestnet: true
            });

            // 토큰 전송 경로 정의
            const route = {
                originChainId: sourceChainConfig.chainId,
                destinationChainId: destinationChainConfig.chainId,
                inputToken: sourceChainConfig.tokenAddress.weth as Address,
                outputToken: destinationChainConfig.tokenAddress.weth as Address,
                isNative: true
            };

            console.log("Route", route); // 경로 로그
            
            // 전송 견적 가져오기
            const quote = await acrossClient.getQuote({
                route,
                inputAmount: inputAmount,
            });


            // 수수료를 고려해 입력 금액 조정
            const adjustedInputAmount = adjustInputAmountForOuput(
                inputAmount,
                quote.fees.totalRelayFee.pct
            );
            
            // 입금 매개변수 준비
            const depositParams = {
                ...quote.deposit,
                recipient: content.recipient as  Address,
                inputAmount: adjustedInputAmount,
                outputAmount: inputAmount,
            };

            console.log("depositParams:", depositParams)
            
            let sourceTxHash: string | undefined;
            let destinationTxHash: string | undefined;
            
            // 견적 실행 (전송 수행)
            await acrossClient.executeQuote({
                walletClient: wallet,
                deposit: depositParams,
                onProgress: (progress) => {
                    if (
                        progress.step === "approve" &&
                        progress.status === "txSuccess"
                    ) {
                        const { txReceipt } = progress;
                        console.log(
                            `Approved ${sourceChainConfig.tokenAddress.weth} on ${sourceChainConfig.viemChain.name}`
                        ); // 승인 로그
                        console.log(
                            createTransactionUrl(
                                sourceChainConfig.viemChain,
                                txReceipt.transactionHash
                            )
                        ); // 트랜잭션 URL 로그
                    }
                    if (
                        progress.step === "deposit" &&
                        progress.status === "txSuccess"
                    ) {
                        const { depositId, txReceipt } = progress;
                        console.log(
                            `Deposited ${sourceChainConfig.tokenAddress.weth} on ${sourceChainConfig.viemChain.name}`
                        ); // 입금 로그
                        elizaLogger.log(
                            createTransactionUrl(
                                sourceChainConfig.viemChain,
                                txReceipt.transactionHash
                            )
                        ); // 트랜잭션 URL 로그
                        sourceTxHash = createTransactionUrl(sourceChainConfig.viemChain, txReceipt.transactionHash)
                    }
                    if (
                        progress.step === "fill" &&
                        progress.status === "txSuccess"
                    ) {
                        const { txReceipt, actionSuccess } = progress;
                        console.log(
                            `Filled on ${destinationChainConfig.viemChain.name}`
                        ); // 채우기 로그
                        console.log(
                            createTransactionUrl(
                                destinationChainConfig.viemChain,
                                txReceipt.transactionHash
                            )
                        ); // 트랜잭션 URL 로그
                        destinationTxHash = createTransactionUrl(
                            destinationChainConfig.viemChain,
                            txReceipt.transactionHash
                        )
                        console.log("actionSuccess: ",actionSuccess)
                        if (actionSuccess) {
                            console.log(`Cross chain messages were successful`); // 성공 로그
                        } else {
                            console.log(`Cross chain messages failed`); // 실패 로그
                        }
                    }
                },
            });
            
            console.log(
                `Transferring: ${content.amount} tokens (${adjustedInputAmount} base units)`
            ); // 전송 로그

            if (callback) {
                callback({
                    text: `Successfully Bridged ${content.amount} ${content.tokenName} to ${content.recipient}, source chain Tx: ${sourceTxHash}, destination chain Tx: ${destinationTxHash}`, // 성공 메시지
                    content: {
                        success: true,
                        amount: content.amount,
                        recipient: content.recipient,
                        sourceChain: content.sourceChain,
                        destinationChain: content.destinationChain,
                        token: content.tokenName
                    },
                });
            }

            return true; // 성공 반환
        } catch (error) {
            console.error("Error during token bridge:", error); // 오류 로그
            if (callback) {
                callback({
                    text: `Error bridging tokens: ${error.message}`, // 오류 메시지
                    content: { error: error.message },
                });
            }
            return false; // 실패 반환
        }
    },

    examples: [
        [
            {
                user: "{{name1}}",
                content: {
                    text: "Bridge 69 USDC tokens to 0x4f2e63be8e7fe287836e29cde6f3d5cbc96eefd0c0e3f3747668faa2ae7324b0 from arbitrum to base",
                },
            },
            {
                user: "{{name2}}",
                content: {
                    text: "I'll send 69 USDC tokens now... from: arbitrum, to: base",
                    action: "BRIDGE_DEPOSIT",
                },
            },
            {
                user: "{{name2}}",
                content: {
                    text: "Successfully bridged 69 USDC tokens to 0x4f2e63be8e7fe287836e29cde6f3d5cbc96eefd0c0e3f3747668faa2ae7324b0, Transaction: 0x39a8c432d9bdad993a33cc1faf2e9b58fb7dd940c0425f1d6db3997e4b4b05c0",
                },
            },
        ],
    ] as ActionExample[][],
} as Action;