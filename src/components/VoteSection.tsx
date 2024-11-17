import React from 'react';
import { Star } from 'lucide-react';

const VoteSection: React.FC = () => {
  const voteLinks = [
    { name: 'Yakında', url: '#' },
    { name: 'Yakında', url: '#' },
    { name: 'Yakında', url: '#' },
    { name: 'Yakında', url: '#' }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 my-8 border border-cyan-400/30 text-center">
      <div className="flex items-center justify-center mb-4">
        <Star className="w-6 h-6 text-yellow-400 mr-2" />
        <h2 className="text-2xl font-bold text-cyan-300">Oy Ver</h2>
      </div>
      <p className="text-gray-100 mb-6">
        Oy Vererek Güzel Ödüller Kazan !
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {voteLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="bg-white/5 hover:bg-white/10 p-4 rounded-lg text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default VoteSection;