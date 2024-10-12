import React, { useState } from 'react';
import App from './App.jsx';
import { createContext} from 'react';
import ReactDOM from "react-dom/client";
export const Context = createContext({isAuthenticated : false})

const ComponentWrapper = ()=>{
  const [isAuthenticated,setIsAuthenticated] = useState("")
  const [admin,setAdmin] = useState("")
  return(
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,admin,setAdmin}}>
     <App/>
    </Context.Provider>
  )
  
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ComponentWrapper />
  </React.StrictMode>
);