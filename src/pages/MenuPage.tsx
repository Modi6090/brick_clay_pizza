import React, { useEffect } from 'react';
import { RestaurantMenuSection } from '../components/menu/RestaurantMenuSection';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { ORDERING_LINKS } from '../data/brickAndClayLinks';

interface MenuPageProps {
  onOpenReservation?: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenReservation }) => {
  useEffect(() => {
    document.title = 'Menu — Brick & Clay | Wood-Fired Italian Pizza in Bhubaneswar';
  }, []);

  return (
    <div className="pt-24 sm:pt-28 min-h-screen bg-background-primary text-typography-primary">
      {/* Editorial Page Header */}
      <div className="bg-charcoal-950 text-ivory-50 py-16 sm:py-20 border-b border-charcoal-800 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brick-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-brick-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUTHENTIC NEAPOLITAN KITCHEN</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-ivory-50 tracking-tight leading-[1.05]">
              The Menu. <br />
              <span className="font-normal italic text-brick-400 font-serif">
                Wood-fired pizzas, Italian plates &amp; more.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ivory-200/80 font-light max-w-2xl leading-relaxed">
              Every pie is made with slow-fermented sourdough, hand-stretched, and blistered in our live clay ovens. Sourced directly from current kitchen listings across Saheed Nagar and Patia.
            </p>

            {/* Quick delivery bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs text-charcoal-400 font-mono">Direct Delivery:</span>
              <a
                href={ORDERING_LINKS.zomatoSahidNagar}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-subtle bg-charcoal-900 hover:bg-brick-600 border border-charcoal-700 hover:border-brick-500 text-xs font-sans font-medium text-ivory-100 transition-all inline-flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-brick-400" />
                <span>Zomato</span>
              </a>
              <a
                href={ORDERING_LINKS.swiggySahidNagar}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-subtle bg-charcoal-900 hover:bg-brick-600 border border-charcoal-700 hover:border-brick-500 text-xs font-sans font-medium text-ivory-100 transition-all inline-flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-olive-400" />
                <span>Swiggy</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Interactive Menu Section */}
      <RestaurantMenuSection
        onOpenReservation={onOpenReservation || (() => {})}
      />
    </div>
  );
};
