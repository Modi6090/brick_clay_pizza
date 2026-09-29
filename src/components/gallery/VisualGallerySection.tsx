import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  italianTitle: string;
  category: 'pizza' | 'kitchen' | 'atmosphere' | 'dessert';
  categoryLabel: string;
  imageSrc: string;
  aspectSpan: 'tall' | 'wide' | 'square' | 'hero';
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-ambiance',
    title: 'Evening Dining Room',
    italianTitle: 'La Sala da Pranzo Sotto le Stelle',
    category: 'atmosphere',
    categoryLabel: 'Atmosphere',
    imageSrc: '/images/restaurant-ambiance.jpg',
    aspectSpan: 'hero',
    caption: 'Warm amber lighting, exposed brick walls, and cheerful dinner conversations centered around the glowing oven.',
  },
  {
    id: 'gallery-hero-pizza',
    title: 'Margherita 2.0 Cornicione',
    italianTitle: 'Il Cornicione Maculato',
    category: 'pizza',
    categoryLabel: 'Wood-Fired Pizza',
    imageSrc: '/images/hero-pizza.jpg',
    aspectSpan: 'square',
    caption: 'Blistered leopard charring and molten fior di latte on our 48-hour cold-fermented sourdough.',
  },
  {
    id: 'gallery-clay-oven',
    title: 'Live Hardwood Fire',
    italianTitle: 'La Fiamma del Forno a Legna',
    category: 'kitchen',
    categoryLabel: 'The Live Oven',
    imageSrc: '/images/clay-oven.jpg',
    aspectSpan: 'tall',
    caption: 'Hardwood logs burning at 450°C inside our hand-built clay dome, flash-baking pies in 90 seconds.',
  },
  {
    id: 'gallery-fab-funghi',
    title: 'Fab di Funghi on Volcanic Stone',
    italianTitle: 'Funghi Selvatici & Crema al Tartufo',
    category: 'pizza',
    categoryLabel: 'Wood-Fired Pizza',
    imageSrc: '/images/fab-di-funghi.jpg',
    aspectSpan: 'wide',
    caption: 'Caramelized woodland mushrooms, slow-roasted garlic white crema, and delicate drops of truffle oil.',
  },
  {
    id: 'gallery-dough-craft',
    title: 'The Sourdough Stretch',
    italianTitle: "L'Arte della Stesura a Mano",
    category: 'kitchen',
    categoryLabel: 'The Live Oven',
    imageSrc: '/images/dough-craft.jpg',
    aspectSpan: 'square',
    caption: 'Hand-stretched with gentle fingertips to keep the delicate internal air pockets intact.',
  },
  {
    id: 'gallery-mini-pancakes',
    title: 'Handcrafted Mini Pancakes',
    italianTitle: 'Frittelle Dolci alla Nutella',
    category: 'dessert',
    categoryLabel: 'Dolci & Desserts',
    imageSrc: '/images/mini-pancakes.jpg',
    aspectSpan: 'square',
    caption: 'Plump golden mini pancakes drizzled with warm chocolate hazelnut glaze and dusted with powdered sugar.',
  },
  {
    id: 'gallery-pollo-pesto',
    title: 'Pollo Pesto & Pine Nuts',
    italianTitle: 'Pollo Arrosto & Pesto Genovese',
    category: 'pizza',
    categoryLabel: 'Wood-Fired Pizza',
    imageSrc: '/images/pollo-pesto.jpg',
    aspectSpan: 'wide',
    caption: 'Herb-roasted chicken slivers, vibrant basil pesto swirl, and toasted pine nuts fresh from the oven.',
  },
  {
    id: 'gallery-table-spread',
    title: 'The Shared Italian Table',
    italianTitle: 'La Tavola Conviviale',
    category: 'atmosphere',
    categoryLabel: 'Atmosphere',
    imageSrc: '/images/table-spread.jpg',
    aspectSpan: 'tall',
    caption: 'An intimate table spread featuring wild mushroom pizza, handmade fettuccine, and fresh focaccia.',
  },
];

