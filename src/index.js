// Importing the React library to create React components
import React from 'react';

// Importing ReactDOM to interact with the DOM for rendering the application
import ReactDOM from 'react-dom/client';

// Importing the CSS file for global styles
import './index.css';

// Importing the main App component of the application
import App from './App';

// Creating a root element to render the application, targeting the HTML element with the ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside React's StrictMode to enable additional checks and warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
