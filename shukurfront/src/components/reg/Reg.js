import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onRegisterSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            username,
            email,
            password,
            full_name: fullName,
            phone_number: phoneNumber,
            adres: null,
            avatar: null
        };
        console.log('Sending data:', userData);  // Отладочный вывод

        try {
            const response = await axios.post('http://91.228.154.48:8000/auth/users/', userData);
            onRegisterSuccess(response.data);
        } catch (error) {
            console.error('Registration error', error);
            if (error.response && error.response.data) {
                setError(`Registration failed: ${JSON.stringify(error.response.data)}`);
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Full Name"
                required
            />
            <input
                type="text"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required
            />
            {error && <p>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
