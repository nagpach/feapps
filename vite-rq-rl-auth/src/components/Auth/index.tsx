/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { tw } from "twind";
import {
  Outlet,
} from "@tanstack/react-location";

import useAuth from "../../hooks/useAuth";

const Auth = ()  => {
    const auth = useAuth();
    const [username, setUsername] = React.useState("");
  
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      auth.login(username);
    };
  
    return auth.status === "loggedIn" ? (
      <Outlet />
    ) : (
      <div className={tw`p-2`}>
        <div>You must log in!</div>
        <div className={tw`h-2`} />
        <form onSubmit={onSubmit} className={tw`flex gap-2`}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className={tw`border p-1 px-2 rounded`}
          />
          <button
            onClick={() => auth.logout()}
            className={tw`text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded`}
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  export default Auth;