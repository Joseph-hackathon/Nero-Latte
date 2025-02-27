"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Bell, Menu, X, MessageSquare } from "lucide-react"
import { bitteWallet } from "@/lib/bitte-wallet"
import { DashboardPage } from "@/components/dashboard-page"
import { AutomatePage } from "@/components/automate-page"
import { QuestsPage } from "@/components/quests-page"
import { TransactionsPage } from "@/components/transactions-page"
import { SettingsPage } from "@/components/settings-page"
import { ChatModal } from "@/components/chat-modal"
import { NeroChat } from "@/components/nero-chat"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isNeroChatOpen, setIsNeroChatOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [walletInfo, setWalletInfo] = useState(null)

  const handleWalletConnect = async () => {
    if (bitteWallet.isConnected()) {
      await bitteWallet.disconnect()
      setWalletInfo(null)
    } else {
      const info = await bitteWallet.connect()
      setWalletInfo(info)
    }
  }

  const handleStartConversation = () => {
    setIsChatOpen(false)
    setIsNeroChatOpen(true)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage />
      case "quests":
        return <QuestsPage />
      case "automate":
        return <AutomatePage />
      case "transactions":
        return <TransactionsPage />
      case "setting":
        return <SettingsPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed left-4 top-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b px-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
              alt="Logo"
              className="h-8 w-8"
            />
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="space-y-1 px-3">
              {[
                { name: "Dashboard", icon: "🏠" },
                { name: "Quests", icon: "🎯" },
                { name: "Automate", icon: "⚡" },
                { name: "Transactions", icon: "💳" },
                { name: "Setting", icon: "⚙️" },
              ].map((item) => (
                <Button
                  key={item.name}
                  variant={currentPage === item.name.toLowerCase() ? "subtle" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    currentPage === item.name.toLowerCase() ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                  onClick={() => setCurrentPage(item.name.toLowerCase())}
                >
                  <span>{item.icon}</span>
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 ${isSidebarOpen ? "md:ml-64" : ""}`}>
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6">
          <div className="flex items-center">
            <div className="text-xl font-bold capitalize mr-4">{currentPage}</div>
            <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => setIsChatOpen(true)}>
              <MessageSquare className="h-4 w-4" />
              Talk to AI
            </Button>
          </div>
          <div className="relative ml-auto flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a Token"
                className="h-10 rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              onClick={handleWalletConnect}
              className="hidden sm:flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm hover:bg-gray-100"
            >
              <span className="text-gray-500">{walletInfo ? walletInfo.shortAddress : "Connect Wallet"}</span>
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
              <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>

        <main>{renderPage()}</main>
      </div>

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onStartConversation={handleStartConversation}
      />

      {/* Nero Chat */}
      {isNeroChatOpen && <NeroChat onClose={() => setIsNeroChatOpen(false)} />}
    </div>
  )
}

