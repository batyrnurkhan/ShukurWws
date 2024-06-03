import React from 'react';
import axios from 'axios';

const LogoutButton = ({ authToken, onLogout }) => {
    const handleLogout = async () => {
        try {
            await axios.post('http://91.228.154.48:8000/auth/token/logout/', {}, {
                headers: {
                    Authorization: `Token ${authToken}`
                }
            });
            onLogout();
        } catch (error) {
            console.error('Logout error', error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
