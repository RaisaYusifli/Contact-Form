import { createContext, useContext } from "react";
import { noop } from "./utils";


export const ContactContext = createContext({
  fullName: "",
  phone:"",
  setFullName: noop,
  setPhone:noop,
});

export const useContact=()=>{
    return useContext(ContactContext);
}