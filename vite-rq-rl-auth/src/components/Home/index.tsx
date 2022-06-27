/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { tw } from "twind";
import {
  Link,
} from "@tanstack/react-location";

const Home = () => {
    return (
      <div className={tw`p-2`}>
        <div className={tw`text-lg`}>Welcome Home!</div>
        <hr className={tw`my-2`} />
        <Link
          to="dashboard/invoices/3"
          className={tw`py-1 px-2 text-xs bg-blue-500 text-white rounded-full`}
        >
          1 New Invoice
        </Link>
        <hr className={tw`my-2`} />
        <div className={tw`max-w-xl`}>
          As you navigate around take note of the UX. It should feel
          suspense-like, where routes are only rendered once all of their data and
          elements are ready.
          <hr className={tw`my-2`} />
          To exaggerate async effects, play with the artificial request delay
          slider in the bottom-left corner. You can also play with the default
          timings for displaying the pending fallbacks and the minimum time any
          pending fallbacks will remain shown.
          <hr className={tw`my-2`} />
          The last 2 sliders determine if link-hover preloading is enabled (and
          how long those preloads stick around) and also whether to cache rendered
          route data (and for how long). Both of these default to 0 (or off).
        </div>
      </div>
    );
  }


  export default Home;