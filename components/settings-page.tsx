"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { bitteWallet } from "@/lib/bitte-wallet";
import { ChatModal } from "@/components/chat-modal";
import { NeroChat } from "@/components/nero-chat";
import { ConnectButton } from "@/components/ConnectButton";
import React from "react";
import {
  User,
  Upload,
  Trash2,
  ChevronRight,
  CheckCircle,
  X,
  Check,
  ChevronDown,
  Gift,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function SettingsPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNeroChatOpen, setIsNeroChatOpen] = useState(false);

  const handleStartConversation = () => {
    setIsChatOpen(false);
    setIsNeroChatOpen(true);
  };

  const handleLogoClick = () => {
    setIsChatOpen(true);
  };
  const [autoRebalancing, setAutoRebalancing] = React.useState(true);
  const [dailyInsights, setDailyInsights] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(true);
  const [riskProfile, setRiskProfile] = React.useState("risk-taker");
  const [investmentAmount, setInvestmentAmount] = React.useState("0.01");

  const [activeTab, setActiveTab] = useState("Account");
  const [connectedWallet, setConnectedWallet] = useState<{
    type: string;
    address: string;
  } | null>(null);

  const handleDisconnect = async () => {
    await bitteWallet.disconnect();
    setConnectedWallet(null);
  };

  const handleConnect = async () => {
    const wallet = await bitteWallet.connect();
    setConnectedWallet({
      type: wallet.type,
      address: wallet.shortAddress,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("account_id") && params.has("public_key")) {
      handleConnect();
    }
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div onClick={handleLogoClick} className="cursor-pointer">
              <img
                src="/Frame 1321317602.png"
                alt="Logo"
                className="w-27 h-27"
              />
            </div>

            <div>
              <div className="text-sm text-gray-500">Balance</div>
              <div className="flex items-center gap-2">
                <div className="text-3xl font-bold">$11.8</div>
                <div className="text-sm text-green-500">+2.5%</div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            {/* Gift Icon */}
            <Gift
              className="w-20 h-20 text-orange-300 opacity-80"
              strokeWidth={0.6}
            />

            {/* Text Section */}
            <div className="text-left">
              <div className="text-sm text-gray-500">Nero Latte Points</div>
              <div className="text-xl font-bold">630 XP</div>
              <div className="text-sm text-green-500">+25</div>
            </div>
          </div>
        </div>
      </div>

      
      
      
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onStartConversation={handleStartConversation}
      />

      {isNeroChatOpen && <NeroChat onClose={() => setIsNeroChatOpen(false)} />}

      {/* <div className="flex gap-6">
        <div className="w-48">
          <div className="bg-white rounded-lg border overflow-hidden">
            {["Account", "Wallets"].map((tab) => (
              <button
                key={tab}
                className={`w-full px-4 py-2 text-left ${
                  activeTab === tab
                    ? "bg-gray-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div> */}

      <div className="flex gap-6">
        <div className="min-w-[240px]"> 
          <div className="bg-white rounded-lg border overflow-hidden">
            {["Account", "Wallets"].map((tab) => (
              <button
                key={tab}
                className={`w-full px-4 py-2 text-left ${
                  activeTab === tab
                    ? "bg-gray-100 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content area that changes based on active tab */}
        <div className="flex-1">
          {activeTab === "Account" ? (
            <div className="min-w-full  mx-auto">
           
            {successMessage && (
              <div className="mb-4 flex items-center justify-between p-3 bg-green-50 text-green-800 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Successfully Saved. <span className="font-normal">Your profile settings have been saved.</span></span>
                </div>
                <button onClick={() => setSuccessMessage(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            )}
      
            {/* Profile Photo */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h2 className="text-md font-semibold text-gray-800 mb-4">Profile Photo</h2>
              <div className="flex items-center justify-between">
                <div className="h-16 w-16 rounded-full border border-gray-300 flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-orange-500 text-orange-500 rounded text-sm font-medium">
                    <Upload className="h-4 w-4" />
                    Upload
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 text-gray-600 rounded text-sm font-medium">
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
      
            {/* Investment Goals */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h2 className="text-md font-semibold text-gray-800 mb-4">Investment Goals</h2>
              
              <p className="text-sm text-gray-600 mb-3">Set your Nero character to gain related insights and automation</p>
              <div className="flex gap-6 mb-5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="risk-profile" 
                      className="sr-only"
                      checked={riskProfile === 'risk-taker'}
                      onChange={() => setRiskProfile('risk-taker')}
                    />
                    <div className={`h-5 w-5 rounded-full border ${riskProfile === 'risk-taker' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {riskProfile === 'risk-taker' && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium">Risk-taker</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="risk-profile" 
                      className="sr-only"
                      checked={riskProfile === 'conservative'}
                      onChange={() => setRiskProfile('conservative')}
                    />
                    <div className={`h-5 w-5 rounded-full border ${riskProfile === 'conservative' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {riskProfile === 'conservative' && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium">Conservative</span>
                </label>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">Set loss amount acceptable in your investments to gain related insights</p>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="investment-amount" 
                      className="sr-only"
                      checked={investmentAmount === '0.01'}
                      onChange={() => setInvestmentAmount('0.01')}
                    />
                    <div className={`h-5 w-5 rounded-full border ${investmentAmount === '0.01' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {investmentAmount === '0.01' && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium">No more than 0.01 ETH</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="investment-amount" 
                      className="sr-only"
                      checked={investmentAmount === '0.1'}
                      onChange={() => setInvestmentAmount('0.1')}
                    />
                    <div className={`h-5 w-5 rounded-full border ${investmentAmount === '0.1' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {investmentAmount === '0.1' && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium">No more than 0.1 ETH</span>
                </label>
                
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="investment-amount" 
                      className="sr-only"
                      checked={investmentAmount === '0.001'}
                      onChange={() => setInvestmentAmount('0.001')}
                    />
                    <div className={`h-5 w-5 rounded-full border ${investmentAmount === '0.001' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {investmentAmount === '0.001' && (
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium">No more than 0.001 ETH</span>
                </label>
              </div>
            </div>
      
            {/* Balance */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h2 className="text-md font-semibold text-gray-800 mb-4">Balance</h2>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Auto rebalancing</p>
                <div className="flex gap-2 items-center">
                  <button 
                    onClick={() => setAutoRebalancing(!autoRebalancing)}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors ${autoRebalancing ? 'bg-orange-500 justify-end' : 'bg-gray-300 justify-start'}`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow-md transform translate-x-0.5"></span>
                  </button>
                  <span className="text-sm font-medium">{autoRebalancing ? 'ON' : 'OFF'}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Gain daily insights from Nero</p>
                <div className="flex gap-2 items-center">
                  <button 
                    onClick={() => setDailyInsights(!dailyInsights)}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors ${dailyInsights ? 'bg-orange-500 justify-end' : 'bg-gray-300 justify-start'}`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow-md transform translate-x-0.5"></span>
                  </button>
                  <span className="text-sm font-medium">{dailyInsights ? 'ON' : 'OFF'}</span>
                </div>
              </div>
            </div>
      
            {/* Delete Account */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
              <h2 className="text-md font-semibold text-gray-800 mb-4">Delete account</h2>
              <p className="text-sm text-gray-600 mb-4">Are you sure you'd like to delete your account permanently?</p>
              <button className="flex w-full justify-between items-center px-4 py-3 border border-red-200 bg-red-50 rounded-lg text-red-800">
                <span className="text-sm font-medium">Delete My Account Permanently</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
        </div>
        ) : (
            <div className="min-w-full mx-auto bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                Your connected wallets
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                This wallet is currently connected.
              </p>
    
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 bg-gray-50 max-w-xs">
                  <span className="text-sm font-mono text-gray-700 truncate">
                    08hvb9bb..65fxceb6bcef665fef
                  </span>
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                </div>
    
                <button className="flex items-center text-sm font-medium text-gray-700">
                  Disconnect My Wallet
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
    
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                Connect More wallets
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Connect more wallets to manage all in one place
              </p>
    
              <div className="space-y-3">
                <button className="w-full py-3 px-4 border border-orange-200 text-orange-800 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors">
                  Connect With Metamask
                </button>
    
                <button className="w-full py-3 px-4 border border-orange-200 text-orange-800 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors">
                  Connect With (Another Wallet)
                </button>
              </div>
            </div>
          </div>
        )}
           

      
      {/* <div className="flex-1">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Your connected wallets</h2>
            {connectedWallet ? (
              <>
                <p className="text-sm text-gray-600 mb-4">
                  This wallet is currently connected.
                </p>
                <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="font-medium">{connectedWallet.type}</div>
                    <div className="text-gray-500">{connectedWallet.address}</div>
                  </div>
                  <Button variant="outline" onClick={handleDisconnect}>
                    Disconnect My Wallet
                  </Button>
                </div>
              </>
            ) : null}

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect More wallets</h3>
              <Button
                variant="outline"
                className="w-full justify-center py-6 text-blue-600 border-blue-600"
                onClick={handleConnect}
              >
                Connect with Bitte.Ai
              </Button>
            </div>
          </div>
        </div> */}

        </div>
      </div>
    </div>
  );
}
