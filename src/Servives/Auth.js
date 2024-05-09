import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (e)=>{
    const [clickSearch, setClickSearch]=React.useState(false);
    const [clickSearchsRender,setClickSearchsRender] = React.useState(false);
    const [clickImage, setClickImage] = React.useState(false);
    const [clickAlert, setClickAlert] = React.useState(false);
    const [messageAlert, setMessageAlert] = React.useState('');

    return  (<AuthContext.Provider value ={
        {
            clickSearch,setClickSearch,
            clickSearchsRender, setClickSearchsRender,
            clickImage, setClickImage,
            clickAlert, setClickAlert,
            messageAlert, setMessageAlert

        }
    }>{e.children}</AuthContext.Provider>);
}