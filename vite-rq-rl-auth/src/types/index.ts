//
import {
    MakeGenerics
  } from "@tanstack/react-location";

type Invoice = {
    id: string;
    title: string;
    body: string;
  };
  
  export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  export interface Geo {
    lat: string;
    lng: string;
  }
  
  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export type UsersViewSortBy = "name" | "id" | "email";
  
  export type LocationGenerics = MakeGenerics<{
    LoaderData: {
      invoices: Invoice[];
      invoice: Invoice;
      users: User[];
      user: User;
      expensiveTimestamp: number;
      reallyExpensiveTimestamp: number;
    };
    Params: {
      invoiceId: string;
      userId: string;
    };
    Search: {
      showNotes: boolean;
      notes: string;
      usersView: {
        sortBy?: UsersViewSortBy;
        filterBy?: string;
      };
    };
  }>;

  export type AuthContext = {
    login: (username: string) => void;
    logout: () => void;
  } & AuthContextState;
  
  export type AuthContextState = {
    status: "loggedOut" | "loggedIn";
    username?: string;
  };