import { useState } from 'react'
//import './App.css'
import CounterPage from './pages/CounterPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Page } from './pages/Page';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Page />} />
              <Route path="/counter" element={<CounterPage />} />
            </Route>
      </Routes>
    </Router>

  )
}

export default App
