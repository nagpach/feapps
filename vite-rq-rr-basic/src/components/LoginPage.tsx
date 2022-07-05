import { useState } from "react";

import { useStateContext } from '../contexts/userContext';

const LoginPage = () => {
    //const authContext = useContext(AuthContext);
    const [userName, setUserName] = useState('')
    const stateContext = useStateContext();

    
    const handleSubmit = () => {
      stateContext.dispatch({
        type: 'SET_USER',
        payload: { username: userName},
      });
      //authContext?.username =  { username: userName }
    }
  
    return (
      <div className="m-2 p-2">
        <h1 className="text-3xl font-bold underline">Login Page</h1>
        <div className="w-96 ">
          <form onSubmit={handleSubmit} className="flex flex-col m-2 p-2 gap-2 bg-red-200">
            <input
              type="text"
              value={userName}
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input type="password" name="password"></input>
            <div className="flex m-2 p-2 gap-2 w-full">
              <div className="flex m-2 p-2 gap-2">
                <input
                  className="bg-blue-200 text-2xl m-4 p-4"
                  type="submit"
                  name="submit"
                ></input>
              </div>
              <div className="flex m-2 p-2 gap-2 w-full">
                <input
                  className="bg-blue-200 text-2xl m-4 p-4"
                  type="reset"
                  name="reset"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

  export default LoginPage;