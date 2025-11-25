import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = (heroProps: any) => {
  const heroData = heroProps.heroData;
  console.log('here', heroData)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const letterContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50, rotate: 5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    }
  };

  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="La Caleche Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-caleche-green/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-caleche-dark/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block py-1 px-3 border border-caleche-gold/50 rounded-full text-caleche-gold text-xs md:text-sm font-sans font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm"
          >
            Est. 1985 • Constantine
          </motion.span>

          <motion.h1
            variants={letterContainer}
            className="text-6xl md:text-8xl lg:text-9xl font-serif italic font-bold text-white mb-6 leading-none tracking-tight flex flex-col md:flex-row items-center justify-center gap-x-4"
          >
            {/* Line 1 – LA */}
            <span className="flex">
              {heroData.title.split("").map((char, index) => (
                <motion.span key={index} variants={letterAnimation}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>



          <motion.p
            variants={itemVariants}
            className="text-caleche-cream/90 text-xl md:text-3xl font-serif italic max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {heroData.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#location"
              className="px-8 py-4 bg-caleche-gold text-caleche-dark font-sans font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              Visit Us
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-sans font-bold rounded-full hover:bg-white hover:text-caleche-green transition-all duration-300"
            >
              View Menu
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;