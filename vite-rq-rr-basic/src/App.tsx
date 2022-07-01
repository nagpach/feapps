import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom'

//import AuthContext from './contexts/auth'

import logo from './logo.svg'
import './index.css'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/types/devtools'
import { QueryExample } from './Example'

type DocsList = Array<{ name: string; url: string }>

/*
const App = () => {
  return (<AppPage />)
}
*/

const queryClient = new QueryClient()


const App = () => {
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

const AppPage = () => {
  const [count, setCount] = useState(0)
  const [docsList, setDocsList] = useState<DocsList>([])

  useEffect(() => {
    fetch('./docs_list')
      .then((res) => res.json())
      .then((data) => {
        setDocsList(data)
      })
      .catch()
  }, [])

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            className="h-26 w-52 px-4 py-3 my-4 border border-white border-solid rounded"
            onClick={() => setCount(count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p></p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {docsList.length
            ? docsList.map((v, i) => {
                return (
                  <span key={i}>
                    {' | '}
                    <a
                      className="App-link"
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {v.name}
                    </a>
                  </span>
                )
              })
            : false}
        </p>
      </header>
    </main>
  )
}

const ProtectedPage = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <h1>Protected Page</h1>
      <h1>{children}</h1>
    </>
  )
}

const Layout = () => {
  return (
    <div className="h-screen">
      <div>
        <div className="flex gap-x-4 bg-blue-200">
          <Link to="/">Home</Link>
          <Link to="/invoices">Invoices</Link>
          <Link to="/example">Example</Link>
          <Link to="/about">About</Link>
          <Link to="/contactus">Contacts</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="h-screen bg-yellow-200">
        <Outlet />
      </div>
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

const NotFoundPage = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl font-bold underline">NotFound</h1>
    </div>
  )
}

const LoginPage = () => {
  //const authContext = useContext(AuthContext);
  const [userName, setUserName] = React.useState('')
  /*
  const handleSubmit = () => {
    //authContext?.username =  { username: userName }
  }*/

  return (
    <div className="m-2 p-2">
      <h1 className="text-3xl font-bold underline">Login Page</h1>
      <div className="w-96 ">
        <form className="flex flex-col m-2 p-2 gap-2 bg-red-200">
          <input
            type="text"
            value={userName}
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <input type="password" name="password"></input>
          <div className="flex m-2 p-2 gap-2 w-full">
            <div className="flex m-2 p-2 gap-2">
              <input
                className="bg-blue-200 text-2xl m-4 p-4"
                type="submit"
                name="submit"
              ></input>
            </div>
            <div className="flex m-2 p-2 gap-2 w-full">
              <input
                className="bg-blue-200 text-2xl m-4 p-4"
                type="reset"
                name="reset"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
