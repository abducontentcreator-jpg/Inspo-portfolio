import { motion } from 'motion/react';
import { Fingerprint, Target, Layout } from 'lucide-react';

const services = [
  {
    icon: <Fingerprint className="text-gold" size={40} />,
    title: "Brand Identity",
    description: "Full identity systems: logo, color, typography, and comprehensive brand guidelines that ensure consistency across all touchpoints."
  },
  {
    icon: <Target className="text-gold" size={40} />,
    title: "Logo Design",
    description: "Strategic mark-making. Symbols that carry deep meaning, hold up at any scale, and become the recognizable face of your business."
  },
  {
    icon: <Layout className="text-gold" size={40} />,
    title: "UI/UX Design",
    description: "Interface design rooted in user behavior and product logic. We build digital experiences that are as functional as they are beautiful."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">What I Do</span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter">
            Services for the <br /> ambitious.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 bg-surface border border-white/5 hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between p-10 border border-gold/20 bg-gold/5 gap-8">
          <div>
            <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Investment</p>
            <p className="text-2xl font-display font-bold">Starting from <span className="text-gold">$300</span></p>
          </div>
          <a
            href="#contact"
            className="px-12 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 w-full md:w-auto text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
