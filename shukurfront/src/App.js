import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import LogoutButton from './components/Logout';
import HomePage from './components/HomePage';
import PrayerTimesPage from "./components/PrayerTimesPage";

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  const handleLoginSuccess = (token) => {
    setAuthToken(token);
  };

  const handleLogout = () => {
    setAuthToken(null);
  };

  return (
      <Router>
        <div className="app">
          <nav>
            {/* Navigation links */}
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile authToken={authToken} />} />
            <Route path="/prayer-times" element={<PrayerTimesPage />} />


          </Routes>
          {authToken && <LogoutButton onLogout={handleLogout} />}
        </div>
      </Router>
  );
};

export default App;
