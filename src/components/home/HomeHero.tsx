import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, MapPin, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { ORDERING_LINKS } from '../../data/brickAndClayLinks';
import { useRouter } from '../../router';

interface HomeHeroProps {
  onOpenReservation?: () => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onOpenReservation }) => {
  const { navigate } = useRouter();

  return (
    <section
      aria-label="Welcome to Brick & Clay"
      className="relative w-full h-[100svh] min-h-[620px] max-h-[1080px] flex flex-col justify-between overflow-hidden bg-charcoal-950 select-none"
    >
      {/* 1. Cinematic Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/hero-pizza.jpg"
          alt="Brick & Clay wood-fired Neapolitan pizza fresh from the clay dome"
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center lg:object-[60%_center] will-change-transform"
          loading="eager"
        />

        {/* Directional Gradient Scrim for crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/50 to-charcoal-950/30 lg:hidden pointer-events-none" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/45 to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/40 pointer-events-none" />
      </div>

      {/* Top spacer to balance fixed navigation */}
      <div className="w-full h-24 sm:h-28 shrink-0 pointer-events-none" />

      {/* 2. Hero Editorial Copy */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-2xl sm:max-w-3xl space-y-6">
          
          {/* Eyebrow / Location */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-brick-500 shadow-[0_0_8px_#C25E35] animate-pulse" />
            <span className="editorial-caps text-[11px] sm:text-xs text-ivory-200 tracking-loose-caps font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brick-400" />
              <span>BHUBANESWAR, ODISHA</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory-50 tracking-tight leading-[1.02] drop-shadow-sm">
              Built On Fire. <br className="hidden sm:inline" />
              <span className="font-normal italic text-brick-400 font-serif">
                Finished With Care.
              </span>
            </h1>
          </motion.div>

          {/* Supporting Pitch Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-ivory-200/90 font-light max-w-xl leading-relaxed drop-shadow-sm"
          >
            A modern take on authentic wood-fired Italian pizza. Handcrafted sourdough blistered in live clay dome ovens across Saheed Nagar and Patia.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/menu')}
              icon={<ArrowRight className="w-4 h-4" />}
              className="tracking-editorial px-7 py-3.5 text-xs sm:text-sm font-semibold shadow-elevated"
            >
              EXPLORE MENU
            </Button>

            <a
              href={ORDERING_LINKS.zomatoSahidNagar}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-subtle bg-charcoal-900/80 hover:bg-charcoal-800 text-ivory-50 border border-white/25 hover:border-white/50 text-xs sm:text-sm uppercase tracking-editorial font-semibold transition-all inline-flex items-center gap-2 backdrop-blur-sm focus-editorial"
            >
              <ShoppingBag className="w-4 h-4 text-brick-400" />
              <span>ORDER ONLINE</span>
            </a>

            {onOpenReservation && (
              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 rounded-subtle bg-charcoal-900/60 hover:bg-charcoal-800 text-ivory-100 border border-white/20 hover:border-brick-500 text-xs sm:text-sm uppercase tracking-editorial font-semibold transition-all inline-flex items-center gap-2 backdrop-blur-sm focus-editorial"
              >
                <Calendar className="w-4 h-4 text-brick-400" />
                <span>RESERVE TABLE</span>
              </button>
            )}
          </motion.div>

        </div>
      </div>

      {/* 3. Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 flex items-center justify-between text-xs text-ivory-300/80"
      >
        <div className="hidden sm:flex items-center gap-2">
          <span className="editorial-caps text-[10px] text-ivory-400">
            Slow Fermentation &bull; 400°C Live Hearth &bull; 90-Second Flash Bake
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <span className="editorial-caps text-[10px] tracking-loose-caps text-ivory-300/90 font-medium">
            SCROLL TO DISCOVER
          </span>
          <div className="w-5 h-9 rounded-full border border-ivory-200/40 p-1 flex justify-center items-start">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-brick-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
