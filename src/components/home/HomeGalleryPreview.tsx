import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import { useRouter } from '../../router';

export const HomeGalleryPreview: React.FC = () => {
  const { navigate } = useRouter();

  // 5 Curated authentic images for homepage preview
  const previewImages = [
    {
      src: '/images/official/gallery-1.webp',
      alt: 'Wood-fired pizza baking inside Brick & Clay oven',
      caption: 'The Live Hearth',
      span: 'md:col-span-7 aspect-[16/10]',
    },
    {
      src: '/images/official/gallery-3.webp',
      alt: 'Handcrafted pizza crust with fresh toppings',
      caption: 'Artisan Toppings',
      span: 'md:col-span-5 aspect-[4/3]',
    },
    {
      src: '/images/official/gallery-4.webp',
      alt: 'Chef stretching sourdough dough',
      caption: 'Dough Craft',
      span: 'md:col-span-4 aspect-[4/3]',
    },
    {
      src: '/images/official/gallery-6.webp',
      alt: 'Dining room atmosphere at Brick & Clay',
      caption: 'The Dining Room',
      span: 'md:col-span-4 aspect-[4/3]',
    },
    {
      src: '/images/hero-pizza.jpg',
      alt: 'Golden blistered Neapolitan pizza',
      caption: 'Fresh From Fire',
      span: 'md:col-span-4 aspect-[4/3]',
    },
  ];

  return (
    <section
      aria-label="Visual Gallery Preview"
      className="py-20 sm:py-28 bg-background-primary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
              <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
                VISUAL ARCHIVE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.1]">
              A look <br className="hidden sm:inline" />
              <span className="font-normal italic text-brick-600 font-serif">
                inside.
              </span>
            </h2>

            <p className="text-charcoal-600 text-sm sm:text-base font-light leading-relaxed">
              Moments from the kitchen, the clay oven embers, and our dining rooms in Bhubaneswar.
            </p>
          </div>

          <button
            onClick={() => navigate('/gallery')}
            className="group text-xs uppercase tracking-editorial font-semibold text-charcoal-900 hover:text-brick-600 transition-colors inline-flex items-center gap-2 self-start sm:self-auto shrink-0 pb-1 border-b border-charcoal-900 hover:border-brick-600 focus-editorial"
          >
            <Camera className="w-3.5 h-3.5 text-brick-500" />
            <span>VIEW FULL GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5 text-brick-500 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Masonry / Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {previewImages.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => navigate('/gallery')}
              className={`${img.span} group relative rounded-subtle overflow-hidden border border-clay-300 bg-charcoal-950 shadow-subtle hover:shadow-elevated transition-all cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-ivory-100 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="editorial-caps text-[10px] text-ivory-50 font-medium">
                  {img.caption}
                </span>
                <span className="text-[10px] text-brick-300 font-mono">
                  View &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
