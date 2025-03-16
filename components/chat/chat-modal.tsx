"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, MessageCircle, X } from "lucide-react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartConversation: () => void;
}

const quickActions = ["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"];
const userStats = [
  { label: "Your Level", value: "Novice" },
  { label: "Your Points", value: "268 XP" },
];

const chatData = [
  { title: "Previous conversation 1", date: "Feb 26, 2025" },
  { title: "Previous conversation 2", date: "Feb 25, 2025" },
  { title: "Previous conversation 3", date: "Feb 24, 2025" },
];

export function ChatModal({ isOpen, onClose, onStartConversation }: ChatModalProps) {
  const [activeView, setActiveView] = useState<"home" | "messages">("home");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[893px] bg-white rounded-lg shadow-xl">
        <div className="flex flex-col min-h-[600px]">
          {/* Header */}
          <div className="bg-[#D0E8F4] border-b border-gray-200 relative p-10">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-6 top-6" 
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              {activeView === "home" ? "Meet Your AI Companion!" : "Previous Chats"}
            </h1>
          </div>

          {/* Content */}
          {activeView === "home" ? (
            <>
              <div className="p-10 flex flex-col items-center gap-8">
                <p className="text-lg font-medium text-gray-700">NeroLatte</p>
                <div className="flex items-center gap-6">
                  <img className="w-36 h-48" alt="AI Companion" src="/Group 22.png" />
                  <div className="flex flex-col gap-4">
                    {userStats.map((stat, index) => (
                      <div key={index} className="flex justify-between w-40">
                        <span className="text-xs font-medium text-gray-600">{stat.label}</span>
                        <span className="text-base font-bold text-gray-800">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button 
                  className="h-16 w-full max-w-md bg-orange-500 hover:bg-orange-600 text-white text-2xl rounded-lg"
                  onClick={onStartConversation}
                >
                  Start a Conversation
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
              <div className="p-6 flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Quick Actions to manage your DeFi portfolio
                </h2>
                <div className="grid grid-cols-2 gap-4 w-[517px]">
                  {quickActions.map((action) => (
                    <Button
                      key={action}
                      variant="outline"
                      className="h-10 border-blue-500"
                      onClick={onStartConversation}
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 overflow-auto">
              {chatData.map((chat, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-200 px-6 py-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-800">{chat.title}</span>
                    <span className="text-xs text-gray-600">{chat.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Navigation */}
          <div className="mt-auto border-t border-gray-200">
            <div className="flex">
              <Button
                variant="ghost"
                className={`flex-1 flex items-center justify-center gap-2 py-8 ${
                  activeView === "home" ? "border-t-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveView("home")}
              >
                <Home className="w-6 h-6" /> Home
              </Button>
              <Button
                variant="ghost"
                className={`flex-1 flex items-center justify-center gap-2 py-8 ${
                  activeView === "messages" ? "border-t-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveView("messages")}
              >
                <MessageCircle className="w-6 h-6" /> All Messages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
