import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  italianTitle: string;
  theme: 'wood-fired' | 'the-craft' | 'the-pizza' | 'the-room' | 'the-table';
  themeLabel: string;
  imageSrc: string;
  aspectSpan: 'tall' | 'wide' | 'square' | 'hero';
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-wood-fired',
    title: 'Live Hardwood Fire at 400°C',
    italianTitle: 'La Fiamma del Forno a Legna',
    theme: 'wood-fired',
    themeLabel: 'WOOD-FIRED',
    imageSrc: '/images/official/gallery-3.webp',
    aspectSpan: 'hero',
    caption: 'Hardwood logs burning at blistering temperatures inside our hand-built clay dome, flash-baking pies in 90 seconds.',
  },
  {
    id: 'gallery-the-craft-dough',
    title: '36–48 Hour Sourdough Maturation',
    italianTitle: "L'Arte della Lunga Lievitazione",
    theme: 'the-craft',
    themeLabel: 'THE CRAFT',
    imageSrc: '/images/official/branded-1.webp',
    aspectSpan: 'tall',
    caption: 'Dough stretched gently with fingertips to preserve delicate air pockets, yielding a light and digestible cornicione.',
  },
  {
    id: 'gallery-the-pizza-oven',
    title: 'Fresh Neapolitan Out of the Fire',
    italianTitle: 'La Vera Pizza Napoletana',
    theme: 'the-pizza',
    themeLabel: 'THE PIZZA',
    imageSrc: '/images/official/food-1.webp',
    aspectSpan: 'square',
    caption: 'Leopard-spotted sourdough crown, molten fior di latte, and cold-pressed extra virgin olive oil.',
  },
  {
    id: 'gallery-the-room-ambiance',
    title: 'Evening Sanctuary & Ambient Glow',
    italianTitle: 'La Sala da Pranzo Calda',
    theme: 'the-room',
    themeLabel: 'THE ROOM',
    imageSrc: '/images/official/gallery-1.webp',
    aspectSpan: 'wide',
    caption: 'Warm brick textures, soft amber lighting, and relaxed evening dinner conversations centered around the hearth.',
  },
  {
    id: 'gallery-the-craft-assembly',
    title: 'Artisanal Preparation & Dressing',
    italianTitle: 'La Farcitura con Ingredienti Puri',
    theme: 'the-craft',
    themeLabel: 'THE CRAFT',
    imageSrc: '/images/official/gallery-4.webp',
    aspectSpan: 'tall',
    caption: 'Crushed sweet plum tomatoes, fresh herbs, and honest Italian foundations layered right before the flash bake.',
  },
  {
    id: 'gallery-the-table-dining',
    title: 'The Shared Convivial Table',
    italianTitle: 'La Tavola Conviviale',
    theme: 'the-table',
    themeLabel: 'THE TABLE',
    imageSrc: '/images/official/gallery-6.webp',
    aspectSpan: 'wide',
    caption: 'Unhurried dining moments, passing warm sourdough slices, and savoring handcrafted Italian kitchen creations.',
  },
  {
    id: 'gallery-the-pizza-hero',
    title: 'Blistered Cornicione & Fior di Latte',
    italianTitle: 'Il Cornicione Maculato',
    theme: 'the-pizza',
    themeLabel: 'THE PIZZA',
    imageSrc: '/images/official/og-image.jpg',
    aspectSpan: 'square',
    caption: 'Signature Neapolitan sourdough structure with puffed, airy cornicione and balanced San Marzano tomato pulp.',
  },
  {
    id: 'gallery-the-pizza-funghi',
    title: 'Fab di Funghi on Volcanic Stone',
    italianTitle: 'Funghi Selvatici & Crema al Tartufo',
    theme: 'the-pizza',
    themeLabel: 'THE PIZZA',
    imageSrc: '/images/fab-di-funghi.jpg',
    aspectSpan: 'wide',
    caption: 'Caramelized woodland mushrooms, roasted garlic white crema, and aromatic drops of white truffle oil.',
  },
];

