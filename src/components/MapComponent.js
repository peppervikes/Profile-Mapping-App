import React from 'react';

function MapComponent({ address }) {
  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '56.25%', // 16:9 aspect ratio
        margin: '20px 0',
      }}
    >
      <iframe
        title="Map"
        src={iframeSrc}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allowFullScreen
      />
    </div>
  );
}

export default MapComponent;
