import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, UtensilsCrossed, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

interface SignaturePizzasProps {
  onOpenMenu: () => void;
  onOpenReservation: () => void;
}

interface SignatureItem {
  id: string;
  name: string;
  italianName: string;
  category: string;
  description: string;
  ingredients: string[];
  imageSrc: string;
  badgeText?: string;
  isVegetarian?: boolean;
}

const SIGNATURE_PIZZAS: SignatureItem[] = [
  {
    id: 'margherita-2',
    name: 'Margherita 2.0',
    italianName: 'La Vera Margherita Napoletana',
    category: 'Heritage Craft',
    badgeText: 'The Benchmark',
    description:
      'San Marzano tomato pulp, fresh buffalo fior di latte, hand-torn sweet basil, and a finishing swirl of cold-pressed extra virgin olive oil over our 48-hour cold-fermented sourdough.',
    ingredients: ['San Marzano Tomato', 'Buffalo Fior di Latte', 'Hand-Torn Basil', 'Cold-Pressed EVOO'],
    imageSrc: '/images/hero-pizza.jpg',
    isVegetarian: true,
  },
  {
    id: 'fab-di-funghi',
    name: 'Fab di Funghi',
    italianName: 'Funghi Selvatici & Crema al Tartufo',
    category: 'Woodland Truffle',
    badgeText: 'House Favorite',
    description:
      'Caramelized woodland mushrooms, slow-roasted garlic crema, melted mozzarella, fresh garden thyme, and an aromatic drizzle of black truffle oil.',
    ingredients: ['Forest Mushrooms', 'Black Truffle Oil', 'Roasted Garlic Crema', 'Fresh Thyme'],
    imageSrc: '/images/fab-di-funghi.jpg',
    isVegetarian: true,
  },
  {
    id: 'pollo-pesto',
    name: 'Pollo Pesto',
    italianName: 'Pollo Arrosto & Pesto Genovese',
    category: 'Herb Roasted',
    badgeText: 'Artisan Roast',
    description:
      'Tender herb-marinated roast chicken breast slivers, vibrant emerald basil pesto, smoked scamorza cheese, toasted pine nuts, and shavings of parmesan.',
    ingredients: ['Herb Roast Chicken', 'Genovese Basil Pesto', 'Toasted Pine Nuts', 'Smoked Scamorza'],
    imageSrc: '/images/pollo-pesto.jpg',
    isVegetarian: false,
  },
];

