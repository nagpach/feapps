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

const DashboardHome = ()  => {
    const match = useMatch<LocationGenerics>();
  
    return (
      <div className={tw`p-2`}>
        <div className={tw`p-2`}>
          Welcome to the dashboard! You have{" "}
          <strong>{match.data.invoices?.length} total invoices</strong>.
        </div>
      </div>
    );
  }

  export default DashboardHome;