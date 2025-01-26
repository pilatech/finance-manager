import { createContext } from "react";
import { finances } from "./data";

export const FinanceContext = createContext({state: finances, dispatch: (data) => {}});


