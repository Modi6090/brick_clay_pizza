import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, ShoppingBag, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_LOCATIONS, ORDERING_LINKS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/brickAndClayLinks';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ContactPage: React.FC = () => {
  const [selectedOutlet, setSelectedOutlet] = useState<string>('saheed-nagar');
  const [partySize, setPartySize] = useState('2');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('19:30');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Locations & Reservations — Brick & Clay | Bhubaneswar';
  }, []);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-28 min-h-screen bg-background-primary text-typography-primary">
      
      {/* 1. Header */}
      <section className="bg-charcoal-950 text-ivory-50 py-16 sm:py-20 border-b border-charcoal-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brick-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-white/10 text-brick-400 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5" />
              <span>TWO LOCATIONS IN BHUBANESWAR</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-ivory-50 tracking-tight leading-[1.05]">
              Come find us. <br />
              <span className="font-normal italic text-brick-400 font-serif">
                Reserve a table or visit.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ivory-200/80 font-light max-w-2xl leading-relaxed">
              Find our live clay dome ovens in Saheed Nagar and Patia, call host desks directly, or book your table for an unhurried wood-fired dining experience.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Outlets Grid */}
      <section className="py-16 sm:py-24 bg-surface-primary border-b border-clay-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="editorial-caps text-xs text-brick-600 font-semibold tracking-loose-caps">
              OUR RESTAURANTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
              Two neighbourhood kitchens.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RESTAURANT_LOCATIONS.map((loc) => (
              <article
                key={loc.id}
                className="bg-background-primary rounded-subtle border border-clay-300 shadow-subtle hover:shadow-elevated transition-all p-7 sm:p-9 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between border-b border-clay-200/80 pb-4">
                    <div>
                      <span className="editorial-caps text-[10px] text-brick-600 font-semibold">
                        {loc.name}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-0.5">
                        {loc.area}
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] bg-olive-50 border border-olive-200 text-olive-800 font-medium">
                      Open Today
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-brick-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal-900">{loc.address}</p>
                        {loc.landmark && (
                          <p className="text-charcoal-500 text-xs mt-0.5">{loc.landmark}</p>
                        )}
                        <p className="text-[11px] text-charcoal-400 font-mono mt-0.5">Bhubaneswar, Odisha</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center gap-3 text-charcoal-700">
                      <Clock className="w-4 h-4 text-brick-600 shrink-0" />
                      <span>{loc.timings}</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-brick-600 shrink-0" />
                      <a
                        href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                        className="font-mono text-charcoal-900 font-semibold hover:text-brick-600 transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Outlet Actions */}
                <div className="pt-4 border-t border-clay-200/80 flex flex-wrap items-center gap-2.5">
                  <a
                    href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                    className="px-4 py-2.5 rounded-subtle bg-clay-100 hover:bg-clay-200 text-charcoal-900 text-xs uppercase tracking-editorial font-semibold transition-colors inline-flex items-center gap-1.5 focus-editorial"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL HOST</span>
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
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Table Reservation Booking Section */}
      <section className="py-16 sm:py-24 bg-background-secondary border-b border-clay-300/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="editorial-caps text-xs text-brick-600 font-semibold tracking-loose-caps">
              RESERVATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
              Save your table by the oven.
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-light">
              We hold a portion of tables for advance reservations in Saheed Nagar and Patia.
            </p>
          </div>

          <div className="bg-surface-primary rounded-subtle border border-clay-300 shadow-elevated p-8 sm:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-olive-600 mx-auto" />
                <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                  Reservation Request Received
                </h3>
                <p className="text-sm text-charcoal-600 max-w-md mx-auto">
                  Thank you, <strong>{guestName || 'Guest'}</strong>. Our host at{' '}
                  <strong>{selectedOutlet === 'saheed-nagar' ? 'Saheed Nagar' : 'Patia'}</strong>{' '}
                  will confirm your table for {partySize} guests.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-subtle bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-editorial font-semibold"
                  >
                    Make Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleReservationSubmit} className="space-y-6">
                
                {/* Outlet Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-editorial font-semibold text-charcoal-800 mb-2">
                    Select Location
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedOutlet('saheed-nagar')}
                      className={`p-3.5 rounded-subtle border text-left text-xs transition-all ${
                        selectedOutlet === 'saheed-nagar'
                          ? 'border-brick-500 bg-brick-50/50 text-charcoal-900 font-medium ring-1 ring-brick-500'
                          : 'border-clay-300 bg-surface-primary text-charcoal-700 hover:border-clay-400'
                      }`}
                    >
                      <span className="font-semibold block">Saheed Nagar (Bhawani Mall)</span>
                      <span className="text-[11px] text-charcoal-500">Flagship Dining Room</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedOutlet('patia')}
                      className={`p-3.5 rounded-subtle border text-left text-xs transition-all ${
                        selectedOutlet === 'patia'
                          ? 'border-brick-500 bg-brick-50/50 text-charcoal-900 font-medium ring-1 ring-brick-500'
                          : 'border-clay-300 bg-surface-primary text-charcoal-700 hover:border-clay-400'
                      }`}
                    >
                      <span className="font-semibold block">Patia (KIIT Square)</span>
                      <span className="text-[11px] text-charcoal-500">North Bhubaneswar</span>
                    </button>
                  </div>
                </div>

                {/* Date, Time, Party Size */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-semibold text-charcoal-800 mb-1.5">
                      Party Size
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-subtle border border-clay-300 bg-surface-primary text-xs text-charcoal-900 focus-editorial"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ (Large Party)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-semibold text-charcoal-800 mb-1.5">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={reservationDate}
                      onChange={(e) => setReservationDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-subtle border border-clay-300 bg-surface-primary text-xs text-charcoal-900 focus-editorial"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-semibold text-charcoal-800 mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={reservationTime}
                      onChange={(e) => setReservationTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-subtle border border-clay-300 bg-surface-primary text-xs text-charcoal-900 focus-editorial"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:30">01:30 PM (Lunch)</option>
                      <option value="19:00">07:00 PM (Dinner)</option>
                      <option value="19:30">07:30 PM (Dinner)</option>
                      <option value="20:00">08:00 PM (Dinner)</option>
                      <option value="20:30">08:30 PM (Dinner)</option>
                      <option value="21:00">09:00 PM (Dinner)</option>
                      <option value="21:30">09:30 PM (Dinner)</option>
                    </select>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-semibold text-charcoal-800 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Soumya Patnaik"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-subtle border border-clay-300 bg-surface-primary text-xs text-charcoal-900 placeholder:text-charcoal-400 focus-editorial"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-editorial font-semibold text-charcoal-800 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-subtle border border-clay-300 bg-surface-primary text-xs text-charcoal-900 placeholder:text-charcoal-400 focus-editorial"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all flex items-center justify-center gap-2 shadow-elevated focus-editorial"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>REQUEST TABLE RESERVATION</span>
                  </button>
                  <p className="text-[11px] text-charcoal-500 text-center mt-2 font-light">
                    Direct confirmation via phone or SMS within 30 minutes of kitchen opening.
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. Instagram Social Strip */}
      <section className="py-12 bg-charcoal-950 text-ivory-100 border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <InstagramIcon className="w-5 h-5 text-brick-400 shrink-0" />
            <div>
              <p className="font-serif text-lg font-medium text-ivory-50">
                Follow our wood-fired journey
              </p>
              <p className="text-xs text-charcoal-400">
                Tag @brickandclay.in across your visits in Bhubaneswar
              </p>
            </div>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-subtle bg-charcoal-900 hover:bg-brick-600 border border-charcoal-700 hover:border-brick-500 text-xs uppercase tracking-editorial font-medium transition-all inline-flex items-center gap-2"
          >
            <span>{INSTAGRAM_HANDLE}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
};
