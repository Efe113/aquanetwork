import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md rounded-lg p-6 mt-8 border-t border-cyan-400/30">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2024 Aqua Network. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-cyan-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-cyan-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;