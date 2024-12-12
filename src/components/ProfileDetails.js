import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const ProfileDetails = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        // Fetch detailed profile information
        api.get(`/profile/${id}`)
            .then((response) => {
                setProfile(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching profile details:', error);
                setError('Profile not found.');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading profile details...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!profile) {
        return <p>Profile not found. Please try again later.</p>;
    }

    return (
        <div>
            <h1>{profile.name}</h1>
            <img
                src={profile.image_url}
                alt={profile.name}
                style={{ width: '150px', height: '150px' }}
            />
            <p>{profile.description}</p>
            <p><strong>Address:</strong> {profile.address}</p>
            <p><strong>Contact:</strong> {profile.contact}</p>
            <p><strong>Interests:</strong> {profile.interests}</p>
        </div>
    );
};

export default ProfileDetails;
