import {createContext} from "react";
import {Store} from "../store";

export const StoreContext = createContext({data: new Store()});
