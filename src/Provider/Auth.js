import React , {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (e)=>{
    const [token, setToken]=React.useState(undefined);

    return  (<AuthContext.Provider value ={{token,setToken}}>{e.children}</AuthContext.Provider>);
}