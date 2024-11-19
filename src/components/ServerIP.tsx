import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';

const ServerIP: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.aquanetwork.net';

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg shadow-lg max-w-md mx-auto border border-cyan-300/40 hover:border-cyan-500/80 transition-all ease-in-out duration-300">
      <h2 className="text-white text-2xl font-semibold mb-4">Sunucu IP</h2>
      <motion.div
        className="flex items-center justify-between bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <code className="text-2xl font-mono text-white select-all">
          {serverIP}
        </code>
        <button
          onClick={copyIP}
          className="p-3 hover:bg-white/10 rounded-lg transition-colors"
          title="Copy IP"
        >
          <Copy className="w-6 h-6 text-cyan-300" />
        </button>
      </motion.div>
      {copied && (
        <motion.span
          className="text-green-400 text-sm mt-4 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          IP Kopyalandı!
        </motion.span>
      )}
    </div>
  );
};

export default ServerIP;
