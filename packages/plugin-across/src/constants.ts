import { arbitrum, arbitrumSepolia, base, sepolia } from "viem/chains";

export const supportedChains = [
    {
        chainName: "sepolia",
        chainId: sepolia.id,
        viemChain: sepolia,
        tokenAddress: { weth: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14" },
    },
    {
        chainName: "arbitrumsepolia",
        chainId: arbitrumSepolia.id,
        viemChain: arbitrumSepolia,
        tokenAddress: { weth: "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73" },
    },
];
