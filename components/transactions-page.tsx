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
import { CheckCircle2, Gift } from "lucide-react";
import { useState } from "react";
import { ChatModal } from "@/components/chat-modal";
import { NeroChat } from "@/components/nero-chat";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const financialData = [
  {
    title: "Profit",
    amount: "$11",
    percentage: "+2.5%",
    trend: "up",
    textColor: "text-[#56C47D]",
    borderColor: "border-[#56C47D]",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    title: "Loss",
    amount: "$23",
    percentage: "-2.5%",
    trend: "down",
    textColor: "text-[#C45656]",
    borderColor: "border-[#C45656]",
    bgColor: "bg-[#FFFFFF]",
  },
];

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
});

export function TransactionsPage() {
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

      <div className="flex gap-4 border-b mb-6">
        {[
          "Transactions",
          "Receipts",
          "Staking",
          "Near Blockchain transaction",
          "DeFi Investments",
        ].map((tab, index) => (
          <Button
            key={tab}
            variant="ghost"
            className={`pb-2 px-1 rounded-none ${
              index === 0
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-base font-medium mb-4">
            Real-time performance analysis
          </h3>
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
        </div> */}

      {/* <div className="bg-white p-4 rounded-lg border">
          <h3 className="text-base font-medium mb-4">Monthly transactions</h3>
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
        </div> */}

      {/* 
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {financialData.map((item, index) => (
        <Card
          key={index}
          className={`flex flex-row items-center p-6 gap-4 w-[258.81px] h-[152px] 
            ${item.bgColor} border ${item.borderColor} rounded-lg shadow-md`}
        >
          {/* Icon */}
      {/* <div className="relative w-[53.85px] h-[53.85px] flex items-center justify-center">
            {item.trend === "up" ? (
              <TrendingUp className={`w-[35px] h-[35px] ${item.textColor}`} />
            ) : (
              <TrendingDown className={`w-[35px] h-[35px] ${item.textColor}`} />
            )}
          </div>

          {/* Content */}
      {/* <div className="flex flex-col items-start">
            <h3 className="text-[21px] font-normal text-[#242325]">{item.title}</h3>
            <p className="text-[35px] font-normal text-[#242325]">{item.amount}</p>
            <span className={`text-[14px] font-normal text-center ${item.textColor}`}>
              {item.percentage}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
} */}
      {/* </div> */}
      {/* <div className="grid md:grid-cols-2 gap-6 mb-6">
        {["Real-time performance analysis", "Monthly transactions"].map((title, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg border">
            <h3 className="text-base font-medium mb-4">{title}</h3>
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
        ))}
      </div>

      {/* Financial Data Cards */}
      {/* <div className="flex flex-wrap justify-center gap-6">
         {financialData.map((item, index) => (
          <div key={index} className={`flex items-center p-6 gap-4 w-64 h-40 ${item.bgColor} border ${item.borderColor} rounded-lg shadow-md`}>
            <div className="relative w-14 h-14 flex items-center justify-center">
              {item.trend === "up" ? <TrendingUp className={`w-9 h-9 ${item.textColor}`} /> : <TrendingDown className={`w-9 h-9 ${item.textColor}`} />}
            </div>
            <div>
              <h3 className="text-lg font-normal text-gray-900">{item.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{item.amount}</p>
              <span className={`text-sm font-medium ${item.textColor}`}>{item.percentage}</span>
            </div>
          </div>
        ))} 
      </div> */}

      {/* <div className="flex flex-wrap gap-6">
  {/* Charts Section */}
      {/* <div className="flex-1 grid md:grid-cols-2 gap-6">
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
    </div> */}

      {/* <div className="bg-white p-4 rounded-lg border">
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
  </div> */}

      {/* Financial Data Cards
  <div className="flex flex-col gap-4">
    {financialData.map((item, index) => (
      <Card
        key={index}
        className={`flex flex-row items-center p-6 gap-4 w-[258.81px] h-[152px] 
          ${item.bgColor} border ${item.borderColor} rounded-lg shadow-md`}
      > */}
      {/* Icon */}
      {/* <div className="relative w-[53.85px] h-[53.85px] flex items-center justify-center">
          {item.trend === "up" ? (
            <TrendingUp className={`w-[35px] h-[35px] ${item.textColor}`} />
          ) : (
            <TrendingDown className={`w-[35px] h-[35px] ${item.textColor}`} />
          )}
        </div> */}

      {/* Content */}
      {/* <div className="flex flex-col items-start">
          <h3 className="text-[21px] font-normal text-[#242325]">{item.title}</h3>
          <p className="text-[35px] font-normal text-[#242325]">{item.amount}</p>
          <span className={`text-[14px] font-normal text-center ${item.textColor}`}>
            {item.percentage}
          </span>
        </div>
      </Card>
    ))}
  </div> */}
      {/* </div> */}

      <div className="bg-white p-6 rounded-lg border border-gray-300 shadow-md w-full mb-6">
        <h2 className="text-lg font-semibold mb-4">Quick overview</h2>

        {/* Main Container - Charts + Financial Cards */}
        <div className="flex flex-row gap-6">
          {/* Charts Section */}
          <div className="flex flex-1 gap-6">
            {/* Real-time Performance Chart */}
            <div className="bg-white p-4 rounded-lg border w-full shadow-sm">
              <h3 className="text-base font-medium mb-2">
                Real-time performance analysis
              </h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={transactionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
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

            {/* Monthly Transactions Chart */}
            <div className="bg-white p-4 rounded-lg border w-full shadow-sm">
              <h3 className="text-base font-medium mb-2">
                Monthly transactions
              </h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={transactionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
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
          </div>

          {/* Financial Data Section */}
          <div className="flex flex-col gap-4 w-[260px]">
            {financialData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-8 py-4 h-1/2 rounded-lg shadow-sm border ${item.bgColor} ${item.borderColor}`}
              >
                {/* Icon */}
                <div className="flex items-center">
                  {item.trend === "up" ? (
                    <TrendingUp className={`w-10 h-10 ${item.textColor}`} />
                  ) : (
                    <TrendingDown className={`w-10 h-10 ${item.textColor}`} />
                  )}
                </div>

                {/* Content */}
                <div className="text-right">
                  <h3 className="text-lg text-gray-500">{item.title}</h3>
                  <p className="text-2xl font-semibold">{item.amount}</p>
                  <span className={`text-lg ${item.textColor}`}>
                    {item.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="bg-white rounded-lg border">
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
        <div className="p-4 border-t">
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, "...", 67, 68].map((page, i) => (
              <Button
                key={i}
                variant={page === 1 ? "default" : "ghost"}
                className={`h-8 w-8 p-0 ${
                  typeof page === "string" ? "cursor-default" : ""
                }`}
              >
                {page}
              </Button>
            ))}
          </div>
        </div>
      </div> */}
      <div className="bg-white rounded-lg border border-gray-300 p-6 w-full max-w-full shadow-lg">
        {/* Title with orange border */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
          All transactions
        </h2>
        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-100">
                <th className="py-3 px-4 border-r border-gray-100">
                  TXN HASH
                </th>
                <th className="py-3 px-4 border-r border-gray-100">Method</th>
                <th className="py-3 px-4 border-r border-gray-100">
                  Deposit Value
                </th>
                <th className="py-3 px-4 border-r border-gray-100">
                  TXN Fee
                </th>
                <th className="py-3 px-4 border-r border-gray-100">FROM</th>
                <th className="py-3 px-4 border-r border-gray-100">TO</th>
                <th className="py-3 px-4 border-r border-gray-100">Status</th>
                <th className="py-3 px-4 border-r border-gray-100">
                  Block Height
                </th>
                <th className="py-3 px-4">Age</th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.map((tx, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 text-sm last:border-0 hover:bg-gray-50 transition-all"
                >
                  <td className="py-4 px-4 font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {tx.hash}
                  </td>
                  <td className="py-4 px-4">{tx.method}</td>
                  <td className="py-4 px-4">{tx.deposit}</td>
                  <td className="py-4 px-4">{tx.fee}</td>
                  <td className="py-4 px-4">{tx.from}</td>
                  <td className="py-4 px-4">{tx.to}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="border px-2 py-1 text-xs rounded bg-gray-100">
                      {tx.blockHeight}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{tx.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="p-4 mt-4 w-full flex justify-center border-t border-gray-200">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full text-sm bg-green-600 text-white font-semibold"
            >
              1
            </Button>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full text-sm text-gray-600"
            >
              2
            </Button>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full text-sm text-gray-600"
            >
              3
            </Button>
            <span className="h-8 w-8 flex items-center justify-center text-gray-400">
              ...
            </span>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full text-sm text-gray-600"
            >
              67
            </Button>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full text-sm text-gray-600"
            >
              68
            </Button>
          </div>
        </div>
      </div>
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onStartConversation={handleStartConversation}
      />

      {isNeroChatOpen && <NeroChat onClose={() => setIsNeroChatOpen(false)} />}
    </div>
  );
}
/* Frame 1321317586 */

/* Auto layout */

{
  /* <div className="grid md:grid-cols-2 gap-6 mb-6">
        {["Real-time performance analysis", "Monthly transactions"].map((title, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg border">
            <h3 className="text-base font-medium mb-4">{title}</h3>
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
        ))}
      </div>

      {/* Financial Data Cards */
}
// <div className="flex flex-wrap justify-center gap-6">
//   {financialData.map((item, index) => (
//     <div key={index} className={`flex items-center p-6 gap-4 w-64 h-40 ${item.bgColor} border ${item.borderColor} rounded-lg shadow-md`}>
//       <div className="relative w-14 h-14 flex items-center justify-center">
//         {item.trend === "up" ? <TrendingUp className={`w-9 h-9 ${item.textColor}`} /> : <TrendingDown className={`w-9 h-9 ${item.textColor}`} />}
//       </div>
//       <div>
//         <h3 className="text-lg font-normal text-gray-900">{item.title}</h3>
//         <p className="text-2xl font-bold text-gray-900">{item.amount}</p>
//         <span className={`text-sm font-medium ${item.textColor}`}>{item.percentage}</span>
//       </div>
//     </div>
//   ))} */}
