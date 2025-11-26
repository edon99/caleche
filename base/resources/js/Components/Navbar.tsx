import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Signatures', href: '#featured' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#about' },
    { name: 'Locations', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-caleche-green shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-caleche-gold rounded-full flex items-center justify-center text-caleche-green shadow-md group-hover:scale-110 transition-transform duration-300">
               <Coffee size={26} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif italic font-bold text-2xl tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
                La Calèche
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] ${isScrolled ? 'text-caleche-gold' : 'text-caleche-gold/90'}`}>
                Constantine
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs font-bold uppercase tracking-widest text-white hover:text-caleche-gold transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-caleche-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-caleche-gold focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-caleche-green absolute w-full shadow-xl border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg text-lg font-serif italic text-white hover:bg-white/10 hover:text-caleche-gold transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;