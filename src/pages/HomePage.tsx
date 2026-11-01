import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { RestaurantIntro } from '../components/home/RestaurantIntro';
import { HomeSignatureShowcase } from '../components/home/HomeSignatureShowcase';
import { HomeCraftSection } from '../components/home/HomeCraftSection';
import { HomeAtmosphereSection } from '../components/home/HomeAtmosphereSection';
import { HomeGalleryPreview } from '../components/home/HomeGalleryPreview';
import { HomeLocationsSection } from '../components/home/HomeLocationsSection';
import { HomeFinalCTA } from '../components/home/HomeFinalCTA';

interface HomePageProps {
  onOpenReservation?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenReservation }) => {
  return (
    <div className="space-y-0">
      {/* SECTION 02 — HERO */}
      <HomeHero onOpenReservation={onOpenReservation} />

      {/* SECTION 03 — QUICK RESTAURANT INTRO */}
      <RestaurantIntro />

      {/* SECTION 04 — SIGNATURE PIZZA SHOWCASE (4-5 DISHES MAGAZINE LAYOUT) */}
      <HomeSignatureShowcase />

      {/* SECTION 05 — FIRE / CRAFT STORY */}
      <HomeCraftSection />

      {/* SECTION 06 — ATMOSPHERE / RESTAURANT EXPERIENCE */}
      <HomeAtmosphereSection />

      {/* SECTION 07 — VISUAL GALLERY PREVIEW (4-6 IMAGES) */}
      <HomeGalleryPreview />

      {/* SECTION 08 — LOCATION (SAHEED NAGAR & PATIA) */}
      <HomeLocationsSection />

      {/* SECTION 09 — FINAL CONVERSION SECTION */}
      <HomeFinalCTA onOpenReservation={onOpenReservation} />
    </div>
  );
};
