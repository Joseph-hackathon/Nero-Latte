"use client"
import { ChatModal } from "@/components/chat-modal";
import { NeroChat } from "@/components/nero-chat";
import { ConnectButton } from "@/components/ConnectButton";
import { useState } from "react"; 

export function QuestsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
    const [isNeroChatOpen, setIsNeroChatOpen] = useState(false);
  
    const handleStartConversation = () => {
      setIsChatOpen(false);
      setIsNeroChatOpen(true);
    };
  
    const handleLogoClick = () => {
      setIsChatOpen(true);
    };
  return (
    
    <div className="flex flex-col gap-4 min-w-full mx-auto p-4">
      {/* Top cards row */}
      <div className="flex gap-4 min-h-1/2">
        {/* Left card with cat and level */}
        <div  style={{ backgroundColor: '#451F17' }} className="bg-brown-800 rounded-lg p-4 w-1/2 flex flex-col items-center text-white">
          <div className="w-24 h-24 mb-2">
            <img src="/Group 22.png" alt="Cat mascot" className="w-full" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Novice</h2>
          
          {/* Improved Progress bar */}
          <div className="w-full mb-2 relative">
            <div className="h-3 bg-orange-200 rounded-full w-full shadow-inner">
              <div 
                className="h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-md transition-all duration-500 ease-out" 
                style={{ width: '15%' }}
              ></div>
              {/* Progress indicator dot */}
              <div 
                className="w-5 h-5 bg-white rounded-full shadow-md absolute top-1/2 transform -translate-y-1/2 border-2 border-orange-500"
                style={{ left: 'calc(15% - 10px)' }}
              ></div>
            </div>
          </div>
          
          {/* XP levels */}
          <div className="flex justify-between w-full text-xs mt-3">
            <div className="flex flex-col items-center">
              <span>10 XP</span>
              <span>Novice</span>
            </div>
            <div className="flex flex-col items-center">
              <span>500XP</span>
              <span>Almost pro</span>
            </div>
            <div className="flex flex-col items-center">
              <span>1000 XP</span>
              <span>Pro</span>
            </div>
            <div className="flex flex-col items-center">
              <span>2000 XP</span>
              <span>Super pro</span>
            </div>
          </div>
        </div>
        
        {/* Right card with price */}
        <div className="bg-white rounded-lg p-4 w-1/2 flex flex-col items-center">
          <div className="flex items-center justify-center w-full mb-4">
            <div className="bg-brown-800 rounded-lg p-2 flex items-center">
            <div onClick={handleLogoClick} className="cursor-pointer">
              <img
                src="/Frame 1321317602.png"
                alt="Logo"
                className="w-27 h-27"
              />
            </div>
             
            </div>
          </div>

          <ChatModal
                  isOpen={isChatOpen}
                  onClose={() => setIsChatOpen(false)}
                  onStartConversation={handleStartConversation}
                />
          
                {isNeroChatOpen && <NeroChat onClose={() => setIsNeroChatOpen(false)} />}
          
          <span className="text-xs text-gray-400">Balance</span>
          <h1 className="text-5xl font-bold">$110.8</h1>
          <span className="text-red-500 text-sm">-$10.07 (-14.07%)</span>
        </div>
      </div>
      
      {/* Middle row */}

      <div>
      <div className="flex gap-4">
        {/* Monthly goal card */}
        <div className="bg-white rounded-lg p-4 w-1/2">
          <h3 className="font-bold mb-2">Monthly Goal</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">Make Profit Monthly</span>
            <span className="text-orange-500 font-bold">$1000</span>
          </div>
          
          {/* Improved Progress bar */}
          <div className="w-full mb-2 relative">
            <div className="h-3 bg-gray-100 rounded-full w-full shadow-inner">
              <div 
                className="h-3 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full relative overflow-hidden transition-all duration-500 ease-out"
                style={{ width: '30%' }}
              >
                {/* Animated shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
              </div>
              
              {/* Current value indicator */}
              <div 
                className="absolute -top-5 text-xs font-semibold text-orange-500"
                style={{ left: '30%', transform: 'translateX(-50%)' }}
              >
                $300
              </div>
            </div>
          </div>
          
          <div className="flex justify-between w-full text-xs mt-3">
            <div>$0</div>
            <div>$1000</div>
          </div>
          
          <div className="flex justify-end mt-4">
            <button className="flex items-center text-sm hover:text-orange-500 transition-colors">
              Change Your Goals
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* XP points card */}
        <div className="bg-white rounded-lg p-4 w-1/2">
          <h3 className="font-bold mb-2">NeroLatte points</h3>
          <p className="text-sm mb-4">Talk to NeroLatte everyday to get points!</p>
          
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">630 XP</h2>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                <span className="text-green-500">+25</span>
              </div>
              
              {/* XP mini progress bar */}
              <div className="w-24 h-1 bg-gray-100 rounded-full mt-1">
                <div 
                  className="h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: '63%' }}
                ></div>
              </div>
            </div>
            <button className="flex items-center text-sm bg-green-50 p-2 rounded-lg hover:bg-green-100 transition-colors">
              Talk To NeroLatte AI
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom row */}
      <div className="flex gap-4">
        {/* Left button */}
        <div className="bg-white rounded-lg p-4 w-1/2 flex justify-between items-center">
          <h3 className="font-bold">Get expert insights from NeroLatte</h3>
          <button className="flex items-center text-sm hover:text-blue-500 transition-colors">
            Talk To Nero
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        
        {/* Right button */}
        <div className="bg-white rounded-lg p-4 w-1/2 flex justify-between items-center">
          <h3 className="font-bold">Check your transactions</h3>
          <button className="flex items-center text-sm hover:text-blue-500 transition-colors">
            Go To Transactions
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      </div>
      
      {/* Bottom divider */}
      
    </div>
    // <div className="p-6">
    //   <div className="mb-6">
    //     <div className="flex justify-between items-center">
    //       <div>
    //         <div className="text-sm text-gray-500">Balance</div>
    //         <div className="flex items-center gap-2">
    //           <div className="text-3xl font-bold">$11.8</div>
    //           <div className="text-sm text-green-500">+2.5%</div>
    //         </div>
    //       </div>
    //       <div className="text-right">
    //         <div className="text-sm text-gray-500">NAME points</div>
    //         <div className="flex items-center gap-2 justify-end">
    //           <div className="text-xl font-bold">630 XP</div>
    //           <div className="text-sm text-green-500">+2.5%</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="text-center py-12 text-gray-500">Quests content will be displayed here</div>
    // </div>
  )
}

