import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React from "react";
import { Details } from "../pages/Details";
import { SignUp } from "../pages/SignUp";
import { LogIn } from "../pages/LogIn";
import { Create } from "../pages/Create";
import App from "../App";
import { Navbar } from "../components/navbar/Navbar";
import { NavbarBottom } from "../components/navbar_bottom/NavbarBottom";
import { Profile } from "../pages/Profile";
import { SearcherMobile } from "../pages/SearcherMobile";
import { UserCard } from "../pages/profile/UserCard";
import { SearcherList } from "../pages/SearcherList";
import { UserList } from "../pages/profile/UserList";

export default function Router(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                {/* <Route path="/details/:id" element={<Details/>}/> */}
                <Route path="/detail" element={<Details/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/profile" element={<Profile/>}>
                    <Route path="user_card" element={<UserCard/>}/>
                    <Route path="user_list" element={<UserList/>}/>
                </Route>
                {/* <Route path="/user_card" element={<UserCard/>}/>
                <Route path="/user_list" element={<UserList/>}/> */}
                <Route path="/create" element={<Create/>}/>
                <Route path="/searcher" element={<SearcherMobile/>}/>
                <Route path="/searcher_list" element={<SearcherList/>}/>
            </Routes>
            <NavbarBottom/>
        </BrowserRouter>
    )
}