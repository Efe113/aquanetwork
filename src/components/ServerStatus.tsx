import React, { useState, useEffect } from 'react';
import { Signal } from 'lucide-react';

const ServerStatus: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'aktif' | 'kapalı'>('loading');

  // Simulate fetching server status (replace with your actual API fetch)
  useEffect(() => {
    setTimeout(() => {
      // Replace with your real server status API
      setStatus(Math.random() > 0.5 ? 'aktif' : 'kapalı'); // Random status for demo
    }, 2000);
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg shadow-xl max-w-md mx-auto border border-cyan-400/50 hover:border-cyan-500/80 transition-all ease-in-out duration-300 transform hover:scale-105">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Signal
              className={`w-6 h-6 mr-3 ${
                status === 'aktif' ? 'text-green-400' : status === 'kapalı' ? 'text-red-400' : 'text-yellow-400'
              } transition-all ease-in-out duration-500`}
            />
            <span className="text-white text-lg font-semibold">Durum</span>
          </div>
          {status === 'loading' ? (
            <span className="text-yellow-400 text-sm">Yükleniyor...</span>
          ) : (
            <span className={`text-sm ${status === 'aktif' ? 'text-green-400' : 'text-red-400'}`}>
              {status === 'aktif' ? 'Aktif' : 'Kapalı'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;
