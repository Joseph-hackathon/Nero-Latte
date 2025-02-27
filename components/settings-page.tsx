"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { bitteWallet } from "@/lib/bitte-wallet"

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Account")
  const [connectedWallet, setConnectedWallet] = useState({
    type: "Meta Mask",
    address: "vD03Scc89...064",
  })

  const handleDisconnect = async () => {
    await bitteWallet.disconnect()
    setConnectedWallet(null)
  }

  const handleConnect = async () => {
    const wallet = await bitteWallet.connect()
    setConnectedWallet({
      type: wallet.type,
      address: wallet.shortAddress,
    })
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Setting</h1>
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

      <div className="flex gap-6">
        <div className="w-48">
          <div className="bg-white rounded-lg border overflow-hidden">
            {["Account", "Wallets"].map((tab) => (
              <button
                key={tab}
                className={`w-full px-4 py-2 text-left ${
                  activeTab === tab ? "bg-gray-100 font-medium" : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Your connected wallets</h2>
            {connectedWallet ? (
              <>
                <p className="text-sm text-gray-600 mb-4">This wallet is currently connected.</p>
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
        </div>
      </div>
    </div>
  )
}

