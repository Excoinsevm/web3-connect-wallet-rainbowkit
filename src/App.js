// Importing the CSS file for general application styles
import './App.css';

// Importing the configuration for Wagmi, a library for blockchain interactions
import config from "./wagmi";

// Importing RainbowKit's CSS styles for wallet connection UI
import '@rainbow-me/rainbowkit/styles.css';

// Importing necessary components from RainbowKit
import { RainbowKitProvider, ConnectButton, darkTheme } from '@rainbow-me/rainbowkit';

// Importing WagmiProvider to provide blockchain interaction context
import { WagmiProvider } from 'wagmi';

// Importing QueryClientProvider and QueryClient for managing server state with React Query
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Initializing a QueryClient instance for use with React Query
const queryClient = new QueryClient();

function App() {
  return (
    // Wrapping the app with WagmiProvider to manage blockchain connections
    <WagmiProvider config={config}>
      
      {/* Wrapping the app with QueryClientProvider for managing server state */}
      <QueryClientProvider client={queryClient}>
        
        {/* Wrapping the app with RainbowKitProvider to enable wallet connection functionality */}
        <RainbowKitProvider
          modalSize="compact" // Setting a compact size for the wallet connection modal
          theme={darkTheme({ // Applying a dark theme to the UI
            accentColor: '#7b3fe4', // Custom accent color
            accentColorForeground: 'white', // Foreground color for accent elements
            borderRadius: 'medium', // Rounded corners for UI elements
          })}
        >
          {/* Main application container */}
          <div className="App">
            <header className="App-header">
              {/* Wallet connect button with custom label and account display settings */}
              <ConnectButton 
                label="Sign in" 
                accountStatus={{
                  smallScreen: 'avatar', // Show only the avatar on small screens
                  largeScreen: 'full', // Show full account details on large screens
                }} 
              />
            </header>
          </div>
        </RainbowKitProvider>
        
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// Exporting the App component as the default export
export default App;
