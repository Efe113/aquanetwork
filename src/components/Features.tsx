import React from 'react';
import { Sword, Crown, Gift, Trophy } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sword className="w-6 h-6 text-cyan-300" />,
      title: '7/24 aktif',
      description: 'Oyuncular Rahat Bir Şekilde Oynasın Diye 7/24 Hizmet Veriyoruz.'
    },
    {
      icon: <Crown className="w-6 h-6 text-cyan-300" />,
      title: 'Anında Sorun Halletme',
      description: 'Oyuncular Bir Sorunla Karşılaştıklarında Hızlıca Çözmeye Odaklıyız.'
    },
    {
      icon: <Gift className="w-6 h-6 text-cyan-300" />,
      title: 'Yetkili alım',
      description: 'Sizlerde Bizlere Yardım Etmek İstiyorsanız Yetkili Ekibimize Katılabilirsiniz.'
    },
    {
      icon: <Trophy className="w-6 h-6 text-cyan-300" />,
      title: 'Gelişmiş sunucu',
      description: 'Sürekli Olarak Gelişen Sunucumuz Sizlere Daha İyi Hizmet Vermek İçin Uğraşıyor.'
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-cyan-400/30">
      <h2 className="text-2xl font-bold text-cyan-300 mb-4">Sunucu Özellikleri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              {feature.icon}
              <h3 className="text-white font-semibold ml-2">{feature.title}</h3>
            </div>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;