import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const ServerIP: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.aquanetwork.net';

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 max-w-md mx-auto border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
      <h2 className="text-cyan-300 text-lg mb-2">Sunucu IP</h2>
      <div className="flex items-center justify-center space-x-3">
        <code className="text-2xl font-mono text-white select-all">
          {serverIP}
        </code>
        <button
          onClick={copyIP}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          title="Copy IP"
        >
          <Copy className="w-5 h-5 text-cyan-300" />
        </button>
      </div>
      {copied && (
        <span className="text-green-400 text-sm mt-2 block">
          IP Kopyalandı!
        </span>
      )}
    </div>
  );
};

export default ServerIP;