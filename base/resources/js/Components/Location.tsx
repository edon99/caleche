import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { GOOGLE_MAPS_DIRECTIONS_URL, GOOGLE_MAPS_EMBED_URL, WORK_HOURS } from '../constants';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <section id="location" className="w-full bg-white">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[700px]">

        {/* Info Side */}
        <div className="w-full lg:w-1/3 bg-caleche-dark text-white p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '20px 20px' }}
          ></div>

          <motion.div
            className="relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.span
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              className="text-caleche-gold font-sans font-bold tracking-widest uppercase mb-4 block"
            >
              Visit Us
            </motion.span>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl lg:text-5xl font-serif italic font-bold mb-8 text-white"
            >
              La Calèche
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-caleche-gold/20 flex items-center justify-center flex-shrink-0 text-caleche-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Location</h3>
                  <p className="text-gray-400 font-light">
                    UV05 ali mendjeli<br />
                    Constantine, Algeria

                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-caleche-gold/20 flex items-center justify-center flex-shrink-0 text-caleche-gold">
                  <Clock size={20} />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                  <ul className="text-gray-400 font-light space-y-1 w-full">
                    {WORK_HOURS.map((wh, idx) => (
                      <li key={idx} className="flex justify-between text-sm">
                        <span>{wh.day}</span>
                        <span className="text-caleche-gold">{wh.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-caleche-gold/20 flex items-center justify-center flex-shrink-0 text-caleche-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Contact</h3>
                  <p className="text-caleche-gold font-serif text-xl">+213 674 68 69 89</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mt-12 w-full py-4 bg-caleche-gold text-caleche-dark font-bold rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <Navigation size={18} />
              Get Directions
            </motion.a>
          </motion.div>
        </div>

        {/* Map Side */}
        <div className="w-full lg:w-2/3 h-[400px] lg:h-full relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="La Caleche Location"
          ></iframe>

          {/* Overlay text that disappears on hover */}
          {/* <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none lg:opacity-100 opacity-0 group-hover:opacity-0 transition-opacity">
            <span className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-caleche-dark font-bold shadow-lg">
              Interact with Map
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Location;