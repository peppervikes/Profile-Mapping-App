import React from 'react';

function ProfileList({ profiles, onViewSummary }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
      }}
    >
      {profiles.map((profile) => (
        <div
          key={profile.id}
          style={{
            width: '100%',
            maxWidth: '300px',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <img
            src={profile.image}
            alt={profile.name}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <button
            onClick={() => onViewSummary(profile)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            View Summary
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProfileList;
