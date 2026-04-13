import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Car"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 border border-brand-primary/30">
              Yangi Avlod Texnologiyasi
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-6 text-white">
              Kelajakni <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Boshqaring
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Eng so'nggi rusumdagi premium avtomobillar to'plami. Sifat, tezlik va qulaylik uyg'unligi faqat bizda.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/20">
                Katalogga o'tish
                <ChevronRight size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 border border-white/20 transition-all">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Play size={12} className="text-black ml-0.5" />
                </div>
                Videoni ko'rish
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Sotilgan mashinalar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-sm text-gray-400">Brendlar</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Mijozlarni qo'llab-quvvatlash</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
        <span className="text-[10px] text-white/50 uppercase tracking-widest">Pastga</span>
      </motion.div>
    </div>
  );
}
