import React from 'react';
import axios from 'axios';

const LogoutButton = ({ onLogout }) => {
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8000/auth/token/logout/');
            onLogout();
        } catch (error) {
            console.error('Logout error', error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
