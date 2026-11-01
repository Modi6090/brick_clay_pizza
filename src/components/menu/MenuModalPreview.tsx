import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Calendar, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import {
  BRICK_AND_CLAY_MENU,
  BRICK_AND_CLAY_CATEGORIES,
} from '../../data/brickAndClayMenu';
import { ORDERING_LINKS } from '../../data/brickAndClayLinks';
import type { BrickAndClayCategoryId } from '../../types';

interface MenuModalPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const MenuModalPreview: React.FC<MenuModalPreviewProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<BrickAndClayCategoryId>('all');

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredItems =
    activeCategoryId === 'all'
      ? BRICK_AND_CLAY_MENU
      : BRICK_AND_CLAY_MENU.filter((item) => item.categoryId === activeCategoryId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-charcoal-950/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Brick & Clay Full Menu Directory"
    >
      <div
        className="bg-ivory-50 border border-clay-300 w-full max-w-4xl rounded-subtle shadow-deep overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-clay-200 flex items-center justify-between bg-surface-primary shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
              <span className="editorial-caps text-[10px] text-brick-600 font-semibold">
                BRICK &amp; CLAY &bull; REAL MENU
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
              Kitchen Menu Directory
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-charcoal-400 hover:text-charcoal-900 rounded-full transition-colors focus-editorial"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Navigation Bar */}
        <div className="px-5 sm:px-8 py-3 border-b border-clay-200 bg-clay-100/60 flex items-center gap-2 overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-editorial whitespace-nowrap transition-colors focus-editorial ${
              activeCategoryId === 'all'
                ? 'bg-charcoal-900 text-ivory-50'
                : 'text-charcoal-600 hover:bg-clay-200 hover:text-charcoal-900'
            }`}
          >
            All ({BRICK_AND_CLAY_MENU.length})
          </button>
          {BRICK_AND_CLAY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-editorial whitespace-nowrap transition-colors focus-editorial ${
                activeCategoryId === cat.id
                  ? 'bg-charcoal-900 text-ivory-50'
                  : 'text-charcoal-600 hover:bg-clay-200 hover:text-charcoal-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="p-4 rounded-subtle border border-clay-200 bg-surface-primary hover:border-brick-300 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* Dietary Dot */}
                      <span
                        className={`inline-flex items-center justify-center w-3.5 h-3.5 rounded-sm border p-0.5 shrink-0 ${
                          item.dietary === 'veg' ? 'border-emerald-600' : 'border-rose-600'
                        }`}
                        title={item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.dietary === 'veg' ? 'bg-emerald-600' : 'bg-rose-600'
                          }`}
                        />
                      </span>

                      <h4 className="font-serif text-lg font-medium text-charcoal-900 leading-tight">
                        {item.name}
                      </h4>

                      {item.isSignature && (
                        <span className="editorial-caps text-[9px] text-brick-600 bg-brick-100 px-1.5 py-0.5 rounded font-semibold">
                          Signature
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-sm font-semibold text-charcoal-900 shrink-0">
                      {item.price ? `₹${item.price}` : 'Ask'}
                    </span>
                  </div>

                  {item.italianName && (
                    <span className="font-serif italic text-xs text-charcoal-500 block">
                      {item.italianName}
                    </span>
                  )}

                  <p className="text-xs text-charcoal-600 leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {item.ingredients && (
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-clay-200/60">
                    {item.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="text-[9px] bg-clay-100 text-charcoal-700 px-2 py-0.5 rounded font-sans"
                      >
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="text-[9px] text-charcoal-400 font-sans px-1 py-0.5">
                        +{item.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-4 border-t border-clay-200 bg-surface-primary flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-charcoal-500 font-light text-center sm:text-left">
            Dishes prepared fresh daily at Saheed Nagar &amp; Patia ovens.
          </p>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={ORDERING_LINKS.zomatoSahidNagar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-1.5 focus-editorial text-center shadow-subtle"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Online</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="flex-1 sm:flex-initial justify-center"
              icon={<Calendar className="w-3.5 h-3.5" />}
            >
              Book Table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
