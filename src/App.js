import React from "react";
import GlobalStyle from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from "./Components/List";
import Login from "./Authentication/Login";
import Cart from "./Components/Cart";
import Register from "./Authentication/Register";
import Security from "./Authentication/Security";

export default function App(){
    return(<>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/security" element={<Security/>}/>
    </Routes>
    </BrowserRouter>
    </>)
};

