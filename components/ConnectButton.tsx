// import React from 'react';
// import { useAccount, useConnect, useDisconnect } from 'wagmi';

// const ConnectButton = () => {
//   const { address } = useAccount();
//   const { connectors, connect } = useConnect();
//   const { disconnect } = useDisconnect();

//   return (
//     <div>
//       {address ? (
//         <button onClick={() => disconnect()}>Disconnect</button>
//       ) : (
//         connectors.map((connector) => (
//           <button key={connector.id} onClick={() => connect({ connector })}>
//             {connector.name}
//           </button>
//         ))
//       )}
//     </div>
//   );
// };

// export default ConnectButton;

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";

export const ConnectButton = () => {
  const { address } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {address ? (
        <Button
          onClick={() => disconnect()}
          className="hidden sm:flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm hover:bg-gray-100"
        >
          <span className="text-gray-500">Disconnect</span>
        </Button>
      ) : (
        connectors.map((connector) => (
          <Button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="hidden sm:flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm hover:bg-gray-100"
          >
            <span className="text-gray-500">{connector.name}</span>
          </Button>
        ))
      )}
    </div>
  );
};