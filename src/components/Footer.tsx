import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Car className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">AUTO<span className="text-brand-primary">ELITE</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              O'zbekistondagi eng yirik va zamonaviy premium avtosalon. Biz bilan orzuingizdagi avtomobilga ega bo'ling.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Tezkor havolalar</h4>
            <ul className="space-y-4">
              {['Asosiy', 'Modellar', 'Xizmatlar', 'Biz haqimizda', 'Yangiliklar'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-brand-primary text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Aloqa</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-brand-primary shrink-0" />
                <span>Toshkent sh., Amir Temur ko'chasi, 108-uy</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <span>+998 71 200 00 00</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-brand-primary shrink-0" />
                <span>info@autoelite.uz</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Yangiliklardan xabardor bo'ling</h4>
            <p className="text-gray-400 text-sm mb-4">Eng so'nggi modellar va aksiyalar haqida birinchilardan bo'lib biling.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email manzilingiz" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-primary w-full"
              />
              <button className="bg-brand-primary text-white p-2 rounded-xl hover:bg-blue-600 transition-colors">
                <Youtube size={20} className="rotate-90" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 AutoElite Showroom. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Maxfiylik siyosati</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
