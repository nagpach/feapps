import React from "react";
import { tw } from "twind";
import useAuth from "../../hooks/useAuth";

const Authenticated = ()  => {
    const auth = useAuth();
  
    return (
      <div className={tw`p-2`}>
        You're authenticated! Your username is <strong>{auth.username}</strong>
        <div className={tw`h-2`} />
        <button
          onClick={() => auth.logout()}
          className={tw`text-sm bg-blue-500 text-white border inline-block py-1 px-2 rounded`}
        >
          Log out
        </button>
        <div className={tw`h-2`} />
        <div>
          This authentication example is obviously very contrived and simple. It
          doesn't cover the use case of a redirected login page, but does
          illustrate how easy it is to simply wrap routes with ternary logic to
          either show a login prompt or redirect (probably with the `Navigate`
          component).
        </div>
      </div>
    );
  }

  export default Authenticated;
