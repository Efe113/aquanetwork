import React from 'react';

const InfoBox: React.FC = () => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto border border-cyan-400/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
    <h2 className="text-3xl font-extrabold text-cyan-300 mb-6 text-center">
      Aqua Network'e Hoş geldin.
    </h2>
    <p className="text-gray-200 leading-relaxed text-center mb-8">
      Sunucuda eğlenmeyi unutma ve harika zaman geçir!
    </p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500 p-5 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2">Son Sürüm</h3>
        <p className="text-gray-200 text-sm">1.16x-1.21x</p>
      </div>
      <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-500 p-5 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2">Aktif Kullanıcılar</h3>
        <p className="text-gray-200 text-sm">24/7 Destek</p>
      </div>
      <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 p-5 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
        <h3 className="text-white font-bold text-lg mb-2">Oyun Modu</h3>
        <p className="text-gray-200 text-sm">Box PVP</p>
      </div>
    </div>
  </div>
);

export default InfoBox;
