import React from "react";
import AuthContext from "../../contexts";
import { AuthContextState } from "../../types";

const AuthProvider = (props: { children: React.ReactNode })  => {
    const [state, setState] = React.useState<AuthContextState>({
      status: "loggedOut",
    });
  
    const login = (username: string) => {
      setState({ status: "loggedIn", username });
    };
  
    const logout = () => {
      setState({ status: "loggedOut" });
    };
  
    const contextValue = React.useMemo(
      () => ({
        ...state,
        login,
        logout,
      }),
      [state]
    );
  
    return (
      <AuthContext.Provider value={contextValue} children={props.children} />
    );
  }

  export default AuthProvider;