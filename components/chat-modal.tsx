// "use client"

// import { useState } from "react"
// import { Home, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface ChatModalProps {
//   isOpen: boolean
//   onClose: () => void
//   onStartConversation: () => void
// }

// export function ChatModal({ isOpen, onClose, onStartConversation }: ChatModalProps) {
//   const [showDefiOptions, setShowDefiOptions] = useState(false)

//   if (!isOpen) return null

//   const handleDefiAction = (action: string) => {
//     console.log(`Selected action: ${action}`)
//     onStartConversation()
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8">
//         {/* Close button */}
//         <button onClick={onClose} className="absolute right-6 top-4 text-gray-500 hover:text-gray-700">
//           <span className="sr-only">Close</span>
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Modal content */}
//         <div className="flex flex-col items-center space-y-8">
//           <h2 className="text-3xl font-semibold">Meet Your AI Companion!</h2>
//           <p className="text-lg text-gray-600">Nero</p>

//           <div className="flex items-center space-x-6">
//             {/* Character image */}
//             <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-100 p-8">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-5nPwJ7XsByF8cWNBqmPapf6TgR4m3q.svg"
//                 alt="Nero"
//                 className="h-full w-full"
//               />
//             </div>

//             {/* Level info */}
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm text-gray-600">Your Level</p>
//                 <p className="text-lg font-bold">Novice</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Your Points</p>
//                 <p className="text-lg font-bold">268 XP</p>
//               </div>
//             </div>
//           </div>

//           {/* Start conversation button */}
//           <Button
//             className="w-full max-w-md bg-gradient-to-r from-purple-50 via-purple-200 to-purple-50 text-xl font-semibold text-gray-900 shadow-lg hover:from-purple-100 hover:via-purple-300 hover:to-purple-100"
//             onClick={() => setShowDefiOptions(!showDefiOptions)}
//           >
//             Ask Nero to manage your DeFi portfolio
//             {showDefiOptions ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
//           </Button>

//           {/* Quick actions */}
//           {showDefiOptions && (
//             <div className="w-full max-w-md space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 {["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"].map((action) => (
//                   <Button
//                     key={action}
//                     variant="outline"
//                     className="w-full border-2 border-purple-200 py-6 text-lg font-semibold text-gray-700 hover:bg-purple-50"
//                     onClick={() => handleDefiAction(action)}
//                   >
//                     {action}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           )}

         

//           {/* Bottom navigation (inside modal) */}
// <div className="mt-8 flex w-full border-t bg-white">
//   <Button
//     variant="ghost"
//     className="flex-1 gap-2 rounded-none border-r py-8 text-lg font-semibold text-purple-700"
//   >
//     <Home className="h-5 w-5" />
//     Home
//   </Button>
//   <Button variant="ghost" className="flex-1 gap-2 rounded-none py-8 text-lg font-semibold text-gray-600">
//     <MessageCircle className="h-5 w-5" />
//     All Messages
//   </Button>
// </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useState } from "react";
// import { Home, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface ChatModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onStartConversation: () => void;
// }

// export function ChatModal({ isOpen, onClose, onStartConversation }: ChatModalProps) {
//   const [showDefiOptions, setShowDefiOptions] = useState(false);

//   if (!isOpen) return null;

//   const handleDefiAction = (action: string) => {
//     console.log(`Selected action: ${action}`);
//     onStartConversation();
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="relative w-full max-w-lg rounded-3xl bg-blue-100 p-8 shadow-xl">
//         {/* Close button */}
//         <button onClick={onClose} className="absolute right-6 top-4 text-gray-500 hover:text-gray-700">
//           <span className="sr-only">Close</span>
//           ✕
//         </button>

//         {/* Modal content */}
//         <div className="flex flex-col items-center space-y-6">
//           <h2 className="text-2xl font-bold text-gray-800">Meet Your AI Companion!</h2>
//           <p className="text-lg font-semibold text-gray-700">NeroLatte</p>

//           <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-2xl shadow-md">
//             <img
//               src="https://your-character-image-url.com"
//               alt="NeroLatte"
//               className="h-32 w-32"
//             />
//             <div className="text-center">
//               <p className="text-sm text-gray-600">Your Level</p>
//               <p className="text-lg font-bold">Novice</p>
//               <p className="text-sm text-gray-600 mt-2">Your Points</p>
//               <p className="text-lg font-bold">268 XP</p>
//             </div>
//           </div>

