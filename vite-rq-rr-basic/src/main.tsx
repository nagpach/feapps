import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import AuthContext from './contexts/auth'

const root = ReactDOM.createRoot(document.getElementById('root')!)

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(
        <React.StrictMode>
          <AuthContext.Provider value={{ username: '' }}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthContext.Provider>
        </React.StrictMode>
      )
    })
} else {
  root.render(
    <React.StrictMode>
      <AuthContext.Provider value={{ username: '' }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContext.Provider>
    </React.StrictMode>
  )
}
