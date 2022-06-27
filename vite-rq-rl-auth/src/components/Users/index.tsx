
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

const Users = ()  => {
    const {
      data: { users },
    } = useMatch<LocationGenerics>();
    const navigate = useNavigate<LocationGenerics>();
    const { usersView } = useSearch<LocationGenerics>();
  
    const sortBy = usersView?.sortBy ?? "name";
    const filterBy = usersView?.filterBy;
  
    const [filterDraft, setFilterDraft] = React.useState(filterBy ?? "");
  
    const sortedUsers = React.useMemo(() => {
      if (!users) return [];
  
      return !sortBy
        ? users
        : [...users].sort((a, b) => {
            return a[sortBy] > b[sortBy] ? 1 : -1;
          });
    }, [users, sortBy]);
  
    const filteredUsers = React.useMemo(() => {
      if (!filterBy) return sortedUsers;
  
      return sortedUsers.filter((user) =>
        user.name.toLowerCase().includes(filterBy.toLowerCase())
      );
    }, [sortedUsers, filterBy]);
  
    const setSortBy = (sortBy: UsersViewSortBy) =>
      navigate({
        search: (old) => {
          return {
            ...old,
            usersView: {
              ...(old?.usersView ?? {}),
              sortBy,
            },
          };
        },
        replace: true,
      });
  
    React.useEffect(() => {
      navigate({
        search: (old) => {
          return {
            ...old,
            usersView: {
              ...old?.usersView,
              filterBy: filterDraft || undefined,
            },
          };
        },
        replace: true,
      });
    }, [filterDraft]);
  
    return (
      <div className={tw`flex-1 flex`}>
        <div className={tw`divide-y`}>
          <div className={tw`py-2 px-3 flex gap-2 items-center bg-gray-100`}>
            <div>Sort By:</div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as UsersViewSortBy)}
              className={tw`flex-1 border p-1 px-2 rounded`}
            >
              {["name", "id", "email"].map((d) => {
                return <option key={d} value={d} children={d} />;
              })}
            </select>
          </div>
          <div className={tw`py-2 px-3 flex gap-2 items-center bg-gray-100`}>
            <div>Filter By:</div>
            <input
              value={filterDraft}
              onChange={(e) => setFilterDraft(e.target.value)}
              placeholder="Search Names..."
              className={tw`min-w-0 flex-1 border p-1 px-2 rounded`}
            />
          </div>
          {filteredUsers?.map((user) => {
            return (
              <div key={user.id}>
                <Link<LocationGenerics>
                  to={user.id}
                  className={tw`block py-2 px-3 text-blue-700`}
                  getActiveProps={() => ({ className: tw`font-bold` })}
                >
                  <pre className={tw`text-sm`}>
                    {user.name}{" "}
                    <MatchRoute to={user.id} pending>
                      <Spinner />
                    </MatchRoute>
                  </pre>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={tw`flex-initial border-l border-gray-200`}>
          <Outlet />
        </div>
      </div>
    );
  }

  export default Users;