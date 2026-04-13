import { motion } from 'motion/react';
import { Car as CarType } from '../types';
import { Zap, Gauge, Settings } from 'lucide-react';

interface CarCardProps {
  car: CarType;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm transition-all hover:border-brand-primary/50"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
            {car.brand}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
            <p className="text-brand-primary font-bold">{car.price}</p>
          </div>
          <div className={`w-4 h-4 rounded-full ${car.color} border border-white/20`} />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5">
            <Zap size={16} className="text-yellow-400 mb-1" />
            <span className="text-[10px] text-gray-400 uppercase">Tezlik</span>
            <span className="text-xs font-bold text-white">{car.specs.speed}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5">
            <Gauge size={16} className="text-blue-400 mb-1" />
            <span className="text-[10px] text-gray-400 uppercase">Dvigatel</span>
            <span className="text-xs font-bold text-white truncate w-full text-center">{car.specs.engine}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5">
            <Settings size={16} className="text-green-400 mb-1" />
            <span className="text-[10px] text-gray-400 uppercase">KPP</span>
            <span className="text-xs font-bold text-white">Avto</span>
          </div>
        </div>

        <button className="w-full py-3 rounded-2xl bg-white/10 hover:bg-brand-primary text-white font-bold transition-all border border-white/10 hover:border-transparent">
          Batafsil ma'lumot
        </button>
      </div>
    </motion.div>
  );
}
