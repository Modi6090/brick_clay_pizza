import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Clock, Sparkles, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface CraftStage {
  id: string;
  stepNumber: string;
  shortName: string;
  title: string;
  italianTitle: string;
  description: string;
  imageSrc: string;
  craftPillar: string;
  tagline: string;
}

const CRAFT_STAGES: CraftStage[] = [
  {
    id: 'dough',
    stepNumber: '01',
    shortName: 'Dough',
    title: 'The Sourdough Foundation',
    italianTitle: "L'Impasto & La Lenta Maturazione",
    description:
      'Time and patience transform simple flour, water, and wild yeast into an airy, digestible dough. Hand-stretched with gentle care to preserve the delicate air pockets that blossom in the oven.',
    imageSrc: '/images/dough-craft.jpg',
    craftPillar: 'Natural Slow Fermentation',
    tagline: 'Gentle hands, zero artificial improvers',
  },
  {
    id: 'sauce',
    stepNumber: '02',
    shortName: 'Sauce',
    title: 'Sun-Ripened Sweetness',
    italianTitle: 'Il Pomodoro Crudo al Naturale',
    description:
      'Sun-sweet Italian plum tomatoes, hand-crushed raw to protect their vibrant natural acidity and gentle sweetness. Seasoned with nothing more than coarse sea salt and cold-pressed extra virgin olive oil.',
    imageSrc: '/images/sauce-craft.jpg',
    craftPillar: 'Cold-Crushed Plum Tomatoes',
    tagline: 'Pure fruit integrity, never cooked before the oven',
  },
  {
    id: 'toppings',
    stepNumber: '03',
    shortName: 'Toppings',
    title: 'Restraint & Balance',
    italianTitle: 'Gli Ingredienti Artigianali',
    description:
      'Artisanal cheeses torn fresh by hand, sweet garden basil, woodland mushrooms, and subtle herbs. We practice Italian culinary discipline: every topping exists to complement, never overwhelm, the crust.',
    imageSrc: '/images/toppings-craft.jpg',
    craftPillar: 'Hand-Torn Fior di Latte',
    tagline: 'Curated simplicity where every ingredient sings',
  },
  {
    id: 'fire',
    stepNumber: '04',
    shortName: 'Fire',
    title: 'The Flame & The Clay Dome',
    italianTitle: 'Il Forno a Legna & La Fiamma',
    description:
      'Natural hardwood embers radiate intense heat inside our hand-built clay dome. Within seconds, the dough rises explosively, forming the celebrated blistered cornicione with smoky caramelized leopard spotting.',
    imageSrc: '/images/clay-oven.jpg',
    craftPillar: 'Wood-Fired Flash Bake',
    tagline: 'High heat, live embers, and blistered crust',
  },
];

