import React from 'react';
import { Instagram, Facebook, Twitter, Coffee, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-caleche-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center text-center mb-12">
           <div className="w-16 h-16 bg-caleche-green rounded-full flex items-center justify-center text-caleche-gold mb-6 shadow-xl">
             <Coffee size={32} />
           </div>
           <h3 className="text-4xl font-serif italic font-bold text-caleche-green mb-4">La Calèche</h3>
           <p className="text-gray-500 max-w-md mx-auto">
             Tradition, elegance, and taste. Serving Constantine since 1985.
           </p>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://www.instagram.com/lacalecheplus/" target="_blank" className="p-3 bg-caleche-cream rounded-full text-caleche-green hover:bg-caleche-gold hover:text-white transition-all transform hover:-translate-y-1">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/lacalecheplusNouvellevilleAlimenjli/?ref=_xav_ig_profile_page_web#" target="_blank" className="p-3 bg-caleche-cream rounded-full text-caleche-green hover:bg-caleche-gold hover:text-white transition-all transform hover:-translate-y-1">
            <Facebook size={24} />
          </a>
          <a href="#" className="p-3 bg-caleche-cream rounded-full text-caleche-green hover:bg-caleche-gold hover:text-white transition-all transform hover:-translate-y-1">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">
           <a href="#home" className="hover:text-caleche-green transition-colors">Home</a>
           <a href="#featured" className="hover:text-caleche-green transition-colors">Signatures</a>
           <a href="#menu" className="hover:text-caleche-green transition-colors">Menu</a>
           <a href="#about" className="hover:text-caleche-green transition-colors">About</a>
           <a href="#location" className="hover:text-caleche-green transition-colors">Locations</a>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} La Calèche. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-caleche-gold">Privacy Policy</a>
             <a href="#" className="hover:text-caleche-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;