export const SignaturePizzas: React.FC<SignaturePizzasProps> = ({
  onOpenMenu,
  onOpenReservation,
}) => {
  return (
    <section
      id="signature-pizzas"
      aria-label="Signature Pizzas from the Oven"
      className="py-24 sm:py-32 bg-background-primary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-brick-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-clay-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Eyebrow + Large Heading + Short Supporting Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-5"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              FROM THE OVEN
            </span>
          </div>

          {/* Large Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            Made for people who take <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              pizza seriously.
            </span>
          </h2>

          {/* Short Supporting Copy */}
          <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Every pie begins with a 48-hour cold fermentation. Stretched by hand, dressed with honest Italian foundations, and kissed by live hardwood fire in our 450&deg;C clay dome.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* DESKTOP SHOWCASE: Editorial Asymmetric Layout with Overlaps */}
        {/* ============================================================== */}
        <div className="hidden lg:block space-y-24">
          
          {/* 1. Primary Feature Plate (Margherita 2.0) - Panoramic Asymmetric Showcase */}
          {SIGNATURE_PIZZAS[0] && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-12 gap-8 items-center"
            >
              {/* Large Image Frame (8 cols) */}
              <div className="col-span-8 relative">
                <div className="relative overflow-hidden rounded-subtle border border-clay-300 bg-charcoal-950 shadow-elevated">
                  <img
                    src={SIGNATURE_PIZZAS[0].imageSrc}
                    alt={SIGNATURE_PIZZAS[0].name}
                    className="w-full h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Stamp Badge */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-subtle bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 text-[11px] font-sans uppercase tracking-editorial">
                    <Flame className="w-3 h-3 text-brick-400" />
                    <span>{SIGNATURE_PIZZAS[0].badgeText}</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Editorial Info Panel (6 cols, offset to overlap) */}
              <div className="col-span-5 -ml-16 z-20">
                <div className="p-8 sm:p-10 rounded-subtle bg-surface-primary/95 backdrop-blur-md border border-clay-300 shadow-float space-y-5 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between border-b border-clay-200 pb-3">
                    <span className="editorial-caps text-[10px] text-brick-600 font-semibold">
                      {SIGNATURE_PIZZAS[0].category}
                    </span>
                    <span className="editorial-caps text-[10px] text-charcoal-500">
                      01 &bull; Signatura
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                      {SIGNATURE_PIZZAS[0].name}
                    </h3>
                    <p className="font-serif italic text-sm text-charcoal-500 mt-1">
                      {SIGNATURE_PIZZAS[0].italianName}
                    </p>
                  </div>

                  <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                    {SIGNATURE_PIZZAS[0].description}
                  </p>

                  {/* Ingredients Tags */}
                  <div className="space-y-2 pt-2 border-t border-clay-200/80">
                    <span className="editorial-caps text-[9px] text-charcoal-400 block">
                      Key Ingredients
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {SIGNATURE_PIZZAS[0].ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-[10px] bg-clay-100 text-charcoal-700 px-2 py-0.5 rounded-subtle font-sans"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={onOpenMenu}
                      className="text-xs uppercase tracking-editorial font-semibold text-charcoal-900 hover:text-brick-600 transition-colors inline-flex items-center gap-1.5 group/btn"
                    >
                      <span>Menu Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-brick-500" />
                    </button>
                    <span className="text-xs font-serif italic text-charcoal-500">
                      Neapolitan Standard
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* 2. Secondary Two-Column Editorial Pair (Fab di Funghi & Pollo Pesto) */}
          <div className="grid grid-cols-2 gap-12 lg:gap-16 pt-4">
            
            {/* Left Card: Fab di Funghi */}
            {SIGNATURE_PIZZAS[1] && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden rounded-subtle border border-clay-300 bg-charcoal-950 shadow-elevated">
                  <img
                    src={SIGNATURE_PIZZAS[1].imageSrc}
                    alt={SIGNATURE_PIZZAS[1].name}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-subtle bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 text-[10px] font-sans uppercase tracking-editorial">
                    {SIGNATURE_PIZZAS[1].badgeText}
                  </div>
                </div>

                {/* Overlapping Info Card */}
                <div className="-mt-16 mx-4 relative z-20 p-7 rounded-subtle bg-surface-primary/95 backdrop-blur-md border border-clay-300 shadow-float space-y-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between border-b border-clay-200 pb-2">
                    <span className="editorial-caps text-[10px] text-brick-600 font-semibold">
                      {SIGNATURE_PIZZAS[1].category}
                    </span>
                    <span className="editorial-caps text-[10px] text-charcoal-500">
                      02 &bull; Bianca
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                      {SIGNATURE_PIZZAS[1].name}
                    </h3>
                    <p className="font-serif italic text-xs text-charcoal-500 mt-0.5">
                      {SIGNATURE_PIZZAS[1].italianName}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light line-clamp-3">
                    {SIGNATURE_PIZZAS[1].description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {SIGNATURE_PIZZAS[1].ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] bg-clay-100 text-charcoal-700 px-2 py-0.5 rounded-subtle font-sans"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )}

            {/* Right Card: Pollo Pesto */}
            {SIGNATURE_PIZZAS[2] && (
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden rounded-subtle border border-clay-300 bg-charcoal-950 shadow-elevated">
                  <img
                    src={SIGNATURE_PIZZAS[2].imageSrc}
                    alt={SIGNATURE_PIZZAS[2].name}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-subtle bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 text-[10px] font-sans uppercase tracking-editorial">
                    {SIGNATURE_PIZZAS[2].badgeText}
                  </div>
                </div>

                {/* Overlapping Info Card */}
                <div className="-mt-16 mx-4 relative z-20 p-7 rounded-subtle bg-surface-primary/95 backdrop-blur-md border border-clay-300 shadow-float space-y-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between border-b border-clay-200 pb-2">
                    <span className="editorial-caps text-[10px] text-brick-600 font-semibold">
                      {SIGNATURE_PIZZAS[2].category}
                    </span>
                    <span className="editorial-caps text-[10px] text-charcoal-500">
                      03 &bull; Carne
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                      {SIGNATURE_PIZZAS[2].name}
                    </h3>
                    <p className="font-serif italic text-xs text-charcoal-500 mt-0.5">
                      {SIGNATURE_PIZZAS[2].italianName}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light line-clamp-3">
                    {SIGNATURE_PIZZAS[2].description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {SIGNATURE_PIZZAS[2].ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] bg-clay-100 text-charcoal-700 px-2 py-0.5 rounded-subtle font-sans"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )}

          </div>

        </div>

        {/* ============================================================== */}
        {/* MOBILE SHOWCASE: Curated Swipe & Scroll Experience */}
        {/* ============================================================== */}
        <div className="lg:hidden space-y-8">
          {/* Horizontal Snap Scroll Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-4 px-4 scrollbar-none">
            {SIGNATURE_PIZZAS.map((item, index) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[84vw] max-w-[340px] flex flex-col rounded-subtle border border-clay-300 bg-surface-primary shadow-elevated overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 w-full bg-charcoal-950 overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-subtle bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 text-[10px] font-sans uppercase tracking-editorial">
                    {item.badgeText}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="editorial-caps text-[10px] text-brick-600 font-semibold">
                        {item.category}
                      </span>
                      <span className="font-mono text-[10px] text-charcoal-400">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                      {item.name}
                    </h3>
                    <p className="font-serif italic text-xs text-charcoal-500">
                      {item.italianName}
                    </p>

                    <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-clay-200">
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="text-[10px] bg-clay-100 text-charcoal-700 px-2 py-0.5 rounded font-sans"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-[11px] text-charcoal-400 font-sans tracking-editorial uppercase">
            &larr; Swipe to view signature creations &rarr;
          </div>
        </div>

        {/* Section CTA: EXPLORE FULL MENU */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-clay-300/80 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-charcoal-900 font-medium">
              Craving more wood-fired artisanal specials?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              Explore our folded calzones, fresh pastas, roasted garlic flatbreads, and Italian desserts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              onClick={onOpenReservation}
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="left"
              className="w-full sm:w-auto justify-center"
            >
              BOOK A TABLE
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenMenu}
              icon={<UtensilsCrossed className="w-4 h-4" />}
              iconPosition="left"
              className="w-full sm:w-auto justify-center"
            >
              EXPLORE FULL MENU
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
