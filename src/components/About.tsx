import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-surface px-6 relative overflow-hidden">
      {/* Subtle background text */}
      <div className="absolute -bottom-20 -right-20 text-[20rem] font-display font-black text-white/[0.02] select-none pointer-events-none">
        ABDU
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Abdurahman" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/5 -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter leading-tight">
            Design is a <span className="text-gold italic">technical</span> discipline, not an artistic whim.
          </h2>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            I'm Abdu — brand identity designer and co-founder of SHURUQ Enterprise. I work at the intersection of visual intelligence and brand strategy.
          </p>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Every mark I create is built on logic first, aesthetics second. My clients are businesses that understand the difference between looking good and being positioned correctly.
          </p>
          
          <div className="pt-8 flex items-center gap-12">
            <div>
              <span className="block text-3xl font-display font-bold text-gold">08+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl font-display font-bold text-gold">50+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Brands Built</span>
            </div>
            <div>
              <span className="block text-3xl font-display font-bold text-gold">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Strategy Led</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
