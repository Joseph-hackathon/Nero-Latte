"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send } from "lucide-react";
import { NeroChat } from "@/components/nero-chat";
import { ChatModalAutomate } from "@/components/chat-modal-automate";


export function StepsSidebar({ currentStep = 1 }) {
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
  const steps = [
    {
      number: 1,
      title: "Set Goals",
      subtitle: "Plan ahead",
      status: "completed"
    },
    {
      number: 2,
      title: "Get Market Insights",
      subtitle: "Make informed decisions",
      status: currentStep >= 2 ? "active" : "pending"
    },
    {
      number: 3,
      title: "Get Insights On Investment",
      subtitle: "Learn what you don't",
      status: currentStep >= 3 ? "active" : "pending"
    },
    {
      number: 4,
      title: "Automate Your Investment",
      subtitle: "Let NeroLatte do it for you",
      status: currentStep >= 4 ? "active" : "pending"
    }
  ];

  return (
    <div className="flex flex-col h-full border-l border-gray-200 bg-gray-50 min-w-[240px] py-4">
      <div className="flex flex-col flex-grow space-y-4 px-4">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start space-x-3">
            <div className={`flex items-center justify-center rounded-full w-6 h-6 mt-0.5 text-sm font-medium
              ${step.status === 'completed' ? 'bg-green-500 text-white' : 
                step.status === 'active' ? 'border-2 border-gray-500 bg-white text-gray-700' : 
                'border-2 border-gray-300 bg-white text-gray-400'}`}>
              {step.status === 'completed' ? '✓' : step.number}
            </div>
            <div className="flex flex-col">
              <span className={`font-medium ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-800'}`}>
                {step.title}
              </span>
              <span className="text-xs text-gray-500">
                {step.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-auto px-4 pt-4">
        <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100" onClick={handleStartOver}>
          <span className="mr-2">Start Over</span>
          <span>↺</span>
        </button>
        <div className="text-xs text-center text-gray-500 mt-2">
          Start from a blank page and undo your decisions
        </div>
      </div>
    </div>
  );
};

export default StepsSidebar;