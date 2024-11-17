import React from 'react';

const Background: React.FC = () => (
  <>
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }}
    />
  </>
);

export default Background;