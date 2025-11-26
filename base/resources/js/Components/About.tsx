import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = (storyProps:any) => {
    const aboutData = storyProps.storyData;
  return (
    <section id="about" className="py-20 md:py-32 bg-caleche-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="order-2 md:order-1"
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="text-caleche-green font-sans text-sm font-bold tracking-widest uppercase mb-2"
            >
              Our Story
            </motion.h2>
            <motion.h3 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-5xl font-serif font-bold text-caleche-dark mb-6"
            >
                {aboutData.title}
            </motion.h3>
            <motion.p 
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="text-gray-600 mb-6 text-lg leading-relaxed"
            >
                <div
                    dangerouslySetInnerHTML={{ __html: aboutData.description }}
                />
            </motion.p>


            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-4"
            >
               <div className="text-center">
                 <span className="block text-3xl font-serif font-bold text-caleche-gold">10+</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Years</span>
               </div>
               <div className="h-10 w-px bg-gray-300"></div>
               <div className="text-center">
                 <span className="block text-3xl font-serif font-bold text-caleche-gold">100%</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Fresh</span>
               </div>
               <div className="h-10 w-px bg-gray-300"></div>
               <div className="text-center">
                 <span className="block text-3xl font-serif font-bold text-caleche-gold">∞</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Love</span>
               </div>
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
             <div className="grid grid-cols-2 gap-4">
                <img
                  src={aboutData.image1}
                  alt="Pastry Chef"
                  className="rounded-lg shadow-xl translate-y-8"
                />
                <img
                  src={aboutData.image2}
                  alt="Coffee Service"
                  className="rounded-lg shadow-xl -translate-y-8"
                />
             </div>
             {/* Decorative Element */}
             <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border-2 border-caleche-gold/30 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;