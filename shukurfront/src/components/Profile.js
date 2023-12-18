import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ authToken }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/accounts/user_profile', {
                    headers: { Authorization: `Token ${authToken}` },
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };

        fetchProfile();
    }, [authToken]);

    return (
        <div>
            {profile ? (
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
