"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, HelpCircle, MessageSquare, Gift } from "lucide-react";
import { useState } from "react";
import { ChatModal } from "@/components/chat-modal";
import { NeroChat } from "@/components/nero-chat";

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
];

const transactionsData = Array(5).fill({
  hash: "Af50lnXu...",
  method: "Batch transaction",
  deposit: "0",
  fee: "0.000564",
  from: "relay.tg",
  to: "veronica...",
  status: "IN",
  blockHeight: "Badge",
  age: "16 hrs ago",
});

export default function DashboardPage() {
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

      <Tabs defaultValue="transactions" className="mb-6">
        <TabsList className="w-full border-b bg-transparent p-0 mb-6">
          <div className="flex gap-8">
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none border-b-2 border-transparent py-2 text-gray-600"
            >
              <div className="flex items-center gap-2">
                Transactions & Activity
                <HelpCircle className="h-4 w-4" />
              </div>
            </TabsTrigger>
            <TabsTrigger
              value="tokens"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none border-b-2 border-transparent py-2 text-gray-600"
            >
              Tokens
            </TabsTrigger>
            <TabsTrigger
              value="investment"
              className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none border-b-2 border-transparent py-2 text-gray-600"
            >
              <div className="flex items-center gap-2">
                Investment
                <HelpCircle className="h-4 w-4" />
              </div>
            </TabsTrigger>
          </div>
        </TabsList>

        <TabsContent value="transactions" className="mt-0">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-base font-medium mb-4">
                Monthly transactions
              </h3>
              <div className="flex items-center gap-4 text-xs mb-4">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                  <span>Current month</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <span>Past month</span>
                </div>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={transactionData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f0f0f0"
                    />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="current"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="past"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-base font-medium mb-4">NAME Monthly quest</h3>
              <div className="flex flex-col items-center justify-center h-[300px]">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-blue-600"
                      strokeWidth="10"
                      strokeDasharray={283}
                      strokeDashoffset={283 * (1 - 0.67)}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="45"
                      cx="50"
                      cy="50"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">67%</span>
                  </div>
                </div>
                <div className="mt-4 flex w-full justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                    <span>Achieved</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                    <span>Remaining</span>
                  </div>
                </div>
                <Button variant="link" className="mt-4 text-blue-600">
                  Go to Quests Page {">"}
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border mt-6">
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
                    <tr
                      key={i}
                      className="border-b text-sm last:border-0 hover:bg-gray-50"
                    >
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
            <div className="p-4 text-center border-t">
              <Button variant="link" className="text-blue-600">
                Go to transactions page {">"}
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tokens">
          <div className="text-center py-12 text-gray-500">
            Token information will be displayed here
          </div>
        </TabsContent>

        <TabsContent value="investment">
          <div className="text-center py-12 text-gray-500">
            Investment information will be displayed here
          </div>
        </TabsContent>
      </Tabs>

      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onStartConversation={handleStartConversation}
      />

      {isNeroChatOpen && <NeroChat onClose={() => setIsNeroChatOpen(false)} />}
    </div>
  );
}