//           {/* Start conversation button */}
//           <Button
//             className="w-full max-w-xs bg-orange-500 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:bg-orange-600"
//             onClick={() => setShowDefiOptions(!showDefiOptions)}
//           >
//             Start a Conversation ➜
//           </Button>

//           {/* Quick actions */}
//           {showDefiOptions && (
//             <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-xl shadow-md">
//               <p className="text-lg font-semibold text-gray-800">Quick Actions to manage your DeFi portfolio</p>
//               <div className="grid grid-cols-2 gap-4">
//                 {["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"].map((action) => (
//                   <Button
//                     key={action}
//                     variant="outline"
//                     className="w-full border-2 border-gray-300 py-3 text-lg font-semibold text-gray-700 rounded-lg hover:bg-gray-100"
//                     onClick={() => handleDefiAction(action)}
//                   >
//                     {action}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Bottom navigation */}
//           <div className="mt-6 flex w-full bg-white border-t shadow-md">
//             <Button variant="ghost" className="flex-1 gap-2 py-4 text-lg font-semibold text-gray-700">
//               <Home className="h-5 w-5" /> Home
//             </Button>
//             <Button variant="ghost" className="flex-1 gap-2 py-4 text-lg font-semibold text-gray-700">
//               <MessageCircle className="h-5 w-5" /> All Messages
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Separator } from "@/components/ui/separator";
// import { ChevronRight, Home, MessageCircle, X } from "lucide-react";
// import React from "react";

// export default function Frame(): JSX.Element {
//   // Define action buttons data for mapping
//   const quickActions = [
//     { id: 1, label: "Buy" },
//     { id: 2, label: "Sell" },
//     { id: 3, label: "Swap" },
//     { id: 4, label: "Bridge" },
//     { id: 5, label: "Send" },
//     { id: 6, label: "Stake" },
//   ];

//   // User stats data
//   const userStats = [
//     { label: "Your Level", value: "Novice" },
//     { label: "Your Points", value: "268 XP" },
//   ];

//   return (
//     <Dialog defaultOpen={true}>
//       <DialogContent className="w-[893px] p-0 overflow-hidden shadow-chatbot-modal-shadow rounded-[var(--collection-1-spacing-large-box-corners)] border-none max-w-none">
//         <div className="flex flex-col">
//           {/* Top section with AI companion info */}
//           <div className="bg-collection-1-colors-light-blue border-b border-collection-1-colors-light-gray">
//             <div className="absolute right-6 top-6">
//               <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
//                 <X className="h-9 w-9" />
//               </Button>
//             </div>

//             <div className="flex flex-col items-center justify-center gap-8 px-16 py-10">
//               <div className="flex flex-col items-center gap-[var(--size-space-400)] w-full">
//                 <div className="flex flex-col items-center gap-[var(--size-space-600)]">
//                   <div className="flex flex-col w-[455px] items-center justify-center gap-4">
//                     <h1 className="self-stretch font-bold text-collection-1-colors-super-dark-brown-text text-4xl text-center leading-9 [font-family:'HelveticaNeue-Bold',Helvetica]">
//                       Meet Your AI Companion!
//                     </h1>
//                   </div>

//                   <div className="text-center">
//                     <p className="text-collection-1-colors-super-dark-brown-text font-medium">
//                       NeroLatte
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-center gap-6 w-full">
//                   <div className="relative w-[150px] h-[230.81px]">
//                     {/* AI companion character image */}
//                     <img
//                       className="w-full h-full"
//                       alt="AI Companion Character"
//                       src=""
//                     />
//                   </div>

//                   <div className="flex flex-col items-start gap-4">
//                     {userStats.map((stat, index) => (
//                       <React.Fragment key={index}>
//                         <div className="flex w-[147px] items-start justify-between">
//                           <div className="w-fit [font-family:'HelveticaNeue-Medium',Helvetica] font-medium text-collection-1-colors-dark-gray text-xs leading-[12.8px] whitespace-nowrap">
//                             {stat.label}
//                           </div>
//                           <div className="w-fit [font-family:'HelveticaNeue-Heavy',Helvetica] font-normal text-collection-1-colors-super-dark-brown-text text-base leading-[17.1px] whitespace-nowrap">
//                             {stat.value}
//                           </div>
//                         </div>
//                         {index < userStats.length - 1 && (
//                           <Separator className="w-full" />
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col w-[528px] items-center gap-4">
//                 <Button className="h-16 w-full bg-collection-1-colors-important-btns hover:bg-collection-1-colors-important-btns/90 rounded-[var(--collection-1-spacing-large-box-corners)] shadow-[0px_0px_20.9px_1px_#b2b3ff9e] flex items-center justify-center">
//                   <span className="[font-family:'HelveticaNeue-Heavy',Helvetica] font-normal text-collection-1-colors-white text-2xl tracking-[0.50px] leading-6 whitespace-nowrap">
//                     Start a Conversation
//                   </span>
//                   <ChevronRight className="ml-2 h-6 w-6 text-white" />
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions section */}
//           <div className="py-[var(--size-space-200)] px-6 flex flex-col items-center justify-center gap-6">
//             <h2 className="[font-family:'Helvetica_Neue-CondensedBold',Helvetica] font-bold text-collection-1-colors-text-black text-[32px] text-center leading-[normal]">
//               Quick Actions to manage your DeFi portfolio
//             </h2>

