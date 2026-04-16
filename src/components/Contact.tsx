import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8">
              Ready to build <br /> something <span className="text-gold">serious?</span>
            </h2>
            <p className="text-xl text-white/60 font-light max-w-md leading-relaxed">
              Tell me about your project. I'll tell you if I'm the right fit.
            </p>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gold/30">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Abdu" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/40 font-bold">Direct Contact</p>
                  <p className="text-gold font-bold">Abdurahman (Abdu)</p>
                </div>
              </div>
              <a href="mailto:abdu@shuruq.agency" className="text-2xl font-display font-bold hover:text-gold transition-colors block">
                abdu@shuruq.agency
              </a>
              <p className="text-white/40 font-light">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-12 border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:border-gold focus:outline-none transition-colors text-white placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:border-gold focus:outline-none transition-colors text-white placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Project Type</label>
                  <select className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:border-gold focus:outline-none transition-colors text-white appearance-none">
                    <option>Brand Identity</option>
                    <option>Logo Design</option>
                    <option>UI/UX</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Budget Range</label>
                  <select className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:border-gold focus:outline-none transition-colors text-white appearance-none">
                    <option>$300–$500</option>
                    <option>$500–$1000</option>
                    <option>$1000+</option>
                    <option>Let's discuss</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Project Brief</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-black/50 border border-white/10 px-4 py-3 focus:border-gold focus:outline-none transition-colors text-white placeholder:text-white/10 resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300">
                Send It
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
