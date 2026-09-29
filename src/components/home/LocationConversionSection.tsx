import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Calendar,
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Button } from '../ui/Button';
import { RESTAURANT_LOCATIONS } from '../../data/restaurantData';

interface LocationConversionSectionProps {
  onOpenReservation: () => void;
  onOpenMenu?: () => void;
}

export const LocationConversionSection: React.FC<LocationConversionSectionProps> = ({
  onOpenReservation,
}) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('sahid-nagar');

  const activeLocation =
    RESTAURANT_LOCATIONS.find((loc) => loc.id === selectedLocationId) || RESTAURANT_LOCATIONS[0];

  return (
    <section
      id="locations"
      aria-label="Restaurant Locations, Contact, and Reservations"
      className="py-24 sm:py-32 bg-background-primary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      {/* Background Ambience Texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brick-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive-200/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============================================================== */}
        {/* 1. SECTION HEADER: Editorial Title & Context */}
        {/* ============================================================== */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              TWO LOCATIONS &bull; BHUBANESWAR
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            Two neighbourhood ovens. <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              One unbroken craft.
            </span>
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Whether you are planning an intimate dinner in Sahid Nagar, gathering friends near KIIT Road in Patia, or ordering blistered crusts home — our ovens are stoked daily.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2. OUTLET SWITCHER TABS (Mobile & Desktop) */}
        {/* ============================================================== */}
        <div className="flex items-center justify-start sm:justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-clay-200/60 rounded-subtle border border-clay-300 backdrop-blur-sm">
            {RESTAURANT_LOCATIONS.map((loc) => {
              const isSelected = loc.id === selectedLocationId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`px-5 py-2.5 rounded-subtle text-xs uppercase tracking-editorial font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap focus-editorial ${
                    isSelected
                      ? 'bg-charcoal-900 text-ivory-50 shadow-subtle'
                      : 'text-charcoal-700 hover:text-charcoal-950 hover:bg-clay-100/50'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-brick-400' : 'text-charcoal-400'}`} />
                  <span>{loc.area}</span>
                  {loc.isFlagship && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-brick-500/20 text-brick-300 font-mono hidden md:inline">
                      Flagship
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. EDITORIAL LOCATION SHOWCASE: Content Beside Photography */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-24 sm:mb-32">
          
          {/* Left: Location Card Details (7 cols) */}
          <motion.div
            key={activeLocation.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-subtle border border-clay-300 bg-surface-primary shadow-subtle flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Outlet Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-clay-200/80 pb-5">
                <div>
                  <span className="editorial-caps text-[10px] text-brick-600 font-semibold block">
                    {activeLocation.area} Outlet
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-1">
                    {activeLocation.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans bg-olive-50 border border-olive-200 text-olive-800">
                    <span className="w-2 h-2 rounded-full bg-olive-600 animate-pulse" />
                    Open Today
                  </span>
                </div>
              </div>

              {/* Verified Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* 1. Address & Landmark */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs editorial-caps text-charcoal-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-brick-600" />
                    <span>VERIFIED ADDRESS</span>
                  </div>
                  <p className="font-sans font-medium text-sm text-charcoal-900 leading-snug">
                    {activeLocation.address}
                  </p>
                  <p className="text-xs text-charcoal-500 font-light">
                    {activeLocation.landmark}
                  </p>
                  <p className="text-[11px] text-charcoal-400 font-mono">
                    Bhubaneswar, Odisha, India
                  </p>
                </div>

                {/* 2. Verified Operating Hours */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs editorial-caps text-charcoal-400 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-brick-600" />
                    <span>DAILY HOURS</span>
                  </div>
                  <p className="font-sans font-medium text-sm text-charcoal-900 leading-snug">
                    {activeLocation.timings}
                  </p>
                  <p className="text-xs text-charcoal-500 font-light">
                    Lunch service through late evening dinner.
                  </p>
                  <p className="text-[11px] text-charcoal-400 font-mono">
                    Dine-in &bull; Takeout &bull; Delivery
                  </p>
                </div>

                {/* 3. Verified Direct Contact Phone */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs editorial-caps text-charcoal-400 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-brick-600" />
                    <span>PHONE &amp; RESERVATIONS</span>
                  </div>
                  <a
                    href={`tel:${activeLocation.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm sm:text-base font-semibold text-charcoal-900 hover:text-brick-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{activeLocation.phone}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-charcoal-400" />
                  </a>
                  <p className="text-xs text-charcoal-500 font-light">
                    For direct host inquiries and large party reservations.
                  </p>
                </div>

                {/* 4. Delivery Platforms */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs editorial-caps text-charcoal-400 font-semibold">
                    <ShoppingBag className="w-3.5 h-3.5 text-brick-600" />
                    <span>ONLINE DELIVERY</span>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={activeLocation.zomatoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-subtle bg-clay-100 hover:bg-clay-200 border border-clay-300 text-xs font-sans font-medium text-charcoal-800 hover:text-charcoal-950 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Zomato</span>
                      <ExternalLink className="w-3 h-3 text-charcoal-400" />
                    </a>
                    <a
                      href={activeLocation.swiggyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-subtle bg-clay-100 hover:bg-clay-200 border border-clay-300 text-xs font-sans font-medium text-charcoal-800 hover:text-charcoal-950 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Swiggy</span>
                      <ExternalLink className="w-3 h-3 text-charcoal-400" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Location Actions Bar */}
            <div className="pt-6 border-t border-clay-200/80 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenReservation}
                icon={<Calendar className="w-4 h-4" />}
                className="shadow-subtle"
              >
                Reserve a Table
              </Button>

              <Button
                variant="outline"
                size="md"
                href={activeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Navigation className="w-4 h-4 text-brick-600" />}
              >
                Get Directions
              </Button>

              <a
                href={`tel:${activeLocation.phone.replace(/\s+/g, '')}`}
                className="px-4 py-2.5 rounded-subtle text-xs uppercase tracking-editorial font-medium text-charcoal-700 hover:text-brick-600 hover:bg-clay-100 transition-colors inline-flex items-center gap-1.5 ml-auto focus-editorial"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Host</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Authentic Restaurant Photography Spread (5 cols) */}
          <motion.div
            key={`img-${activeLocation.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-subtle overflow-hidden border border-clay-300 bg-charcoal-950 shadow-elevated relative group flex flex-col justify-end min-h-[360px] sm:min-h-[440px]"
          >
            <img
              src={
                activeLocation.id === 'sahid-nagar'
                  ? '/images/restaurant-ambiance.jpg'
                  : '/images/table-spread.jpg'
              }
              alt={`${activeLocation.name} restaurant ambience and dining room in Bhubaneswar`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/40 to-transparent pointer-events-none" />

            {/* Overlaid Editorial Note */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2 text-ivory-100">
              <span className="editorial-caps text-[10px] text-brick-300 font-semibold tracking-loose-caps block">
                {activeLocation.id === 'sahid-nagar' ? 'Central Bhubaneswar' : 'North Bhubaneswar Quarter'}
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-light text-ivory-50">
                {activeLocation.id === 'sahid-nagar'
                  ? 'Intimate Candlelit Dining at Bhabani Mall'
                  : 'Lively Slices & Sourdough on KIIT Road'}
              </h4>
              <p className="text-xs text-ivory-200/80 font-light leading-relaxed">
                {activeLocation.id === 'sahid-nagar'
                  ? 'A relaxed, rustic retreat nestled in Sahid Nagar. Ideal for date nights and family celebrations over genuine sourdough crusts.'
                  : 'Vibrant dining room welcoming university students, faculty, and pizza purists in Patia. Open kitchen with oven views.'}
              </p>
            </div>
          </motion.div>

        </div>

        {/* ============================================================== */}
        {/* 4. FINAL CONVERSION CLIMAX BANNER */}
        {/* "SEE YOU AT BRICK & CLAY" */}
        {/* Buttons: ORDER ONLINE | RESERVE A TABLE | GET DIRECTIONS */}
        {/* ============================================================== */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-subtle bg-charcoal-950 text-ivory-50 border border-charcoal-800 shadow-elevated p-8 sm:p-14 lg:p-16 relative overflow-hidden text-center sm:text-left"
        >
          {/* Subtle Ambient Oven Glow Effect */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-brick-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-clay-700/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
            
            {/* Climax Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-white/10 text-ivory-300">
              <Sparkles className="w-3.5 h-3.5 text-brick-400" />
              <span className="editorial-caps text-[10px] tracking-loose-caps font-semibold">
                YOUR TABLE IS WAITING
              </span>
            </div>

            {/* Giant Editorial Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-ivory-50 leading-[1.08] max-w-3xl">
              SEE YOU AT <br className="hidden sm:inline" />
              <span className="font-normal italic text-brick-400 font-serif">
                BRICK &amp; CLAY
              </span>
            </h2>

            {/* Editorial Supporting Pitch Copy */}
            <p className="text-ivory-200/80 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl">
              The dough is fermenting, the live fire is stoked to 450&deg;C, and the room is warm. Join us for lunch, dinner, or take the authentic wood-fired experience home tonight.
            </p>

            {/* The 3 Core Conversion Buttons (Prompt Mandated) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-4">
              
              {/* 1. ORDER ONLINE */}
              <a
                href={activeLocation.zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 font-sans text-xs uppercase tracking-editorial font-semibold transition-all duration-300 shadow-elevated hover:shadow-glow flex items-center justify-center gap-2 focus-editorial active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER ONLINE</span>
              </a>

              {/* 2. RESERVE A TABLE */}
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-charcoal-900 hover:bg-charcoal-800 text-ivory-50 border border-charcoal-700 hover:border-brick-400 font-sans text-xs uppercase tracking-editorial font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus-editorial active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-brick-400" />
                <span>RESERVE A TABLE</span>
              </button>

              {/* 3. GET DIRECTIONS */}
              <a
                href={activeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-subtle bg-transparent hover:bg-white/10 text-ivory-100 border border-white/20 hover:border-white/40 font-sans text-xs uppercase tracking-editorial font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus-editorial active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-brick-400" />
                <span>GET DIRECTIONS</span>
              </a>

            </div>

            {/* Secondary Quick Contact Links */}
            <div className="pt-8 border-t border-charcoal-800/80 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400 font-light">
              <div className="flex items-center gap-4">
                <span>Sahid Nagar: <a href="tel:+916742548920" className="text-ivory-200 hover:text-brick-400 underline-offset-4 hover:underline font-mono">+91 674 254 8920</a></span>
                <span>&bull;</span>
                <span>Patia: <a href="tel:+916742721430" className="text-ivory-200 hover:text-brick-400 underline-offset-4 hover:underline font-mono">+91 674 272 1430</a></span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-charcoal-400">
                  Concept Redesign by Senior Design Team &bull; Bhubaneswar, Odisha
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
