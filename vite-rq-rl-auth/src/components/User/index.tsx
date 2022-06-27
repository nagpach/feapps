
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

const User = ()  => {
    const {
      data: { user },
    } = useMatch<LocationGenerics>();
  
    return (
      <>
        <h4 className={tw`p-2 font-bold`}>{user?.name}</h4>
        <pre className={tw`text-sm whitespace-pre-wrap`}>
          {JSON.stringify(user, null, 2)}
        </pre>
      </>
    );
  }

  export default User;
