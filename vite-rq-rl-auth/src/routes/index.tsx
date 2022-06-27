
import React from "react";
import {
  Route,
} from "@tanstack/react-location";

import reallyExpensiveRoute from "../reallyExpensive";
import { LocationGenerics } from "../types";

import Home from "../components/Home";
import Users from "../components/Users";
import Invoices from "../components/Invoices";
import Authenticated from "../components/Authenticated";
import { delayFn } from "../utils";
import Dashboard from "../components/Dashboard";
import Auth from "../components/Auth";
import User from "../components/User";
import Invoice from "../components/Invoice";
import DashboardHome from "../components/DashboardHome";
import InvoicesHome from "../components/InvoicesHome";

import { fetchInvoiceById, fetchInvoices, fetchUserById, fetchUsers } from "../api/fetch"


// Build our routes. We could do this in our component, too.
const routes: Route<LocationGenerics>[] = [
    { path: "/", element: <Home /> },
    {
      path: "dashboard",
      element: <Dashboard />,
      loader: async () => {
        return {
          invoices: await fetchInvoices(),
        };
      },
      children: [
        { path: "/", element: <DashboardHome /> },
        {
          path: "invoices",
          element: <Invoices />,
          children: [
            { path: "/", element: <InvoicesHome /> },
            {
              path: ":invoiceId",
              element: <Invoice />,
              loader: async ({ params: { invoiceId } }) => {
                return {
                  invoice: await fetchInvoiceById(invoiceId),
                };
              },
              onMatch: (match) => {
                console.log(`Now rendering invoice ${match.params.invoiceId}`);
                return () => {
                  console.log(
                    `No longer rendering invoice ${match.params.invoiceId}`
                  );
                };
              },
            },
          ],
        },
        {
          path: "users",
          element: <Users />,
          loader: async () => {
            return {
              users: await fetchUsers(),
            };
          },
          searchFilters: [
            // Keep the usersView search param around
            // while in this route (or it's children!)
            (search) => ({
              ...search,
              usersView: {
                ...search.usersView,
              },
            }),
          ],
          children: [
            {
              path: ":userId",
              element: <User />,
              loader: async ({ params: { userId } }) => {
                return {
                  user: await fetchUserById(userId),
                };
              },
            },
          ],
        },
      ],
    },
    {
      // Your elements can be asynchronous, which means you can code-split!
      path: "expensive",
      element: () =>
        delayFn(() => import("../components/Expensive")).then((res) => <res.Expensive />),
    },
    // Obviously, you can put routes in other files, too
    reallyExpensiveRoute,
    {
      path: "authenticated/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <Authenticated />,
        },
      ],
    },
  ];

export default routes;