import React from 'react';
import { Waves } from 'lucide-react';

const Header: React.FC = () => (
  <div className="flex items-center justify-center mb-8">
    <Waves className="w-12 h-12 text-cyan-400 animate-pulse mr-3" />
    <h1 className="text-5xl font-bold text-white tracking-wider">
      AQUA NETWORK
    </h1>
  </div>
);

export default Header;