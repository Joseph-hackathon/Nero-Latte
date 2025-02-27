"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, ArrowUp, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

interface NeroChatProps {
  onClose: () => void
}

export function NeroChat({ onClose }: NeroChatProps) {
  const [showDefiOptions, setShowDefiOptions] = useState(false)
  const [messages, setMessages] = useState([
    {
      content: "Hi! I'm your Nero Helper. I can help you manage your portfolio, answer questions, or just chat.",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    setMessages([
      ...messages,
      {
        content: inputValue,
        timestamp: new Date(),
        isUser: true,
      },
    ])
    setInputValue("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          content: "I'm here to help with your DeFi needs. What would you like to do today?",
          timestamp: new Date(),
        },
      ])
    }, 1000)
  }

  const handleDefiAction = (action: string) => {
    setShowDefiOptions(false)
    setMessages([
      ...messages,
      {
        content: `You selected: ${action}. Let me help you with that.`,
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
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

      <div className="flex justify-center py-6">
        <div className="h-48 w-48 p-8 rounded-full bg-gray-100">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
            alt="Nero"
            className="h-full w-full"
          />
        </div>
      </div>

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
            <div
              className={`rounded-lg p-3 ${message.isUser ? "bg-blue-100 text-gray-800" : "bg-gray-100 text-gray-800"}`}
            >
              <p>{message.content}</p>
              <div className="mt-1 text-xs text-gray-500">
                {message.isUser ? "You" : "Nero"} • {format(message.timestamp, "MMM d, yyyy")}
              </div>
            </div>
          </div>
        ))}
      </div>

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
            {["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"].map((action) => (
              <Button
                key={action}
                variant="outline"
                className="border-2 border-blue-200 py-3 text-blue-600 hover:bg-blue-50"
                onClick={() => handleDefiAction(action)}
              >
                {action}
              </Button>
            ))}
          </div>
        )}
      </div>

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

