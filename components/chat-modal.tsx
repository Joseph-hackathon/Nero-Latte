"use client"

import { useState } from "react"
import { Home, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
  onStartConversation: () => void
}

export function ChatModal({ isOpen, onClose, onStartConversation }: ChatModalProps) {
  const [showDefiOptions, setShowDefiOptions] = useState(false)

  if (!isOpen) return null

  const handleDefiAction = (action: string) => {
    console.log(`Selected action: ${action}`)
    onStartConversation()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-6 top-4 text-gray-500 hover:text-gray-700">
          <span className="sr-only">Close</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-semibold">Meet Your AI Companion!</h2>
          <p className="text-lg text-gray-600">Nero</p>

          <div className="flex items-center space-x-6">
            {/* Character image */}
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-100 p-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
                alt="Nero"
                className="h-full w-full"
              />
            </div>

            {/* Level info */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Your Level</p>
                <p className="text-lg font-bold">Novice</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Your Points</p>
                <p className="text-lg font-bold">268 XP</p>
              </div>
            </div>
          </div>

          {/* Start conversation button */}
          <Button
            className="w-full max-w-md bg-gradient-to-r from-purple-50 via-purple-200 to-purple-50 text-xl font-semibold text-gray-900 shadow-lg hover:from-purple-100 hover:via-purple-300 hover:to-purple-100"
            onClick={() => setShowDefiOptions(!showDefiOptions)}
          >
            Ask Nero to manage your DeFi portfolio
            {showDefiOptions ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>

          {/* Quick actions */}
          {showDefiOptions && (
            <div className="w-full max-w-md space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"].map((action) => (
                  <Button
                    key={action}
                    variant="outline"
                    className="w-full border-2 border-purple-200 py-6 text-lg font-semibold text-gray-700 hover:bg-purple-50"
                    onClick={() => handleDefiAction(action)}
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom navigation */}
          <div className="fixed bottom-0 left-0 right-0 flex border-t bg-white">
            <Button
              variant="ghost"
              className="flex-1 gap-2 rounded-none border-r py-8 text-lg font-semibold text-purple-700"
            >
              <Home className="h-5 w-5" />
              Home
            </Button>
            <Button variant="ghost" className="flex-1 gap-2 rounded-none py-8 text-lg font-semibold text-gray-600">
              <MessageCircle className="h-5 w-5" />
              All Messages
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

