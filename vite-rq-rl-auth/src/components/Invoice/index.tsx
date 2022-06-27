
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

const  Invoice = () => {
    const {
      data: { invoice },
    } = useMatch<LocationGenerics>();
    const search = useSearch<LocationGenerics>();
    const navigate = useNavigate();
  
    const [notes, setNotes] = React.useState(search.notes ?? ``);
  
    React.useEffect(() => {
      navigate({
        search: (old) => ({ ...old, notes: notes ? notes : undefined }),
        replace: true,
      });
    }, [notes]);
  
    return (
      <div className={tw`p-2`}>
        <h4 className={tw`font-bold`}>{invoice?.title}</h4>
        <div>
          <p>{invoice?.body}</p>
        </div>
        <hr className={tw`my-2`} />
        <Link
          search={(old) => ({
            ...old,
            showNotes: old?.showNotes ? undefined : true,
          })}
          className={tw`text-blue-700 `}
        >
          {search.showNotes ? "Close Notes" : "Show Notes"}{" "}
        </Link>
        {search.showNotes ? (
          <>
            <div>
              <div className={tw`h-2`} />
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={5}
                className={tw`shadow w-full p-2 rounded`}
                placeholder={`Write some notes here...`}
              />
              <div className={tw`italic text-xs`}>
                Notes are stored in the URL. Try copying the URL into a new tab!
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }


  export default Invoice;