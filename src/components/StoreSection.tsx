import React from 'react';
import { ShoppingBag, Diamond, Crown, Rocket } from 'lucide-react';

const StoreSection: React.FC = () => {
  const packages = [
    {
      name: 'VIP',
      icon: <Diamond className="w-8 h-8 text-cyan-300" />,
      price: '₺24.99',
      features: [
        'Yakında',
        '',
        '',
        ''
      ]
    },
    {
      name: 'MVP',
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      price: '₺49.99',
      features: [
        'Yakında',
        '',
        '',
        ''
      ]
    },
    {
      name: 'SPONSOR',
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      price: '₺139.99',
      features: [
        'Yakında',
        '',
        '',
        ''
      ]
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-cyan-400/30">
      <div className="flex items-center justify-center mb-8">
        <ShoppingBag className="w-6 h-6 text-cyan-300 mr-2" />
        <h2 className="text-2xl font-bold text-cyan-300">Mağaza</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-4">{pkg.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
            <p className="text-2xl text-cyan-300 font-bold mb-4">{pkg.price}</p>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
              Satın Al
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreSection;
