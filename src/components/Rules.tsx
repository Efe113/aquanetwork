import React from 'react';
import { Shield } from 'lucide-react';

const Rules: React.FC = () => {
  const rules = [
    'Küfür, hakaret, tartışma ve kışkırtma yapmak yasaktır',
    'Kanalları kirletecek spam, flood, aşırı caps lock kullanımı, harf uzatımı yapmak yasaktır',
    'Cinsel içerikli konuşmalar yasaktır',
    'Hile Kullanmak Yasaktır',
    'Reklam içerikli mesajlar göndermek yasaktır',
    'Yetkilileri gereksiz etiketlemek veya oyalamak yasaktır'
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-cyan-400/30">
      <div className="flex items-center mb-4">
        <Shield className="w-6 h-6 text-cyan-300 mr-2" />
        <h2 className="text-2xl font-bold text-cyan-300">Sunucu Kuralları</h2>
      </div>
      <ul className="space-y-2">
        {rules.map((rule, index) => (
          <li key={index} className="flex items-center text-gray-100">
            <span className="text-cyan-300 mr-2">#{index + 1}</span>
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;