import { Instagram, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-display font-extrabold tracking-tighter block mb-4">
              SHURUQ<span className="text-gold">.</span>
            </a>
            <p className="text-white/40 font-light max-w-xs uppercase tracking-widest text-[10px] font-bold">
              Strategy disguised as design.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#work" className="text-white/60 hover:text-gold transition-colors text-sm">Work</a></li>
              <li><a href="#about" className="text-white/60 hover:text-gold transition-colors text-sm">About</a></li>
              <li><a href="#services" className="text-white/60 hover:text-gold transition-colors text-sm">Services</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-gold transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-6">Social</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                  <Globe size={16} /> Behance
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            © 2025 SHURUQ Enterprise. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-gold transition-colors text-[10px] uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-gold transition-colors text-[10px] uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
