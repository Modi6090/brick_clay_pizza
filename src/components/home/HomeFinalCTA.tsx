import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Calendar } from 'lucide-react';
import { ORDERING_LINKS } from '../../data/brickAndClayLinks';
import { useRouter } from '../../router';

interface HomeFinalCTAProps {
  onOpenReservation?: () => void;
}

export const HomeFinalCTA: React.FC<HomeFinalCTAProps> = ({ onOpenReservation }) => {
  const { navigate } = useRouter();

  return (
    <section
      aria-label="Reserve or Order"
      className="py-24 sm:py-32 bg-charcoal-950 text-ivory-50 relative overflow-hidden border-t border-charcoal-800"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brick-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-white/10 text-ivory-300 text-xs font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-brick-500" />
          <span>BHUBANESWAR &bull; LIVE CLAY OVEN</span>
        </motion.div>

        {/* Big Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-ivory-50"
        >
          Ready for the table? <br />
          <span className="font-normal italic text-brick-400 font-serif">
            Come hungry.
          </span>
        </motion.h2>

        {/* Short copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-ivory-300/90 font-light max-w-xl mx-auto leading-relaxed"
        >
          Slow-fermented sourdough, fresh buffalo mozzarella, and blistered crusts waiting for you in Saheed Nagar and Patia.
        </motion.p>

        {/* Three Prominent Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* 1. EXPLORE MENU */}
          <button
            onClick={() => navigate('/menu')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all shadow-elevated flex items-center justify-center gap-2 focus-editorial active:scale-[0.98]"
          >
            <span>EXPLORE MENU</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* 2. ORDER ONLINE */}
          <a
            href={ORDERING_LINKS.zomatoSahidNagar}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-charcoal-900 hover:bg-charcoal-800 text-ivory-100 border border-charcoal-700 hover:border-brick-500 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 focus-editorial active:scale-[0.98]"
          >
            <ShoppingBag className="w-4 h-4 text-brick-400" />
            <span>ORDER ONLINE</span>
          </a>

          {/* 3. RESERVE A TABLE */}
          {onOpenReservation ? (
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-transparent hover:bg-white/10 text-ivory-200 border border-white/20 hover:border-white/40 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 focus-editorial active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-brick-400" />
              <span>RESERVE A TABLE</span>
            </button>
          ) : (
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-transparent hover:bg-white/10 text-ivory-200 border border-white/20 hover:border-white/40 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 focus-editorial active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-brick-400" />
              <span>RESERVE A TABLE</span>
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
};
