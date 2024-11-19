import React from 'react';
import { Waves } from 'lucide-react';

const Header: React.FC = () => (
  <div className="flex items-center justify-center mb-12">
    <div className="relative">
      <Waves className="w-14 h-14 text-cyan-400 animate-spin-slow absolute inset-0 opacity-30" />
      <Waves className="w-12 h-12 text-cyan-400 animate-pulse relative" />
    </div>
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 tracking-wider ml-4 animate-fade-in">
      AQUA NETWORK
    </h1>
  </div>
);

export default Header;
