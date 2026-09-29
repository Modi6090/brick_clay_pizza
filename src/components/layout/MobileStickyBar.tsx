import React from 'react';
import { UtensilsCrossed, ShoppingBag, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenMenu: () => void;
  onOpenOrder?: () => void;
  onOpenReservation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenMenu,
  onOpenOrder,
  onOpenReservation,
}) => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 backdrop-blur-md border-t border-charcoal-800 shadow-float px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* 1. Menu */}
        <button
          onClick={onOpenMenu}
          className="flex items-center justify-center gap-2 py-2.5 px-2 bg-charcoal-900 border border-charcoal-700/80 text-ivory-100 rounded-subtle text-center hover:border-brick-500 hover:text-brick-400 active:scale-95 transition-all focus-editorial"
        >
          <UtensilsCrossed className="w-3.5 h-3.5 text-brick-400 shrink-0" />
          <span className="editorial-caps text-[11px] font-semibold tracking-wider">Menu</span>
        </button>

        {/* 2. Order */}
        <a
          href="https://www.zomato.com/bhubaneswar"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onOpenOrder}
          className="flex items-center justify-center gap-2 py-2.5 px-2 bg-charcoal-900 border border-charcoal-700/80 text-ivory-100 rounded-subtle text-center hover:border-brick-500 hover:text-brick-400 active:scale-95 transition-all focus-editorial"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-olive-400 shrink-0" />
          <span className="editorial-caps text-[11px] font-semibold tracking-wider">Order</span>
        </a>

        {/* 3. Reserve */}
        <button
          onClick={onOpenReservation}
          className="flex items-center justify-center gap-2 py-2.5 px-2 bg-brick-500 border border-brick-500 text-ivory-50 rounded-subtle text-center hover:bg-brick-600 active:scale-95 transition-all shadow-subtle focus-editorial"
        >
          <Calendar className="w-3.5 h-3.5 text-ivory-50 shrink-0" />
          <span className="editorial-caps text-[11px] font-semibold tracking-wider">Reserve</span>
        </button>
      </div>
    </aside>
  );
};
