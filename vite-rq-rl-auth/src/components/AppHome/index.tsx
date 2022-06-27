/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { tw } from "twind";
import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  Route,
  useMatch,
  useRouter,
  useSearch,
  useNavigate,
  MatchRoute,
} from "@tanstack/react-location";
import { LocationGenerics, UsersViewSortBy } from "../../types";
import Spinner from "../Spinner";
import useAuth from "../../hooks/useAuth";

const  AppHome = ()  => {
    // We can access the router state, even though
    // we're not rendering any routes yet
    const router = useRouter<LocationGenerics>();
  
    return (
      <div className={tw`min-h-screen flex flex-col`}>
        <div className={tw`flex items-center border-b gap-2`}>
          <h1 className={tw`text-3xl p-2`}>Kitchen Sink</h1>
          {/* Show a global spinner when the router is transitioning */}
          <div
            className={tw`text-3xl duration-100 delay-0 opacity-0 ${
              !!router.pending ? `delay-500 duration-300 opacity-40` : ""
            }`}
          >
            <Spinner />
          </div>
        </div>
        <div className={tw`flex-1 flex`}>
          <div className={tw`divide-y w-56`}>
            {[
              [".", "Home"],
              ["dashboard", "Dashboard"],
              ["expensive", "Expensive"],
              ["really-expensive", "Really Expensive"],
              ["authenticated/", "Authenticated"], // This route has a trailing slash on purpose.
            ].map(([to, label]) => {
              return (
                <div key={to}>
                  <Link
                    to={to}
                    className={tw`block py-2 px-3 text-blue-700`}
                    // Make "active" links bold
                    getActiveProps={() => ({ className: tw`font-bold` })}
                    activeOptions={{
                      // If the route points to the root of it's parent,
                      // make sure it's only active if it's exact
                      exact: to === ".",
                    }}
                  >
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={tw`flex-1 border-l border-gray-200`}>
            {/* Render our first route match */}
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  export default AppHome;