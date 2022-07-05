import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, Link, useParams, useLocation, Location } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { useStateContext } from './contexts/userContext'


import './index.css'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/types/devtools'
import { QueryExample } from './Example'
import AppPage from './components/AppPage'
import Layout from './components/Layout'
import LoginPage from './components/LoginPage'
import NotFoundPage from './components/NotFoundPage'

const queryClient = new QueryClient()


const App = () => {

  const [cookies] = useCookies();
  const [user, setUser] = useState(cookies.token ? {token: cookies.token} : null);

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AppPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="invoices">
          <Route
            index
            element={
              <ProtectedPage>
                <InvoicesHomePage />
              </ProtectedPage>
            }
          />
          <Route
            path=":invoiceId"
            element={
              <ProtectedPage>
                <InvoiceHomePage />
              </ProtectedPage>
            }
          />
        </Route>
        <Route path="example" element={<QueryExample />} />
        <Route path="contactus" element={<ContactsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    
    </QueryClientProvider>
  )
}

const ProtectedPage = ({ children }: { children: JSX.Element }) => {
  const { state } = useStateContext();
  const location:Location = useLocation();


  //let from = location.state?.from?.pathname || "/";

  return (
        <div><h1>Protected Page. You are from  </h1>
        <div className="text-6xl"><span role="img" aria-label="ice cream">🍦</span></div>
        <h1>{children}</h1>
        </div>
  )
}

const AboutPage = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl font-bold underline">About</h1>
    </div>
  )
}

const ContactsPage = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl font-bold underline">Contacts</h1>
    </div>
  )
}

const InvoicesHomePage = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl font-bold underline">Invoices Home</h1>
      <div className="flex flex-col">
        <Link to="/invoices/1">Invoice 1</Link>
        <Link to="/invoices/2">Invoice 2</Link>
        <Link to="/invoices/3">Invoice 3</Link>
        <Link to="/invoices/4">Invoice 4</Link>
      </div>
    </div>
  )
}

const InvoiceHomePage = () => {
  const { invoiceId } = useParams()
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl font-bold underline">Invoice for {invoiceId}</h1>
    </div>
  )
}

export default App
