import { motion } from 'motion/react';

const marqueeItems = [
  "Brand Identity",
  "Logo Design",
  "Visual Systems",
  "UI/UX",
  "Strategy-Led Design",
  "SHURUQ Enterprise",
];

export default function Marquee() {
  return (
    <div className="bg-gold py-4 overflow-hidden border-y border-black/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-black font-display font-black uppercase tracking-tighter text-2xl md:text-3xl mx-8">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
