import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ExternalLink,
  Calendar,
  Sparkles,
  ShoppingBag,
  Info,
  ChevronRight,
  Flame
} from 'lucide-react';
import {
  BRICK_AND_CLAY_CATEGORIES,
  BRICK_AND_CLAY_MENU,
} from '../../data/brickAndClayMenu';
import { brickAndClayImages } from '../../data/brickAndClayImages';
import { ORDERING_LINKS } from '../../data/brickAndClayLinks';
import type { BrickAndClayCategoryId, BrickAndClayMenuItem } from '../../types';
import { Button } from '../ui/Button';

interface RestaurantMenuSectionProps {
  onOpenReservation: () => void;
}

export const RestaurantMenuSection: React.FC<RestaurantMenuSectionProps> = ({
  onOpenReservation,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<BrickAndClayCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [activeDish, setActiveDish] = useState<BrickAndClayMenuItem | null>(null);
  const categoryNavRef = useRef<HTMLDivElement>(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDish(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return BRICK_AND_CLAY_MENU.filter((item) => {
      // 1. Category match
      const matchesCategory =
        selectedCategoryId === 'all' || item.categoryId === selectedCategoryId;

      // 2. Dietary filter match
      const matchesDietary =
        dietaryFilter === 'all' || item.dietary === dietaryFilter;

      // 3. Search query match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.italianName && item.italianName.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        (item.ingredients && item.ingredients.some((ing) => ing.toLowerCase().includes(q)));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategoryId, dietaryFilter, searchQuery]);

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: BRICK_AND_CLAY_MENU.length };
    BRICK_AND_CLAY_MENU.forEach((item) => {
      counts[item.categoryId] = (counts[item.categoryId] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section
      id="menu"
      aria-label="Brick & Clay Real Culinary Menu"
      className="py-20 sm:py-28 lg:py-32 bg-background-primary text-typography-primary relative border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 1. SECTION EDITORIAL HEADER */}
        {/* ============================================================== */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              THE COMPLETE REAL MENU
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            Made by fire. <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              Served with character.
            </span>
          </h2>

          <p className="text-charcoal-600 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Explore authentic wood-fired Neapolitan pizzas, handmade folded calzones, al dente pastas, and artisan sides. Sourced from current Brick &amp; Clay kitchen listings.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2. CATEGORY NAVIGATION TABS (Mobile Scrollable) */}
        {/* ============================================================== */}
        <div className="mb-8 space-y-4">
          <div
            ref={categoryNavRef}
            role="tablist"
            aria-label="Menu categories"
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {/* "All" Tab */}
            <button
              role="tab"
              aria-selected={selectedCategoryId === 'all'}
              onClick={() => setSelectedCategoryId('all')}
              className={`shrink-0 px-4 py-2.5 rounded-full text-xs uppercase tracking-editorial font-medium transition-all duration-200 flex items-center gap-2 focus-editorial ${
                selectedCategoryId === 'all'
                  ? 'bg-charcoal-900 text-ivory-50 shadow-subtle'
                  : 'bg-clay-100/70 text-charcoal-700 hover:bg-clay-200 hover:text-charcoal-900'
              }`}
            >
              <span>All Items</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedCategoryId === 'all' ? 'bg-white/20 text-ivory-100' : 'bg-charcoal-200/60 text-charcoal-600'
              }`}>
                {categoryCounts['all']}
              </span>
            </button>

            {/* Category Tabs */}
            {BRICK_AND_CLAY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategoryId === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`shrink-0 px-4 py-2.5 rounded-full text-xs uppercase tracking-editorial font-medium transition-all duration-200 flex items-center gap-2 focus-editorial whitespace-nowrap ${
                    isSelected
                      ? 'bg-charcoal-900 text-ivory-50 shadow-subtle'
                      : 'bg-clay-100/70 text-charcoal-700 hover:bg-clay-200 hover:text-charcoal-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-ivory-100' : 'bg-charcoal-200/60 text-charcoal-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Dietary Filter Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish, ingredients (e.g. truffle, burrata, pesto)..."
                aria-label="Search menu dishes and ingredients"
                className="w-full pl-10 pr-9 py-2.5 bg-surface-primary rounded-subtle border border-clay-300 text-xs text-charcoal-900 placeholder:text-charcoal-400 focus-editorial focus:border-brick-500 transition-colors shadow-subtle"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-700 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Toggle Pills */}
            <div className="inline-flex items-center p-1 bg-clay-200/60 rounded-subtle border border-clay-300 self-start sm:self-auto">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 rounded-subtle text-xs font-sans font-medium transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-surface-primary text-charcoal-900 shadow-subtle'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                All Diets
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 rounded-subtle text-xs font-sans font-medium transition-all flex items-center gap-1.5 ${
                  dietaryFilter === 'veg'
                    ? 'bg-surface-primary text-olive-800 shadow-subtle font-semibold'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-olive-600" />
                <span>Veg</span>
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1.5 rounded-subtle text-xs font-sans font-medium transition-all flex items-center gap-1.5 ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-surface-primary text-brick-800 shadow-subtle font-semibold'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-brick-600" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. MENU RESULTS GRID (Mobile-First Card Layout) */}
        {/* ============================================================== */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-surface-primary rounded-subtle border border-clay-300 p-8 space-y-3">
            <Info className="w-8 h-8 text-brick-500 mx-auto" />
            <h3 className="font-serif text-xl font-medium text-charcoal-900">
              No matching menu items found
            </h3>
            <p className="text-xs text-charcoal-500 max-w-sm mx-auto">
              We couldn't find any dishes matching "{searchQuery}". Try searching for another ingredient or reset your category filter.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategoryId('all');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const imgMeta = brickAndClayImages[item.id] || brickAndClayImages[item.id.replace('-2', '-2-0')] || null;
              const displayImage = imgMeta?.image || (item.imageApproved && item.image ? item.image : null);
              const hasVerifiedImage = Boolean(displayImage && (imgMeta?.verification === 'REAL_OFFICIAL' || imgMeta?.verification === 'REAL_RESTAURANT_PUBLISHED' || item.imageApproved));
              const isVeg = item.dietary === 'veg';

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveDish(item)}
                  className="group bg-surface-primary rounded-subtle border border-clay-300 hover:border-brick-400/80 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Card Visual Header: Real photo or craft neutral placeholder */}
                  {hasVerifiedImage && displayImage ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950">
                      <img
                        src={displayImage}
                        alt={`Brick & Clay ${item.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                        {item.isSignature && (
                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-white/10 text-ivory-100 text-[10px] font-sans uppercase tracking-editorial">
                            <Flame className="w-3 h-3 text-brick-400" />
                            <span>Signature</span>
                          </div>
                        )}
                        <span className="editorial-caps text-[9px] text-ivory-200 bg-charcoal-950/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                          {imgMeta?.verification === 'REAL_OFFICIAL' ? 'Official' : 'Restaurant Photo'}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="px-2.5 py-1 rounded-md bg-charcoal-950/90 text-ivory-50 text-xs font-mono font-semibold border border-white/10">
                          {item.price ? `₹${item.price}` : 'Ask Restaurant'}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative p-4 sm:p-5 bg-clay-100/50 border-b border-clay-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Dietary Symbol Pill */}
                        <span
                          className={`inline-flex items-center justify-center w-3.5 h-3.5 border rounded-sm ${
                            isVeg ? 'border-emerald-600' : 'border-rose-600'
                          }`}
                          title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                            }`}
                          />
                        </span>
                        <span className="editorial-caps text-[10px] text-charcoal-500">
                          {item.category}
                        </span>
                        {item.isSignature && (
                          <span className="editorial-caps text-[9px] text-brick-600 font-semibold bg-brick-100/80 px-1.5 py-0.5 rounded">
                            Signature
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="editorial-caps text-[9px] text-charcoal-400 font-mono bg-clay-200/60 px-2 py-0.5 rounded hidden sm:inline">
                          Verified Recipe
                        </span>
                        <span className="font-mono text-sm font-semibold text-charcoal-900">
                          {item.price ? `₹${item.price}` : 'Ask Restaurant'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Body Content */}
                  <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
                          {item.name}
                        </h3>
                        {hasVerifiedImage && (
                          <span
                            className={`shrink-0 inline-flex items-center justify-center w-3.5 h-3.5 border rounded-sm mt-1 ${
                              isVeg ? 'border-emerald-600' : 'border-rose-600'
                            }`}
                            title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                              }`}
                            />
                          </span>
                        )}
                      </div>

                      {item.italianName && (
                        <p className="font-serif italic text-xs text-charcoal-500">
                          {item.italianName}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom row: Ingredients preview + View Action */}
                    <div className="pt-3 border-t border-clay-200/80 flex items-center justify-between">
                      <span className="text-[11px] text-charcoal-400 font-light">
                        {item.ingredients ? `${item.ingredients.length} verified ingredients` : 'Kitchen Special'}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDish(item);
                        }}
                        className="text-xs uppercase tracking-editorial font-medium text-brick-600 group-hover:text-brick-700 flex items-center gap-1 focus-editorial"
                      >
                        <span>View dish</span>
                        <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ============================================================== */}
        {/* 4. BOTTOM CTAS & ORDERING RIBBON */}
        {/* ============================================================== */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-subtle bg-charcoal-950 text-ivory-100 border border-charcoal-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-brick-400">
              <ShoppingBag className="w-4 h-4" />
              <span className="editorial-caps text-xs tracking-loose-caps font-semibold">
                READY TO ORDER ONLINE?
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory-50">
              Fresh wood-fired sourdough delivered to your doorstep.
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-400 font-light">
              Order directly via Swiggy or Zomato from our Saheed Nagar and Patia outlets across Bhubaneswar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={ORDERING_LINKS.zomatoSahidNagar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 focus-editorial shadow-elevated"
            >
              <span>Order on Zomato</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={ORDERING_LINKS.swiggySahidNagar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-subtle bg-charcoal-900 hover:bg-charcoal-800 text-ivory-100 border border-charcoal-700 hover:border-brick-500 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 focus-editorial"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 5. DISH DETAIL MODAL / BOTTOM SHEET (Mobile Friendly) */}
      {/* ============================================================== */}
      <AnimatePresence>
        {activeDish && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal-950/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-modal-title"
          >
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0"
              onClick={() => setActiveDish(null)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ y: '100%', opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-surface-primary rounded-t-2xl sm:rounded-subtle border border-clay-300 shadow-float overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Top Close Button */}
              <button
                onClick={() => setActiveDish(null)}
                aria-label="Close dish details"
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-charcoal-950/70 text-ivory-100 hover:bg-charcoal-900 transition-colors focus-editorial backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Dish Visual Header */}
              {(() => {
                const activeDishMeta = activeDish ? (brickAndClayImages[activeDish.id] || brickAndClayImages[activeDish.id.replace('-2', '-2-0')] || null) : null;
                const activeDishImage = activeDishMeta?.image || (activeDish.imageApproved && activeDish.image ? activeDish.image : null);
                const hasActiveVerifiedImage = Boolean(activeDishImage && (activeDishMeta?.verification === 'REAL_OFFICIAL' || activeDishMeta?.verification === 'REAL_RESTAURANT_PUBLISHED' || activeDish.imageApproved));

                if (hasActiveVerifiedImage && activeDishImage) {
                  return (
                    <div className="relative h-64 sm:h-72 w-full bg-charcoal-950 shrink-0">
                      <img
                        src={activeDishImage}
                        alt={`Brick & Clay ${activeDish.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 z-20">
                        <span className="editorial-caps text-[10px] text-ivory-100 bg-charcoal-950/80 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10">
                          {activeDishMeta?.verification === 'REAL_OFFICIAL' ? 'Official Photo' : 'Restaurant Catalog Photo'}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        <div>
                          <span className="editorial-caps text-[10px] text-brick-300 font-semibold block mb-1">
                            {activeDish.category}
                          </span>
                          <h3
                            id="dish-modal-title"
                            className="font-serif text-2xl sm:text-3xl font-medium text-ivory-50"
                          >
                            {activeDish.name}
                          </h3>
                        </div>

                        <span className="font-mono text-xl font-semibold text-ivory-50 bg-charcoal-900/90 px-3 py-1 rounded-md border border-white/10">
                          {activeDish.price ? `₹${activeDish.price}` : 'Ask Restaurant'}
                        </span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="p-6 sm:p-8 bg-charcoal-950 text-ivory-100 border-b border-charcoal-800 shrink-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center justify-center w-3.5 h-3.5 border rounded-sm ${
                          activeDish.dietary === 'veg' ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            activeDish.dietary === 'veg' ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </span>
                      <span className="editorial-caps text-[10px] text-brick-400 font-semibold">
                        {activeDish.category}
                      </span>
                      <span className="text-[10px] text-charcoal-400 font-mono">
                        &bull; Photo Pending Shoot
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        id="dish-modal-title"
                        className="font-serif text-2xl sm:text-3xl font-medium text-ivory-50"
                      >
                        {activeDish.name}
                      </h3>
                      <span className="font-mono text-xl font-semibold text-brick-400 shrink-0">
                        {activeDish.price ? `₹${activeDish.price}` : 'Ask Restaurant'}
                      </span>
                    </div>

                    {activeDish.italianName && (
                      <p className="font-serif italic text-sm text-charcoal-400 mt-1">
                        {activeDish.italianName}
                      </p>
                    )}
                  </div>
                );
              })()}

              {/* Scrollable Dish Details Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                {/* Real Description */}
                <div className="space-y-1.5">
                  <span className="editorial-caps text-[10px] text-charcoal-400 block font-mono">
                    KITCHEN DESCRIPTION
                  </span>
                  <p className="text-sm sm:text-base text-charcoal-800 font-light leading-relaxed">
                    {activeDish.description}
                  </p>
                </div>

                {/* Ingredients Pill Badges */}
                {activeDish.ingredients && activeDish.ingredients.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-clay-200">
                    <span className="editorial-caps text-[10px] text-charcoal-400 block font-mono">
                      VERIFIED INGREDIENTS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeDish.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="px-2.5 py-1 rounded-subtle bg-clay-100 border border-clay-200 text-charcoal-800 text-xs font-sans"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Source Verification Badge */}
                <div className="p-3 bg-clay-100/60 rounded-subtle border border-clay-200/80 flex items-center justify-between text-xs text-charcoal-500">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brick-600" />
                    <span>Verified Recipe &bull; {activeDish.source}</span>
                  </div>
                  <span className="editorial-caps text-[9px] text-charcoal-400 font-mono">
                    Authentic Italian Bake
                  </span>
                </div>

                {/* Action Conversion Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={ORDERING_LINKS.zomatoSahidNagar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 focus-editorial shadow-subtle text-center"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Online</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>

                  <button
                    onClick={() => {
                      setActiveDish(null);
                      onOpenReservation();
                    }}
                    className="px-5 py-3 rounded-subtle bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 focus-editorial"
                  >
                    <Calendar className="w-4 h-4 text-brick-400" />
                    <span>Reserve Table</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
