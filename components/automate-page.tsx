"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Send } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Set Goals",
    description: "Plan ahead",
  },
  {
    number: 2,
    title: "Get Market insights",
    description: "Make informed decisions",
  },
  {
    number: 3,
    title: "Get Insights on Investment",
    description: "Learn what you don't",
  },
  {
    number: 4,
    title: "Automate your investment",
    description: "Let Nero do it for you",
  },
]

export function AutomatePage() {
  const [messages, setMessages] = useState([
    {
      content: "Hi! I'm your Nero Helper. I can help you manage your portfolio, answer questions, or just chat.",
      timestamp: new Date(),
    },
    {
      content: "What would you like to do today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-500">Balance</div>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">$11.8</div>
              <div className="text-sm text-green-500">+2.5%</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">NAME points</div>
            <div className="flex items-center gap-2 justify-end">
              <div className="text-xl font-bold">630 XP</div>
              <div className="text-sm text-green-500">+2.5%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr,300px] gap-6">
        <div className="bg-white rounded-lg border">
          <div className="flex items-center gap-3 border-b p-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-bold">Nero</h2>
            <div className="ml-auto">
              <Button variant="link" className="text-blue-600">
                Go to Quests
              </Button>
            </div>
          </div>

          <div className="h-[calc(100vh-300px)] overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className="mb-4 flex items-start gap-3">
                <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-100 p-1">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
                    alt="Nero"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="rounded-lg bg-gray-100 p-3">
                    <p>{message.content}</p>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">{message.timestamp.toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-4">
            <div className="rounded-lg bg-gray-100 p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Ask Nero to manage your DeFi portfolio</span>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4 rotate-[-90deg]" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Write your message..."
                className="w-full rounded-full border border-gray-200 py-3 pl-4 pr-12"
              />
              <Button size="icon" className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-lg border bg-white p-4 hover:border-blue-600 cursor-pointer transition-colors"
            >
              <div className="text-blue-600 mb-1">
                {step.number}. {step.title}
              </div>
              <div className="text-sm text-gray-500">{step.description}</div>
            </div>
          ))}
          <Button variant="outline" className="w-full justify-center py-6 text-blue-600">
            Start over
            <div className="text-xs text-gray-500 font-normal">Start from a blank page and undo your decisions</div>
          </Button>
        </div>
      </div>
    </div>
  )
}

