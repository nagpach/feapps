
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

const  Invoices = () => {
    const {
      data: { invoices },
    } = useMatch<LocationGenerics>();
  
    return (
      <div className={tw`flex-1 flex`}>
        <div className={tw`divide-y w-48`}>
          {invoices?.map((invoice) => {
            return (
              <div key={invoice.id}>
                <Link
                  to={invoice.id}
                  className={tw`block py-2 px-3 text-blue-700`}
                  getActiveProps={() => ({ className: tw`font-bold` })}
                >
                  <pre className={tw`text-sm`}>
                    #{invoice.id} - {invoice.title.slice(0, 10)}{" "}
                    <MatchRoute to={invoice.id} pending>
                      <Spinner />
                    </MatchRoute>
                  </pre>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={tw`flex-1 border-l border-gray-200`}>
          <Outlet />
        </div>
      </div>
    );
  }

  export default Invoices;