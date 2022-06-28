import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { StateContextProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthMiddleware from './middleware/AuthMiddleware';
import server from "./mocks/gqlworker"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
    },
  },
});


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
    <QueryClientProvider client={queryClient}>
      <Router>
        <StateContextProvider>
          <AuthMiddleware>
            <App />
          </AuthMiddleware>
        </StateContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
