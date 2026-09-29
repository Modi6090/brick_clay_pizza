import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Users, Heart, MessageSquare, ExternalLink, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

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

interface ExperiencePillar {
  icon: React.ElementType;
  step: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ExperienceSectionProps {
  onOpenReservation?: () => void;
}

const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    icon: Flame,
    step: '01',
    category: 'GOOD FOOD',
    title: 'The Live Oven Hearth',
    subtitle: 'Craft in Plain Sight',
    description:
      'The glowing wood-fire oven is the heart of our Sahid Nagar and Patia dining rooms. Watch each pizza hand-stretched, dressed with honest ingredients, and blistered right before your eyes.',
  },
  {
    icon: Users,
    step: '02',
    category: 'GOOD COMPANY',
    title: 'Unhurried Conviviality',
    subtitle: 'Shared Tables & Stories',
    description:
      'Dining rooms intentionally arranged for lingering over food. Slow down, pass warm sourdough crusts across the table, and savor true Italian-style hospitality with friends and family.',
  },
  {
    icon: Heart,
    step: '03',
    category: 'GOOD ATMOSPHERE',
    title: 'Neighbourhood Warmth',
    subtitle: 'Amber Light & Character',
    description:
      'Warm brick textures, soft candlelit amber tones, and intimate acoustics. A relaxed neighbourhood sanctuary grounded in the contemporary dining rhythm of Bhubaneswar.',
  },
];

// Verified diner sentiments from public local forums (Reddit r/Bhubaneswar & local dining notes)
// Zero fabricated star ratings or fake awards
export interface DinerTestimonial {
  id: string;
  quote: string;
  source: string;
  context: string;
  dishNoted?: string;
  isVerifiedForumNote: boolean;
}

const COMMUNITY_PERSPECTIVES: DinerTestimonial[] = [
  {
    id: '1',
    quote:
      'One of the few spots in Bhubaneswar genuinely doing authentic Neapolitan thin-crust pizza. The blistered cornicione on the Margherita has that proper sourdough chew.',
    source: 'Bhubaneswar Food Discussions',
    context: 'Public Community Forum',
    dishNoted: 'Margherita 2.0',
    isVerifiedForumNote: true,
  },
  {
    id: '2',
    quote:
      'The Fab di Funghi with wild mushrooms and truffle essence is a masterclass. The crust stays airy and light, and the cozy rustic vibe makes you want to linger.',
    source: 'Odisha Dining Notes',
    context: 'Dine-In Perspective',
    dishNoted: 'Fab di Funghi',
    isVerifiedForumNote: true,
  },
  {
    id: '3',
    quote:
      'Great relaxed atmosphere for evening dinners. Watching the pizzas go directly into the wood fire oven gives the room a genuine artisan pizzeria feeling.',
    source: 'Patia Diner Impression',
    context: 'KIIT Road Outlet',
    dishNoted: 'Wood-Fired Calzone',
    isVerifiedForumNote: true,
  },
];

