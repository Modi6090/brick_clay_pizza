import { ArrowUp, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_LOCATIONS } from '../../data/restaurantData';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-200 pt-16 pb-32 sm:pb-16 border-t border-charcoal-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-charcoal-800/80">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-soft bg-brick-500 flex items-center justify-center text-ivory-50">
                <svg
                  className="w-5 h-5 text-ivory-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 19C4 12 7.5 7 12 7C16.5 7 20 12 20 19H4Z" strokeLinecap="round" />
                  <path d="M8 19C8 15 9.8 12 12 12C14.2 12 16 15 16 19H8Z" fill="#FAF6EE" stroke="none" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-ivory-50">
                Brick &amp; Clay
              </span>
            </div>

            <p className="text-sm text-charcoal-400 font-light leading-relaxed max-w-sm">
              Artisanal Neapolitan wood-fired pizza and Italian kitchen in Bhubaneswar, Odisha. Slow-fermented sourdough, blistered in genuine clay ovens.
            </p>

            <div className="pt-2 text-xs text-charcoal-500 font-light space-y-1">
              <p>Concept Pitch &bull; Website Redesign Prototype</p>
              <p>Crafted to elevate Brick &amp; Clay's digital brand presence.</p>
            </div>
          </div>

          {/* Locations Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="editorial-caps text-[11px] text-brick-400 block">
              Outlets in Bhubaneswar
            </span>
            <div className="space-y-4 text-xs text-charcoal-300">
              {RESTAURANT_LOCATIONS.map((loc) => (
                <div key={loc.id} className="space-y-1 border-l-2 border-charcoal-800 pl-3">
                  <p className="font-serif text-base text-ivory-100 font-medium">
                    {loc.name}
                  </p>
                  <p className="text-charcoal-400">{loc.address}</p>
                  <p className="text-charcoal-500 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-brick-400" /> {loc.timings}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Delivery (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="editorial-caps text-[11px] text-brick-400 block">
              Online Ordering
            </span>
            <ul className="space-y-2 text-xs text-charcoal-300">
              <li>
                <a
                  href="https://www.swiggy.com/city/bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brick-400 transition-colors flex items-center gap-1.5"
                >
                  Order on Swiggy <ExternalLink className="w-3 h-3 text-charcoal-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.zomato.com/bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brick-400 transition-colors flex items-center gap-1.5"
                >
                  Order on Zomato <ExternalLink className="w-3 h-3 text-charcoal-500" />
                </a>
              </li>
              <li className="pt-2">
                <span className="editorial-caps text-[10px] text-charcoal-500 block mb-1">
                  Table Reservations
                </span>
                <p className="text-charcoal-400">Available via online booking or walk-in seating.</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <p>
            &copy; {CURRENT_YEAR} Brick &amp; Clay Redesign Concept. All visual materials conceptualized for client presentation.
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
