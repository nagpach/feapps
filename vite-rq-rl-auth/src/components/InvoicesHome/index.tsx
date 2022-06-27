
  
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

  const InvoicesHome = ()  => {
    return (
      <>
        <div className={tw`p-2`}>Select an invoice.</div>
      </>
    );
  }

  export default InvoicesHome;