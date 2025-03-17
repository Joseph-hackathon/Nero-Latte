"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Check as CheckIcon } from "lucide-react";
import { NeroChat } from "@/components/nero-chat";
import { ChatModalAutomate } from "@/components/chat-modal-automate";
import { StepsSidebar } from "@/components/StepsSidebar";

// const steps = [
//   {
//     number: 1,
//     title: "Set Goals",
//     description: "Plan ahead",
//     status: "completed",
//   },
//   {
//     number: 2,
//     title: "Get Market insights",
//     description: "Make informed decisions",
//     status: currentStep >= 4 ? "active" : "pending"
//   },
//   {
//     number: 3,
//     title: "Get Insights on Investment",
//     description: "Learn what you don't",
//     status: currentStep >= 4 ? "active" : "pending"
//   },
//   {
//     number: 4,
//     title: "Automate your investment",
//     description: "Let Nero do it for you",
//     status: currentStep >= 4 ? "active" : "pending"
//   },
// ];

export function AutomatePage() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isNeroChatOpen, setIsNeroChatOpen] = useState(false);

  const handleStartConversation = () => {
    setIsChatOpen(false);
    setIsNeroChatOpen(true);
  };

  const handleStartOver = () => {
    setIsChatOpen(true);
    setIsNeroChatOpen(false);
  };

  const [messages, setMessages] = useState([
    {
      content:
        "Hi! I'm your Nero Helper. I can help you manage your portfolio, answer questions, or just chat.",
      timestamp: new Date(),
    },
    {
      content: "What would you like to do today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

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
            <ChatModalAutomate
              isOpen={isChatOpen}
              onClose={() => setIsChatOpen(false)}
              onStartConversation={handleStartConversation}
            />

            {isNeroChatOpen && (
              <NeroChat onClose={() => setIsNeroChatOpen(false)} />
            )}
          </div>
        </div>

    

<div className="flex flex-col min-h-screen bg-white max-w-sm mx-auto py-6">
     

      <main className="w-full flex-1 space-y-4 px-4">
        {/* Step 1 - Completed with number and tick on right */}
        <div className="w-full rounded-lg border border-green-300 bg-white">
          <div className="flex p-5">
            <div className="flex-shrink-0 mr-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-base">
                1
              </div>
            </div>
            <div className="flex-1 flex justify-between items-center">
              <div>
                <h3 className="font-medium text-green-700 text-base">Set Goals</h3>
                <p className="text-sm text-green-600">Plan ahead</p>
              </div>
              <CheckIcon size={20} className="text-green-500" />
            </div>
          </div>
        </div>

        {/* Step 2 - Current */}
        <div className="w-full rounded-lg border border-orange-200 bg-orange-50">
          <div className="flex p-5">
            <div className="flex-shrink-0 mr-4">
              <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center text-white text-base">
                2
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-orange-800 text-base">Get Market Insights</h3>
              <p className="text-sm text-orange-600">Make informed decisions</p>
            </div>
          </div>
        </div>

        {/* Step 3 - Inactive */}
        <div className="w-full rounded-lg border border-gray-200 bg-white">
          <div className="flex p-5">
            <div className="flex-shrink-0 mr-4">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-base">
                3
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-500 text-base">Get Insights On Investment</h3>
              <p className="text-sm text-gray-400">Learn what you don't</p>
            </div>
          </div>
        </div>

        {/* Step 4 - Inactive */}
        <div className="w-full rounded-lg border border-gray-200 bg-white">
          <div className="flex p-5">
            <div className="flex-shrink-0 mr-4">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-base">
                4
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-500 text-base">Automate Your Investment</h3>
              <p className="text-sm text-gray-400">Let NeoLatte do it for you</p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom button with thin red border */}
      <div className="w-full mt-auto px-4">
        <div className="border border-red-200 rounded-lg mt-8">
          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="text-base font-medium text-gray-800">Start Over</h3>
              <p className="text-sm text-gray-500">Start from a blank page and undo your decisions</p>
            </div>
            <div className="border rounded p-2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      {/* <StepsSidebar currentStep={1} /> */}
      </div>
    </div>
  );
}

  {/* <div className="space-y-4">
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
          <Button
            variant="outline"
            className="w-full justify-center py-6 text-blue-600"
            onClick={handleStartOver}
          >
            Start over
            <div className="text-xs text-gray-500 font-normal">
              Start from a blank page and undo your decisions
            </div>
          </Button>
        </div> */}
