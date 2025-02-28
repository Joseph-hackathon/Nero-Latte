<h1 align="center">Nero</h1>
<h3 align="center">AI chatbot-based portfolio management and DeFi automation platform</h3>

<p align="center">
  <a href="https://nero-kappa.vercel.app/" style="color: #a77dff">Platform</a> | <a href="" style="color: #a77dff">Pitchdeck</a> | <a href="" style="color: #a77dff">Demo Video</a>
</p>
<p align="center">
  <a href="" style="color: #a77dff">Contract</a> | <a href="" style="color: #a77dff">Bitte</a> | <a href="" style="color: #a77dff">Proximity</a>
</p>

---
![banner-nero](https://github.com/user-attachments/assets/54679f20-6d3a-4222-854e-af2751571d5b)

## Overview  
Our project is an AI chatbot-based portfolio management and DeFi automation platform. By incorporating gamification, users can track their assets, execute trades, and grow their AI agents, making portfolio management a fun and educational experience.  

## Problem  
1. **Complex DeFi Management** – Managing multiple wallets and DeFi transactions is challenging.  
2. **Lack of Engagement** – Traditional portfolio trackers only provide data without user interaction.  
3. **User Retention Issues** – Existing financial tools struggle to keep users engaged over time.  
4. **Beyond Simple Automation**  
   - Unlike traditional DeFi agents that focus solely on automating trades or promoting content on Twitter, our AI agent actively interacts with users.  
   - It allows users to explore various networks and ecosystems, engage in conversations, and gain experience rather than just passively managing portfolios.  
   - Users can learn and grow their assets while expanding their financial knowledge through chatbot interactions.  
   - The chatbot isn't just a guide—it’s a character that gains experience through transactions and interactions, evolving into a more advanced portfolio manager.  
   - This approach transforms DeFi trading and portfolio management into a fun, engaging, and educational experience rather than just another financial tool.  

## Solution  
1. **AI-Powered DeFi Management** – The AI agent automates DeFi transactions like swaps, bridges, and staking, simplifying portfolio management.  

2. **Interactive & Gamified Experience** – Users earn experience points (XP) through transactions and chatbot interactions, leveling up their agent bot as a personalized digital asset manager.  

3. **Educational & Engaging Learning** – Users explore multiple networks, learn about DeFi through conversations, and grow both their portfolio and financial knowledge in a fun, engaging way.

## Key Features 
1. **AI Agent for DeFi Management** – Automates swaps, bridges, and staking to optimize portfolio management.  
2. **Gamified Experience** – Users earn XP through transactions and chatbot interactions, leveling up their agent bot.  
3. **Personalized AI Companion** – Each agent bot evolves uniquely based on user engagement and trading activity.  
4. **Multi-Network & Cross-Chain Support** – Enables seamless transactions across various blockchain ecosystems.  
5. **Educational Chatbot** – Provides real-time insights, DeFi education, and market updates through interactive conversations.  
6. **Daily Quests & Rewards** – Encourages user engagement with tasks that offer XP and additional incentives.  
7. **Customizable Character Growth** – Users can shape their agent bot’s appearance and abilities as it levels up.

## Business Model  
**1. Subscription & Premium Features**  
- **Free Tier** – Basic portfolio tracking and chatbot interactions.  
- **Premium Subscription** – Advanced DeFi automation, personalized insights, and enhanced AI analytics.  
- **NFT-Based Access** – Exclusive features for users holding chatbot character NFTs.  

**2. Transaction & Ecosystem Fees**  
- **DeFi Transaction Fees** – Small percentage fee on automated swaps, staking, and bridging.  
- **Marketplace Revenue** – Revenue from trading chatbot character NFTs.  
- **Partnerships & Integrations** – Collaborations with DeFi protocols for integrated services and revenue-sharing models.

## Diagram (Mermaid Code) 
```mermaid
sequenceDiagram
    participant User
    participant AI_Chatbot
    participant Portfolio_Manager
    participant Wallet as Near/Bitte Wallet

    User->>AI_Chatbot: Check portfolio status
    AI_Chatbot->>Portfolio_Manager: Retrieve portfolio data
    Portfolio_Manager->>Wallet: Fetch asset balance
    Wallet-->>Portfolio_Manager: Return balance
    Portfolio_Manager-->>AI_Chatbot: Provide portfolio information
    AI_Chatbot-->>User: Display portfolio update

    User->>AI_Chatbot: Execute DeFi trade
    AI_Chatbot->>Wallet: Process trade via Bitte/Near wallet
    Wallet-->>AI_Chatbot: Confirm transaction completion
    AI_Chatbot-->>User: Trade successful!

    User->>AI_Chatbot: Request cross-chain trade
    AI_Chatbot->>Wallet: Execute cross-chain transaction
    Wallet-->>AI_Chatbot: Confirm transaction completion
    AI_Chatbot-->>User: Cross-chain trade successful!

    User->>AI_Chatbot: Complete daily interaction
    AI_Chatbot->>Portfolio_Manager: Grant XP
    Portfolio_Manager-->>User: XP gained and chatbot leveled up!

    User->>AI_Chatbot: Execute trade
    AI_Chatbot->>Portfolio_Manager: Reward XP for transaction
    Portfolio_Manager-->>User: Transaction XP gained!

    User->>AI_Chatbot: Request workflow automation
    AI_Chatbot->>Portfolio_Manager: Execute automated workflow
    Portfolio_Manager-->>AI_Chatbot: Task completed
    AI_Chatbot-->>User: Automation successful!
```

## Project Timeline 

**Q1 – MVP Completion & Core Integrations**  
- Finalize **MVP development**  
- Integrate **NEAR Protocol**  
- Implement **Bitte Wallet**  
- Connect **Frax Finance**  

**Q2 – Expansion & Widget Development**  
- Develop **Chatbot Widget Chrome Extension**  
- Begin **Mobile Widget Development**  

**Q3 – Gamification & NFT Integration**  
- Develop **Dynamic NFT Smart Contract** for chatbot characters  
- **Mint & Launch 12,000 Chatbot Character NFTs**  

**Q4 – Advanced AI & DeFi Optimization**  
- Release **Agent DeFi Analysis & Learning v2.0** for enhanced portfolio management and automation  
