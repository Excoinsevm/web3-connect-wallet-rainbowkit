import { defineChain } from 'viem';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { createPublicClient, http } from 'viem';

// Define a custom chain
const customChain = defineChain({
  id: 7171, // Replace with your custom chain's ID
  name: 'Bitrock Mainnet',
  nativeCurrency: {
    name: 'Bitrock',
    symbol: 'BROCK', // Replace with your chain's native token symbol
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://connect.bit-rock.io'] }, // Replace with your RPC URL
  },
  blockExplorers: {
    default: { name: 'Bitrock Explorer', url: 'https://explorer.bit-rock.io' }, // Replace with your block explorer
  },
});

// Create a viem public client for the custom chain
const customChainClient = createPublicClient({
  chain: customChain,
  transport: http(customChain.rpcUrls.default.http[0]),
});

// Configure RainbowKit with the custom chain
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '6a677833debbe13f1177e783512866f9', // Replace with your WalletConnect Project ID
  chains: [customChain], // Add the custom chain
  publicClients: [customChainClient], // Use the custom chain client
  ssr: true, // Enable server-side rendering (if needed)
});

export default config;
