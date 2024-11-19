import React from 'react';
import { Shield } from 'lucide-react';

const Rules: React.FC = () => {
  const rules = [
    'Küfür, hakaret, tartışma ve kışkırtma yapmak yasaktır.',
    'Kanalları kirletecek spam, flood, aşırı caps lock kullanımı, harf uzatımı yapmak yasaktır.',
    'Cinsel içerikli konuşmalar yasaktır.',
    'Hile Kullanmak Yasaktır.',
    'Reklam içerikli mesajlar göndermek yasaktır.',
    'Yetkilileri gereksiz etiketlemek veya oyalamak yasaktır.',
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/30 shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-center mb-6">
        <Shield className="w-8 h-8 text-cyan-300 animate-pulse mr-3" />
        <h2 className="text-3xl font-extrabold text-cyan-300 tracking-wide">
          Sunucu Kuralları
        </h2>
      </div>
      <ul className="space-y-4">
        {rules.map((rule, index) => (
          <li
            key={index}
            className="flex items-center text-gray-200 bg-white/10 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-cyan-400/10 hover:text-cyan-300 shadow-md"
            style={{
              animation: `fadeIn 0.5s ease-out ${(index + 1) * 0.2}s both`,
            }}
          >
            <span className="text-cyan-300 font-semibold mr-3 text-lg">
              #{index + 1}
            </span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
