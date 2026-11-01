import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Navigation, ShoppingBag, Clock } from 'lucide-react';
import { RESTAURANT_LOCATIONS, ORDERING_LINKS } from '../../data/brickAndClayLinks';

export const HomeLocationsSection: React.FC = () => {
  return (
    <section
      id="locations"
      aria-label="Restaurant Locations and Contacts"
      className="py-20 sm:py-28 bg-background-secondary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              TWO OUTLETS IN BHUBANESWAR
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal-900 tracking-tight leading-[1.1]">
            Come find <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              us.
            </span>
          </h2>

          <p className="text-charcoal-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            Visit our live clay dome kitchens in Saheed Nagar and Patia, or have hot blistered pies delivered straight to your door.
          </p>
        </div>

        {/* 2 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {RESTAURANT_LOCATIONS.map((loc, idx) => (
            <motion.article
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface-primary rounded-subtle border border-clay-300 shadow-subtle hover:shadow-elevated transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Location Header */}
                <div className="flex items-start justify-between gap-3 border-b border-clay-200/80 pb-4">
                  <div>
                    <span className="editorial-caps text-[10px] text-brick-600 font-semibold block">
                      {loc.name.toUpperCase()}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-0.5">
                      {loc.area}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-medium bg-olive-50 border border-olive-200 text-olive-800 shrink-0">
                    Open Daily
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brick-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-charcoal-900 font-medium leading-snug">
                        {loc.address}
                      </p>
                      {loc.landmark && (
                        <p className="text-charcoal-500 text-xs mt-0.5">
                          {loc.landmark}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-2.5 text-charcoal-600">
                    <Clock className="w-4 h-4 text-brick-600 shrink-0" />
                    <span>{loc.timings}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brick-600 shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="font-mono text-charcoal-900 font-medium hover:text-brick-600 transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: CALL | GET DIRECTIONS | ORDER ONLINE */}
              <div className="pt-4 border-t border-clay-200/80 flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                  className="px-4 py-2.5 rounded-subtle bg-clay-100 hover:bg-clay-200 text-charcoal-900 text-xs uppercase tracking-editorial font-semibold transition-colors inline-flex items-center gap-1.5 focus-editorial"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL</span>
                </a>

                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-subtle bg-clay-100 hover:bg-clay-200 text-charcoal-900 text-xs uppercase tracking-editorial font-semibold transition-colors inline-flex items-center gap-1.5 focus-editorial"
                >
                  <Navigation className="w-3.5 h-3.5 text-brick-600" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={loc.zomatoUrl || ORDERING_LINKS.zomatoSahidNagar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-colors inline-flex items-center gap-1.5 shadow-subtle ml-auto focus-editorial"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ORDER ONLINE</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
