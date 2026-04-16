import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#f0b90b 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter leading-[0.85] mb-8">
              Strategy <br />
              <span className="text-gold">disguised</span> <br /> as design.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/60 max-w-xl mb-12 font-light"
            >
              Brand identity and logo design for businesses that want to be taken seriously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="#work"
                className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-10 py-4 border border-gold text-gold font-bold uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
              >
                Start a Project
              </a>
            </motion.div>
          </motion.div>

          {/* New Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden border-2 border-gold/20 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Abdurahman" 
                className="w-full h-full object-cover px-8 pt-12"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Animated background shape */}
            <div className="absolute -top-10 -right-10 w-full h-full border border-gold/10 -z-10 translate-x-4 translate-y-4"></div>
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold bg-black/80 px-4 py-2">Based in Addis Ababa</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-white"></div>
      </motion.div>
    </section>
  );
}
