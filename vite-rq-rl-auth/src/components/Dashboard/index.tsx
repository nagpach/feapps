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

const Dashboard = () => {
    return (
      <>
        <div className={tw`flex items-center border-b`}>
          <h2 className={tw`text-xl p-2`}>Dashboard</h2>
          <Link
            to="./invoices/3"
            className={tw`py-1 px-2 text-xs bg-blue-500 text-white rounded-full`}
          >
            1 New Invoice
          </Link>
        </div>
        <div className={tw`flex flex-wrap divide-x`}>
          {(
            [
              [".", "Summary"],
              ["invoices", "Invoices"],
              ["users", "Users", true],
            ] as const
          ).map(([to, label, search]) => {
            return (
              <Link
                key={to}
                to={to}
                search={search}
                className={tw`inline-block py-2 px-3 text-blue-700`}
                activeOptions={{ exact: to === "." }}
                getActiveProps={() => ({ className: tw`font-bold` })}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <hr />
        <Outlet />
      </>
    );
  }

  export default Dashboard;