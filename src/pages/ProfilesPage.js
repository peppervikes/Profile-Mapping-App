import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { ClipLoader } from 'react-spinners';

const ProfilesPage = () => {
    const [profiles, setProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loadingMap, setLoadingMap] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState('');
    const [activeAccordion, setActiveAccordion] = useState(null);

    // Fetch profiles from backend
    useEffect(() => {
        api.get('/profiles')
            .then((response) => {
                setProfiles(response.data);
                setFilteredProfiles(response.data);
            })
            .catch((error) => {
                console.error('Error fetching profiles:', error);
            });
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = profiles.filter(
            (profile) =>
                profile.name.toLowerCase().includes(query) ||
                profile.address.toLowerCase().includes(query)
        );
        setFilteredProfiles(filtered);
    };

    const handleShowMap = (address) => {
        setLoadingMap(true);
        setTimeout(() => {
            setSelectedAddress(address);
            setLoadingMap(false);
        }, 1000); // Simulated loading for user feedback
    };

    const handleAccordionToggle = (index) => {
        // Toggle the clicked accordion; close it if it's already open
        setActiveAccordion(activeAccordion === index ? null : index);
        if (activeAccordion === index) {
            setSelectedAddress('');
        }
    };

    return (
        <div className="container">
            <h1>Profiles</h1>
            <input
                type="text"
                placeholder="Search by name or address..."
                value={searchQuery}
                onChange={handleSearch}
                className="form-control mb-4"
            />

            <div className="accordion-container">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {filteredProfiles.map((profile, index) => (
                        <div
                            className={`accordion-item ${
                                activeAccordion === index ? 'active-item' : ''
                            }`}
                            key={profile.id}
                        >
                            <h2 className="accordion-header" id={`flush-heading${index}`}>
                                <button
                                    className={`accordion-button ${
                                        activeAccordion === index ? '' : 'collapsed'
                                    }`}
                                    type="button"
                                    onClick={() => handleAccordionToggle(index)}
                                    aria-expanded={activeAccordion === index}
                                    aria-controls={`flush-collapse${index}`}
                                >
                                    {profile.name}
                                </button>
                            </h2>
                            <div
                                id={`flush-collapse${index}`}
                                className={`accordion-collapse collapse ${
                                    activeAccordion === index ? 'show' : ''
                                }`}
                                aria-labelledby={`flush-heading${index}`}
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <p>{profile.description}</p>
                                    <img
                                        src={profile.image_url}
                                        alt={profile.name}
                                        className="profile-image"
                                    />
                                    <p>
                                        <strong>Address:</strong> {profile.address}
                                    </p>
                                    <Link to={`/profile/${profile.id}`}>
                                        <button className="btn btn-success">
                                            View Details
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleShowMap(profile.address)}
                                        className="btn btn-primary"
                                    >
                                        Summary
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {loadingMap ? (
                    <div className="map-container">
                        <ClipLoader color="#FF5733" loading={true} size={50} />
                        <p>Loading map...</p>
                    </div>
                ) : (
                    selectedAddress && (
                        <div className="map-container">
                            <h2>Map for Selected Address</h2>
                            <div className="mapouter">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                        selectedAddress
                                    )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder="0"
                                ></iframe>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ProfilesPage;
