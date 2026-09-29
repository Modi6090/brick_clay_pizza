import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ExternalLink, 
  Calendar, 
  Flame, 
  UtensilsCrossed,
  Filter
} from 'lucide-react';
import { MENU_CATEGORIES, FULL_MENU_ITEMS } from '../../data/menuData';
import type { MenuCategoryId } from '../../types';
import { Button } from '../ui/Button';

interface RestaurantMenuSectionProps {
  onOpenReservation: () => void;
}

export const RestaurantMenuSection: React.FC<RestaurantMenuSectionProps> = ({
  onOpenReservation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('pizza');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const categoryNavRef = useRef<HTMLDivElement>(null);

  // Active category info
  const currentCategoryInfo = useMemo(() => {
    return MENU_CATEGORIES.find((cat) => cat.id === selectedCategory) || MENU_CATEGORIES[0];
  }, [selectedCategory]);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter((item) => {
      // 1. Category match (if search is empty)
      const matchesCategory = searchQuery.trim() ? true : item.category === selectedCategory;

      // 2. Dietary filter match
      const matchesDietary =
        dietaryFilter === 'all' ? true : item.dietary === dietaryFilter;

      // 3. Search query match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.italianName && item.italianName.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(q));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section
      id="menu"
      aria-label="Brick & Clay Culinary Menu"
      className="py-24 sm:py-32 bg-background-primary text-typography-primary relative border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              OUR COMPLETE KITCHEN MENU
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            Artisanal Neapolitan &amp; <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              Italian Kitchen.
            </span>
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Hand-stretched sourdough, cold-pressed olive oils, and slow-simmered sauces. Prepared fresh daily at our Sahid Nagar and Patia ovens.
          </p>
        </div>

        {/* ============================================================== */}
        {/* CATEGORY NAVIGATION & FILTER CONTROLS */}
        {/* ============================================================== */}
        <div className="space-y-6 mb-12">
          
          {/* Top Category Tabs (Keyboard accessible & touch friendly) */}
          <div
            ref={categoryNavRef}
            role="tablist"
            aria-label="Menu categories"
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center border-b border-clay-300/80"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id && !searchQuery.trim();
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSearchQuery(''); // Clear search on category tap for quick browsing
                  }}
                  className={`relative shrink-0 px-4 py-3 rounded-subtle text-xs uppercase tracking-editorial font-medium transition-all duration-200 focus-editorial ${
                    isSelected
                      ? 'text-ivory-50 bg-charcoal-900 shadow-subtle'
                      : 'text-charcoal-700 hover:text-charcoal-950 hover:bg-clay-100/70'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Dietary Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            
            {/* Search Input with quick clear */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dishes or ingredients (e.g., Truffle, Basil, Pesto)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search menu items"
                className="w-full pl-10 pr-9 py-2.5 rounded-subtle bg-surface-primary border border-clay-300 text-xs sm:text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:border-brick-500 focus:ring-1 focus:ring-brick-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-800 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons: All | Veg | Non-Veg */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 bg-clay-100/70 p-1 rounded-subtle border border-clay-200">
              <span className="text-[10px] text-charcoal-500 uppercase tracking-editorial px-2 hidden sm:inline-flex items-center gap-1">
                <Filter className="w-3 h-3 text-charcoal-400" /> Filter:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'veg', label: 'Vegetarian' },
                { id: 'non-veg', label: 'Non-Veg' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setDietaryFilter(filter.id as any)}
                  className={`px-3 py-1.5 rounded-subtle text-xs font-sans font-medium transition-all ${
                    dietaryFilter === filter.id
                      ? 'bg-ivory-50 text-charcoal-900 shadow-subtle border border-clay-300 font-semibold'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* CURRENT CATEGORY BANNER (if no global search active) */}
        {/* ============================================================== */}
        {!searchQuery.trim() && (
          <div className="mb-10 pb-4 border-b border-clay-300/80 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="editorial-caps text-[10px] text-brick-600 font-semibold block">
                {currentCategoryInfo.italianTitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-0.5">
                {currentCategoryInfo.label}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-500 font-light max-w-md sm:text-right">
              {currentCategoryInfo.subtitle}
            </p>
          </div>
        )}

        {/* If search query is active, show query summary */}
        {searchQuery.trim() && (
          <div className="mb-8 flex items-center justify-between text-xs text-charcoal-600 border-b border-clay-300/80 pb-3">
            <span>
              Showing results for: <strong className="text-charcoal-900 font-semibold">"{searchQuery}"</strong> ({filteredItems.length} items found)
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-brick-600 hover:underline uppercase text-[11px] font-sans tracking-editorial"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* ============================================================== */}
        {/* EDITORIAL MENU LAYOUT: Two Balanced Columns with Hairline Lines */}
        {/* ============================================================== */}
        <AnimatePresence mode="wait">
          {filteredItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center space-y-3 bg-surface-primary rounded-subtle border border-clay-300 p-8"
            >
              <UtensilsCrossed className="w-8 h-8 text-charcoal-400 mx-auto" />
              <h4 className="font-serif text-2xl text-charcoal-900 font-medium">
                No matching dishes found
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 max-w-sm mx-auto font-light">
                Try searching for another ingredient or reset your dietary filters to explore our full kitchen selection.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setDietaryFilter('all');
                  }}
                >
                  View All Dishes
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + searchQuery + dietaryFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10"
            >
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="group space-y-2.5 pb-6 border-b border-clay-300/80 transition-colors"
                >
                  {/* Dish Title & Dietary Marker */}
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                        {item.name}
                      </h4>

                      {/* Verified Dietary Indicator */}
                      {item.dietary === 'veg' ? (
                        <span
                          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded border border-olive-600 p-0.5"
                          title="Vegetarian"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-olive-600" />
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded border border-brick-700 p-0.5"
                          title="Non-Vegetarian"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brick-700" />
                        </span>
                      )}

                      {/* Spicy icon if verified */}
                      {item.spicy && (
                        <span
                          className="text-brick-600 flex items-center text-[10px] font-sans"
                          title="Contains Chili Flakes / Piquant"
                        >
                          <Flame className="w-3 h-3 fill-current" />
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] text-charcoal-400 font-sans tracking-editorial uppercase shrink-0">
                      Fresh Daily
                    </span>
                  </div>

                  {/* Italian Name Subtitle */}
                  {item.italianName && (
                    <span className="font-serif italic text-xs sm:text-sm text-charcoal-500 block">
                      {item.italianName}
                    </span>
                  )}

                  {/* Sensory Description */}
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Ingredient Pill Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] bg-clay-100 text-charcoal-700 px-2 py-0.5 rounded-subtle font-sans font-normal"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================== */}
        {/* CONVERSION FOOTER BAR: Order Online & Reserve Table CTAs */}
        {/* ============================================================== */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-subtle border border-clay-300 bg-surface-primary shadow-subtle flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="editorial-caps text-[10px] text-brick-600 font-semibold block">
              DINE-IN OR HOME DELIVERY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
              Ready to savor Brick &amp; Clay?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light max-w-lg">
              Book an evening table at our Sahid Nagar or Patia dining rooms, or order fresh wood-fired delivery straight to your door.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0 w-full md:w-auto">
            <Button
              variant="outline"
              size="lg"
              onClick={onOpenReservation}
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="left"
              className="w-full sm:w-auto justify-center"
            >
              RESERVE TABLE
            </Button>

            <a
              href="https://www.zomato.com/bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-brick-500 hover:bg-brick-600 active:bg-brick-700 text-ivory-50 text-xs sm:text-sm uppercase tracking-editorial font-semibold shadow-subtle hover:shadow-elevated transition-all flex items-center justify-center gap-2 focus-editorial"
            >
              <span>ORDER ONLINE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
