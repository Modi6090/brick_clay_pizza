import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenMenu: () => void;
  onOpenOrder?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenMenu,
  onOpenOrder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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

  const handleMenuClick = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenMenu();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-ivory-50/95 backdrop-blur-md border-b border-clay-300/80 py-3.5 shadow-subtle'
            : 'bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/40 to-transparent py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark & Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-editorial rounded-subtle"
            aria-label="Brick & Clay Home"
          >
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-subtle flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-charcoal-900 text-ivory-50'
                  : 'bg-charcoal-950/70 border border-white/20 text-ivory-100 backdrop-blur-sm'
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
                  isScrolled
                    ? 'text-charcoal-900 group-hover:text-brick-600'
                    : 'text-ivory-50 group-hover:text-brick-300 drop-shadow-sm'
                }`}
              >
                Brick &amp; Clay
              </span>
              <span
                className={`editorial-caps text-[9px] tracking-loose-caps transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal-500' : 'text-ivory-300/90'
                }`}
              >
                Bhubaneswar &bull; Pizzeria
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main Navigation">
            <button
              onClick={handleMenuClick}
              className={`nav-link text-xs uppercase tracking-editorial transition-colors duration-300 cursor-pointer focus-editorial rounded ${
                isScrolled
                  ? 'text-charcoal-800 hover:text-brick-600'
                  : 'text-ivory-100 hover:text-brick-300 drop-shadow-sm font-medium'
              }`}
            >
              Menu
            </button>
            <a
              href="#story"
              className={`nav-link text-xs uppercase tracking-editorial transition-colors duration-300 focus-editorial rounded ${
                isScrolled
                  ? 'text-charcoal-800 hover:text-brick-600'
                  : 'text-ivory-100 hover:text-brick-300 drop-shadow-sm font-medium'
              }`}
            >
              Our Story
            </a>
            <a
              href="#gallery"
              className={`nav-link text-xs uppercase tracking-editorial transition-colors duration-300 focus-editorial rounded ${
                isScrolled
                  ? 'text-charcoal-800 hover:text-brick-600'
                  : 'text-ivory-100 hover:text-brick-300 drop-shadow-sm font-medium'
              }`}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className={`nav-link text-xs uppercase tracking-editorial transition-colors duration-300 focus-editorial rounded ${
                isScrolled
                  ? 'text-charcoal-800 hover:text-brick-600'
                  : 'text-ivory-100 hover:text-brick-300 drop-shadow-sm font-medium'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right Actions: Order Online & Reserve Table */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.zomato.com/bhubaneswar"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenOrder}
              className={`px-4 py-2.5 rounded-subtle text-xs uppercase tracking-editorial font-medium transition-all duration-300 inline-flex items-center gap-1.5 focus-editorial ${
                isScrolled
                  ? 'text-charcoal-800 hover:text-brick-600 hover:bg-clay-100/60'
                  : 'text-ivory-100 hover:text-ivory-50 hover:bg-white/10'
              }`}
            >
              <span>Order Online</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenReservation}
              icon={<Calendar className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              Reserve Table
            </Button>
          </div>

          {/* Mobile Minimalist Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`p-2.5 rounded-subtle transition-all duration-300 focus-editorial ${
                isScrolled
                  ? 'text-charcoal-900 hover:bg-clay-100'
                  : 'text-ivory-50 hover:bg-white/10'
              }`}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span className="w-6 h-[1.75px] bg-current rounded-full transition-all" />
                <span className="w-4 h-[1.75px] bg-current rounded-full transition-all" />
                <span className="w-5 h-[1.75px] bg-current rounded-full transition-all" />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Premium Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-xl text-ivory-100 flex flex-col justify-between p-6 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation Menu"
          >
            {/* Top Bar inside Fullscreen Menu */}
            <div className="flex items-center justify-between border-b border-charcoal-800/80 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-subtle bg-brick-500 text-ivory-50 flex items-center justify-center font-serif">
                  B
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-semibold tracking-tight text-ivory-50">
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
                className="p-2.5 rounded-subtle text-charcoal-400 hover:text-ivory-50 hover:bg-charcoal-900 transition-colors focus-editorial"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Editorial Nav Links */}
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              className="py-8 flex flex-col space-y-6"
            >
              {[
                { number: '01', label: 'Menu', action: handleMenuClick },
                { number: '02', label: 'Our Story', href: '#story' },
                { number: '03', label: 'Gallery', href: '#gallery' },
                { number: '04', label: 'Contact', href: '#contact' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="group flex items-baseline justify-between w-full text-left py-1 text-ivory-100 hover:text-brick-400 transition-colors focus-editorial"
                    >
                      <span className="font-serif text-3xl sm:text-4xl font-light">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-charcoal-500 group-hover:text-brick-400 tracking-editorial">
                        {item.number}
                      </span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-baseline justify-between w-full text-left py-1 text-ivory-100 hover:text-brick-400 transition-colors focus-editorial"
                    >
                      <span className="font-serif text-3xl sm:text-4xl font-light">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-charcoal-500 group-hover:text-brick-400 tracking-editorial">
                        {item.number}
                      </span>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            {/* Bottom Actions & Outlets info */}
            <div className="space-y-6 border-t border-charcoal-800/80 pt-6">
              {/* Conversion Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Reserve Table
                </Button>

                <a
                  href="https://www.zomato.com/bhubaneswar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-subtle bg-charcoal-900 border border-charcoal-700 text-ivory-100 hover:border-brick-500 hover:text-brick-400 transition-all text-xs uppercase tracking-editorial font-medium flex items-center justify-center gap-1.5 text-center focus-editorial"
                >
                  <span>Order Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Outlet details footer */}
              <div className="text-xs text-charcoal-400 flex flex-col sm:flex-row justify-between gap-2 font-light">
                <div>
                  <span className="text-ivory-200 font-normal">Sahid Nagar:</span> Bhabani Mall, Inox Block
                </div>
                <div>
                  <span className="text-ivory-200 font-normal">Patia:</span> KIIT Road Campus
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