//             <div className="flex flex-col w-[517px] items-center justify-center gap-4">
//               <div className="grid grid-cols-2 gap-6 w-full">
//                 {quickActions.map((action) => (
//                   <Button
//                     key={action.id}
//                     variant="outline"
//                     className="h-10 rounded-[500px] border border-collection-1-colors-01-primary bg-collection-1-colors-white hover:bg-collection-1-colors-white/90"
//                   >
//                     <span className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-super-dark-brown-text text-lg leading-[19.3px] whitespace-nowrap">
//                       {action.label}
//                     </span>
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Bottom navigation */}
//           <div className="flex w-full border-t border-collection-1-colors-light-gray mt-auto">
//             <Button
//               variant="ghost"
//               className="flex-1 flex items-center justify-center gap-2 py-8 border-t border-collection-1-colors-accent rounded-none"
//             >
//               <Home className="w-6 h-6" />
//               <span className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-accent text-base leading-[17.1px] whitespace-nowrap">
//                 Home
//               </span>
//             </Button>

//             <Button
//               variant="ghost"
//               className="flex-1 flex items-center justify-center gap-2 py-8 rounded-none"
//             >
//               <MessageCircle className="w-6 h-6" />
//               <span className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-accent text-base leading-[17.1px] whitespace-nowrap">
//                 All Messages
//               </span>
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Separator } from "@/components/ui/separator";
// import { ChevronRight, Home, MessageCircle, X } from "lucide-react";

// interface ChatModalProps {
//     isOpen: boolean
//     onClose: () => void
//     onStartConversation: () => void
//   }
  
//   export function ChatModal({ isOpen, onClose, onStartConversation }: ChatModalProps) {
//     const [showDefiOptions, setShowDefiOptions] = useState(false)
  
//     if (!isOpen) return null
  
//     const handleDefiAction = (action: string) => {
//       console.log(`Selected action: ${action}`)
//       onStartConversation()
//     }


//   const quickActions = ["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"];
//   const userStats = [
//     { label: "Your Level", value: "Novice" },
//     { label: "Your Points", value: "268 XP" },
//   ];

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="w-[893px] p-0 overflow-hidden shadow-chatbot-modal-shadow rounded-lg border-none max-w-none">
//         <div className="flex flex-col">
//           <div className="bg-[#D0E8F4] bg-blue-100 border-b border-gray-300 relative p-10">
//             <Button variant="ghost" size="icon" className="absolute right-6 top-6 h-9 w-9 p-0" onClick={onClose}>
//               <X className="h-9 w-9" />
//             </Button>
//             <div className="flex flex-col items-center gap-8">
//               <h1 className="text-4xl font-bold text-gray-800 text-center">Meet Your AI Companion!</h1>
//               <p className="text-lg font-medium text-gray-700">NeroLatte</p>
//               <div className="flex items-center gap-6">
//                 <img className="w-36 h-48" alt="AI Companion" src="/Group 22.png" />
//                 <div className="flex flex-col gap-4">
//                   {userStats.map((stat, index) => (
//                     <div key={index} className="flex justify-between w-40">
//                       <span className="text-xs font-medium text-gray-600">{stat.label}</span>
//                       <span className="text-base font-bold text-gray-800">{stat.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <Button className="h-16 w-full bg-orange-500 text-white text-2xl rounded-lg shadow-lg hover:bg-orange-600" onClick={() => setShowDefiOptions(!showDefiOptions)}>
//                 Start a Conversation
//                 <ChevronRight className="ml-2 h-6 w-6 text-white" />
//               </Button>
//             </div>
//           </div>
//           <div className="p-6 flex flex-col items-center gap-6 bg-white">
//             <h2 className="text-2xl font-bold text-gray-800 text-center">Quick Actions to manage your DeFi portfolio</h2>
//             <div className="grid grid-cols-2 gap-6 w-[517px]">
//               {quickActions.map((action) => (
//                 <Button key={action} variant="outline" className="h-10 border border-blue-500 bg-white hover:bg-gray-100" onClick={() => handleDefiAction(action)}>
//                   {action}
//                 </Button>
//               ))}
//             </div>
//           </div>
//           <div className="flex border-t border-gray-300 bg-white">
//             <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2 py-8 border-t border-blue-500 rounded-none">
//               <Home className="w-6 h-6" /> Home
//             </Button>
//             <Button variant="ghost" className="flex-1 flex items-center justify-center gap-2 py-8 rounded-none">
//               <MessageCircle className="w-6 h-6" /> All Messages
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // import { Card } from "@/components/ui/card";
// // import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
// // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Home, MessageCircle, X } from "lucide-react";
// // import React from "react";

