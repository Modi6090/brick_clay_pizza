import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Calendar, Flame } from 'lucide-react';
import { Button } from '../ui/Button';
import { FULL_MENU_ITEMS } from '../../data/menuData';
import type { MenuCategoryId } from '../../types';

interface MenuModalPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

type ModalCategory = 'all' | MenuCategoryId;

const MODAL_CATEGORIES: { id: ModalCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'pizza', label: 'Pizzas' },
  { id: 'calzone', label: 'Calzones' },
  { id: 'pasta', label: 'Pastas' },
  { id: 'sides', label: 'Sides' },
  { id: 'dessert', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
];

export const MenuModalPreview: React.FC<MenuModalPreviewProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<ModalCategory>('all');

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
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredItems = activeCategory === 'all'
    ? FULL_MENU_ITEMS
    : FULL_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/75 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Menu preview"
    >
      <div
        className="bg-ivory-50 border border-clay-300 w-full max-w-3xl rounded-soft shadow-deep overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-clay-200 flex items-center justify-between bg-ivory-100 shrink-0">
          <div>
            <span className="editorial-caps text-[10px] text-brick-600 font-semibold block mb-0.5">
              ARTISAN KITCHEN
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900">
              Brick &amp; Clay — Full Menu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-charcoal-400 hover:text-charcoal-900 rounded-soft transition-colors focus-editorial"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="px-5 sm:px-6 py-3 border-b border-clay-200 bg-ivory-50 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
          {MODAL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-soft text-[11px] font-sans font-semibold uppercase tracking-editorial whitespace-nowrap transition-colors focus-editorial ${
                activeCategory === cat.id
                  ? 'bg-charcoal-900 text-ivory-50'
                  : 'text-charcoal-600 hover:bg-clay-100 hover:text-charcoal-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {filteredItems.length === 0 ? (
            <p className="text-center text-charcoal-500 py-8 text-sm font-light">No items in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="p-4 rounded-soft border border-clay-200 bg-surface-primary hover:border-brick-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="font-serif text-lg font-medium text-charcoal-900 leading-tight">
                        {item.name}
                      </h4>
                      {/* Verified dietary dot */}
                      {item.dietary === 'veg' ? (
                        <span
                          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded border border-olive-600 p-0.5 shrink-0"
                          title="Vegetarian"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-olive-600" />
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded border border-brick-700 p-0.5 shrink-0"
                          title="Non-Vegetarian"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brick-700" />
                        </span>
                      )}
                      {item.spicy && (
                        <span aria-label="Spicy">
                          <Flame className="w-3 h-3 text-brick-600 fill-current shrink-0" />
                        </span>
                      )}
                    </div>
                  </div>

                  {item.italianName && (
                    <span className="font-serif italic text-xs text-charcoal-500 block mb-1.5">
                      {item.italianName}
                    </span>
                  )}

                  <p className="text-xs text-charcoal-600 leading-relaxed font-light mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {item.ingredients.slice(0, 3).map((ing) => (
                      <span
                        key={ing}
                        className="text-[9px] bg-clay-100 text-charcoal-700 px-1.5 py-0.5 rounded font-sans"
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
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-4 border-t border-clay-200 bg-ivory-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-charcoal-500 font-light text-center sm:text-left">
            Menu items subject to seasonal availability.
          </p>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              href="https://www.zomato.com/bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial justify-center"
              icon={<ExternalLink className="w-3 h-3" />}
            >
              Order Online
            </Button>
            <Button
              variant="primary"
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
