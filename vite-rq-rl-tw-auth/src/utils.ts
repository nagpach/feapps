export const storage = {
  getToken: () =>  {
    const token = window.localStorage.getItem('token') as string
    return JSON.parse(token)
  },
  setToken: (token:string) =>
    window.localStorage.setItem('token', JSON.stringify(token)),
  clearToken: () => window.localStorage.removeItem('token'),
};
