import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, CloudSnow, Flame, Citrus } from 'lucide-react';
import { GetItemsService } from '../services/getItemsService.tsx'

interface DrinkItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image_url?: string;
  sub_category: SubCategory;
}
interface SubCategory {
  id: number;
  name: string;
  description: string;
}

const itemService = new GetItemsService();

const DRINKS_DATA: any = await itemService.getDrinkItems()

const Drinks: React.FC = () => {
  const itemsData = DRINKS_DATA?.items ?? [];
  const [activeType, setActiveType] = useState<string>(
    itemsData.length > 0 ? itemsData[0]?.sub_category?.name ?? '' : ''
  );
  const types = Array.from(
    new Set(itemsData.map(item => item?.sub_category?.name).filter(Boolean))
  );
  const filteredDrinks = itemsData.filter(
    drink => drink?.sub_category?.name === activeType
  );

  return (
    <section id="drinks" className="py-24 bg-caleche-dark text-white relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 right-10 text-caleche-gold/10"
        >
          <Coffee size={200} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-10 left-10 text-caleche-gold/10"
        >
          <Citrus size={150} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-caleche-gold font-sans font-bold tracking-widest uppercase text-xs mb-3 block"
          >
            Liquid Artistry
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-serif italic font-bold mb-6"
          >
            Sip & Savor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            From steaming mugs of comfort to icy glasses of refreshment, explore our curated selection of beverages.
          </motion.p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-white/10 p-1 rounded-full flex relative backdrop-blur-sm border border-white/20">
            {/* Sliding Background */}
            <motion.div
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-caleche-gold rounded-full shadow-lg"
              layout
              initial={false}
              animate={{
                width: `${100 / types.length}%`,
                left: `${types.indexOf(activeType) * (100 / types.length)}%`
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`relative z-10 px-8 py-3 rounded-full flex items-center gap-2 font-bold transition-colors duration-300 ${activeType === type ? 'text-caleche-dark' : 'text-gray-300 hover:text-white'}`}
              >
                <span>{type}</span>
              </button>
            ))
            }


            {/*<button*/}
            {/*    onClick={() => setActiveType('cold')}*/}
            {/*    className={`relative z-10 px-8 py-3 rounded-full flex items-center gap-2 font-bold transition-colors duration-300 ${activeType === 'cold' ? 'text-caleche-dark' : 'text-gray-300 hover:text-white'}`}*/}
            {/*>*/}
            {/*  <span>Cool Refreshments</span>*/}
            {/*</button>*/}
          </div>
        </div>

        {/* Drinks Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredDrinks.map((drink) => (
              <motion.div
                layout
                key={drink.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="h-80 w-full overflow-hidden rounded-2xl mb-4 relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                  <img
                    src={drink.image_url}
                    alt={drink.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white font-bold border border-white/30 text-sm">
                    {drink.price} DA
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center px-2">
                  <h3 className="text-xl font-serif italic font-bold text-caleche-gold mb-2 group-hover:text-white transition-colors">
                    {drink.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {drink.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  );
};

export default Drinks;