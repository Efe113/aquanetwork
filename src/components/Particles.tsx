import React from 'react';

const Particles: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: 0.1,
        }}
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
      </div>
    ))}
  </div>
);

export default Particles;