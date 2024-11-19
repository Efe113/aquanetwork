import React from 'react';

const Background: React.FC = () => (
  <>
    {/* Arka Plan Görseli */}
    <div
      className="absolute inset-0 animate-fade-in"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}
    />

    {/* Degrade Katman */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 animate-fade-in-slow"></div>

    {/* Blur ve Hafif Siyah Katman */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-md mix-blend-multiply"></div>
  </>
);

export default Background;
