import { useState, lazy, Suspense } from 'react';
import { RouterProvider, useRouter } from './router';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Layers, Eye } from 'lucide-react';

// Lazy-loaded modals and dev tools
const QuickReservationModal = lazy(() =>
  import('./components/reservation/QuickReservationModal').then((m) => ({ default: m.QuickReservationModal }))
);
const DesignSystemShowcase = lazy(() =>
  import('./components/design-system/DesignSystemShowcase').then((m) => ({ default: m.DesignSystemShowcase }))
);

const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 rounded-full border-2 border-brick-500 border-t-transparent animate-spin" />
  </div>
);

function AppContent() {
  const { currentPath } = useRouter();
  const [viewMode, setViewMode] = useState<'concept' | 'design-system'>('concept');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

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

      {/* 1 & 2. Global Navigation with integrated Concept Disclaimer */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        isBannerVisible={isBannerVisible}
        onOpenDesignSystem={() => setViewMode('design-system')}
        onDismissBanner={() => setIsBannerVisible(false)}
      />

      {/* 3. Main Route Content */}
      <main id="main-content">
        {currentPath === '/' && (
          <HomePage onOpenReservation={() => setIsReservationOpen(true)} />
        )}
        {currentPath === '/menu' && (
          <MenuPage onOpenReservation={() => setIsReservationOpen(true)} />
        )}
        {currentPath === '/about' && <AboutPage />}
        {currentPath === '/gallery' && <GalleryPage />}
        {currentPath === '/contact' && <ContactPage />}
      </main>

      {/* 4. Semantic Editorial Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 5. Mobile Sticky Bottom Action Bar: Menu | Order | Reserve | Visit */}
      <MobileStickyBar onOpenReservation={() => setIsReservationOpen(true)} />

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
              <span>Back to Concept</span>
            </>
          )}
        </button>
      </aside>

      {/* Interactive Quick Reservation Modal */}
      {isReservationOpen && (
        <Suspense fallback={null}>
          <QuickReservationModal
            isOpen={isReservationOpen}
            onClose={() => setIsReservationOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
