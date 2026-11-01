import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { useRouter } from '../../router';

export const RestaurantIntro: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      aria-label="About Brick & Clay"
      className="py-20 sm:py-28 bg-background-primary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Authentic Photography Plate (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-subtle overflow-hidden border border-clay-300 shadow-elevated bg-charcoal-950 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img
                src="/images/official/branded-1.webp"
                alt="Dough preparation and craft at Brick & Clay"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Verified Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory-100 text-xs">
                <span className="editorial-caps text-[10px] text-brick-300 font-semibold tracking-loose-caps">
                  FOUNDED 2019 &bull; BHUBANESWAR
                </span>
                <span className="text-[10px] font-mono text-ivory-200/80">
                  Naples Craft
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Story Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
                <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
                  THE BRICK &amp; CLAY WAY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.1]">
                Built on tradition. <br />
                <span className="font-normal italic text-brick-600 font-serif">
                  Not shortcuts.
                </span>
              </h2>
            </div>

            <p className="text-charcoal-700 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              Started in 2019 with a simple obsession: pizza done the authentic Neapolitan way, without compromise. From our live wood-fire ovens in Saheed Nagar and Patia, we ferment our sourdough across two slow days and flash-bake every pie in blistering clay dome heat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-subtle bg-clay-100/60 border border-clay-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-brick-700 font-semibold editorial-caps">
                  <Flame className="w-3.5 h-3.5 text-brick-600" />
                  <span>400°C CLAY OVEN</span>
                </div>
                <p className="text-xs text-charcoal-600 font-light">
                  Live hardwood fire locks moisture in while blistering the crust in 90 seconds.
                </p>
              </div>

              <div className="p-4 rounded-subtle bg-clay-100/60 border border-clay-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-olive-800 font-semibold editorial-caps">
                  <Sparkles className="w-3.5 h-3.5 text-olive-600" />
                  <span>48-HR SOURDOUGH</span>
                </div>
                <p className="text-xs text-charcoal-600 font-light">
                  Slow cold maturation produces an airy, puffed cornicione gentle on digestion.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigate('/about')}
                className="group text-xs uppercase tracking-editorial font-semibold text-charcoal-900 hover:text-brick-600 transition-colors inline-flex items-center gap-2 focus-editorial"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-brick-500 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
