import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { useRouter } from '../router';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Our Story & Craft — Brick & Clay | Wood-Fired Pizzeria';
  }, []);

  const pillars = [
    {
      num: '01',
      title: 'Slow Cold Fermentation',
      desc: 'Our sourdough matures over two days, developing nuanced lactic acidity and natural gas pockets that produce the airy, puffed cornicione gentle on digestion.',
      tag: '48-Hour Maturation',
      img: '/images/dough-craft.jpg',
    },
    {
      num: '02',
      title: 'Raw Plum Tomatoes',
      desc: 'Sun-sweet Italian plum tomatoes, crushed cold and seasoned simply with coarse sea salt and cold-pressed extra virgin olive oil. Never cooked before touching the oven.',
      tag: 'Pure Integrity',
      img: '/images/sauce-craft.jpg',
    },
    {
      num: '03',
      title: 'Restrained Toppings',
      desc: 'We follow traditional Italian culinary discipline: hand-torn Fior di Latte, fresh garden basil, woodland mushrooms, and subtle herbs. Every topping complements rather than overwhelms the crust.',
      tag: 'Artisanal Discipline',
      img: '/images/toppings-craft.jpg',
    },
    {
      num: '04',
      title: 'Live Hardwood Flame',
      desc: 'Inside our hand-built clay dome oven, live hardwood embers radiate intense heat, blistering the crust in approximately 90 seconds while sealing in tenderness.',
      tag: 'Clay Dome Heat',
      img: '/images/clay-oven.jpg',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 min-h-screen bg-background-primary text-typography-primary">
      
      {/* 1. Cinematic Story Hero */}
      <section className="bg-charcoal-950 text-ivory-50 py-20 sm:py-28 relative overflow-hidden border-b border-charcoal-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/restaurant-ambiance.jpg"
            alt="Brick & Clay restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-brick-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-brick-500" />
              <span>ESTABLISHED 2019 &bull; BHUBANESWAR</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-ivory-50 tracking-tight leading-[1.05]">
              Built On Fire. <br />
              <span className="font-normal italic text-brick-400 font-serif">
                Driven By Craft.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ivory-200/80 font-light max-w-2xl leading-relaxed">
              Brick &amp; Clay began with a single wood-fired oven and an obsession with Neapolitan tradition. Here is how we make pizza with patience, fire, and uncompromised ingredients in Odisha.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Narrative Story Section */}
      <section className="py-20 sm:py-28 bg-surface-primary border-b border-clay-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo Spread */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-subtle overflow-hidden border border-clay-300 shadow-elevated bg-charcoal-950 aspect-[4/5]">
                <img
                  src="/images/official/branded-1.webp"
                  alt="Dough stretching at Brick & Clay"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-ivory-100 text-xs flex justify-between items-center">
                  <span className="editorial-caps text-[10px] text-brick-300 font-semibold">
                    KITCHEN PHILOSOPHY
                  </span>
                  <span className="font-mono text-[10px] text-ivory-300">
                    Hand-Stretched Daily
                  </span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="editorial-caps text-xs text-brick-600 font-semibold tracking-loose-caps">
                  OUR ORIGIN &bull; 2019
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.1]">
                  Authentic Italian pizza, <br />
                  <span className="font-normal italic text-brick-600 font-serif">
                    born in Bhubaneswar.
                  </span>
                </h2>
              </div>

              <p className="text-charcoal-700 text-sm sm:text-base font-light leading-relaxed">
                Brick &amp; Clay started in 2019 to introduce genuine wood-fired pizza to Bhubaneswar. Instead of commercial shortcuts and conveyor ovens, we committed to the traditional Neapolitan methodology: high-hydration sourdough, live clay dome hearths, and balanced Italian flavor profiles.
              </p>

              <p className="text-charcoal-700 text-sm sm:text-base font-light leading-relaxed">
                From our flagship dining room at Saheed Nagar's BMC Bhawani Mall to our student and family hub near KIIT Square in Patia, each kitchen operates around a dedicated live wood oven stoked fresh every morning.
              </p>

              <div className="p-4 rounded-subtle bg-clay-100/60 border border-clay-200/80 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brick-600 shrink-0" />
                <p className="text-xs text-charcoal-700 font-medium">
                  Currently serving across two dedicated kitchens in Saheed Nagar and Patia, Bhubaneswar.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The 4 Craft Pillars */}
      <section className="py-20 sm:py-28 bg-background-secondary border-b border-clay-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 sm:mb-16 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
              <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
                THE FOUR PILLARS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.1]">
              How we build <br className="hidden sm:inline" />
              <span className="font-normal italic text-brick-600 font-serif">
                every single pie.
              </span>
            </h2>

            <p className="text-charcoal-600 text-sm sm:text-base font-light leading-relaxed">
              No commercial yeast packets, no pre-cooked sauces, and no electric conveyors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface-primary rounded-subtle border border-clay-300 shadow-subtle overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-charcoal-950">
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal-950/80 text-ivory-100 font-mono text-[10px] border border-white/10">
                    PILLAR {pillar.num}
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] text-brick-300 font-mono">
                    {pillar.tag}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-2">
                  <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Craft Quote & Navigation CTA */}
      <section className="py-20 bg-charcoal-950 text-ivory-50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Sparkles className="w-6 h-6 text-brick-400 mx-auto" />
          <blockquote className="font-serif italic text-2xl sm:text-3xl text-ivory-100 leading-relaxed font-light">
            "Respect the fire, honor the grain, and never rush the dough."
          </blockquote>
          <p className="text-xs uppercase tracking-editorial text-charcoal-400 font-mono">
            Brick &amp; Clay Kitchen Manifesto &bull; Bhubaneswar
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/menu')}
              className="px-6 py-3 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all inline-flex items-center gap-2 shadow-elevated"
            >
              <span>EXPLORE THE MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/gallery')}
              className="px-6 py-3 rounded-subtle bg-charcoal-900 hover:bg-charcoal-800 text-ivory-100 border border-charcoal-700 text-xs uppercase tracking-editorial font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>VIEW PHOTO GALLERY</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
