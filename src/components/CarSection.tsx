import { motion } from 'motion/react';
import { CARS } from '../constants';
import CarCard from './CarCard';

export default function CarSection() {
  return (
    <section id="modellar" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
            >
              Bizning <span className="text-brand-primary italic">Modellar</span>
            </motion.h2>
            <p className="text-gray-400 max-w-xl">
              Dunyoning eng mashhur brendlaridan saralab olingan eksklyuziv avtomobillar to'plami.
            </p>
          </div>
          <div className="flex gap-2">
            {['Barchasi', 'Sport', 'SUV', 'Sedan', 'Elektr'].map((cat) => (
              <button 
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === 'Barchasi' ? 'bg-brand-primary text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all">
            Barcha modellarni ko'rish
          </button>
        </div>
      </div>
    </section>
  );
}
