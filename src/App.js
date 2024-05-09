import React from "react";
import GlobalStyle from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./Pages/ListProducts";
import Login from "./Authentication/Login/Login";
import Cart from "./Pages/Cart";
import Register from "./Authentication/Register/Register";
import Security from "./Authentication/Security";   
import Payment from "./Authentication/Payment/Payment";
import IndividualProducts from "./Pages/IndividualProducts";
import { AuthProvider } from "./Servives/Auth";
import { UpProducts } from "./Pages/UpProducts";

export default function App(){
    return(<>
    <AuthProvider>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/details" element={<IndividualProducts/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/security" element={<Security/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/up" element={<UpProducts/>}/>
    </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>)
};