import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenEnrollment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrollment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'O método', href: '#jornada' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Resultados', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            id="header-brand-logo"
            className="group flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-[#F5F5F0] focus:outline-hidden select-none"
            aria-label="VittaFit — Treine com direção"
          >
            <span className="w-2 h-2 rounded-full bg-[#B8F23D] transition-transform duration-300 group-hover:scale-125" />
            <span className="font-extrabold tracking-[-0.03em]">VittaFit</span>
          </a>
        </div>

        {/* Navigation & CTA */}
        <div className="flex items-center gap-6 sm:gap-8">
          <nav className="hidden md:flex items-center gap-7 text-sm font-sans font-medium text-[#A6A6A0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#B8F23D] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            id="header-cta-button"
            onClick={onOpenEnrollment}
            className="btn-premium-primary px-5 sm:px-6 py-2.5 rounded-full text-xs font-bold font-sans tracking-wider uppercase cursor-pointer gap-2"
          >
            <span>COMEÇAR</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#080808]" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            id="header-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F5F0] hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="header-mobile-menu"
          className="md:hidden bg-[#111111] border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-250 max-h-[calc(100vh-4.5rem)] overflow-y-auto text-[#F5F5F0]"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-[11px] font-mono tracking-widest text-[#A6A6A0] uppercase">
            <span>VITTAFIT / 30</span>
            <span className="text-[#B8F23D]">PROGRAMA ONLINE</span>
          </div>

          <nav className="flex flex-col space-y-3 text-base font-bold text-[#F5F5F0]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-[#F5F5F0]/90 hover:text-[#B8F23D] flex items-center justify-between border-b border-white/10 text-sm font-medium"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#B8F23D]">→</span>
              </a>
            ))}

            <div className="pt-4">
              <button
                type="button"
                id="header-mobile-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="w-full btn-premium-primary py-4 px-6 rounded-full font-extrabold text-xs uppercase tracking-widest cursor-pointer gap-2"
              >
                <span>COMEÇAR MEUS 30 DIAS →</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
