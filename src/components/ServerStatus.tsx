import React from 'react';
import { Signal } from 'lucide-react';

const ServerStatus: React.FC = () => {
  // Normally this would fetch from your Minecraft server API
  const status = {
    online: false,
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-8 max-w-md mx-auto border border-cyan-400/30">
      <div className="flex items-center justify-around">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Signal className={`w-5 h-5 ${status.online ? 'text-green-400' : 'text-red-400'} mr-2`} />
            <span className="text-white">Durum</span>
          </div>
          <span className={`text-sm ${status.online ? 'text-green-400' : 'text-red-400'}`}>
            {status.online ? 'Aktif' : 'Kapalı'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;