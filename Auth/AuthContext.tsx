import { createContext } from "react";
import { user } from "./data";

export const AuthContext = createContext({state: user, dispatch: (data) => {}});


