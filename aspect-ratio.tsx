import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'E-book Principal', id: 'main-product' },
    { label: 'Sobre', id: 'author' },
    { label: 'Técnicos', id: 'technical-products' },
    { label: 'Combo', id: 'combo' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-lg border-b border-[#2A2A2A]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/20 flex items-center justify-center">
                <Brain className="w-4 h-4 text-[#CCFF00]" />
              </div>
              <span className="text-white font-bold text-sm hidden sm:block">Tenista Pro</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('combo')}
                className="bg-[#CCFF00] text-black hover:bg-[#9EF916] px-4 py-2 text-sm font-semibold rounded-lg"
              >
                Combo Completo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-[#0A0A0A] border-b border-[#2A2A2A] p-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full px-4 py-3 text-left text-gray-400 hover:text-white hover:bg-[#141414] rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2">
                  <Button
                    onClick={() => scrollToSection('combo')}
                    className="w-full bg-[#CCFF00] text-black hover:bg-[#9EF916] py-3 font-semibold rounded-lg"
                  >
                    Combo Completo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
