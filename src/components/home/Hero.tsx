import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface HeroProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu, onOpenReservation }) => {
  return (
    <section
      aria-label="Welcome to Brick & Clay"
      className="relative w-full h-[100svh] min-h-[640px] max-h-[1100px] flex flex-col justify-between overflow-hidden bg-charcoal-950 select-none"
    >
      {/* 1. Cinematic Background Pizza Image with subtle scale reveal */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="/images/hero-pizza.jpg"
          alt="Wood-fired Neapolitan pizza fresh from the clay oven with blistered cornicione"
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover object-center lg:object-[65%_center] will-change-transform"
          loading="eager"
        />

        {/* 2. Directional Gradient Scrim: Preserves pizza brightness while ensuring AAA text contrast */}
        {/* Mobile: Bottom-to-top subtle darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/50 to-charcoal-950/30 lg:hidden pointer-events-none" />

        {/* Desktop: Left-to-right editorial vignette leaving the center & right pizza vibrant */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/45 to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/40 pointer-events-none" />
      </div>

      {/* Top spacer to balance fixed navigation */}
      <div className="w-full h-20 sm:h-24 shrink-0 pointer-events-none" />

      {/* 3. Sequential Animated Hero Typography Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-2xl sm:max-w-3xl space-y-6">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-brick-500 shadow-[0_0_8px_#C25E35] animate-pulse" />
            <span className="editorial-caps text-[11px] sm:text-xs text-ivory-200 tracking-loose-caps font-semibold">
              BHUBANESWAR &bull; ARTISAN PIZZERIA
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory-50 tracking-tight leading-[1.02] drop-shadow-sm">
              Pizza, baked <br className="hidden sm:inline" />
              with <span className="font-normal italic text-brick-400 font-serif">character.</span>
            </h1>
          </motion.div>

          {/* Short Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-ivory-200/90 font-light max-w-xl leading-relaxed drop-shadow-sm"
          >
            48-hour fermented sourdough flash-baked at 450&deg;C in our wood-fired clay dome. Two neighbourhood ovens in Sahid Nagar &amp; Patia.
          </motion.p>

          {/* Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenMenu}
              className="tracking-editorial px-7 py-3.5 text-xs sm:text-sm font-semibold shadow-elevated"
            >
              EXPLORE MENU
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onOpenReservation}
              className="!text-ivory-50 !border-white/35 hover:!border-white hover:!bg-white/10 tracking-editorial px-7 py-3.5 text-xs sm:text-sm font-semibold backdrop-blur-sm"
            >
              RESERVE A TABLE
            </Button>
          </motion.div>

        </div>
      </div>

      {/* 4. Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.75 }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 flex items-center justify-between text-xs text-ivory-300/80"
      >
        <div className="hidden sm:flex items-center gap-2">
          <span className="editorial-caps text-[10px] text-ivory-400">
            Slow Dough &bull; High Heat &bull; 90-Second Bake
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
