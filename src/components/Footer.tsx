import React from 'react';
import { MessageCircle, Twitter, Instagram, Facebook, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900 text-gray-200 p-10 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-cyan-300 animate-fade-in">
            Hakkımızda
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Aqua Network, oyuncular için en iyi deneyimi sunmayı hedefleyen bir oyun topluluğudur. 7/24 aktif ve sürekli gelişen sunucularımızla sizleri bekliyoruz.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold text-cyan-300 animate-fade-in">
            Hızlı Erişim
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors text-sm"
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors text-sm"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors text-sm"
              >
                Sunucu Özellikleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-300 transition-colors text-sm"
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col space-y-4 items-center md:items-start">
          <h3 className="text-xl font-bold text-cyan-300 animate-fade-in">
            Bizi Takip Edin
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-cyan-800/30 hover:bg-cyan-800 p-3 rounded-full transition-all shadow-md hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 text-cyan-300" />
            </a>
            <a
              href="#"
              className="bg-cyan-800/30 hover:bg-cyan-800 p-3 rounded-full transition-all shadow-md hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 text-cyan-300" />
            </a>
            <a
              href="#"
              className="bg-cyan-800/30 hover:bg-cyan-800 p-3 rounded-full transition-all shadow-md hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 text-cyan-300" />
            </a>
            <a
              href="#"
              className="bg-cyan-800/30 hover:bg-cyan-800 p-3 rounded-full transition-all shadow-md hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 text-cyan-300" />
            </a>
            <a
              href="#"
              className="bg-cyan-800/30 hover:bg-cyan-800 p-3 rounded-full transition-all shadow-md hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-cyan-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-cyan-400/30 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Aqua Network. Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
