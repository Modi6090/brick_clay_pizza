import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Clock, Sparkles } from 'lucide-react';
import { useRouter } from '../../router';

export const HomeCraftSection: React.FC = () => {
  const { navigate } = useRouter();

  const craftSteps = [
    {
      num: '01',
      title: 'The Sourdough Starter',
      desc: 'Slow natural fermentation gives the crust its airy lightness and digestibility, with zero chemical additives.',
      img: '/images/dough-craft.jpg',
      alt: 'Hand stretching artisan sourdough pizza dough at Brick & Clay',
    },
    {
      num: '02',
      title: 'Live Hardwood Fire',
      desc: 'Hand-stoked wood embers create intense dome heat, baking every pie in approximately 90 blistered seconds.',
      img: '/images/clay-oven.jpg',
      alt: 'Live wood-fired clay dome oven at Brick & Clay',
    },
    {
      num: '03',
      title: 'Handcrafted Finish',
      desc: 'Finished with cold-pressed extra virgin olive oil, fresh garden basil, and hand-torn Italian cheeses.',
      img: '/images/official/gallery-4.webp',
      alt: 'Chef dressing handcrafted pizza fresh from the oven',
    },
  ];

  return (
    <section
      aria-label="The Wood-Fired Craft"
      className="py-20 sm:py-28 bg-background-primary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              THE LIVE OVEN METHOD
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.1]">
            The fire is part of <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              the recipe.
            </span>
          </h2>

          <p className="text-charcoal-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            In Neapolitan tradition, fire is an active ingredient. The intense heat of our live clay dome caramelizes the crust while preserving moisture within the tender crumb.
          </p>
        </div>

        {/* 3-Column Visual Craft Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {craftSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-surface-primary rounded-subtle border border-clay-300 shadow-subtle hover:shadow-elevated transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-950">
                <img
                  src={step.img}
                  alt={step.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 font-mono text-[10px]">
                  PHASE {step.num}
                </div>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-clay-200/80 flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                  <span className="flex items-center gap-1 text-brick-600">
                    {idx === 0 && <Clock className="w-3.5 h-3.5" />}
                    {idx === 1 && <Flame className="w-3.5 h-3.5" />}
                    {idx === 2 && <Sparkles className="w-3.5 h-3.5" />}
                    {idx === 0 ? 'Slow Ferment' : idx === 1 ? 'Live Embers' : 'Artisanal Touch'}
                  </span>
                  <span>Authentic</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Link to /about */}
        <div className="mt-10 sm:mt-12 text-center sm:text-left">
          <button
            onClick={() => navigate('/about')}
            className="group text-xs uppercase tracking-editorial font-semibold text-charcoal-900 hover:text-brick-600 transition-colors inline-flex items-center gap-2 pb-1 border-b border-charcoal-900 hover:border-brick-600 focus-editorial"
          >
            <span>SEE THE CRAFT</span>
            <ArrowRight className="w-4 h-4 text-brick-500 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
