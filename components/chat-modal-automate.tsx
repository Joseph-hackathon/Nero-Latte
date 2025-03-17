"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Home, MessageCircle, X } from "lucide-react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartConversation: () => void;
}

// Chat data for mapping
const chatData = [
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
];

export function ChatModalAutomate({ isOpen, onClose, onStartConversation }: ChatModalProps) {
  const [showDefiOptions, setShowDefiOptions] = useState(false);
  const [activeView, setActiveView] = useState<"home" | "messages">("home");

  if (!isOpen) return null;

  const handleDefiAction = (action: string) => {
    console.log(`Selected action: ${action}`);
    onStartConversation();
  };

  const quickActions = ["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"];
  const userStats = [
    { label: "Your Level", value: "Novice" },
    { label: "Your Points", value: "268 XP" },
  ];

  return (
    <div className="flex items-center">
      <div className="w-[893px] p-0 overflow-hidden shadow-chatbot-modal-shadow rounded-lg border-none max-w-none">
        <div className="flex flex-col">
          {activeView === "home" ? (
            <>
              <div className="bg-[#D0E8F4] bg-blue-100 border-b border-gray-300 relative p-10">
                
                <div className="flex flex-col items-center gap-8">
                  <h1 className="text-4xl font-bold text-gray-800 text-center">Meet Your AI Companion!</h1>
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
                  <Button className="h-16 w-full bg-orange-500 text-white text-2xl rounded-lg shadow-lg hover:bg-orange-600" onClick={() => setShowDefiOptions(!showDefiOptions)}>
                    Start a Conversation
                    <ChevronRight className="ml-2 h-6 w-6 text-white" />
                  </Button>
                </div>
              </div>
              <div className="p-6 flex flex-col items-center gap-6 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Quick Actions to manage your DeFi portfolio</h2>
                <div className="grid grid-cols-2 gap-6 w-[517px]">
                  {quickActions.map((action) => (
                    <Button key={action} variant="outline" className="h-10 border border-blue-500 bg-white hover:bg-gray-100" onClick={() => handleDefiAction(action)}>
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-[#D0E8F4] bg-blue-100 border-b border-gray-300 relative p-10">
               
                <h2 className="text-2xl font-bold text-gray-800 text-center">Previous Chats</h2>
              </div>
              <div className="p-6 flex flex-col items-center gap-6 bg-white">
                <div className="w-full max-h-[300px] overflow-auto border-t border-gray-300">
                  {chatData.map((chat, index) => (
                    <div key={index} className="border-b border-gray-300 px-6 py-4 flex justify-between">
                      <span className="text-lg font-medium text-gray-800">{chat.title}</span>
                      <span className="text-xs text-gray-600">{chat.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex border-t border-gray-300 bg-white">
            <Button
              variant="ghost"
              className={`flex-1 flex items-center justify-center gap-2 py-8 border-t-2 ${activeView === "home" ? "border-blue-500" : "border-transparent"}`}
              onClick={() => setActiveView("home")}
            >
              <Home className="w-6 h-6" /> Home
            </Button>
            <Button
              variant="ghost"
              className={`flex-1 flex items-center justify-center gap-2 py-8 border-t-2 ${activeView === "messages" ? "border-blue-500" : "border-transparent"}`}
              onClick={() => setActiveView("messages")}
            >
              <MessageCircle className="w-6 h-6" /> All Messages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};