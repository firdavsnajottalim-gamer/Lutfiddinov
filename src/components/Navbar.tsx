import { motion } from 'motion/react';
import { Car, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center">
              <Car className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">AUTO<span className="text-brand-primary">ELITE</span></span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Asosiy', 'Modellar', 'Xizmatlar', 'Biz haqimizda', 'Aloqa'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-brand-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                Test drayv
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Asosiy', 'Modellar', 'Xizmatlar', 'Biz haqimizda', 'Aloqa'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-brand-primary text-white px-6 py-3 rounded-full text-sm font-bold">
              Test drayv
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
