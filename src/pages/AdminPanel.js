import React, { useState, useEffect } from 'react';
import api from '../api'; // Axios instance
import '../App.css'; // Global styles
import './AdminPanel.css'; // Admin Panel specific styles

const AdminPanel = () => {
    const [profiles, setProfiles] = useState([]);
    const [newProfile, setNewProfile] = useState({
        name: '',
        description: '',
        image_url: '',
        address: ''
    });
    const [editingProfile, setEditingProfile] = useState(null);

    // Fetch profiles from the backend on component mount
    useEffect(() => {
        fetchProfiles();
    }, []);

    const fetchProfiles = () => {
        api.get('/profiles')
            .then((response) => {
                setProfiles(response.data);
            })
            .catch((error) => {
                console.error('Error fetching profiles:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({ ...newProfile, [name]: value });
    };

    const handleAddProfile = () => {
        api.post('/profiles', newProfile)
            .then(() => {
                fetchProfiles(); // Refresh the profiles list
                setNewProfile({ name: '', description: '', image_url: '', address: '' }); // Reset the form
            })
            .catch((error) => {
                console.error('Error adding profile:', error);
            });
    };

    const handleEditProfile = (profile) => {
        setEditingProfile(profile);
    };

    const handleUpdateProfile = () => {
        api.put(`/profiles/${editingProfile.id}`, editingProfile)
            .then(() => {
                fetchProfiles(); // Refresh the profiles list
                setEditingProfile(null); // Exit editing mode
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    };

    const handleDeleteProfile = (id) => {
        api.delete(`/profiles/${id}`)
            .then(() => {
                fetchProfiles(); // Refresh the profiles list
            })
            .catch((error) => {
                console.error('Error deleting profile:', error);
            });
    };

    return (
        <div className="admin-panel">
            <h1 className="section-title">Admin Panel</h1>

            <div className="form-section">
                <h2 className="form-title">Add New Profile</h2>
                
                <div class="input-group mb-3">
                    <span class="input-group-text">Name</span>
                    <input type="text" aria-label="First name" class="form-control"/>
                </div>
                
                <div class="input-group mb-3">
                    <span class="input-group-text">Description</span>
                    <input type="text" aria-label="First name" class="form-control"/>
                </div>
                
                <div class="input-group mb-3">
                    <span class="input-group-text">Image URL</span>
                    <input type="text" aria-label="First name" class="form-control"/>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">Address</span>
                    <input type="text" aria-label="First name" class="form-control"/>
                </div>
                <button onClick={handleAddProfile} class="btn btn-primary">
                    Add Profile
                </button>
            </div>

            <div className="profiles-section">
                <h2 className="section-title">Existing Profiles</h2>
            </div>
            <div className="profiles-section">
                {profiles.map((profile) => (
                    <div key={profile.id} className="profile-card">
                        {editingProfile && editingProfile.id === profile.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editingProfile.name}
                                    onChange={(e) => setEditingProfile({ ...editingProfile, name: e.target.value })}
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    value={editingProfile.description}
                                    onChange={(e) => setEditingProfile({ ...editingProfile, description: e.target.value })}
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    value={editingProfile.image_url}
                                    onChange={(e) => setEditingProfile({ ...editingProfile, image_url: e.target.value })}
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    value={editingProfile.address}
                                    onChange={(e) => setEditingProfile({ ...editingProfile, address: e.target.value })}
                                    className="input-field"
                                />
                                <button onClick={handleUpdateProfile} className="action-button update-btn">
                                    Save
                                </button>
                                <button onClick={() => setEditingProfile(null)} className="action-button cancel-btn">
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div>
                                <div class="card">
                                    <img src={profile.image_url} alt={profile.name} className="profile-image" />
                                    <div class="card-body">
                                        <h5 class="card-title">{profile.name}</h5>
                                        <p class="card-text">{profile.description}</p>
                                        <p class="card-text">{profile.address}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">{profile.address}</li>
                                    </ul>
                                    <div class="card-body">
                                        <button onClick={() => handleEditProfile(profile)} className="action-button edit-btn me-1">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDeleteProfile(profile.id)} className="action-button delete-btn">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;
