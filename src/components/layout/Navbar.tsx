import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ShoppingBag, ExternalLink } from 'lucide-react';
import { Link, useRouter } from '../../router';
import { ORDERING_LINKS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../data/brickAndClayLinks';

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

import { ConceptBanner } from '../common/ConceptBanner';

interface NavbarProps {
  onOpenReservation?: () => void;
  isBannerVisible?: boolean;
  onOpenDesignSystem?: () => void;
  onDismissBanner?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  isBannerVisible = false,
  onOpenDesignSystem,
  onDismissBanner,
}) => {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Is transparent hero navbar only on homepage when not scrolled
  const isHeroTransparent = currentPath === '/' && !isScrolled;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'Our Story' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHeroTransparent
            ? 'bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/50 to-transparent border-b border-transparent'
            : 'bg-ivory-50/95 backdrop-blur-md border-b border-clay-300/80 shadow-subtle'
        }`}
      >
        {isBannerVisible && (
          <ConceptBanner
            onOpenDesignSystem={onOpenDesignSystem}
            onDismiss={onDismissBanner}
          />
        )}

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          isHeroTransparent ? 'py-3.5 sm:py-4' : 'py-2.5 sm:py-3'
        }`}>
          
          {/* Brand Wordmark & Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus-editorial rounded-subtle"
            aria-label="Brick & Clay Pizzeria Home"
          >
            <div
              className={`w-9 h-9 rounded-subtle flex items-center justify-center transition-all duration-300 ${
                isHeroTransparent
                  ? 'bg-charcoal-950/80 border border-white/20 text-ivory-100 backdrop-blur-sm'
                  : 'bg-charcoal-900 text-ivory-50 shadow-subtle'
              }`}
            >
              {/* Artisanal Clay Oven Icon */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path d="M4 19C4 12 7.5 7 12 7C16.5 7 20 12 20 19H4Z" strokeLinecap="round" />
                <path d="M8 19C8 14.5 9.8 11.5 12 11.5C14.2 11.5 16 14.5 16 19H8Z" fill="#C25E35" stroke="none" />
                <line x1="3" y1="20" x2="21" y2="20" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl tracking-tight font-semibold transition-colors duration-300 ${
                  isHeroTransparent
                    ? 'text-ivory-50 group-hover:text-brick-300 drop-shadow-sm'
                    : 'text-charcoal-900 group-hover:text-brick-600'
                }`}
              >
                Brick &amp; Clay
              </span>
              <span
                className={`editorial-caps text-[9px] tracking-loose-caps transition-colors duration-300 ${
                  isHeroTransparent ? 'text-ivory-300/90' : 'text-charcoal-500'
                }`}
              >
                Bhubaneswar &bull; Wood-Fired
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-xs uppercase tracking-editorial transition-colors duration-200 focus-editorial rounded py-1 ${
                  isHeroTransparent
                    ? 'text-ivory-100 hover:text-brick-300 font-medium'
                    : 'text-charcoal-800 hover:text-brick-600 font-medium'
                }`}
                activeClassName="!text-brick-600 font-semibold border-b-2 border-brick-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs: Primary = ORDER ONLINE, Secondary = RESERVE */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenReservation && (
              <button
                onClick={onOpenReservation}
                className={`px-4 py-2 rounded-subtle text-xs uppercase tracking-editorial font-medium transition-all duration-200 inline-flex items-center gap-1.5 focus-editorial ${
                  isHeroTransparent
                    ? 'text-ivory-100 hover:text-ivory-50 hover:bg-white/10'
                    : 'text-charcoal-800 hover:text-brick-600 hover:bg-clay-100/60'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-brick-500" />
                <span>Reserve</span>
              </button>
            )}

            <a
              href={ORDERING_LINKS.zomatoSahidNagar}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-subtle bg-brick-500 hover:bg-brick-600 text-ivory-50 text-xs uppercase tracking-editorial font-semibold transition-all duration-200 inline-flex items-center gap-1.5 shadow-subtle hover:shadow-elevated focus-editorial active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ORDER ONLINE</span>
            </a>
          </div>

          {/* Mobile Actions: Order Button & Minimalist Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={ORDERING_LINKS.zomatoSahidNagar}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-subtle bg-brick-500 text-ivory-50 text-[11px] uppercase tracking-editorial font-semibold shadow-subtle flex items-center gap-1"
            >
              <span>Order</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`p-2 rounded-subtle transition-all duration-200 focus-editorial ${
                isHeroTransparent
                  ? 'text-ivory-50 hover:bg-white/10'
                  : 'text-charcoal-900 hover:bg-clay-100'
              }`}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-end">
                <span className="w-5 h-[1.75px] bg-current rounded-full" />
                <span className="w-3.5 h-[1.75px] bg-current rounded-full" />
                <span className="w-4 h-[1.75px] bg-current rounded-full" />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-xl text-ivory-100 flex flex-col justify-between p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-charcoal-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-subtle bg-brick-500 text-ivory-50 flex items-center justify-center font-serif text-sm font-bold">
                  B
                </div>
                <div>
                  <span className="font-serif text-lg font-medium text-ivory-50 block">
                    Brick &amp; Clay
                  </span>
                  <span className="editorial-caps text-[9px] text-charcoal-400">
                    Bhubaneswar, Odisha
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-subtle text-charcoal-400 hover:text-ivory-50 hover:bg-charcoal-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="py-6 flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((item, idx) => {
                const isActive = currentPath === item.href;
                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      navigate(item.href);
                    }}
                    className={`flex items-baseline justify-between w-full text-left py-2 transition-colors ${
                      isActive ? 'text-brick-400' : 'text-ivory-100 hover:text-brick-400'
                    }`}
                  >
                    <span className="font-serif text-3xl font-light">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-charcoal-500 tracking-editorial">
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="space-y-5 border-t border-charcoal-800 pt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={ORDERING_LINKS.zomatoSahidNagar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-subtle bg-brick-500 text-ivory-50 text-xs uppercase tracking-editorial font-semibold flex items-center justify-center gap-2 shadow-subtle"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>ORDER ONLINE</span>
                </a>

                {onOpenReservation && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenReservation();
                    }}
                    className="px-5 py-3 rounded-subtle bg-charcoal-900 border border-charcoal-700 text-ivory-100 text-xs uppercase tracking-editorial font-medium flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-brick-400" />
                    <span>RESERVE TABLE</span>
                  </button>
                )}
              </div>

              {/* Instagram link */}
              <div className="flex items-center justify-between text-xs text-charcoal-400 pt-1">
                <span>Saheed Nagar &bull; Patia</span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brick-400 hover:text-brick-300"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>{INSTAGRAM_HANDLE}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