export const VisualGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Filtered gallery items
  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeLightboxItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredGallery.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
        );
      }
    },
    [lightboxIndex, filteredGallery.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  // Touch Swipe Handlers for Mobile Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || lightboxIndex === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe threshold (50px)
    if (diff > 50) {
      // Swiped left -> next
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredGallery.length : null));
    } else if (diff < -50) {
      // Swiped right -> prev
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
      );
    }
    setTouchStart(null);
  };

  return (
    <section
      id="gallery"
      aria-label="Visual Gallery"
      className="py-24 sm:py-32 bg-background-secondary text-typography-primary relative border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              VISUAL ARCHIVE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            Atmosphere, Craft &amp; <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              The Dining Table.
            </span>
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A glimpse into the wood-fired ovens, hand-shaped crusts, and warm evening gatherings at Brick &amp; Clay in Bhubaneswar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none sm:justify-center">
          {[
            { id: 'all', label: 'All Plates & Scenes' },
            { id: 'pizza', label: 'Wood-Fired Pizzas' },
            { id: 'kitchen', label: 'The Live Oven' },
            { id: 'atmosphere', label: 'Atmosphere' },
            { id: 'dessert', label: 'Dolci & Desserts' },
          ].map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-subtle text-xs uppercase tracking-editorial font-medium whitespace-nowrap transition-all duration-200 focus-editorial ${
                  isActive
                    ? 'bg-charcoal-900 text-ivory-50 shadow-subtle'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-clay-100/70'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* ASYMMETRIC EDITORIAL MASONRY GRID */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredGallery.map((item, index) => {
            // Asymmetric column and height mapping
            let colSpan = 'lg:col-span-4';
            let heightClass = 'h-72 sm:h-80';

            if (item.aspectSpan === 'hero') {
              colSpan = 'lg:col-span-8 md:col-span-2';
              heightClass = 'h-80 sm:h-[440px]';
            } else if (item.aspectSpan === 'tall') {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-80 sm:h-[440px]';
            } else if (item.aspectSpan === 'wide') {
              colSpan = 'lg:col-span-6';
              heightClass = 'h-72 sm:h-80';
            } else if (item.aspectSpan === 'square') {
              colSpan = 'lg:col-span-6';
              heightClass = 'h-72 sm:h-80';
            }

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-subtle border border-clay-300 bg-charcoal-950 shadow-subtle hover:shadow-elevated transition-all duration-300 cursor-pointer ${colSpan}`}
              >
                <div className={`relative w-full ${heightClass} overflow-hidden`}>
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] will-change-transform"
                  />

                  {/* Gentle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Corner Category Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="editorial-caps text-[9px] text-ivory-100 bg-charcoal-950/75 backdrop-blur-md px-2.5 py-1 rounded-subtle border border-white/10">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Corner Expand Icon on Hover */}
                  <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-subtle bg-charcoal-950/75 backdrop-blur-md border border-white/10 text-ivory-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Editorial Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-ivory-50 space-y-1 transform transition-transform duration-300">
                    <h3 className="font-serif text-lg sm:text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-xs text-ivory-300 line-clamp-1">
                      {item.italianTitle}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Ownership & Pitch Transparency Note */}
        <div className="mt-14 pt-8 border-t border-clay-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500 font-light">
          <p className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-brick-600 shrink-0" />
            <span>Visual imagery curated as reference and content assets for the Brick &amp; Clay pitch concept.</span>
          </p>
          <span className="editorial-caps text-[10px] text-charcoal-400">
            {filteredGallery.length} Photographic Plates
          </span>
        </div>

      </div>

      {/* ============================================================== */}
      {/* FULL-SCREEN ACCESSIBLE LIGHTBOX */}
      {/* ============================================================== */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-charcoal-950/96 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Lightbox Controls */}
            <div className="flex items-center justify-between text-ivory-200 border-b border-charcoal-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="editorial-caps text-xs text-brick-400 font-semibold">
                  {activeLightboxItem.categoryLabel}
                </span>
                <span className="text-charcoal-600">&bull;</span>
                <span className="font-mono text-xs text-charcoal-400">
                  {String(lightboxIndex + 1).padStart(2, '0')} / {String(filteredGallery.length).padStart(2, '0')}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox (Esc)"
                className="p-2 rounded-subtle bg-charcoal-900 border border-charcoal-700 text-charcoal-300 hover:text-ivory-50 hover:border-brick-500 transition-colors focus-editorial"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Media Stage */}
            <div className="relative flex-1 flex items-center justify-center py-4 my-auto">
              
              {/* Previous Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
                  );
                }}
                aria-label="Previous image (Left arrow)"
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-charcoal-700 text-ivory-100 hover:text-brick-400 hover:border-brick-500 transition-all focus-editorial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Image with smooth transition */}
              <motion.div
                key={activeLightboxItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-h-[75vh] max-w-[90vw] overflow-hidden rounded-subtle border border-clay-300/30 shadow-deep"
              >
                <img
                  src={activeLightboxItem.imageSrc}
                  alt={activeLightboxItem.title}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </motion.div>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredGallery.length : null
                  );
                }}
                aria-label="Next image (Right arrow)"
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-charcoal-700 text-ivory-100 hover:text-brick-400 hover:border-brick-500 transition-all focus-editorial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption Info & Keyboard Hint */}
            <div className="border-t border-charcoal-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-ivory-200">
              <div className="space-y-0.5 text-center sm:text-left">
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-ivory-50">
                  {activeLightboxItem.title}
                </h4>
                <p className="text-xs text-charcoal-400 font-light max-w-xl">
                  {activeLightboxItem.caption}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-[11px] text-charcoal-500 font-mono">
                <span className="px-2 py-0.5 bg-charcoal-900 rounded border border-charcoal-800">&larr; &rarr;</span>
                <span>Navigate</span>
                <span className="px-2 py-0.5 bg-charcoal-900 rounded border border-charcoal-800 ml-2">ESC</span>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
