import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ authToken }) => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://91.228.154.48:8000/api/accounts/user_profile', {
                    headers: { Authorization: `Token ${authToken}` },
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile', error);
                setError('Failed to fetch profile');
            }
        };

        fetchProfile();
    }, [authToken]);

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : profile ? (
                <div>
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                    {/* Display other fields */}
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
