import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ReactQueryProvider } from './lib/react-query';
import { AuthProvider } from './auth/auth';

/*
import { App } from './App';
import { AuthProvider } from './lib/auth';
import { ReactQueryProvider } from './lib/react-query';
export default function SampleApp() {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ReactQueryProvider>
  );
}

*/

import { worker }  from "./mock/browser"

console.log("Environment ......." + import.meta.env.MODE)

// Start the mocking conditionally.
if (import.meta.env.MODE === 'development'
  || import.meta.env.NODE_ENV === 'local' ) {
    worker.start()
    console.log("Starting Mock Server.......")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </ReactQueryProvider>
  </React.StrictMode>
)

