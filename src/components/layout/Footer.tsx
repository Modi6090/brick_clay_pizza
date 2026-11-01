import React from 'react';
import { ArrowUp, Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { Link } from '../../router';
import { RESTAURANT_LOCATIONS, ORDERING_LINKS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../data/brickAndClayLinks';

const CURRENT_YEAR = new Date().getFullYear();

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

interface FooterProps {
  onOpenReservation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-200 pt-16 pb-28 sm:pb-16 border-t border-charcoal-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-charcoal-800/80">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-subtle bg-brick-500 flex items-center justify-center text-ivory-50 font-serif font-bold">
                B
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-ivory-50">
                Brick &amp; Clay
              </span>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-400 font-light leading-relaxed max-w-sm">
              Artisanal Neapolitan wood-fired pizza and Italian kitchen in Bhubaneswar, Odisha. Slow-fermented sourdough blistered in live clay ovens.
            </p>

            {/* Instagram Social Badge */}
            <div className="pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900 border border-charcoal-700/80 text-ivory-200 hover:text-brick-400 hover:border-brick-500 transition-all text-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-brick-400" />
                <span>Follow {INSTAGRAM_HANDLE}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

          {/* Navigation Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="editorial-caps text-[11px] text-brick-400 font-semibold block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs text-charcoal-300">
              <li>
                <Link href="/" className="hover:text-brick-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-brick-400 transition-colors">
                  Complete Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brick-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brick-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brick-400 transition-colors">
                  Locations &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="editorial-caps text-[11px] text-brick-400 font-semibold block">
              OUR OUTLETS
            </span>
            <div className="space-y-4 text-xs text-charcoal-300">
              {RESTAURANT_LOCATIONS.map((loc) => (
                <div key={loc.id} className="space-y-1 border-l-2 border-charcoal-800 pl-3">
                  <p className="font-serif text-sm text-ivory-100 font-medium">
                    {loc.name}
                  </p>
                  <p className="text-charcoal-400 leading-snug">{loc.address}</p>
                  <div className="flex items-center gap-4 text-charcoal-500 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brick-400" /> {loc.timings}
                    </span>
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="text-ivory-300 hover:text-brick-400 flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3 text-brick-400" /> {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="editorial-caps text-[11px] text-brick-400 font-semibold block">
              ACTIONS
            </span>
            <ul className="space-y-2.5 text-xs text-charcoal-300">
              <li>
                <a
                  href={ORDERING_LINKS.zomatoSahidNagar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brick-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Order on Zomato</span>
                  <ExternalLink className="w-3 h-3 text-charcoal-500" />
                </a>
              </li>
              <li>
                <a
                  href={ORDERING_LINKS.swiggySahidNagar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brick-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Order on Swiggy</span>
                  <ExternalLink className="w-3 h-3 text-charcoal-500" />
                </a>
              </li>
              {onOpenReservation && (
                <li>
                  <button
                    onClick={onOpenReservation}
                    className="hover:text-brick-400 transition-colors text-left"
                  >
                    Reserve a Table
                  </button>
                </li>
              )}
              <li>
                <Link href="/contact" className="hover:text-brick-400 transition-colors flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brick-400" />
                  <span>Get Directions</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>
            &copy; {CURRENT_YEAR} Brick &amp; Clay. Redesign concept for client presentation.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-charcoal-400 hover:text-ivory-100 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
