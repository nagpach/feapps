import axios from "axios";
import { delayFn } from "../utils";

async function fetchInvoiceById(id: string) {
    const { data } = await delayFn(() =>
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    );
  
    return { ...data, body: data.body + " " + Date.now() };
  }
  
  async function fetchUsers() {
    const { data } = await delayFn(() =>
      axios.get("https://jsonplaceholder.typicode.com/users")
    );
  
    return data;
  }
  
  async function fetchUserById(id: string) {
    const { data } = await delayFn(() =>
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    );
  
    return data;
  }

  async function fetchInvoices() {
    const { data } = await delayFn(() =>
      axios.get("https://jsonplaceholder.typicode.com/posts")
    );
  
    return data.slice(0, 25);
  }
  
  export  { fetchInvoiceById, fetchUsers, fetchUserById, fetchInvoices };