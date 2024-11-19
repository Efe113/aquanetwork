import React from 'react';

const Particles: React.FC = () => {
  const particleCount = 30; // Daha fazla parçacık eklemek için artırabilirsiniz
  const colors = ['#67e8f9', '#22d3ee', '#06b6d4', '#0891b2']; // Cyan renk tonları

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(particleCount)].map((_, i) => {
        const size = Math.random() * 6 + 2; // Parçacık boyutlarını 2px - 8px arasında rastgele yapar
        const color = colors[Math.floor(Math.random() * colors.length)]; // Rastgele renk seçer

        return (
          <div
            key={i}
            className="absolute animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`,
            }}
          >
            <div
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                borderRadius: '50%',
                opacity: Math.random() * 0.5 + 0.5, // Şeffaflık (0.5 - 1 arasında)
                boxShadow: `0 0 10px ${color}`,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Particles;
