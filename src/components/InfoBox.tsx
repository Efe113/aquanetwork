import React from 'react';

const InfoBox: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto border border-cyan-400/30">
    <h2 className="text-2xl font-bold text-cyan-300 mb-4">
      Aqua Network'e Hoş geldin.
    </h2>
    <p className="text-gray-100 leading-relaxed">
      Sunucuda Eğlenmeyi Unutma!
    </p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="text-cyan-300 font-semibold">Son Sürüm</h3>
        <p className="text-white">1.16x-1.21x</p>
      </div>
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="text-cyan-300 font-semibold">Aktif Kullanıcılar</h3>
        <p className="text-white">24/7 Destek</p>
      </div>
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="text-cyan-300 font-semibold">Oyun Modu</h3>
        <p className="text-white">Box PVP</p>
      </div>
    </div>
  </div>
);

export default InfoBox;
