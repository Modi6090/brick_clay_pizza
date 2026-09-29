import { useState, lazy, Suspense } from 'react';
import { ConceptBanner } from './components/common/ConceptBanner';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { SignaturePizzas } from './components/home/SignaturePizzas';
import { CraftStory } from './components/home/CraftStory';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { Layers, Eye } from 'lucide-react';

// Lazy-loaded below-the-fold sections for code splitting
const RestaurantMenuSection = lazy(() =>
  import('./components/menu/RestaurantMenuSection').then((m) => ({ default: m.RestaurantMenuSection }))
);
const VisualGallerySection = lazy(() =>
  import('./components/gallery/VisualGallerySection').then((m) => ({ default: m.VisualGallerySection }))
);
const ExperienceSection = lazy(() =>
  import('./components/home/ExperienceSection').then((m) => ({ default: m.ExperienceSection }))
);
const LocationConversionSection = lazy(() =>
  import('./components/home/LocationConversionSection').then((m) => ({ default: m.LocationConversionSection }))
);
const QuickReservationModal = lazy(() =>
  import('./components/reservation/QuickReservationModal').then((m) => ({ default: m.QuickReservationModal }))
);
const MenuModalPreview = lazy(() =>
  import('./components/menu/MenuModalPreview').then((m) => ({ default: m.MenuModalPreview }))
);
const DesignSystemShowcase = lazy(() =>
  import('./components/design-system/DesignSystemShowcase').then((m) => ({ default: m.DesignSystemShowcase }))
);

// Minimal loading fallback
const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 rounded-full border-2 border-brick-500 border-t-transparent animate-spin" />
  </div>
);

export function App() {
  const [viewMode, setViewMode] = useState<'concept' | 'design-system'>('concept');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleMenuClick = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsMenuOpen(true);
    }
  };

  if (viewMode === 'design-system') {
    return (
      <Suspense fallback={<SectionFallback />}>
        <DesignSystemShowcase onBackToConcept={() => setViewMode('concept')} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-background-primary text-typography-primary selection:bg-brick-500 selection:text-ivory-50 antialiased font-sans relative overflow-x-hidden">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-charcoal-900 focus:text-ivory-50 focus:rounded-subtle focus:shadow-elevated focus:outline-none focus:ring-2 focus:ring-brick-500 text-xs uppercase tracking-editorial"
      >
        Skip to main content
      </a>

      {/* 1. Concept Disclaimer Header */}
      {isBannerVisible && (
        <ConceptBanner
          onOpenDesignSystem={() => setViewMode('design-system')}
          onDismiss={() => setIsBannerVisible(false)}
        />
      )}

      {/* 2. Global Navigation */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenMenu={handleMenuClick}
      />

      {/* Main Flow */}
      <main id="main-content">
        {/* 3. Cinematic Full-Screen Hero */}
        <Hero
          onOpenMenu={handleMenuClick}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 4. Signature Pizzas Editorial Showcase */}
        <SignaturePizzas
          onOpenMenu={handleMenuClick}
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* 5. The Craft Story (Dough → Sauce → Toppings → Fire) */}
        <CraftStory />

        {/* 6. Complete Restaurant Menu Experience */}
        <Suspense fallback={<SectionFallback />}>
          <RestaurantMenuSection
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        </Suspense>

        {/* 7. Phase 7: Visual Gallery Section with Accessible Lightbox */}
        <Suspense fallback={<SectionFallback />}>
          <VisualGallerySection />
        </Suspense>

        {/* 8. Phase 8: Experience & Social Proof (Pillars, Ambiance, Community Sentiments, Social) */}
        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection onOpenReservation={() => setIsReservationOpen(true)} />
        </Suspense>

        {/* 9. Phase 9: Location & Conversion Final Section */}
        <Suspense fallback={<SectionFallback />}>
          <LocationConversionSection
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenMenu={handleMenuClick}
          />
        </Suspense>
      </main>

      {/* Semantic Editorial Footer */}
      <Footer />

      {/* 8. Mobile Sticky Bottom Action Bar: Menu | Order | Reserve */}
      <MobileStickyBar
        onOpenMenu={handleMenuClick}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Floating Design System Spec Switcher Pill */}
      <aside aria-label="Design System Spec Switcher" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
        <button
          onClick={() => setViewMode(viewMode === 'concept' ? 'design-system' : 'concept')}
          className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-charcoal-900/90 backdrop-blur-md text-ivory-100 shadow-float border border-charcoal-700/80 hover:border-brick-500 hover:bg-charcoal-900 transition-all text-xs font-sans font-medium tracking-editorial uppercase focus-editorial"
        >
          {viewMode === 'concept' ? (
            <>
              <Layers className="w-3.5 h-3.5 text-brick-400" />
              <span>Design System</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-olive-400" />
              <span>Back to Gallery</span>
            </>
          )}
        </button>
      </aside>

      {/* Interactive Reservation Modal */}
      {isReservationOpen && (
        <Suspense fallback={null}>
          <QuickReservationModal
            isOpen={isReservationOpen}
            onClose={() => setIsReservationOpen(false)}
          />
        </Suspense>
      )}

      {/* Full Menu Modal Preview */}
      {isMenuOpen && (
        <Suspense fallback={null}>
          <MenuModalPreview
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            onOpenReservation={() => {
              setIsMenuOpen(false);
              setIsReservationOpen(true);
            }}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