export const CraftStory: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = CRAFT_STAGES[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % CRAFT_STAGES.length);
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev - 1 + CRAFT_STAGES.length) % CRAFT_STAGES.length);
  };

  return (
    <section
      id="story"
      aria-label="The Pizza-Making Experience"
      className="py-24 sm:py-32 bg-background-secondary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-clay-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brick-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-16 space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              THE CRAFT &amp; PROCESS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            From the first stretch <br className="hidden sm:inline" />
            to the <span className="font-normal italic text-brick-600 font-serif">final bake.</span>
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Great pizza is not born from speed. It is an honest dialogue between time, natural fermentation, and the intense heat of wood fire.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* DESKTOP EXPERIENCE: Interactive Stage Stepper + Cinematic Spread */}
        {/* ============================================================== */}
        <div className="hidden lg:block space-y-10">
          
          {/* Stage Progress Stepper (Dough → Sauce → Toppings → Fire) */}
          <div className="flex items-center justify-between border-b border-clay-300 pb-4">
            <div className="flex items-center gap-2">
              {CRAFT_STAGES.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                const isPast = idx < activeStageIndex;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`group flex items-center gap-3 px-5 py-3 rounded-subtle transition-all duration-300 focus-editorial ${
                      isActive
                        ? 'bg-charcoal-900 text-ivory-50 shadow-subtle'
                        : 'text-charcoal-700 hover:bg-clay-100 hover:text-charcoal-950'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs ${
                        isActive ? 'text-brick-400 font-semibold' : 'text-charcoal-400 group-hover:text-charcoal-600'
                      }`}
                    >
                      {stage.stepNumber}
                    </span>
                    <span className="editorial-caps text-xs font-semibold tracking-editorial">
                      {stage.shortName}
                    </span>
                    {isPast && (
                      <Check className="w-3.5 h-3.5 text-olive-600 ml-1" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous craft stage"
                className="p-2.5 rounded-subtle border border-clay-300 hover:border-charcoal-900 text-charcoal-700 hover:text-charcoal-950 transition-colors focus-editorial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next craft stage"
                className="p-2.5 rounded-subtle border border-clay-300 hover:border-charcoal-900 text-charcoal-700 hover:text-charcoal-950 transition-colors focus-editorial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Stage Editorial Spread */}
          <div className="relative min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-12 gap-10 items-center"
              >
                {/* Large Cinematic Image (7 cols) */}
                <div className="col-span-7 relative">
                  <div className="relative overflow-hidden rounded-subtle border border-clay-300 bg-charcoal-950 shadow-elevated">
                    <img
                      src={activeStage.imageSrc}
                      alt={activeStage.title}
                      className="w-full h-[500px] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-ivory-100">
                      <span className="editorial-caps text-[10px] text-brick-300">
                        {activeStage.tagline}
                      </span>
                      <span className="font-mono text-[11px] text-ivory-300">
                        Stage {activeStage.stepNumber} of 04
                      </span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Content Panel (5 cols) */}
                <div className="col-span-5 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-brick-600">
                        STAGE {activeStage.stepNumber}
                      </span>
                      <span className="text-charcoal-300">&bull;</span>
                      <span className="editorial-caps text-xs text-charcoal-500">
                        {activeStage.craftPillar}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal-900 leading-tight">
                      {activeStage.title}
                    </h3>

                    <p className="font-serif italic text-sm text-charcoal-500">
                      {activeStage.italianTitle}
                    </p>
                  </div>

                  <p className="text-charcoal-600 text-base leading-relaxed font-light">
                    {activeStage.description}
                  </p>

                  <div className="pt-4 border-t border-clay-300/80 flex items-center gap-4 text-xs text-charcoal-500">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brick-600" />
                      <span>Natural Timing</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-brick-600" />
                      <span>Artisanal Touch</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

        </div>

        {/* ============================================================== */}
        {/* MOBILE EXPERIENCE: Clean Vertical Sequence with High Performance */}
        {/* ============================================================== */}
        <div className="lg:hidden space-y-12">
          {CRAFT_STAGES.map((stage) => (
            <article
              key={stage.id}
              className="rounded-subtle border border-clay-300 bg-surface-primary overflow-hidden shadow-subtle space-y-4 p-5 sm:p-6"
            >
              {/* Image Frame */}
              <div className="relative h-60 w-full rounded-subtle overflow-hidden bg-charcoal-950 border border-clay-200">
                <img
                  src={stage.imageSrc}
                  alt={stage.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-subtle bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 text-[10px] font-mono">
                  STAGE {stage.stepNumber} &bull; {stage.shortName.toUpperCase()}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 pt-1">
                <span className="editorial-caps text-[10px] text-brick-600 font-semibold block">
                  {stage.craftPillar}
                </span>

                <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                  {stage.title}
                </h3>

                <p className="font-serif italic text-xs text-charcoal-500">
                  {stage.italianTitle}
                </p>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light pt-1">
                  {stage.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Philosophy Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-subtle border border-clay-300 bg-ivory-50 text-center max-w-3xl mx-auto shadow-subtle space-y-2"
        >
          <Sparkles className="w-5 h-5 text-brick-500 mx-auto" />
          <blockquote className="font-serif italic text-lg sm:text-2xl text-charcoal-900 leading-relaxed">
            "Respect the fire, honor the grain, and never rush the dough."
          </blockquote>
          <span className="editorial-caps text-[10px] text-charcoal-500 block pt-1">
            The Brick &amp; Clay Craft Philosophy &bull; Bhubaneswar
          </span>
        </motion.div>

      </div>
    </section>
  );
};
