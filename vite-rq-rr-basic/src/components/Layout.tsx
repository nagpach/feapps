import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <div className="h-screen">
        <div>
          <div className="flex gap-x-4 bg-blue-200 h-10 mb-2 py-2">
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

  export default Layout;
