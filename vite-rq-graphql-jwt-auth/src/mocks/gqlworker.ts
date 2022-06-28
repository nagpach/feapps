import { setupWorker } from "msw";
import { mockGetMeQuery, mockLoginUserMutation, mockSignUpUserMutation, mockLogoutUserQuery } from '../generated/graphql'

const server = setupWorker( 
  mockLoginUserMutation((req, res, ctx) => {

    const { input } = req.variables;
    sessionStorage.setItem('email', input.email)
    sessionStorage.setItem('name', "Sytheitc User")
    return res(
      ctx.data({ 
        "loginUser": {
          status: "SUCCESS",
          access_token: "XXXXXXXXXXXXXX"
        } })
    )  
  }
),
mockGetMeQuery((req, res, ctx) => {
  const authenticatedUser = sessionStorage.getItem('email')
  const username = sessionStorage.getItem('name')
  return res(
    ctx.data({ 
      "getMe": {
        status: "SUCCESS",
        user:  {
          id : "1",
          email: authenticatedUser,
          name: username,
          role: "user",
          photo: "http://www.google.com"
        } 
      }
      })
    )
  }),
  mockLogoutUserQuery((req, res, ctx) => {
    sessionStorage.removeItem('email')
    return res(
           ctx.data({ 
            "logoutUser" :  true
          })
         )
  }),
  mockSignUpUserMutation((req, res, ctx) => {
    const { input } = req.variables;
    sessionStorage.setItem('email', input.email)
    sessionStorage.setItem('name', input.name)
    //sessionStorage.setItem('photo', input.photo)

    return res(
      ctx.data({ 
        "signupUser" : {
          status: "SUCCESS",
          user: {
              name: "user1",
              email: "ag@ag.com",
              photo: "http://www.google.com",
              role: "user"
          }
        } 
      })
    )
  })
);

export default server;