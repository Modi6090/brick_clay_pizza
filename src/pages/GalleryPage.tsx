import React, { useEffect } from 'react';
import { VisualGallerySection } from '../components/gallery/VisualGallerySection';
import { Camera, ArrowRight } from 'lucide-react';
import { useRouter } from '../router';

export const GalleryPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Photo Gallery — Brick & Clay | Visual Archive';
  }, []);

  return (
    <div className="pt-24 sm:pt-28 min-h-screen bg-background-primary text-typography-primary">
      {/* Editorial Header */}
      <div className="bg-charcoal-950 text-ivory-50 py-16 sm:py-20 border-b border-charcoal-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brick-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-brick-400 text-xs font-mono">
              <Camera className="w-3.5 h-3.5" />
              <span>AUTHENTIC PHOTOGRAPHY ARCHIVE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-ivory-50 tracking-tight leading-[1.05]">
              The Gallery. <br />
              <span className="font-normal italic text-brick-400 font-serif">
                A visual journey through fire &amp; craft.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ivory-200/80 font-light max-w-2xl leading-relaxed">
              Every photograph captures the live wood fire, hand-stretched dough, and dining atmosphere from our Saheed Nagar and Patia kitchens.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Gallery with Full Filters & Accessible Lightbox */}
      <VisualGallerySection />

      {/* Bottom Conversion Banner */}
      <div className="bg-charcoal-950 text-ivory-50 py-16 border-t border-charcoal-800 text-center">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-ivory-50">
            Seen something you like?
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-400 font-light">
            Explore all 53 wood-fired pizzas, calzones, and handcrafted pastas on our full menu.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/menu')}
              className="px-6 py-3 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all inline-flex items-center gap-2 shadow-elevated"
            >
              <span>EXPLORE COMPLETE MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
