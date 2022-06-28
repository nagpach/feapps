/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";  
import './index.css';

import { tw } from "twind";
import {
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";

import { LocationGenerics } from "./types";
import Spinner from "./components/Spinner"
import AppHome from "./components/AppHome";
import routes from "./routes";
import useSessionStorage from "./hooks/useSession";
import AuthProvider from "./components/AuthProvider";


// Set up a ReactLocation instance
const location = new ReactLocation<LocationGenerics>();

// Provide our location and routes to our application
const App = ()  => {
  // This stuff is just to tweak our sandbox setup in real-time
  const [delay, setDelay] = useSessionStorage("delay", 500);
  const [defaultPendingMs, setDefaultPendingMs] = useSessionStorage(
    "defaultPendingMs",
    2000
  );
  const [defaultPendingMinMs, setDefaulPendingMinMs] = useSessionStorage(
    "defaultPendingMinMs",
    1000
  );
  const [defaultLinkPreloadMaxAge, setDefaultLinkPreloadMaxAge] =
    useSessionStorage("defaultLinkPreloadMaxAge", 0);
  const [defaultLoaderMaxAge, setDefaultLoaderMaxAge] = useSessionStorage(
    "defaultLoaderMaxAge",
    0
  );

  return (
    <>
      {/* More stuff to tweak our sandbox setup in real-time */}
      <div
        className={tw`text-xs fixed w-52 shadow rounded bottom-2 left-2 bg-white bg-opacity-75 p-2 border-b flex flex-col gap-2 flex-wrap items-left`}
      >
        <div>Artificial Delay: {delay}ms</div>
        <div>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={delay}
            onChange={(e) => setDelay(e.target.valueAsNumber)}
            className={tw`w-full`}
          />
        </div>
        <div>
          Default Pending Ms: {defaultPendingMs}ms{" "}
          {defaultPendingMs > delay ? <>🔴</> : <>🟢</>}
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={defaultPendingMs}
            onChange={(e) => setDefaultPendingMs(e.target.valueAsNumber)}
            className={tw`w-full`}
          />
        </div>
        <div className={tw`${!defaultPendingMs ? "opacity-30" : ""}`}>
          <div>Default Min Pending Ms: {defaultPendingMinMs}ms</div>
          <div>
            <input
              type="range"
              min="0"
              max="5000"
              step="100"
              value={defaultPendingMinMs}
              onChange={(e) => setDefaulPendingMinMs(e.target.valueAsNumber)}
              className={tw`w-full`}
            />
          </div>
        </div>
        <div>
          Loader Max Age:{" "}
          {defaultLoaderMaxAge ? `${defaultLoaderMaxAge}ms` : "Off"}
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="10000"
            step="250"
            value={defaultLoaderMaxAge}
            onChange={(e) => setDefaultLoaderMaxAge(e.target.valueAsNumber)}
            className={tw`w-full`}
          />
        </div>
        <div>
          Link Preload Max Age:{" "}
          {defaultLinkPreloadMaxAge ? `${defaultLinkPreloadMaxAge}ms` : "Off"}
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="10000"
            step="250"
            value={defaultLinkPreloadMaxAge}
            onChange={(e) =>
              setDefaultLinkPreloadMaxAge(e.target.valueAsNumber)
            }
            className={tw`w-full`}
          />
        </div>
      </div>
      {/* Normally <Router /> matches and renders our
      routes, but when we pass our own children, we can use
      <Outlet /> to start rendering our matches when we're
      // ready. This also let's us use router API's
      in <Root /> before rendering any routes */}
      <AuthProvider>
        <Router
          location={location}
          routes={routes}
          defaultPendingElement={
            <div className={tw`text-2xl`}>
              <Spinner />
            </div>
          }
          defaultLinkPreloadMaxAge={defaultLinkPreloadMaxAge}
          defaultLoaderMaxAge={defaultLoaderMaxAge}
          defaultPendingMs={defaultPendingMs}
          defaultPendingMinMs={defaultPendingMinMs}
          // Normally, the options above aren't changing, but for this particular
          // example, we need to key the router when they change
          key={[
            defaultLinkPreloadMaxAge,
            defaultLoaderMaxAge,
            defaultPendingMs,
            defaultPendingMinMs,
          ].join(".")}
        >
          <AppHome />
          <ReactLocationDevtools position="bottom-right" />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;