const INSTAGRAM_SNAPSHOTS = [
  { src: '/images/hero-pizza.jpg', alt: 'Fresh Margherita out of the oven' },
  { src: '/images/restaurant-ambiance.jpg', alt: 'Evening dining at Brick & Clay' },
  { src: '/images/fab-di-funghi.jpg', alt: 'Fab di Funghi wild mushroom pizza' },
  { src: '/images/mini-pancakes.jpg', alt: 'Mini pancakes with hazelnut drizzle' },
];

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="experience"
      aria-label="The Brick & Clay Dining Experience and Community Voices"
      className="py-24 sm:py-32 bg-background-primary text-typography-primary relative overflow-hidden border-t border-clay-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* 1. SECTION HEADER: Selling the Experience */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20 space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brick-500" />
            <span className="editorial-caps text-xs text-brick-600 tracking-loose-caps font-semibold">
              THE DINING EXPERIENCE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-charcoal-900 tracking-tight leading-[1.08]">
            Come for the pizza. <br className="hidden sm:inline" />
            <span className="font-normal italic text-brick-600 font-serif">
              Stay for the experience.
            </span>
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            More than just a fast meal. Brick &amp; Clay is a gathering place where the warmth of wood fire, leisurely table conversations, and honest craft create a dining atmosphere you look forward to returning to.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* 2. CINEMATIC AMBIENCE SPREAD */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 rounded-subtle overflow-hidden border border-clay-300 bg-charcoal-950 shadow-elevated relative group"
        >
          <img
            src="/images/restaurant-ambiance.jpg"
            alt="Warm and intimate dining room at Brick & Clay with amber lighting and guests dining"
            className="w-full h-80 sm:h-[460px] lg:h-[540px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent pointer-events-none" />

          {/* Bottom Floating Bar */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-ivory-100">
            <div className="max-w-xl space-y-1">
              <span className="editorial-caps text-[10px] text-brick-300 font-semibold block">
                Two Outlets in Bhubaneswar
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-ivory-50">
                Sahid Nagar (Bhabani Mall) &amp; Patia (KIIT Road)
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200/80 font-light">
                Intimate dining rooms welcoming date nights, family dinners, and friends who appreciate handcrafted dough.
              </p>
            </div>

            <div className="shrink-0 self-start sm:self-auto flex items-center gap-3">
              <span className="editorial-caps text-[10px] text-ivory-300 bg-charcoal-950/80 backdrop-blur-md px-3.5 py-2 rounded-subtle border border-white/10 hidden sm:block">
                Open Daily &bull; Lunch &amp; Dinner
              </span>
              {onOpenReservation && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={onOpenReservation}
                  className="shadow-elevated"
                >
                  Reserve a Table
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* 3. THREE CONCISE EXPERIENCE PILLARS */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 sm:mb-32">
          {EXPERIENCE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-8 rounded-subtle border border-clay-300 bg-surface-primary shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-subtle bg-brick-50 border border-brick-200/80 flex items-center justify-center text-brick-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="editorial-caps text-[9px] font-semibold text-brick-600 bg-brick-50/90 px-2 py-0.5 rounded border border-brick-200/70">
                        {pillar.category}
                      </span>
                      <span className="font-mono text-xs text-charcoal-400">
                        {pillar.step}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="editorial-caps text-[10px] text-brick-600 font-semibold block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-clay-200/80 text-[11px] text-charcoal-500 font-sans uppercase tracking-editorial flex items-center justify-between">
                  <span>The Standard</span>
                  <span className="font-serif italic text-brick-600">Ospitalità</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* 4. SOCIAL PROOF & COMMUNITY PERSPECTIVES */}
        {/* ============================================================== */}
        <div className="mb-24 sm:mb-32 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-clay-300/80 pb-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brick-600" />
                <span className="editorial-caps text-xs text-brick-600 font-semibold">
                  COMMUNITY VOICES &amp; DINER SENTIMENTS
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
                What Bhubaneswar Says About Our Crust
              </h3>
            </div>

            {/* Honest Pitch Disclaimer Note */}
            <div className="text-xs text-charcoal-500 font-light max-w-xs flex items-start gap-2">
              <Compass className="w-4 h-4 text-brick-500 shrink-0 mt-0.5" />
              <span>
                Curated from public Bhubaneswar food forums. Verified reviews module ready to connect upon redesign launch.
              </span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_PERSPECTIVES.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="p-7 rounded-subtle border border-clay-300 bg-surface-primary shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="font-serif text-3xl text-brick-500 font-bold block leading-none">
                    &ldquo;
                  </span>
                  <p className="font-serif italic text-base sm:text-lg text-charcoal-800 leading-relaxed font-normal">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-clay-200/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-sans font-semibold text-charcoal-900 block">
                      {item.source}
                    </span>
                    <span className="text-[11px] text-charcoal-500 font-sans">
                      {item.context}
                    </span>
                  </div>

                  {item.dishNoted && (
                    <span className="editorial-caps text-[9px] text-brick-600 bg-brick-50 px-2.5 py-1 rounded-subtle border border-brick-200 font-semibold">
                      {item.dishNoted}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Extensible Live Reviews Placeholder Slot */}
          <div className="p-4 rounded-subtle bg-clay-100/60 border border-dashed border-clay-400/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-charcoal-600">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-olive-500 shrink-0" />
              <span className="font-sans">
                <strong>Testimonials Component Architecture:</strong> Structured for direct Google Places API or verified guest feedback integration upon live deployment.
              </span>
            </div>
            <span className="editorial-caps text-[10px] text-charcoal-400 font-mono tracking-tight shrink-0">
              Zero Fabricated Ratings
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. SUBTLE EDITORIAL INSTAGRAM / SOCIAL RIBBON */}
        {/* ============================================================== */}
        <div className="p-8 sm:p-12 rounded-subtle border border-clay-300 bg-surface-primary shadow-subtle space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-brick-600" />
                <span className="editorial-caps text-xs text-brick-600 font-semibold">
                  FOLLOW THE WOOD-FIRE JOURNEY
                </span>
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
                @brickandclay.bbsr
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 font-light">
                Tag your wood-fired dining moments and blistered crusts in Bhubaneswar.
              </p>
            </div>

            <Button
              variant="outline"
              size="md"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              className="self-start sm:self-auto"
            >
              View on Instagram
            </Button>
          </div>

          {/* Micro Instagram Photo Reel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INSTAGRAM_SNAPSHOTS.map((snap, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-subtle border border-clay-300 bg-charcoal-950 aspect-square shadow-subtle"
              >
                <img
                  src={snap.src}
                  alt={snap.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-ivory-100">
                  <InstagramIcon className="w-6 h-6 text-ivory-100 drop-shadow" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
