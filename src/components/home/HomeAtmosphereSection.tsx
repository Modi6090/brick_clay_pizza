import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Heart } from 'lucide-react';
import { useRouter } from '../../router';

export const HomeAtmosphereSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      aria-label="Restaurant Atmosphere & Dining Experience"
      className="py-20 sm:py-28 bg-background-secondary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              THE DINING ENVIRONMENT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.1]">
            More than <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              just pizza.
            </span>
          </h2>

          <p className="text-charcoal-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            A gathering place designed for unhurried dinners, shared crusts, and warm conversation. From ambient lighting to the open live oven, every detail invites you to slow down.
          </p>
        </div>

        {/* Dynamic Atmosphere Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12">
          
          {/* Left: Large Cinematic Dining Room Image (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-subtle overflow-hidden border border-clay-300 bg-charcoal-950 shadow-elevated relative min-h-[320px] sm:min-h-[420px] flex flex-col justify-end group"
          >
            <img
              src="/images/restaurant-ambiance.jpg"
              alt="Brick & Clay dining room ambience in Bhubaneswar"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent pointer-events-none" />

            <div className="relative z-10 p-6 sm:p-8 space-y-1 text-ivory-100">
              <span className="editorial-caps text-[10px] text-brick-300 font-semibold tracking-loose-caps block">
                SAHEED NAGAR &bull; PATIA
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory-50">
                Warm Light &amp; Unhurried Hospitality
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200/80 font-light max-w-lg">
                Intimate tables arranged for sharing wood-fired crusts, fresh pastas, and moments with loved ones.
              </p>
            </div>
          </motion.div>

          {/* Right: Stack of 2 Atmosphere Vignettes (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Top Vignette: Table Spread */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-subtle overflow-hidden border border-clay-300 bg-charcoal-950 shadow-subtle relative min-h-[200px] flex flex-col justify-end group"
            >
              <img
                src="/images/table-spread.jpg"
                alt="Table spread with pizzas and Italian plates at Brick & Clay"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 p-4 sm:p-5 text-ivory-100">
                <span className="editorial-caps text-[9px] text-brick-300 font-semibold block">
                  SHARED TABLES
                </span>
                <p className="font-serif text-lg font-medium text-ivory-50">
                  Passed Across The Hearth
                </p>
              </div>
            </motion.div>

            {/* Bottom Vignette: Official Food Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-subtle overflow-hidden border border-clay-300 bg-charcoal-950 shadow-subtle relative min-h-[200px] flex flex-col justify-end group"
            >
              <img
                src="/images/official/food-1.webp"
                alt="Freshly plated dish at Brick & Clay"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 p-4 sm:p-5 text-ivory-100">
                <span className="editorial-caps text-[9px] text-brick-300 font-semibold block">
                  KITCHEN CRAFT
                </span>
                <p className="font-serif text-lg font-medium text-ivory-50">
                  Made Fresh For Every Table
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/* 3 Atmosphere Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-clay-300/80">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-brick-600 editorial-caps">
              <Sparkles className="w-3.5 h-3.5 text-brick-500" />
              <span>LIVE OVEN VIEW</span>
            </div>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed">
              Watch your pizza shaped, seasoned, and fired in the glowing clay dome right from the dining room.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-olive-700 editorial-caps">
              <Users className="w-3.5 h-3.5 text-olive-600" />
              <span>CONVIVIAL DINING</span>
            </div>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed">
              Spacious seating welcoming families, student groups, and couples in both central and North Bhubaneswar.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-charcoal-800 editorial-caps">
              <Heart className="w-3.5 h-3.5 text-brick-500" />
              <span>NEIGHBOURHOOD WARMTH</span>
            </div>
            <p className="text-xs text-charcoal-600 font-light leading-relaxed">
              Attentive service and an authentic soundtrack reflecting traditional Italian hospitality.
            </p>
          </div>
        </div>

        {/* Subtle Action Link */}
        <div className="mt-8 text-center sm:text-left">
          <button
            onClick={() => navigate('/contact')}
            className="text-xs uppercase tracking-editorial font-semibold text-charcoal-900 hover:text-brick-600 transition-colors inline-flex items-center gap-1.5 focus-editorial"
          >
            <span>VISIT OUR OUTLETS &rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};