export const VisualGallerySection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Filtered gallery items
  const filteredGallery = useMemo(() => {
    if (selectedTheme === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.theme === selectedTheme);
  }, [selectedTheme]);

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
      aria-label="Brick & Clay Visual Gallery"
      className="py-20 sm:py-28 lg:py-32 bg-background-secondary text-typography-primary relative border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              VISUAL GALLERY ARCHIVE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            Atmosphere, Craft &amp; <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              The Dining Table.
            </span>
          </h2>

          <p className="text-charcoal-600 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            A photographic look into the wood-fired ovens, hand-stretched sourdough, and warm evening gatherings at Brick &amp; Clay in Bhubaneswar.
          </p>
        </div>

        {/* Category / Theme Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: 'all', label: 'All Themes' },
            { id: 'wood-fired', label: 'Wood-Fired' },
            { id: 'the-craft', label: 'The Craft' },
            { id: 'the-pizza', label: 'The Pizza' },
            { id: 'the-room', label: 'The Room' },
            { id: 'the-table', label: 'The Table' },
          ].map((theme) => {
            const isActive = selectedTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-editorial font-medium whitespace-nowrap transition-all duration-200 focus-editorial ${
                  isActive
                    ? 'bg-charcoal-900 text-ivory-50 shadow-subtle'
                    : 'bg-clay-100/70 text-charcoal-700 hover:text-charcoal-950 hover:bg-clay-200'
                }`}
              >
                {theme.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {filteredGallery.map((item, index) => {
            let colSpan = 'lg:col-span-4';
            let heightClass = 'h-72 sm:h-80';

            if (item.aspectSpan === 'hero') {
              colSpan = 'lg:col-span-8 md:col-span-2';
              heightClass = 'h-80 sm:h-[420px]';
            } else if (item.aspectSpan === 'tall') {
              colSpan = 'lg:col-span-4';
              heightClass = 'h-80 sm:h-[420px]';
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
                    alt={`Brick & Clay — ${item.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] will-change-transform"
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Corner Category Tag */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="editorial-caps text-[9px] text-ivory-100 bg-charcoal-950/75 backdrop-blur-md px-2.5 py-1 rounded-subtle border border-white/10 font-semibold tracking-loose-caps">
                      {item.themeLabel}
                    </span>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-subtle bg-charcoal-950/75 backdrop-blur-md border border-white/10 text-ivory-100">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Caption Overlay */}
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

        {/* Gallery Transparency Note */}
        <div className="mt-12 pt-6 border-t border-clay-300/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-500 font-light">
          <p className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-brick-600 shrink-0" />
            <span>Photography featuring official Brick &amp; Clay kitchen ovens, handcrafted dough, and dining atmosphere.</span>
          </p>
          <span className="editorial-caps text-[10px] text-charcoal-400">
            {filteredGallery.length} Photographic Plates
          </span>
        </div>

      </div>

      {/* ============================================================== */}
      {/* ACCESSIBLE LIGHTBOX VIEWER WITH TOUCH SWIPE & ESC CLOSE */}
      {/* ============================================================== */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 select-none"
            role="dialog"
            aria-modal="true"
            aria-label={`Image viewer: ${activeLightboxItem.title}`}
            onClick={() => setLightboxIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between z-20 border-b border-charcoal-800 pb-3">
              <div className="flex items-center gap-2 text-ivory-200 text-xs">
                <span className="px-2 py-0.5 rounded bg-brick-600/30 text-brick-300 border border-brick-500/40 font-mono text-[10px] uppercase">
                  {activeLightboxItem.themeLabel}
                </span>
                <span className="text-charcoal-500">&bull;</span>
                <span className="font-mono text-charcoal-400">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 1} / {filteredGallery.length}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(null);
                }}
                aria-label="Close image viewer"
                className="p-2 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-ivory-100 transition-colors focus-editorial border border-charcoal-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + filteredGallery.length) % filteredGallery.length : null
                  );
                }}
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-charcoal-700 text-ivory-100 hover:text-brick-400 hover:border-brick-500 transition-all focus-editorial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Active Image */}
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

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredGallery.length : null
                  );
                }}
                aria-label="Next image"
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-charcoal-700 text-ivory-100 hover:text-brick-400 hover:border-brick-500 transition-all focus-editorial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & Keyboard Hints */}
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
