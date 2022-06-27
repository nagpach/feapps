import * as React from "react";
import { RouteLoaders, useMatch } from "@tanstack/react-location";
import { tw } from "twind";
import { LocationGenerics } from "../types";
import { delayFn } from "../utils";
//import { delayFn, LocationGenerics } from "../main";

// A Router Loader object
export const loaders: RouteLoaders<LocationGenerics> = {
  element: <ReallyExpensive />,
  loader: () =>
    delayFn(() => ({
      reallyExpensiveTimestamp: Date.now(),
    })),
};

function ReallyExpensive() {
  const {
    data: { reallyExpensiveTimestamp },
  } = useMatch<LocationGenerics>();

  React.useEffect(() => {
    console.info({ reallyExpensiveTimestamp });
  });

  return (
    <div className={tw`p-2`}>
      I am another "really expensive" component. <em>However</em>, I was not
      only code-split, but I also{" "}
      <strong>fetched async data while you navigated to me!</strong>
      <div className={tw`h-2`} />
      <small>
        (Unless you have preloading turned on, in which case I fetched it when
        you hovered over my Link)
      </small>{" "}
      😉
      <div className={tw`h-2`} />
      🎉 Check your console to see the "expensive" data.
    </div>
  );
}
