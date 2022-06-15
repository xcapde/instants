import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React from "react";
import { Details } from "../pages/details/Details";
import { SignIn } from "../pages/SingIn";
import { LogIn } from "../pages/LogIn";
import { Create } from "../pages/Create";
import App from "../App";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/instant_details/:id" element={<Details/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/new_instant" element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    )
}