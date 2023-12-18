import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import LogoutButton from './components/Logout';
import PrayerTimesPage from "./components/PrayerTimesPage";
import Home from "./components/home/home";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/footer";
import User_Profile from "./components/User_profile/User_Profile";
import Source_mechit from "./components/source_mechit/Source_mechit";
import Reg from "./components/reg/Reg";
import Products from "./components/products/products";
import Product_info from "./components/product_info/product_info";

localStorage.setItem("token", "")

const App = () => {
    const [authToken, setAuthToken] = useState("e969c4af124c2ffbfa86837a821b4f6e039d1939");

    return (
        <Router>
            <div className="app">
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<User_Profile authToken={authToken}/>}/>
                    <Route path="/prayer-times" element={<PrayerTimesPage/>}/>
                    <Route path="/map" element={<Source_mechit/>}/>
                    <Route path={"/reviews"} element={<Product_info />}/>
                    <Route path={"/product-search"} element={<Products />}/>
                </Routes>
            </div>
            <Footer/>
        </Router>
    );
};

export default App;
