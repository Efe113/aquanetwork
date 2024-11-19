import React from 'react';
import { Sword, Crown, Gift, Trophy, Shield, Star } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sword className="w-8 h-8 text-cyan-300" />,
      title: '7/24 Aktif',
      description: 'Oyuncuların Rahat Bir Şekilde Oynaması İçin 7/24 Hizmet Veriyoruz.',
    },
    {
      icon: <Crown className="w-8 h-8 text-cyan-300" />,
      title: 'Anında Sorun Çözme',
      description: 'Oyuncular Sorun Yaşadığında Hızlı ve Etkili Bir Şekilde Müdahale Ediyoruz.',
    },
    {
      icon: <Gift className="w-8 h-8 text-cyan-300" />,
      title: 'Yetkili Alımı',
      description: 'Ekibimize Katılmak İsterseniz, Sizi Aramızda Görmekten Mutluluk Duyarız.',
    },
    {
      icon: <Trophy className="w-8 h-8 text-cyan-300" />,
      title: 'Gelişmiş Sunucu',
      description: 'Sürekli Geliştirilen Sistemimizle En İyi Oyun Deneyimini Sunuyoruz.',
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-300" />,
      title: 'Güvenlik',
      description: 'Sunucumuzda En Yüksek Güvenlik Seviyesi ile Oynayın.',
    },
    {
      icon: <Star className="w-8 h-8 text-cyan-300" />,
      title: 'Ödüller',
      description: 'Düzenli Yarışmalar ve Etkinliklerle Oyuncularımıza Ödüller Sunuyoruz.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900 p-8 rounded-lg shadow-lg border border-cyan-400/50">
      <h2 className="text-3xl font-bold text-cyan-200 text-center mb-6 tracking-wide animate-fade-in">
        Sunucu Özellikleri
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-cyan-700/30 shadow-md animate-slide-up"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 bg-cyan-800 rounded-full shadow-lg animate-pulse">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-cyan-200 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
