"use client";
import { Search, Bell, Home, Gift, Zap, History, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200">
        <div className="flex h-16 items-center border-b px-6">
          <span className="text-xl font-bold">logo</span>
        </div>
        <nav className="space-y-1 p-4">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-purple-50 text-purple-700">
            <Home className="h-5 w-5" />
            Dashboard
          </Button>
          {[
            { icon: Gift, label: "Quests" },
            { icon: Zap, label: "Automate" },
            { icon: History, label: "History" },
            { icon: Settings, label: "Setting" },
          ].map(({ icon: Icon, label }) => (
            <Button key={label} variant="ghost" className="w-full justify-start gap-3 text-gray-700">
              <Icon className="h-5 w-5" />
              {label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input type="text" placeholder="Search for a term" className="pl-10 pr-4" />
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm">
              <span className="text-gray-500">0x1234...5678</span>
            </div>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
              <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Main content area */}
          <div className="text-center py-12 text-gray-500">Dashboard content will be displayed here</div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

