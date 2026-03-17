'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1565C0] to-[#00B0FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DL</span>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? 'text-[#0D1B2A]' : 'text-white'}`}>
                Digi Laser
              </span>
            </div>

            {/* Links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  className={`relative font-medium transition-colors group ${
                    isScrolled ? 'text-[#0D1B2A]' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1565C0] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA — desktop */}
            <div className="hidden md:block">
              <Button variant="whatsapp" href={WHATSAPP_URL}>
                Solicitar Orçamento
              </Button>
            </div>

            {/* Hamburguer — mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-[#0D1B2A]' : 'text-white'}`}
              aria-label="Abrir menu"
            >
              <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Menu mobile — drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-4 text-lg font-medium text-[#0D1B2A] border-b border-gray-200"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="mt-8">
                <Button variant="whatsapp" href={WHATSAPP_URL} className="w-full justify-center">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}