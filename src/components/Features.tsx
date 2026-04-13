import { Shield, Clock, Award, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-brand-primary" />,
    title: "Kafolatlangan Sifat",
    description: "Barcha avtomobillarimiz 100% texnik ko'rikdan o'tgan va kafolatga ega."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-secondary" />,
    title: "Tezkor Rasmiylashtirish",
    description: "Hujjatlarni rasmiylashtirish va sug'urta qilish atigi 1 soat vaqt oladi."
  },
  {
    icon: <Award className="w-8 h-8 text-brand-accent" />,
    title: "Premium Xizmat",
    description: "Har bir mijoz uchun individual yondashuv va VIP xizmat ko'rsatish."
  },
  {
    icon: <Headphones className="w-8 h-8 text-purple-500" />,
    title: "24/7 Qo'llab-quvvatlash",
    description: "Mutaxassislarimiz har qanday savollaringizga istalgan vaqtda javob berishadi."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Nega aynan bizni tanlashadi?
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Biz faqat mashina sotmaymiz, biz sizga ishonch va qulaylik taqdim etamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-all group"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
