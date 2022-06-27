import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import server from "./mocks/gqlworker"

console.log("Environment ......." + import.meta.env.MODE)

// Start the mocking conditionally.
if (import.meta.env.MODE === 'development'
  || import.meta.env.NODE_ENV === 'local' ) {
    //import('./mocks/gqlworker').then(({ worker }) => {
    //  worker.start()
    //})
    server.start()
    console.log("Starting Mock Server.......")
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);