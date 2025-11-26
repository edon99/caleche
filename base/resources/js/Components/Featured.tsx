import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Featured: React.FC = (featuredProps: any) => {
    const featuredData = featuredProps.featuredData;
  return (
    <section id="featured" className="bg-caleche-green relative overflow-hidden py-24">
      {/* Background Pattern (Dots) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-caleche-gold mb-4"
            >
              <Star size={16} fill="#C5A059" />
              <span className="font-sans font-bold uppercase tracking-widest text-sm">Signature Selection</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif italic font-bold text-white mb-6 leading-tight"
            >
              Our Own<br/>
              <span className="text-caleche-gold not-italic">{featuredData.title}</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-caleche-cream/90 text-lg md:text-xl leading-relaxed mb-8 font-light"
            >
                {featuredData.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
                {featuredData.ingredients.map((ingredient: string, index: number) => (
                  <span key={index} className="px-8 py-3 border border-white/30 text-white font-sans text-sm tracking-widest uppercase rounded-full backdrop-blur-sm">
                    {ingredient}
                  </span>
                ))}

            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
             {/* Circular Background behind image */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"></div>
             
             <img 
               src={featuredData.image}
               alt="Baklava Detail" 
               className="w-full h-auto rounded-2xl shadow-2xl border-4 border-caleche-gold/20 rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
             />
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-caleche-cream p-4 rounded-full shadow-lg w-32 h-32 flex flex-col items-center justify-center animate-pulse">
                <span className="text-caleche-green font-serif italic text-lg">Only</span>
                <span className="text-caleche-dark font-bold text-3xl">{featuredData.price}</span>
                <span className="text-caleche-green text-xs font-bold uppercase">DA</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Featured;