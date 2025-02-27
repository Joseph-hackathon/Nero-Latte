"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const transactionData = [
  { name: "Jan", current: 700, past: 600 },
  { name: "Feb", current: 800, past: 650 },
  { name: "Mar", current: 750, past: 700 },
  { name: "Apr", current: 800, past: 750 },
  { name: "May", current: 850, past: 800 },
  { name: "Jun", current: 900, past: 850 },
  { name: "Jul", current: 950, past: 900 },
  { name: "Aug", current: 900, past: 850 },
  { name: "Sep", current: 850, past: 800 },
  { name: "Oct", current: 800, past: 750 },
  { name: "Nov", current: 750, past: 700 },
  { name: "Dec", current: 700, past: 650 },
]

const transactionsData = Array(8).fill({
  hash: "Af50lnXu...",
  method: "Batch transaction",
  deposit: "0",
  fee: "0.000564",
  from: "relay.tg",
  to: "veronica...",
  status: "IN",
  blockHeight: "Badge",
  age: "16 hrs ago",
})

export function TransactionsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Transaction History</h1>
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

      <div className="flex gap-4 border-b mb-6">
        {["Transactions", "Receipts", "Staking", "Near Blockchain transaction", "DeFi Investments"].map(
          (tab, index) => (
            <Button
              key={tab}
              variant="ghost"
              className={`pb-2 px-1 rounded-none ${
                index === 0 ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </Button>
          ),
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-base font-medium mb-4">Real-time performance analysis</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="current" stroke="#2563eb" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="past" stroke="#94a3b8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-base font-medium mb-4">Monthly transactions</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="current" stroke="#2563eb" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="past" stroke="#94a3b8" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-xs font-medium text-gray-500">
                <th className="py-3 px-4">TXN HASH</th>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Deposit Value</th>
                <th className="py-3 px-4">TXN Fee</th>
                <th className="py-3 px-4">FROM</th>
                <th className="py-3 px-4">TO</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Block Height</th>
                <th className="py-3 px-4">Age</th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.map((tx, i) => (
                <tr key={i} className="border-b text-sm last:border-0 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {tx.hash}
                  </td>
                  <td className="py-3 px-4">{tx.method}</td>
                  <td className="py-3 px-4">{tx.deposit}</td>
                  <td className="py-3 px-4">{tx.fee}</td>
                  <td className="py-3 px-4">{tx.from}</td>
                  <td className="py-3 px-4">{tx.to}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{tx.blockHeight}</td>
                  <td className="py-3 px-4">{tx.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, "...", 67, 68].map((page, i) => (
              <Button
                key={i}
                variant={page === 1 ? "default" : "ghost"}
                className={`h-8 w-8 p-0 ${typeof page === "string" ? "cursor-default" : ""}`}
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

