import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, Brain } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 sm:py-16 bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#CCFF00]/20 flex items-center justify-center">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#CCFF00]" />
              </div>
              <span className="text-white font-bold text-base sm:text-lg">Tenista Pro</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
              E-books especializados para transformar seu saque, forehand e backhand. 
              Método prático, baseado em ciência e aplicável ao seu nível.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'E-book Principal', id: 'main-product' },
                { label: 'Sobre', id: 'author' },
                { label: 'Combo', id: 'combo' },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#CCFF00] text-xs sm:text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h4>
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com/tenistapro1', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Mail, href: 'mailto:fabriciostacon@hotmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2A2A2A] mb-6 sm:mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Fabrício Tacon. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-gray-500 hover:text-[#CCFF00] text-xs sm:text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-[#CCFF00] text-xs sm:text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
