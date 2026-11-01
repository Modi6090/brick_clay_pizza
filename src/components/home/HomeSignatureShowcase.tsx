import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, UtensilsCrossed } from 'lucide-react';
import { SIGNATURE_PICKS } from '../../data/brickAndClayMenu';
import { useRouter } from '../../router';

export const HomeSignatureShowcase: React.FC = () => {
  const { navigate } = useRouter();

  // Featured 5 dishes for the homepage editorial cadence
  const featured = SIGNATURE_PICKS.slice(0, 5);

  return (
    <section
      id="signatures"
      aria-label="Signature Dishes from the Oven"
      className="py-20 sm:py-28 bg-background-secondary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
              <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
                FROM THE OVEN
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
              A few things <br className="hidden sm:inline" />
              <span className="font-normal italic text-brick-600 font-serif">
                worth discovering.
              </span>
            </h2>

            <p className="text-charcoal-600 text-sm sm:text-base font-light leading-relaxed">
              A curated preview of our slow-fermented wood-fired pizzas and handmade pastas before you explore the full 53-dish menu.
            </p>
          </div>

          <button
            onClick={() => navigate('/menu')}
            className="group text-xs uppercase tracking-editorial font-semibold text-charcoal-900 hover:text-brick-600 transition-colors inline-flex items-center gap-2 self-start md:self-auto shrink-0 pb-1 border-b border-charcoal-900 hover:border-brick-600 focus-editorial"
          >
            <span>SEE COMPLETE MENU</span>
            <ArrowRight className="w-4 h-4 text-brick-500 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* ============================================================== */}
        {/* EDITORIAL FOOD MAGAZINE COMPOSITION (4-5 DISHES MAX) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Item 1: Large Featured Plate (7 cols) — Fab Di Funghi */}
          {featured[1] && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55 }}
              onClick={() => navigate('/menu')}
              className="md:col-span-7 group relative bg-surface-primary rounded-subtle border border-clay-300 shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-charcoal-950">
                <img
                  src={featured[1].image || '/images/fab-di-funghi.jpg'}
                  alt={featured[1].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 text-[10px] font-sans uppercase tracking-editorial">
                  <Flame className="w-3 h-3 text-brick-400" />
                  <span>Woodland Truffle</span>
                </div>

                <div className="absolute bottom-4 right-4 z-10">
                  <span className="font-mono text-base sm:text-lg font-semibold text-ivory-50 bg-charcoal-900/90 px-3 py-1 rounded-md border border-white/10">
                    {featured[1].price ? `₹${featured[1].price}` : 'Ask'}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                      {featured[1].name}
                    </h3>
                    {featured[1].italianName && (
                      <p className="font-serif italic text-xs text-charcoal-500 mt-0.5">
                        {featured[1].italianName}
                      </p>
                    )}
                  </div>
                  <span className="text-xs uppercase font-mono text-brick-600 font-semibold tracking-editorial shrink-0">
                    01 &bull; Signature
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  {featured[1].description}
                </p>

                <div className="pt-3 border-t border-clay-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal-400 font-light">
                    Porcini &bull; Shiitake &bull; Truffle Oil
                  </span>
                  <span className="text-xs uppercase tracking-editorial font-semibold text-brick-600 group-hover:text-brick-700 inline-flex items-center gap-1">
                    <span>View in Menu</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Item 2: Large Plate (5 cols) — Margherita 2.0 */}
          {featured[0] && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              onClick={() => navigate('/menu')}
              className="md:col-span-5 group relative bg-surface-primary rounded-subtle border border-clay-300 shadow-subtle hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-950">
                <img
                  src={featured[0].image || '/images/hero-pizza.jpg'}
                  alt={featured[0].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 right-3 z-10">
                  <span className="font-mono text-sm sm:text-base font-semibold text-ivory-50 bg-charcoal-900/90 px-2.5 py-1 rounded-md border border-white/10">
                    {featured[0].price ? `₹${featured[0].price}` : 'Ask'}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                    {featured[0].name}
                  </h3>
                  <p className="font-serif italic text-xs text-charcoal-500 mt-0.5">
                    {featured[0].italianName}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed mt-2 line-clamp-3">
                    {featured[0].description}
                  </p>
                </div>

                <div className="pt-3 border-t border-clay-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-charcoal-400 font-light">
                    Bufala &bull; Basil &bull; Pesto
                  </span>
                  <span className="text-xs uppercase tracking-editorial font-semibold text-brick-600 group-hover:text-brick-700 inline-flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Item 3, 4, 5: 3-column row below */}
          {featured.slice(2, 5).map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => navigate('/menu')}
              className="md:col-span-4 group bg-surface-primary rounded-subtle border border-clay-300 shadow-subtle hover:shadow-elevated transition-all duration-300 p-6 flex flex-col justify-between space-y-4 cursor-pointer"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="editorial-caps text-[10px] text-brick-600 font-semibold">
                    {item.category}
                  </span>
                  <span className="font-mono text-sm font-semibold text-charcoal-900">
                    {item.price ? `₹${item.price}` : 'Ask'}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                  {item.name}
                </h3>

                {item.italianName && (
                  <p className="font-serif italic text-xs text-charcoal-500">
                    {item.italianName}
                  </p>
                )}

                <p className="text-xs text-charcoal-600 font-light leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-clay-200/80 flex items-center justify-between">
                <span className="text-[10px] text-charcoal-400 font-mono">
                  {item.dietary === 'veg' ? 'Vegetarian' : 'Non-Veg'}
                </span>
                <span className="text-xs uppercase tracking-editorial font-semibold text-brick-600 group-hover:text-brick-700 inline-flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </motion.article>
          ))}

        </div>

        {/* Section Bottom Banner Linking to /menu */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-subtle bg-surface-primary border border-clay-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
              Explore All 53 Kitchen Creations
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light mt-0.5">
              Folded calzones, al dente spaghetti, garlic focaccias, and chef dips.
            </p>
          </div>

          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 rounded-subtle bg-charcoal-900 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all inline-flex items-center gap-2 focus-editorial shadow-subtle shrink-0"
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>OPEN COMPLETE MENU</span>
          </button>
        </div>

      </div>
    </section>
  );
};
