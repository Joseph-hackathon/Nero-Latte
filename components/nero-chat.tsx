"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, ArrowUp, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

// Stub function: NEAR Intent swap via backend API
async function performNearIntentSwap(params: { 
  defuse_asset_identifier_in: string, 
  defuse_asset_identifier_out: string, 
  exact_amount_in: string, 
  network: string 
}): Promise<{ txHash: string }> {
  const response = await fetch("/api/near-intent-swap", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  })
  if (!response.ok) {
    throw new Error(`Swap request failed: ${response.statusText}`)
  }
  return await response.json()
}

// Stub function: Questflow action via backend API
async function performQuestflowAction(params: { agentType: string }): Promise<{ result: string }> {
  const response = await fetch("/api/questflow-agent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  })
  if (!response.ok) {
    throw new Error(`Questflow action request failed: ${response.statusText}`)
  }
  return await response.json()
}

// Stub functions for other actions
async function performBuyAction(params: { token: string, amount: string }): Promise<{ txHash: string }> {
  // TODO: Implement Buy API call
  return { txHash: "buy-tx-hash-placeholder" }
}

async function performSellAction(params: { token: string, amount: string }): Promise<{ txHash: string }> {
  // TODO: Implement Sell API call
  return { txHash: "sell-tx-hash-placeholder" }
}

async function performBridgeAction(params: { token: string, amount: string, destinationChain: string }): Promise<{ txHash: string }> {
  // TODO: Implement Bridge API call
  return { txHash: "bridge-tx-hash-placeholder" }
}

async function performSendAction(params: { token: string, amount: string, destinationAddress: string }): Promise<{ txHash: string }> {
  // TODO: Implement Send API call
  return { txHash: "send-tx-hash-placeholder" }
}

async function performStakeAction(params: { token: string, amount: string }): Promise<{ txHash: string }> {
  // TODO: Implement Stake API call
  return { txHash: "stake-tx-hash-placeholder" }
}

interface NeroChatProps {
  onClose: () => void
}

type SwapFlowStep = "none" | "askTokenPair" | "askAmount"
type QuestflowFlowStep = "none" | "askAgent"
type BuyFlowStep = "none" | "askBuyDetails"
// 同様に Sell, Bridge, Send, Stake のフローも必要に応じて定義可能

export function NeroChat({ onClose }: NeroChatProps) {
  const [showDefiOptions, setShowDefiOptions] = useState(false)
  const [messages, setMessages] = useState<{ content: string, timestamp: Date, isUser?: boolean }[]>([
    {
      content: "Hi! I'm your Nero Helper. I can help you manage your portfolio, answer questions, or just chat.",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [apiKey, setApiKey] = useState("") // API key state
  const [isProcessing, setIsProcessing] = useState(false)

  // Swap flow state
  const [swapFlow, setSwapFlow] = useState<{
    step: SwapFlowStep,
    tokenPair?: { tokenIn: string, tokenOut: string },
    amount?: string
  }>({ step: "none" })

  // Questflow flow state
  const [questflowFlow, setQuestflowFlow] = useState<{
    step: QuestflowFlowStep,
    agentType?: string
  }>({ step: "none" })

  // Buy flow state (as an example)
  const [buyFlow, setBuyFlow] = useState<{
    step: BuyFlowStep,
    details?: { token: string, amount: string }
  }>({ step: "none" })

  const addMessage = (content: string, isUser = false) => {
    setMessages((prev) => [
      ...prev,
      { content, timestamp: new Date(), isUser },
    ])
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Handle Swap Flow
    if (swapFlow.step !== "none") {
      const userInput = inputValue.trim()
      addMessage(userInput, true)
      setInputValue("")

      if (swapFlow.step === "askTokenPair") {
        const parts = userInput.split("/")
        if (parts.length !== 2) {
          addMessage("Please provide the token pair in the format 'TOKEN_IN/TOKEN_OUT'.")
          return
        }
        const tokenIn = parts[0].trim().toUpperCase()
        const tokenOut = parts[1].trim().toUpperCase()
        setSwapFlow({ step: "askAmount", tokenPair: { tokenIn, tokenOut } })
        addMessage(`Token pair set to ${tokenIn}/${tokenOut}. Please enter the amount you wish to swap.`)
      } else if (swapFlow.step === "askAmount") {
        const amount = userInput
        setSwapFlow((prev) => ({ ...prev, amount, step: "none" }))
        addMessage(`Amount set to ${amount}. Initiating swap...`)
        setIsProcessing(true)
        try {
          const swapParams = {
            defuse_asset_identifier_in: swapFlow.tokenPair?.tokenIn || "",
            defuse_asset_identifier_out: swapFlow.tokenPair?.tokenOut || "",
            exact_amount_in: amount,
            network: "near"
          }
          const result = await performNearIntentSwap(swapParams)
          addMessage(`Swap successful! Transaction Hash: ${result.txHash}`)
        } catch (error: any) {
          addMessage(`Swap error: ${error.message}`)
        } finally {
          setIsProcessing(false)
        }
      }
      return
    }

    // Handle Questflow Flow
    if (questflowFlow.step !== "none") {
      const userInput = inputValue.trim()
      addMessage(userInput, true)
      setInputValue("")
      if (questflowFlow.step === "askAgent") {
        setQuestflowFlow({ step: "none", agentType: userInput })
        addMessage(`Questflow agent set to '${userInput}'. Initiating Questflow action...`)
        try {
          const result = await performQuestflowAction({ agentType: userInput })
          addMessage(`Questflow action completed! Result: ${result.result}`)
        } catch (error: any) {
          addMessage(`Questflow action error: ${error.message}`)
        }
      }
      return
    }

    // Handle Buy Flow (example)
    if (buyFlow.step !== "none") {
      const userInput = inputValue.trim()
      addMessage(userInput, true)
      setInputValue("")
      if (buyFlow.step === "askBuyDetails") {
        // Expecting input in the format "TOKEN amount" (e.g., "NEAR 10")
        const parts = userInput.split(" ")
        if (parts.length !== 2) {
          addMessage("Please provide buy details in the format 'TOKEN amount'.")
          return
        }
        const token = parts[0].trim().toUpperCase()
        const amount = parts[1].trim()
        setBuyFlow({ step: "none", details: { token, amount } })
        addMessage(`Buy details set: ${token} for ${amount}. Initiating buy action...`)
        setIsProcessing(true)
        try {
          const result = await performBuyAction({ token, amount })
          addMessage(`Buy successful! Transaction Hash: ${result.txHash}`)
        } catch (error: any) {
          addMessage(`Buy error: ${error.message}`)
        } finally {
          setIsProcessing(false)
        }
      }
      return
    }

    // Regular chat flow (outside any multi-step action)
    addMessage(inputValue, true)
    setInputValue("")

    if (!apiKey.trim()) {
      addMessage("OpenAI API key is not set. Please enter your key above.")
      return
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: inputValue },
          ],
        }),
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      const data = await response.json()
      const aiMessageContent = data.choices?.[0]?.message?.content || "No response."
      addMessage(aiMessageContent)
    } catch (error: any) {
      addMessage(`Error occurred: ${error.message}`)
    }
  }

  // Updated handleDefiAction to add functionality for each option
  const handleDefiAction = (action: string) => {
    setShowDefiOptions(false)
    if (action === "Swap") {
      addMessage("You selected Swap. Please enter the token pair in the format 'TOKEN_IN/TOKEN_OUT' (e.g., NEAR/USDC).")
      setSwapFlow({ step: "askTokenPair" })
    } else if (action === "Questflow") {
      addMessage("You selected Questflow. Please specify the Questflow agent (e.g., 'strategic trading', 'airdrop', 'data analysis').")
      setQuestflowFlow({ step: "askAgent" })
    } else if (action === "Buy") {
      addMessage("You selected Buy. Please provide the buy details in the format 'TOKEN amount' (e.g., NEAR 10).")
      setBuyFlow({ step: "askBuyDetails" })
    } else if (action === "Sell") {
      addMessage("You selected Sell. (Sell functionality to be implemented similarly.)")
      // TODO: Set up sellFlow and call performSellAction accordingly.
    } else if (action === "Bridge") {
      addMessage("You selected Bridge. (Bridge functionality to be implemented similarly.)")
      // TODO: Set up bridgeFlow and call performBridgeAction accordingly.
    } else if (action === "Send") {
      addMessage("You selected Send. (Send functionality to be implemented similarly.)")
      // TODO: Set up sendFlow and call performSendAction accordingly.
    } else if (action === "Stake") {
      addMessage("You selected Stake. (Stake functionality to be implemented similarly.)")
      // TODO: Set up stakeFlow and call performStakeAction accordingly.
    } else {
      addMessage(`You selected: ${action}. Let me help you with that.`)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-2xl font-bold">Nero</h2>
        </div>
        <Button variant="link" className="text-blue-600">
          Go to Quests
        </Button>
      </div>

      {/* API Key Input */}
      <div className="p-4 border-b">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          OpenAI API Key
        </label>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="sk-..."
          className="w-full rounded border border-gray-300 py-2 px-3"
        />
      </div>

      <div className="flex justify-center py-6">
        <div className="h-48 w-48 p-8 rounded-full bg-gray-100">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
            alt="Nero"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            {!message.isUser && (
              <div className="mr-2 h-6 w-6 flex-shrink-0 rounded bg-gray-100 p-1">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
                  alt="Nero"
                  className="h-full w-full"
                />
              </div>
            )}
            <div className={`rounded-lg p-3 ${message.isUser ? "bg-blue-100 text-gray-800" : "bg-gray-100 text-gray-800"}`}>
              <p>{message.content}</p>
              <div className="mt-1 text-xs text-gray-500">
                {message.isUser ? "You" : "Nero"} • {format(message.timestamp, "MMM d, yyyy")}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DeFi Options */}
      <div className="border-t">
        <div
          className="flex cursor-pointer items-center justify-between p-4"
          onClick={() => setShowDefiOptions(!showDefiOptions)}
        >
          <div className="text-lg font-semibold">Ask Nero to manage your DeFi portfolio</div>
          {showDefiOptions ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>

        {showDefiOptions && (
          <div className="grid grid-cols-2 gap-3 p-4">
            {["Buy", "Sell", "Swap", "Bridge", "Send", "Stake", "Questflow"].map((action) => (
              <Button
                key={action}
                variant="outline"
                className="border-2 border-blue-200 py-3 text-blue-600 hover:bg-blue-50"
                onClick={() => handleDefiAction(action)}
                disabled={isProcessing && action === "Swap"} // Example: disable Swap if processing
              >
                {action}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write your message..."
            className="w-full rounded-full border border-gray-300 py-3 pl-4 pr-12"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-gray-100"
            disabled={!inputValue.trim()}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
