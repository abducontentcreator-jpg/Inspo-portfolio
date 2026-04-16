import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your business, market positioning, and target audience to find the unique angle."
  },
  {
    number: "02",
    title: "Strategy",
    description: "Defining the visual direction and brand core before a single pixel is moved or mark is drawn."
  },
  {
    number: "03",
    title: "Design",
    description: "Iterative, logic-driven visual development where we explore, refine, and perfect the identity."
  },
  {
    number: "04",
    title: "Delivery",
    description: "Final assets, comprehensive brand guidelines, and ongoing support for implementation."
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-black px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">How I Work</span>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter">
            The Process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-6xl font-display font-black text-white/5 group-hover:text-gold/10 transition-colors mb-4">
                {step.number}
              </div>
              <div className="absolute top-8 left-0 w-8 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-gold transition-colors">{step.title}</h3>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
