
import React from "react";
import { AuthContext as AuthContextType} from "../types";

const AuthContext = React.createContext<AuthContextType>(null!);
export default AuthContext;
