import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, WagmiProvider, createConfig } from "wagmi";
import { mainnet, linea, lineaSepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const config = createConfig({
    ssr: true, // Make sure to enable this for server-side rendering (SSR) applications.
    chains: [mainnet, linea, lineaSepolia],
    connectors: [metaMask()],
    transports: {
      [mainnet.id]: http(),
      [linea.id]: http(),
      [lineaSepolia.id]: http(),
    },
  });
  