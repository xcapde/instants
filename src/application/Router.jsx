import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React from "react";
import { Details } from "../pages/Details";
import { SignUp } from "../pages/SignUp";
import { LogIn } from "../pages/LogIn";
import App from "../App";
import { NavbarBottom } from "../components/navbar_bottom/NavbarBottom";
import { Profile } from "../pages/Profile";
import { UserCard } from "../pages/profile/UserCard";
import { UserList } from "../pages/profile/UserList";
import { Create } from "../pages/Create";
import { SearcherMobile } from "../pages/SearcherMobile";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<App/>}/>
                <Route path="/detail/:id" element={<Details/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/profile" element={<Profile/>}>
                    <Route path="user_card" element={<UserCard/>}/>
                    <Route path="user_list" element={<UserList/>}/>
                </Route>
                {/* <Route path="/user_card" element={<UserCard/>}/>
                <Route path="/user_list" element={<UserList/>}/> */}
                <Route path="/create" element={<Create/>}/>
                <Route path="searcher_mobile" element={<SearcherMobile/>}/>
            </Routes>
            <NavbarBottom/>
        </BrowserRouter>
    )
}