// // // Chat data for mapping
// // const chatData = [
// //   { title: "Overal title of the previous chat...", date: "Feb 26, 2025" },
// //   { title: "Overal title of the previous chat...", date: "Feb 26, 2025" },
// //   { title: "Overal title of the previous chat...", date: "Feb 26, 2025" },
// //   { title: "Overal title of the previous chat...", date: "Feb 26, 2025" },
// //   { title: "Overal title of the previous chat...", date: "Feb 26, 2025" },
// // ];

// // const Frame = (): JSX.Element => {
// //   return (
// //     <Card className="w-[892px] rounded-[var(--collection-1-spacing-large-box-corners)] shadow-chatbot-modal-shadow overflow-hidden">
// //       <div className="flex flex-col h-[895px]">
// //         {/* Header */}
// //         <div className="bg-collection-1-colors-light-blue border-b border-collection-1-colors-light-gray px-16 py-10 relative">
// //           <DialogHeader className="flex items-center justify-center">
// //             <DialogTitle className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-super-dark-brown-text text-4xl text-center leading-9">
// //               Previous chats
// //             </DialogTitle>
// //           </DialogHeader>
// //           <button className="absolute right-6 top-6">
// //             <X className="w-9 h-9" />
// //           </button>
// //         </div>

// //         {/* Chat List */}
// //         <div className="flex-1 overflow-auto">
// //           {chatData.map((chat, index) => (
// //             <div
// //               key={index}
// //               className="border-b border-collection-1-colors-light-gray px-6"
// //             >
// //               <div className="flex items-center justify-between py-8">
// //                 <div className="flex-1 [font-family:'HelveticaNeue-Medium',Helvetica] font-medium text-collection-1-colors-text-black text-lg leading-normal overflow-hidden text-ellipsis whitespace-nowrap">
// //                   {chat.title}
// //                 </div>
// //                 <div className="[font-family:'HelveticaNeue-Light',Helvetica] font-light text-collection-1-colors-dark-gray text-xs leading-[19.6px]">
// //                   {chat.date}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Footer Navigation */}
// //         <div className="border-t border-collection-1-colors-light-gray">
// //           <Tabs defaultValue="messages" className="w-full">
// //             <TabsList className="w-full grid grid-cols-2 bg-transparent p-0">
// //               <TabsTrigger
// //                 value="home"
// //                 className="flex items-center justify-center gap-2 py-8 data-[state=inactive]:bg-transparent data-[state=inactive]:opacity-100"
// //               >
// //                 <Home className="w-6 h-6" />
// //                 <span className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-accent text-base leading-[17.1px]">
// //                   Home
// //                 </span>
// //               </TabsTrigger>
// //               <TabsTrigger
// //                 value="messages"
// //                 className="flex items-center justify-center gap-2 py-8 border-t-2 border-collection-1-colors-accent data-[state=inactive]:bg-transparent data-[state=inactive]:opacity-100"
// //               >
// //                 <MessageCircle className="w-6 h-6" />
// //                 <span className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-accent text-lg leading-[19.3px]">
// //                   All Messages
// //                 </span>
// //               </TabsTrigger>
// //             </TabsList>
// //           </Tabs>
// //         </div>
// //       </div>
// //     </Card>
// //   );
// // };

// // export default Frame;


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Home, MessageCircle, X } from "lucide-react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartConversation: () => void;
}

