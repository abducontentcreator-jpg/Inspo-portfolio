import { motion } from 'motion/react';

const projects = [
  {
    title: "Digital Construct",
    category: "UI/UX Redesign",
    industry: "Digital Marketing",
    color: "bg-surface"
  },
  {
    title: "Techloop",
    category: "Brand Identity & Logo",
    industry: "Tech Startup",
    color: "bg-surface"
  },
  {
    title: "Alpha Forex",
    category: "Brand Identity & Logo",
    industry: "Fintech",
    color: "bg-surface"
  },
  {
    title: "SHURUQ Enterprise",
    category: "Brand Identity & Logo",
    industry: "Agency",
    color: "bg-surface"
  },
  {
    title: "Elitekid Academy",
    category: "Brand Identity & Logo",
    industry: "Education",
    color: "bg-surface"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Selected Work</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter">
              Crafting marks <br /> that matter.
            </h2>
          </div>
          <p className="text-white/40 max-w-sm font-light leading-relaxed">
            A collection of strategic visual identities built for businesses ready to scale and stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group cursor-pointer ${index === 4 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface mb-6 border-l-0 group-hover:border-l-4 border-gold transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <span className="text-4xl font-display font-black uppercase tracking-widest text-white/20">
                    {project.title}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                <span className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-widest text-white/60 group-hover:border-gold group-hover:text-gold transition-all">
                  {project.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
