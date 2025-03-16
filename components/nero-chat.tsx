"use client";

import type React from "react";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Copy,
  Send,
  Image,
  SendIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Common delay function (2 seconds)
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Helper function to generate a random transaction hash (64 hex characters)
function generateRandomTxHash(length = 64): string {
  let result = "0x";
  const characters = "abcdef0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Stub function: NEAR Intent swap via backend API (mock)
async function performNearIntentSwap(params: {
  defuse_asset_identifier_in: string;
  defuse_asset_identifier_out: string;
  exact_amount_in: string;
  network: string;
}): Promise<{ txHash: string }> {
  await delay(2000);
  return { txHash: generateRandomTxHash() };
}

// Stub function: Questflow action via backend API (mock)
async function performQuestflowAction(params: {
  agentType: string;
}): Promise<{ result: string }> {
  await delay(2000);
  return {
    result: `Questflow action for agent '${params.agentType}' executed successfully!`,
  };
}

// Stub function: Buy action (mock)
async function performBuyAction(params: {
  token: string;
  amount: string;
}): Promise<{ txHash: string }> {
  await delay(2000);
  return { txHash: generateRandomTxHash() };
}

// Stub function: Sell action (mock)
async function performSellAction(params: {
  token: string;
  amount: string;
}): Promise<{ txHash: string }> {
  await delay(2000);
  return { txHash: generateRandomTxHash() };
}

// Stub function: Bridge action (mock)
async function performBridgeAction(params: {
  token: string;
  amount: string;
  destinationChain: string;
}): Promise<{ txHash: string }> {
  await delay(2000);
  return { txHash: generateRandomTxHash() };
}

// Stub function: Send action (mock)
async function performSendAction(params: {
  token: string;
  amount: string;
  destinationAddress: string;
}): Promise<{ txHash: string }> {
  await delay(2000);
  return { txHash: generateRandomTxHash() };
}

// Stub function: Stake action (mock)
async function performStakeAction(params: {
  token: string;
  amount: string;
}): Promise<{ txHash: string }> {
  await delay(2000);
  return { txHash: generateRandomTxHash() };
}

interface NeroChatProps {
  onClose: () => void;
}

type SwapFlowStep = "none" | "askTokenPair" | "askAmount";
type QuestflowFlowStep = "none" | "askAgent";
type BuyFlowStep = "none" | "askBuyDetails";
// Similar flow types for Sell, Bridge, Send, Stake can be defined as needed

export function NeroChat({ onClose }: NeroChatProps) {
  const [showDefiOptions, setShowDefiOptions] = useState(false);
  const [messages, setMessages] = useState<
    { content: string; timestamp: Date; isUser?: boolean }[]
  >([
    {
      content:
        "Hi! I'm your Nero Helper. I can help you manage your portfolio, answer questions, or just chat.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [apiKey, setApiKey] = useState(""); // API key state
  const [isProcessing, setIsProcessing] = useState(false);

  // Swap flow state
  const [swapFlow, setSwapFlow] = useState<{
    step: SwapFlowStep;
    tokenPair?: { tokenIn: string; tokenOut: string };
    amount?: string;
  }>({ step: "none" });

  // Questflow flow state
  const [questflowFlow, setQuestflowFlow] = useState<{
    step: QuestflowFlowStep;
    agentType?: string;
  }>({ step: "none" });

  // Buy flow state (as an example)
  const [buyFlow, setBuyFlow] = useState<{
    step: BuyFlowStep;
    details?: { token: string; amount: string };
  }>({ step: "none" });

  // Other flows (Sell, Bridge, Send, Stake) can be managed similarly

  const addMessage = (content: string, isUser = false) => {
    setMessages((prev) => [
      ...prev,
      { content, timestamp: new Date(), isUser },
    ]);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Handle Swap Flow
    if (swapFlow.step !== "none") {
      const userInput = inputValue.trim();
      addMessage(userInput, true);
      setInputValue("");

      if (swapFlow.step === "askTokenPair") {
        const parts = userInput.split("/");
        if (parts.length !== 2) {
          addMessage(
            "Please provide the token pair in the format 'TOKEN_IN/TOKEN_OUT'."
          );
          return;
        }
        const tokenIn = parts[0].trim().toUpperCase();
        const tokenOut = parts[1].trim().toUpperCase();
        setSwapFlow({ step: "askAmount", tokenPair: { tokenIn, tokenOut } });
        addMessage(
          `Token pair set to ${tokenIn}/${tokenOut}. Please enter the amount you wish to swap.`
        );
      } else if (swapFlow.step === "askAmount") {
        const amount = userInput;
        setSwapFlow((prev) => ({ ...prev, amount, step: "none" }));
        addMessage(`Amount set to ${amount}. Initiating swap...`);
        setIsProcessing(true);
        try {
          const swapParams = {
            defuse_asset_identifier_in: swapFlow.tokenPair?.tokenIn || "",
            defuse_asset_identifier_out: swapFlow.tokenPair?.tokenOut || "",
            exact_amount_in: amount,
            network: "near",
          };
          const result = await performNearIntentSwap(swapParams);
          addMessage(`Swap successful! Transaction Hash: ${result.txHash}`);
        } catch (error: any) {
          addMessage(`Swap error: ${error.message}`);
        } finally {
          setIsProcessing(false);
        }
      }
      return;
    }

    // Handle Questflow Flow
    if (questflowFlow.step !== "none") {
      const userInput = inputValue.trim();
      addMessage(userInput, true);
      setInputValue("");
      if (questflowFlow.step === "askAgent") {
        setQuestflowFlow({ step: "none", agentType: userInput });
        addMessage(
          `Questflow agent set to '${userInput}'. Initiating Questflow action...`
        );
        setIsProcessing(true);
        try {
          const result = await performQuestflowAction({ agentType: userInput });
          addMessage(`Questflow action completed! Result: ${result.result}`);
        } catch (error: any) {
          addMessage(`Questflow action error: ${error.message}`);
        } finally {
          setIsProcessing(false);
        }
      }
      return;
    }

    // Handle Buy Flow (example)
    if (buyFlow.step !== "none") {
      const userInput = inputValue.trim();
      addMessage(userInput, true);
      setInputValue("");
      if (buyFlow.step === "askBuyDetails") {
        // Expecting input in the format "TOKEN amount" (e.g., "NEAR 10")
        const parts = userInput.split(" ");
        if (parts.length !== 2) {
          addMessage(
            "Please provide buy details in the format 'TOKEN amount'."
          );
          return;
        }
        const token = parts[0].trim().toUpperCase();
        const amount = parts[1].trim();
        setBuyFlow({ step: "none", details: { token, amount } });
        addMessage(
          `Buy details set: ${token} for ${amount}. Initiating buy action...`
        );
        setIsProcessing(true);
        try {
          const result = await performBuyAction({ token, amount });
          addMessage(`Buy successful! Transaction Hash: ${result.txHash}`);
        } catch (error: any) {
          addMessage(`Buy error: ${error.message}`);
        } finally {
          setIsProcessing(false);
        }
      }
      return;
    }

    // Regular chat flow (outside any multi-step action)
    addMessage(inputValue, true);
    setInputValue("");

    if (!apiKey.trim()) {
      addMessage("OpenAI API key is not set. Please enter your key above.");
      return;
    }

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: inputValue },
            ],
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      const aiMessageContent =
        data.choices?.[0]?.message?.content || "No response.";
      addMessage(aiMessageContent);
    } catch (error: any) {
      addMessage(`Error occurred: ${error.message}`);
    }
  };

  const chatMessages = [
    {
      id: 1,
      sender: "bot",
      content: "eigggggggggggggggggggggg",
      timestamp: "Feb 26, 2025",
    },
    {
      id: 1,
      sender: "bot",
      content: "eigggggggggggggggggggggg",
      timestamp: "Feb 26, 2025",
    },
    {
      id: 1,
      sender: "bot",
      content: "eigggggggggggggggggggggg",
      timestamp: "Feb 26, 2025",
    },
  ];

  // Updated handleDefiAction to add functionality for each option with mock actions
  const handleDefiAction = (action: string) => {
    setShowDefiOptions(false);
    if (action === "Swap") {
      addMessage(
        "You selected Swap. Please enter the token pair in the format 'TOKEN_IN/TOKEN_OUT' (e.g., NEAR/USDC)."
      );
      setSwapFlow({ step: "askTokenPair" });
    } else if (action === "Questflow") {
      addMessage(
        "You selected Questflow. Please specify the Questflow agent (e.g., 'strategic trading', 'airdrop', 'data analysis')."
      );
      setQuestflowFlow({ step: "askAgent" });
    } else if (action === "Buy") {
      addMessage(
        "You selected Buy. Please provide the buy details in the format 'TOKEN amount' (e.g., NEAR 10)."
      );
      setBuyFlow({ step: "askBuyDetails" });
    } else if (action === "Sell") {
      addMessage(
        "You selected Sell. Please provide the sell details in the format 'TOKEN amount' (e.g., NEAR 10)."
      );
      // Example of Sell flow (calling the mock function directly)
      setIsProcessing(true);
      performSellAction({ token: "NEAR", amount: "10" })
        .then((result) =>
          addMessage(`Sell successful! Transaction Hash: ${result.txHash}`)
        )
        .catch((error) => addMessage(`Sell error: ${error.message}`))
        .finally(() => setIsProcessing(false));
    } else if (action === "Bridge") {
      addMessage(
        "You selected Bridge. Please provide the details in the format 'TOKEN amount destinationChain' (e.g., NEAR 10 Ethereum)."
      );
      // Example of Bridge flow
      setIsProcessing(true);
      performBridgeAction({
        token: "NEAR",
        amount: "10",
        destinationChain: "Ethereum",
      })
        .then((result) =>
          addMessage(`Bridge successful! Transaction Hash: ${result.txHash}`)
        )
        .catch((error) => addMessage(`Bridge error: ${error.message}`))
        .finally(() => setIsProcessing(false));
    } else if (action === "Send") {
      addMessage(
        "You selected Send. Please provide the details in the format 'TOKEN amount destinationAddress' (e.g., NEAR 10 0x123...)."
      );
      // Example of Send flow
      setIsProcessing(true);
      performSendAction({
        token: "NEAR",
        amount: "10",
        destinationAddress: "0x123...",
      })
        .then((result) =>
          addMessage(`Send successful! Transaction Hash: ${result.txHash}`)
        )
        .catch((error) => addMessage(`Send error: ${error.message}`))
        .finally(() => setIsProcessing(false));
    } else if (action === "Stake") {
      addMessage(
        "You selected Stake. Please provide the stake details in the format 'TOKEN amount' (e.g., NEAR 10)."
      );
      // Example of Stake flow
      setIsProcessing(true);
      performStakeAction({ token: "NEAR", amount: "10" })
        .then((result) =>
          addMessage(`Stake successful! Transaction Hash: ${result.txHash}`)
        )
        .catch((error) => addMessage(`Stake error: ${error.message}`))
        .finally(() => setIsProcessing(false));
    } else {
      addMessage(`You selected: ${action}. Let me help you with that.`);
    }
  };

  //   return (
  //     <Card className="relative w-full max-w-[892px] h-[895px] bg-collection-1-colors-black rounded-[var(--collection-1-spacing-large-box-corners)] overflow-hidden shadow-chatbot-modal-shadow">
  //     {/* <div className="fixed inset-0 z-50 flex flex-col bg-white"> */}
  //       {/* Header */}
  //       <header className="flex items-center justify-between p-6 bg-collection-1-colors-light-blue border-b border-[#e4e4e4]">
  //       {/* <div className="flex items-center justify-between border-b p-4">
  //         <div className="flex items-center gap-3"> */}
  //         <div className="flex items-center gap-[var(--size-space-200)]">
  //           <Button variant="ghost" size="icon" onClick={onClose}>
  //           <ChevronLeft className="w-6 h-6" />
  //           </Button>
  //           <h1 className="font-bold [font-family:'HelveticaNeue-Bold',Helvetica] text-collection-1-colors-super-dark-brown-text text-4xl leading-9">Nero</h1>
  //         </div>

  //       {/* </div> */}
  //       </header>

  //       {/* API Key Input */}
  //       <div className="flex flex-col h-[calc(100%-188px)] overflow-y-auto p-[50px] space-y-10">
  //         <label className="block text-sm font-medium text-gray-700 mb-1">
  //           OpenAI API Key
  //         </label>
  //         <input
  //           type="password"
  //           value={apiKey}
  //           onChange={(e) => setApiKey(e.target.value)}
  //           placeholder="sk-..."
  //           className="w-full rounded border border-gray-300 py-2 px-3"
  //         />
  //       </div>

  //       {/* Chat Messages */}
  //       {/* <div className="flex-1 overflow-y-auto p-4">
  //         {messages.map((message, index) => (
  //           <div key={index} className={`mb-4 flex ${message.isUser ? "justify-end" : "justify-start"}`}>
  //             {!message.isUser && (
  //               <div className="mr-2 h-6 w-6 flex-shrink-0 rounded bg-gray-100 p-1">
  //                 <img
  //                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
  //                   alt="Nero"
  //                   className="h-full w-full"
  //                 />
  //               </div>
  //             )}
  //             <div className={`rounded-lg p-3 ${message.isUser ? "bg-blue-100 text-gray-800" : "bg-gray-100 text-gray-800"}`}>
  //               <p>{message.content}</p>
  //               <div className="mt-1 text-xs text-gray-500">
  //                 {message.isUser ? "You" : "Nero"} • {format(message.timestamp, "MMM d, yyyy")}
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div> */}

  // <div className="flex items-start gap-2">
  //     <Avatar className="w-12 h-12 bg-collection-1-colors-accent rounded-[631.58px]">
  //       <AvatarFallback className="flex items-center justify-center">
  //          <span className="text-xs text-collection-1-colors-white">N</span>
  //        </AvatarFallback>
  //      </Avatar>

  //      <div className="flex flex-col items-start gap-2 flex-1">
  //        <CardContent className="flex flex-col p-6 bg-[#f7f7f7] rounded-[0px_16px_16px_16px]">
  //          <p className="[font-family:'HelveticaNeue-Light',Helvetica] font-light text-collection-1-colors-super-dark-brown-text text-base leading-[26.1px]">
  //            {chatMessages[0].content}
  //         </p>
  // </CardContent>

  //       <div className="flex items-center gap-2 w-full">
  //          <div className="flex items-center gap-2">
  //            <Copy className="w-6 h-6" />
  //          </div>
  //          <span className="[font-family:'HelveticaNeue-Light',Helvetica] font-light text-collection-1-colors-dark-gray text-xs leading-[19.6px]">
  //            {chatMessages[0].timestamp}
  //         </span>
  //        </div>
  //    </div>
  //   </div>

  //       {/* DeFi Options */}
  //       <div className="border-t">
  //         <div
  //           className="flex cursor-pointer items-center justify-between p-4"
  //           onClick={() => setShowDefiOptions(!showDefiOptions)}
  //         >
  //           <div className="text-lg font-semibold">Ask Nero to manage your DeFi portfolio</div>
  //           {showDefiOptions ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
  //         </div>

  //         {showDefiOptions && (
  //           <div className="grid grid-cols-2 gap-3 p-4">
  //             {["Buy", "Sell", "Swap", "Bridge", "Send", "Stake", "Questflow"].map((action) => (
  //               <Button
  //                 key={action}
  //                 variant="outline"
  //                 className="border-2 border-blue-200 py-3 text-blue-600 hover:bg-blue-50"
  //                 onClick={() => handleDefiAction(action)}
  //                 disabled={isProcessing && action === "Swap"}
  //               >
  //                 {action}
  //               </Button>
  //             ))}
  //           </div>
  //         )}
  //       </div>

  //       {/* Message Input */}
  //       <div className="border-t p-4">
  //         <form onSubmit={handleSendMessage} className="relative">
  //           <input
  //             type="text"
  //             value={inputValue}
  //             onChange={(e) => setInputValue(e.target.value)}
  //             placeholder="Write your message..."
  //             className="w-full rounded-full border border-gray-300 py-3 pl-4 pr-12"
  //           />
  //           <Button
  //             type="submit"
  //             size="icon"
  //             className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-gray-100"
  //             disabled={!inputValue.trim()}
  //           >
  //             <ArrowUp className="h-4 w-4" />
  //           </Button>
  //         </form>
  //       </div>
  //     </Card>
  //   )
  // }

  //   const chatMessages = [
  //     {id : 1, sender : "bot", content : "eigggggggggggggggggggggg", timestamp : "Feb 26, 2025"}, {id : 1, sender : "bot", content : "eigggggggggggggggggggggg", timestamp : "Feb 26, 2025"}, {id : 1, sender : "bot", content : "eigggggggggggggggggggggg", timestamp : "Feb 26, 2025"}
  //   ]
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4">
    <Card className="relative w-full max-w-[892px] h-[895px] bg-collection-1-colors-white rounded-[var(--collection-1-spacing-large-box-corners)] overflow-hidden shadow-chatbot-modal-shadow">
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-collection-1-colors-light-blue border-b border-[#e4e4e4]">
        <div className="flex items-center gap-[var(--size-space-200)]">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="font-bold [font-family:'HelveticaNeue-Bold',Helvetica] text-collection-1-colors-super-dark-brown-text text-4xl leading-9">
            Nero
          </h1>
        </div>
      </header>

      {/* Chat container */}
      <div className="flex flex-col h-[calc(100%-188px)] overflow-y-auto p-[50px] space-y-10">
       
        {/* First bot message */}
        <div className="flex items-start gap-2">
          
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              {!message.isUser && (
                <div className="mr-2 h-6 w-6 flex-shrink-0 rounded bg-gray-100 p-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
                    alt="Nero"
                    className="h-full w-full"
                  />
                </div>
              )}
              <div
                className={`rounded-lg p-3 ${
                  message.isUser
                    ? "bg-blue-100 text-gray-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p>{message.content}</p>
                <div className="mt-1 text-xs text-gray-500">
                  {message.isUser ? "You" : "Nero"} •{" "}
                  {format(message.timestamp, "MMM d, yyyy")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User message */}
        

        {/* Second bot message */}
        {/* <div className="flex items-start gap-2">
          <Avatar className="w-12 h-12 bg-collection-1-colors-accent rounded-[631.58px]">
            <AvatarFallback className="flex items-center justify-center">
              <span className="text-xs text-collection-1-colors-white">N</span>
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-start gap-2 w-[558px]">
            <CardContent className="flex flex-col p-6 bg-[#f7f7f7] rounded-[0px_16px_16px_16px]">
              <p className="[font-family:'HelveticaNeue-Light',Helvetica] font-light text-collection-1-colors-super-dark-brown-text text-base leading-[26.1px]">
                {chatMessages[2].content}
              </p>
            </CardContent>

            <div className="flex items-center gap-2 w-full">
              <div className="flex items-center gap-2">
                <Image className="w-6 h-6" />
              </div>
              <span className="[font-family:'HelveticaNeue-Light',Helvetica] font-light text-collection-1-colors-dark-gray text-xs leading-[19.6px]">
                {chatMessages[2].timestamp}
              </span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Input area */}
      {/* <div className="absolute w-full h-[188px] bottom-0 left-0">
        <div className="relative w-[796px] h-[156px] mx-auto">
          <div className="absolute w-[656px] h-[149px] top-0 left-[70px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.56)_100%)] opacity-[0.52]" />

          <div className="flex flex-col w-full items-start gap-[var(--size-space-300)] absolute top-[13px] left-0">
            <Collapsible
              className="w-full"
              open={showDefiOptions}
              onOpenChange={setShowDefiOptions}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center justify-between w-full px-6 py-2.5 bg-collection-1-colors-03-primary rounded-[500px] hover:bg-collection-1-colors-03-primary/90"
                >
                  <span className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-super-dark-brown-text text-xl leading-[32.6px]">
                    Quick Actions to manage your DeFi portfolio
                  </span>
                  {showDefiOptions ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid grid-cols-2 gap-3 p-4">
                  {[
                    "Buy",
                    "Sell",
                    "Swap",
                    "Bridge",
                    "Send",
                    "Stake",
                    "Questflow",
                  ].map((action) => (
                    <Button
                      key={action}
                      variant="outline"
                      className="border-2 border-blue-200 py-3 text-blue-600 hover:bg-blue-50"
                      onClick={() => handleDefiAction(action)}
                      disabled={isProcessing && action === "Swap"}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

          
            <div className="flex items-center w-full h-[78px] px-[var(--size-space-600)] py-6 rounded-[500px] border border-solid border-collection-1-colors-02-primary">
  <form onSubmit={handleSendMessage} className="relative w-full flex items-center">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Write your message..."
      className="w-full bg-transparent border-none outline-none px-4"
    />
    
    <Button 
      type="submit"
      size="icon"
      variant = "outline"
      className="inline-flex items-center justify-center p-4 bg-collection-1-colors-03-primary rounded-full border-none hover:bg-collection-1-colors-03-primary/90"
      disabled={!inputValue.trim()}
    >
      <Send
      className="w-[22px] h-[22px] text-collection-1-colors-super-dark-brown-text"
      strokeWidth={2} />
      <span className="sr-only">send message</span>
    </Button>
  </form>
</div>
          </div>
        </div>
      </div> */}
      <div className="absolute w-full bottom-0 left-0">
        <div className="relative w-[796px] mx-auto">
          {/* DeFi options - position this above the input */}
          {/* DeFi options - position this above the input */}
          <div className="absolute bottom-[78px] left-0 right-0">
            <Collapsible className="w-full">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center justify-between w-full px-6 py-3 bg-collection-1-colors-03-primary rounded-[500px] hover:bg-collection-1-colors-03-primary/90"
                >
                  <span className="font-bold text-collection-1-colors-super-dark-brown-text text-xl">
                    Quick Actions to manage your DeFi portfolio
                  </span>
                  <ChevronDown className="w-6 h-6" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {/* Blur background */}
                <div className="backdrop-blur-md bg-orange-50/70 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"].map(
                      (action) => (
                        <Button
                          key={action}
                          variant="outline"
                          className="border-2 border-orange-200 py-4 text-orange-600 hover:bg-orange-50 text-lg font-medium"
                          onClick={() => handleDefiAction(action)}
                        >
                          {action}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Input box - always visible */}
          <div className="flex items-center w-full h-[78px] px-4 py-6 rounded-[500px] border border-solid border-collection-1-colors-02-primary bg-white">
            <form
              onSubmit={handleSendMessage}
              className="relative w-full flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Write your message..."
                className="w-full bg-transparent border-none outline-none px-4"
              />

              <Button
                type="submit"
                size="icon"
                className="ml-2 p-4 bg-orange-500 rounded-[500px] hover:bg-orange-600 z-10"
                disabled={!inputValue.trim()}
              >
                <Send className="w-[22px] h-[22px] text-white" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Card>
    </div>
  );
}

// "use client";

// import React, { useState } from "react";
// import { ArrowUp, ChevronDown, ChevronLeft, Copy, Send, Image } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// interface NeroChatProps {
//   onClose: () => void;
// }

// const chatMessages = [
//   { id: 1, sender: "bot", content: "Hello! How can I assist you today?", timestamp: "Feb 26, 2025" },
//   { id: 2, sender: "user", content: "I need help with my portfolio.", timestamp: "Feb 26, 2025" },
//   { id: 3, sender: "bot", content: "Sure, I can help with that. What do you need assistance with?", timestamp: "Feb 26, 2025" }
// ];

// export function NeroChat({ onClose }: NeroChatProps) {
//   const [inputValue, setInputValue] = useState("");

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!inputValue.trim()) return;
//     // Add message sending logic here
//     setInputValue("");
//   };

//   return (
//     <Card className="relative w-full max-w-[892px] h-[895px] bg-white rounded-lg overflow-hidden shadow-chatbot-modal-shadow">
//       {/* Header */}
//       <header className="flex items-center justify-between p-6 bg-light-blue border-b border-gray-300">
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" onClick={onClose}>
//             <ChevronLeft className="w-6 h-6" />
//           </Button>
//           <h1 className="font-bold text-dark-brown text-4xl">Nero</h1>
//         </div>
//       </header>

//       {/* Chat container */}
//       <div className="flex flex-col h-[calc(100%-188px)] overflow-y-auto p-6 space-y-6">
//         {chatMessages.map((message, index) => (
//           <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
//             {message.sender === "bot" && (
//               <Avatar className="w-12 h-12 bg-accent rounded-full">
//                 <AvatarFallback className="flex items-center justify-center">
//                   <span className="text-xs text-white">N</span>
//                 </AvatarFallback>
//               </Avatar>
//             )}
//             <div className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"} max-w-[70%]`}>
//               <CardContent className={`p-4 ${message.sender === "user" ? "bg-light-blue" : "bg-gray-100"} rounded-lg`}>
//                 <p className="text-dark-brown">{message.content}</p>
//               </CardContent>
//               <span className="text-xs text-gray-500">{message.timestamp}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Input area */}
//       <div className="absolute w-full h-[188px] bottom-0 left-0 bg-white">
//         <div className="relative w-[796px] h-[156px] mx-auto">
//           <div className="absolute w-[656px] h-[149px] top-0 left-[70px] backdrop-blur-[10px] backdrop-brightness-[100%] bg-gradient-to-b from-transparent to-white opacity-50" />
//           <div className="flex flex-col w-full items-start gap-4 absolute top-4 left-0">
//             <Collapsible className="w-full">
//               <CollapsibleTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   className="flex items-center justify-between w-full px-6 py-2.5 bg-primary rounded-full hover:bg-primary/90"
//                 >
//                   <span className="font-bold text-dark-brown text-xl">Quick Actions to manage your DeFi portfolio</span>
//                   <ChevronDown className="w-6 h-6" />
//                 </Button>
//               </CollapsibleTrigger>
//               <CollapsibleContent>
//                 {/* Content for quick actions would go here */}
//               </CollapsibleContent>
//             </Collapsible>
//             <div className="flex items-center w-full h-[78px] px-6 py-4 rounded-full border border-primary">
//               <Input
//                 className="flex-1 border-none shadow-none text-dark-gray focus:ring-0"
//                 placeholder="Write your message here..."
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//               />
//               <Button className="p-4 bg-primary rounded-full hover:bg-primary/90" onClick={handleSendMessage}>
//                 <Send className="w-6 h-6" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
