import React from 'react';
import { UtensilsCrossed, ShoppingBag, Calendar, Navigation } from 'lucide-react';
import { useRouter } from '../../router';
import { ORDERING_LINKS } from '../../data/brickAndClayLinks';

interface MobileStickyBarProps {
  onOpenReservation?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenReservation,
}) => {
  const { navigate, currentPath } = useRouter();

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 backdrop-blur-md border-t border-charcoal-800 shadow-float px-2.5 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* 1. Menu */}
        <button
          onClick={() => navigate('/menu')}
          className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-subtle text-center transition-all focus-editorial ${
            currentPath === '/menu'
              ? 'bg-charcoal-900 border border-brick-500 text-brick-400'
              : 'bg-charcoal-900/80 border border-charcoal-800 text-ivory-100 hover:border-brick-500 hover:text-brick-400'
          }`}
        >
          <UtensilsCrossed className="w-3.5 h-3.5 text-brick-400 shrink-0" />
          <span className="editorial-caps text-[10px] font-semibold tracking-wider">Menu</span>
        </button>

        {/* 2. Order */}
        <a
          href={ORDERING_LINKS.zomatoSahidNagar}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-charcoal-900/80 border border-charcoal-800 text-ivory-100 rounded-subtle text-center hover:border-brick-500 hover:text-brick-400 active:scale-95 transition-all focus-editorial"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-olive-400 shrink-0" />
          <span className="editorial-caps text-[10px] font-semibold tracking-wider">Order</span>
        </a>

        {/* 3. Reserve */}
        {onOpenReservation ? (
          <button
            onClick={onOpenReservation}
            className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-brick-500 border border-brick-500 text-ivory-50 rounded-subtle text-center hover:bg-brick-600 active:scale-95 transition-all shadow-subtle focus-editorial"
          >
            <Calendar className="w-3.5 h-3.5 text-ivory-50 shrink-0" />
            <span className="editorial-caps text-[10px] font-semibold tracking-wider">Reserve</span>
          </button>
        ) : (
          <button
            onClick={() => navigate('/contact')}
            className="flex flex-col items-center justify-center gap-1 py-2 px-1 bg-brick-500 border border-brick-500 text-ivory-50 rounded-subtle text-center hover:bg-brick-600 active:scale-95 transition-all shadow-subtle focus-editorial"
          >
            <Calendar className="w-3.5 h-3.5 text-ivory-50 shrink-0" />
            <span className="editorial-caps text-[10px] font-semibold tracking-wider">Reserve</span>
          </button>
        )}

        {/* 4. Directions */}
        <button
          onClick={() => navigate('/contact')}
          className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-subtle text-center transition-all focus-editorial ${
            currentPath === '/contact'
              ? 'bg-charcoal-900 border border-brick-500 text-brick-400'
              : 'bg-charcoal-900/80 border border-charcoal-800 text-ivory-100 hover:border-brick-500 hover:text-brick-400'
          }`}
        >
          <Navigation className="w-3.5 h-3.5 text-brick-400 shrink-0" />
          <span className="editorial-caps text-[10px] font-semibold tracking-wider">Visit</span>
        </button>
      </div>
    </aside>
  );
};
