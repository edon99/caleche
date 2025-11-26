import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FoodItem {
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

interface MenuSectionProps {
  items: FoodItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  const itemsData: FoodItem[] = items ?? [];
  console.log('itemsData', itemsData);

  const categories = [
    'All',
    ...Array.from(
      new Set(
        itemsData
          .map(item => item.sub_category?.name?.trim()) // trim whitespace
          .filter(Boolean) // remove null/undefined/empty strings
      )
    ),
  ];

  console.log('categories', categories);


  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = activeCategory === 'All'
    ? itemsData
    : itemsData.filter(item => item.sub_category.name === activeCategory);

  return (
    <section id="menu" className="py-24 bg-caleche-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic font-bold text-caleche-green mb-4"
          >
            Menu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Freshly prepared daily using locally sourced ingredients and traditional French techniques.
          </motion.p>
        </div>

        {/* Category Filter - Starbucks Style Pills */}
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {(categories ?? []).map((category, index) => (
            <motion.button
              key={category ?? index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index ?? 0) * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2 ${activeCategory === category
                ? 'bg-caleche-green border-caleche-green text-white shadow-md'
                : 'bg-white border-gray-200 text-gray-600 hover:border-caleche-green hover:text-caleche-green'
                }`}
            >
              {category ?? 'Unknown'}
            </motion.button>
          ))}

          {(!categories || categories.length === 0) && (
            <p className="text-gray-400 text-center w-full mt-4">No categories available.</p>
          )}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <AnimatePresence>
            {(filteredItems ?? []).length > 0 ? (
              (filteredItems ?? []).map((item) => (
                <motion.div
                  layout
                  key={item?.id ?? Math.random()}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-caleche-gold/30 flex flex-col h-full"
                >
                  {/* Image Area */}
                  <div className="h-64 w-full overflow-hidden rounded-xl mb-6 relative">
                    <img
                      src={item?.image_url ?? '/placeholder.png'}
                      alt={item?.name ?? 'Item'}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-caleche-green font-bold text-sm shadow-md border border-caleche-gold/20">
                      {item?.price ?? 'N/A'} DA
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow px-2 pb-2">
                    <h3 className="text-2xl font-serif italic font-bold text-caleche-dark mb-3 group-hover:text-caleche-green transition-colors">
                      {item?.name ?? 'Unnamed Item'}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {item?.description ?? 'No description available.'}
                    </p>

                    <div className="w-12 h-0.5 bg-caleche-gold/30 mt-auto group-hover:w-full transition-all duration-500"></div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">No menu items available.</p>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default MenuSection;