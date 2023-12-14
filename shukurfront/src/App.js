import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from "./companent/menu/Menu";
import Home from "./companent/home/home";
import Footer from "./companent/footer/footer";
import HigherFooter from "./companent/higher_footer/HigherFooter";
import UserProfile from "./companent/User_profile/User_Profile";
import Products from "./companent/products/products";
import PrayerTimesPage from "./components/PrayerTimesPage";
import Source_mechit from "./companent/source_mechit/Source_mechit"; // Import the PrayerTimesPage component

function App() {
    return (
        <Router>
            <div>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/prayer" element={<Source_mechit />} />
                    <Route path="/products" element={<Products />} /> {/* Make sure this route is correct */}

                </Routes>
                <Footer />
                <HigherFooter />
            </div>
        </Router>
    );
}

export default App;
