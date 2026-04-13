import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarSection from './components/CarSection';
import Features from './components/Features';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-primary selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Brand Marquee */}
        <div className="py-10 bg-white/5 border-y border-white/10 overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-20 items-center opacity-30 grayscale hover:grayscale-0 transition-all cursor-default"
          >
            {['PORSCHE', 'TESLA', 'AUDI', 'BMW', 'MERCEDES-BENZ', 'LAMBORGHINI', 'FERRARI', 'ASTON MARTIN', 'BENTLEY', 'ROLLS-ROYCE'].map((brand) => (
              <span key={brand} className="text-4xl font-black tracking-tighter">{brand}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {['PORSCHE', 'TESLA', 'AUDI', 'BMW', 'MERCEDES-BENZ', 'LAMBORGHINI', 'FERRARI', 'ASTON MARTIN', 'BENTLEY', 'ROLLS-ROYCE'].map((brand) => (
              <span key={`${brand}-2`} className="text-4xl font-black tracking-tighter">{brand}</span>
            ))}
          </motion.div>
        </div>

        <CarSection />
        
        <Features />

        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2083" 
              alt="CTA Background"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">
                Orzuingizdagi <span className="text-brand-primary italic">Mashinani</span> Bugun Band Qiling
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Bizning mutaxassislarimiz sizga eng yaxshi tanlovni amalga oshirishda yordam berishadi.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-brand-primary hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/20">
                  Konsultatsiya olish
                </button>
                <button className="bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105">
                  Biz bilan bog'lanish
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
