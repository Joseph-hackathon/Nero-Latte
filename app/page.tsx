import React from 'react';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, WagmiProvider, createConfig } from "wagmi";
import { mainnet, linea, lineaSepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";
import Dashboard from '@/dashboard';
import { config } from '@/components/Setting'; 

const client = new QueryClient();





const Home = () => {
  return (
    
        <Dashboard />
    
  );
};

export default Home;