// Chat data for mapping
const chatData = [
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
  { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
];

export function ChatModal({ isOpen, onClose, onStartConversation }: ChatModalProps) {
  const [showDefiOptions, setShowDefiOptions] = useState(false);
  const [activeView, setActiveView] = useState<"home" | "messages">("home");

  if (!isOpen) return null;

  const handleDefiAction = (action: string) => {
    console.log(`Selected action: ${action}`);
    onStartConversation();
  };

  const quickActions = ["Buy", "Sell", "Swap", "Bridge", "Send", "Stake"];
  const userStats = [
    { label: "Your Level", value: "Novice" },
    { label: "Your Points", value: "268 XP" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[893px] p-0 overflow-hidden shadow-chatbot-modal-shadow rounded-lg border-none max-w-none">
        <div className="flex flex-col">
          {activeView === "home" ? (
            <>
              <div className="bg-[#D0E8F4] bg-blue-100 border-b border-gray-300 relative p-10">
                <Button variant="ghost" size="icon" className="absolute right-6 top-6 h-9 w-9 p-0" onClick={onClose}>
                  <X className="h-9 w-9" />
                </Button>
                <div className="flex flex-col items-center gap-8">
                  <h1 className="text-4xl font-bold text-gray-800 text-center">Meet Your AI Companion!</h1>
                  <p className="text-lg font-medium text-gray-700">NeroLatte</p>
                  <div className="flex items-center gap-6">
                    <img className="w-36 h-48" alt="AI Companion" src="/Group 22.png" />
                    <div className="flex flex-col gap-4">
                      {userStats.map((stat, index) => (
                        <div key={index} className="flex justify-between w-40">
                          <span className="text-xs font-medium text-gray-600">{stat.label}</span>
                          <span className="text-base font-bold text-gray-800">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="h-16 w-full bg-orange-500 text-white text-2xl rounded-lg shadow-lg hover:bg-orange-600" onClick={() => setShowDefiOptions(!showDefiOptions)}>
                    Start a Conversation
                    <ChevronRight className="ml-2 h-6 w-6 text-white" />
                  </Button>
                </div>
              </div>
              <div className="p-6 flex flex-col items-center gap-6 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Quick Actions to manage your DeFi portfolio</h2>
                <div className="grid grid-cols-2 gap-6 w-[517px]">
                  {quickActions.map((action) => (
                    <Button key={action} variant="outline" className="h-10 border border-blue-500 bg-white hover:bg-gray-100" onClick={() => handleDefiAction(action)}>
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-[#D0E8F4] bg-blue-100 border-b border-gray-300 relative p-10">
                <Button variant="ghost" size="icon" className="absolute right-6 top-6 h-9 w-9 p-0" onClick={onClose}>
                  <X className="h-9 w-9" />
                </Button>
                <h2 className="text-2xl font-bold text-gray-800 text-center">Previous Chats</h2>
              </div>
              <div className="p-6 flex flex-col items-center gap-6 bg-white">
                <div className="w-full max-h-[300px] overflow-auto border-t border-gray-300">
                  {chatData.map((chat, index) => (
                    <div key={index} className="border-b border-gray-300 px-6 py-4 flex justify-between">
                      <span className="text-lg font-medium text-gray-800">{chat.title}</span>
                      <span className="text-xs text-gray-600">{chat.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex border-t border-gray-300 bg-white">
            <Button
              variant="ghost"
              className={`flex-1 flex items-center justify-center gap-2 py-8 border-t-2 ${activeView === "home" ? "border-blue-500" : "border-transparent"}`}
              onClick={() => setActiveView("home")}
            >
              <Home className="w-6 h-6" /> Home
            </Button>
            <Button
              variant="ghost"
              className={`flex-1 flex items-center justify-center gap-2 py-8 border-t-2 ${activeView === "messages" ? "border-blue-500" : "border-transparent"}`}
              onClick={() => setActiveView("messages")}
            >
              <MessageCircle className="w-6 h-6" /> All Messages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

//             <Dialog open={isOpen} onOpenChange={onClose}>
//               <DialogContent className="w-[892px] p-0 rounded-[var(--collection-1-spacing-large-box-corners)] shadow-chatbot-modal-shadow overflow-hidden">
//                 <div className="flex flex-col h-[895px]">
//                   {/* Header */}
//                   <div className="bg-collection-1-colors-light-blue border-b border-collection-1-colors-light-gray px-16 py-10 relative">
//                     <DialogHeader className="flex items-center justify-center">
//                       <DialogTitle className="[font-family:'HelveticaNeue-Bold',Helvetica] font-bold text-collection-1-colors-super-dark-brown-text text-4xl text-center leading-9">
//                         Previous chats
//                       </DialogTitle>
//                     </DialogHeader>
//                     <button className="absolute right-6 top-6" onClick={onClose}>
//                       <X className="w-9 h-9" />
//                     </button>
//                   </div>

//                   {/* Chat List */}
//                   <div className="flex-1 overflow-auto">
//                     {chatData.map((chat, index) => (
//                       <div key={index} className="border-b border-collection-1-colors-light-gray px-6">
//                         <div className="flex items-center justify-between py-8">
//                           <div className="flex-1 [font-family:'HelveticaNeue-Medium',Helvetica] font-medium text-collection-1-colors-text-black text-lg leading-normal overflow-hidden text-ellipsis whitespace-nowrap">
//                             {chat.title}
//                           </div>
//                           <div className="[font-family:'HelveticaNeue-Light',Helvetica] font-light text-collection-1-colors-dark-gray text-xs leading-[19.6px]">
//                             {chat.date}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           )}

//           {/* Footer Navigation */}
//           <div className="flex border-t border-gray-300 bg-white">
//             <Button
//               variant="ghost"
//               className={`flex-1 flex items-center justify-center gap-2 py-8 rounded-none ${
//                 activeView === "home" ? "border-t-2 border-blue-500" : ""
//               }`}
//               onClick={() => setActiveView("home")}
//             >
//               <Home className="w-6 h-6" /> Home
//             </Button>
//             <Button
//               variant="ghost"
//               className={`flex-1 flex items-center justify-center gap-2 py-8 rounded-none ${
//                 activeView === "messages" ? "border-t-2 border-blue-500" : ""
//               }`}
//               onClick={() => setActiveView("messages")}
//             >
//               <MessageCircle className="w-6 h-6" /> All Messages
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Home, MessageCircle, X } from "lucide-react";

// // Chat data for mapping
// const chatData = [
//   { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
//   { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
//   { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
//   { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
//   { title: "Overall title of the previous chat...", date: "Feb 26, 2025" },
// ];

// interface ChatModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onStartConversation: () => void;
// }

// export function ChatModal({ isOpen, onClose, onStartConversation }: ChatModalProps) {
//   const [activeTab, setActiveTab] = useState("home");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="w-[893px] p-0 overflow-hidden shadow-chatbot-modal-shadow rounded-lg border-none max-w-none bg-white">
//         <div className="flex flex-col h-full">
//           <div className="bg-[#D0E8F4] border-b border-gray-300 relative p-10">
//             <Button variant="ghost" size="icon" className="absolute right-6 top-6 h-9 w-9 p-0" onClick={onClose}>
//               <X className="h-9 w-9" />
//             </Button>
//             <h1 className="text-4xl font-bold text-gray-800 text-center">Meet Your AI Companion!</h1>
//           </div>

//           {activeTab === "home" ? (
//             <div className="p-6 flex flex-col items-center gap-6 bg-white">
//               <p className="text-lg font-medium text-gray-700">NeroLatte</p>
//               <Button className="h-16 w-full bg-orange-500 text-white text-2xl rounded-lg shadow-lg hover:bg-orange-600" onClick={onStartConversation}>
//                 Start a Conversation
//               </Button>
//             </div>
//           ) : (
//             <div className="p-6 flex flex-col items-center gap-6 bg-white">
//               <h2 className="text-2xl font-bold text-gray-800 text-center">Previous Chats</h2>
//               <div className="w-full max-h-[300px] overflow-auto border-t border-gray-300">
//                 {chatData.map((chat, index) => (
//                   <div key={index} className="border-b border-gray-300 px-6 py-4 flex justify-between">
//                     <span className="text-lg font-medium text-gray-800">{chat.title}</span>
//                     <span className="text-xs text-gray-600">{chat.date}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="flex border-t border-gray-300 bg-white">
//             <Button
//               variant="ghost"
//               className={`flex-1 flex items-center justify-center gap-2 py-8 border-t-2 ${activeTab === "home" ? "border-blue-500" : "border-transparent"}`}
//               onClick={() => setActiveTab("home")}
//             >
//               <Home className="w-6 h-6" /> Home
//             </Button>
//             <Button
//               variant="ghost"
//               className={`flex-1 flex items-center justify-center gap-2 py-8 border-t-2 ${activeTab === "messages" ? "border-blue-500" : "border-transparent"}`}
//               onClick={() => setActiveTab("messages")}
//             >
//               <MessageCircle className="w-6 h-6" /> All Messages
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
