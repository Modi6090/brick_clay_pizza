import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Type, 
  Layers, 
  Sparkles, 
  Sliders, 
  Eye, 
  CheckCircle2, 
  Maximize2,
  Calendar,
  UtensilsCrossed,
  Flame,
  Search
} from 'lucide-react';

import { colors, spacing, breakpoints } from '../../design-system/tokens';
import { 
  sectionRevealVariants, 
  transitions
} from '../../design-system/motion';

import { 
  Button, 
  HeroHeading, 
  H1, 
  H2, 
  H3, 
  BodyText, 
  PriceTag,
  EditorialQuote,
  PizzaCard,
  MenuItemCard,
  GalleryItemCard,
  TestimonialCard,
  LocationBlock
} from '../ui';

import { RESTAURANT_LOCATIONS } from '../../data/restaurantData';

type Tab = 'overview' | 'colors' | 'typography' | 'buttons' | 'cards' | 'motion' | 'accessibility';

export const DesignSystemShowcase: React.FC<{ onBackToConcept: () => void }> = ({ onBackToConcept }) => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-background-primary text-typography-primary pb-28">
      {/* Top Header */}
      <div className="sticky top-0 z-30 bg-surface-primary/95 backdrop-blur-md border-b border-clay-300 py-4 px-4 sm:px-8 shadow-subtle">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-subtle bg-brick-500 text-ivory-50 flex items-center justify-center font-serif text-lg font-bold">
              &sect;
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="editorial-caps text-[10px] text-brick-600">Phase 2 Deliverable</span>
                <span className="text-xs text-charcoal-400">&bull;</span>
                <span className="text-xs text-charcoal-500 font-sans">Design System Specification</span>
              </div>
              <h1 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal-900">
                Brick &amp; Clay Visual System
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={onBackToConcept}
              icon={<Eye className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              View Live Concept
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto mt-4 flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'overview', label: '1. Overview & Brand DNA', icon: Sparkles },
            { id: 'colors', label: '2. Color System', icon: Palette },
            { id: 'typography', label: '3. Typography', icon: Type },
            { id: 'buttons', label: '4. Button System', icon: Sliders },
            { id: 'cards', label: '5. Card System', icon: Layers },
            { id: 'motion', label: '6. Motion System', icon: Maximize2 },
            { id: 'accessibility', label: '7. Accessibility & Tokens', icon: CheckCircle2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-subtle text-xs font-sans tracking-editorial uppercase whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-charcoal-900 text-ivory-50 font-semibold shadow-subtle'
                    : 'text-charcoal-700 hover:bg-clay-100/70 hover:text-charcoal-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brick-400' : 'text-charcoal-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10">
        
        {/* TAB 1: OVERVIEW & BRAND DNA */}
        {activeTab === 'overview' && (
          <motion.div
            variants={sectionRevealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="max-w-3xl space-y-4">
              <span className="editorial-caps text-xs text-brick-600 block">Creative Direction</span>
              <HeroHeading className="leading-tight">
                Modern Italian Editorial &times; Artisan Neapolitan Soul
              </HeroHeading>
              <BodyText size="lg">
                The Brick &amp; Clay visual system is rooted in quiet luxury, architectural restraint, and visceral food craftsmanship. Rather than leaning on generic fast-casual templates, the design treats wood-fired pizza as an artisanal discipline.
              </BodyText>
            </div>

            {/* Core Directives Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary space-y-3">
                <span className="editorial-caps text-xs text-brick-600 block">Principle 01</span>
                <h3 className="font-serif text-2xl font-medium">Food-First Photography</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Natural warm lighting, high-contrast blistered crusts, glistening olive oil, and real clay textures. Zero artificial synthetic oversaturation.
                </p>
              </div>

              <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary space-y-3">
                <span className="editorial-caps text-xs text-brick-600 block">Principle 02</span>
                <h3 className="font-serif text-2xl font-medium">Restrained Warm Palette</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  Warm ivory surfaces replace sterile whites; deep charcoal grounds the typography; artisanal terracotta provides focused, high-intent callouts.
                </p>
              </div>

              <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary space-y-3">
                <span className="editorial-caps text-xs text-brick-600 block">Principle 03</span>
                <h3 className="font-serif text-2xl font-medium">Architectural Typography</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  High-elegance Cormorant Garamond serif creates magazine authority, paired with clean, tracked Plus Jakarta Sans for rapid mobile utility.
                </p>
              </div>
            </div>

            {/* System Breakdown Specs */}
            <div className="p-8 rounded-subtle border border-clay-300 bg-surface-primary space-y-6">
              <h3 className="font-serif text-2xl">Visual System Architecture</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
                <div className="space-y-1">
                  <span className="editorial-caps text-charcoal-500 block">Canvas</span>
                  <span className="font-serif text-base text-charcoal-900 font-medium">Warm Ivory (#FDFBF7)</span>
                </div>
                <div className="space-y-1">
                  <span className="editorial-caps text-charcoal-500 block">Primary CTA</span>
                  <span className="font-serif text-base text-brick-600 font-medium">Terracotta (#C25E35)</span>
                </div>
                <div className="space-y-1">
                  <span className="editorial-caps text-charcoal-500 block">Serif Type</span>
                  <span className="font-serif text-base text-charcoal-900 font-medium">Cormorant Garamond</span>
                </div>
                <div className="space-y-1">
                  <span className="editorial-caps text-charcoal-500 block">Sans Type</span>
                  <span className="font-sans text-base text-charcoal-900 font-medium">Plus Jakarta Sans</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: COLOR SYSTEM */}
        {activeTab === 'colors' && (
          <motion.div
            variants={sectionRevealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <div>
              <span className="editorial-caps text-xs text-brick-600 block">Tokens &bull; Palette</span>
              <H2>Restrained Natural Palette</H2>
              <BodyText size="md" className="mt-2 max-w-2xl">
                Curated around warm ivory, obsidian charcoal, terracotta clay, and muted Tuscan olive. Restrained to avoid visual chaos.
              </BodyText>
            </div>

            {/* Swatches Section */}
            <div className="space-y-8">
              {/* Backgrounds & Surfaces */}
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-medium">1. Backgrounds &amp; Surfaces</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { name: 'Canvas Primary', hex: colors.background.primary, desc: 'Warm Ivory Paper' },
                    { name: 'Surface Secondary', hex: colors.surface.primary, desc: 'Linen Card Base' },
                    { name: 'Surface Sunken', hex: colors.surface.sunken, desc: 'Muted Inset' },
                    { name: 'Dark Surface', hex: colors.surface.dark, desc: 'Obsidian Charcoal', lightText: true },
                  ].map((item) => (
                    <div key={item.name} className="rounded-subtle border border-clay-300 overflow-hidden bg-surface-primary shadow-subtle">
                      <div className="h-20 w-full" style={{ backgroundColor: item.hex }} />
                      <div className="p-3 space-y-1">
                        <span className="font-semibold text-xs block text-charcoal-900">{item.name}</span>
                        <code className="text-[11px] text-charcoal-500 block font-mono">{item.hex}</code>
                        <span className="text-[10px] text-charcoal-400 block">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terracotta & Accents */}
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-medium">2. Accent: Brick &amp; Terracotta (CTA Hierarchy)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { name: 'Primary CTA Default', hex: colors.accent.terracotta.default, desc: 'Signature Brick Red', lightText: true },
                    { name: 'Primary CTA Hover', hex: colors.accent.terracotta.hover, desc: 'Deep Burnished Clay', lightText: true },
                    { name: 'Primary CTA Active', hex: colors.accent.terracotta.active, desc: 'Intense Roasted Clay', lightText: true },
                    { name: 'Terracotta Light', hex: colors.accent.terracotta.light, desc: 'Subtle Tint for Badges' },
                  ].map((item) => (
                    <div key={item.name} className="rounded-subtle border border-clay-300 overflow-hidden bg-surface-primary shadow-subtle">
                      <div className="h-20 w-full" style={{ backgroundColor: item.hex }} />
                      <div className="p-3 space-y-1">
                        <span className="font-semibold text-xs block text-charcoal-900">{item.name}</span>
                        <code className="text-[11px] text-charcoal-500 block font-mono">{item.hex}</code>
                        <span className="text-[10px] text-charcoal-400 block">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Olive & Clay */}
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-medium">3. Secondary Accents: Tuscan Olive &amp; Warm Clay</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { name: 'Muted Olive', hex: colors.accent.olive.default, desc: 'Fresh Herbs & Veg Badges', lightText: true },
                    { name: 'Olive Hover', hex: colors.accent.olive.hover, desc: 'Deep Grove Leaf', lightText: true },
                    { name: 'Olive Light', hex: colors.accent.olive.light, desc: 'Background Pill Tint' },
                    { name: 'Warm Clay Default', hex: colors.accent.clay.default, desc: 'Natural Terracotta Beige' },
                  ].map((item) => (
                    <div key={item.name} className="rounded-subtle border border-clay-300 overflow-hidden bg-surface-primary shadow-subtle">
                      <div className="h-20 w-full" style={{ backgroundColor: item.hex }} />
                      <div className="p-3 space-y-1">
                        <span className="font-semibold text-xs block text-charcoal-900">{item.name}</span>
                        <code className="text-[11px] text-charcoal-500 block font-mono">{item.hex}</code>
                        <span className="text-[10px] text-charcoal-400 block">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WCAG Contrast Verification */}
              <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  <span className="editorial-caps text-xs text-charcoal-900">WCAG 2.1 Contrast Compliance</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 rounded-subtle bg-ivory-50 border border-clay-200">
                    <p className="font-semibold text-charcoal-900">Primary Charcoal on Ivory</p>
                    <p className="text-charcoal-500 text-[11px] mt-0.5">Ratio: 14.5:1 &bull; Level: AAA</p>
                  </div>
                  <div className="p-3 rounded-subtle bg-ivory-50 border border-clay-200">
                    <p className="font-semibold text-charcoal-900">Secondary Text on Ivory</p>
                    <p className="text-charcoal-500 text-[11px] mt-0.5">Ratio: 6.2:1 &bull; Level: AA</p>
                  </div>
                  <div className="p-3 rounded-subtle bg-ivory-50 border border-clay-200">
                    <p className="font-semibold text-charcoal-900">White on Terracotta (#C25E35)</p>
                    <p className="text-charcoal-500 text-[11px] mt-0.5">Ratio: 4.8:1 &bull; Level: AA Large</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: TYPOGRAPHY */}
        {activeTab === 'typography' && (
          <motion.div
            variants={sectionRevealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div>
              <span className="editorial-caps text-xs text-brick-600 block">Editorial Hierarchy</span>
              <H2>Typography Specimen</H2>
              <BodyText size="md" className="mt-2 max-w-2xl">
                Pairing Google Fonts <strong>Cormorant Garamond</strong> for editorial gravitas and <strong>Plus Jakarta Sans</strong> for effortless legibility.
              </BodyText>
            </div>

            {/* Typography Specimens List */}
            <div className="space-y-8 divide-y divide-clay-200">
              {/* Hero Heading */}
              <div className="pt-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="editorial-caps text-brick-600">Hero Heading</span>
                  <code className="font-mono text-[11px]">clamp(2.75rem, 6vw, 4.75rem) &bull; Cormorant Garamond 300</code>
                </div>
                <HeroHeading>
                  Slow Dough. High Heat. The Art of Fire.
                </HeroHeading>
              </div>

              {/* H1 */}
              <div className="pt-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="editorial-caps text-brick-600">Heading 1 (H1)</span>
                  <code className="font-mono text-[11px]">clamp(2.25rem, 4.5vw, 3.5rem) &bull; Cormorant Garamond 400</code>
                </div>
                <H1>
                  Authentic Wood-Fired Neapolitan Craft
                </H1>
              </div>

              {/* H2 */}
              <div className="pt-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="editorial-caps text-brick-600">Heading 2 (H2)</span>
                  <code className="font-mono text-[11px]">clamp(1.75rem, 3.2vw, 2.5rem) &bull; Cormorant Garamond 400</code>
                </div>
                <H2>
                  Two Pizzerias in Bhubaneswar
                </H2>
              </div>

              {/* H3 */}
              <div className="pt-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="editorial-caps text-brick-600">Heading 3 (H3)</span>
                  <code className="font-mono text-[11px]">clamp(1.25rem, 2vw, 1.75rem) &bull; Cormorant Garamond 500</code>
                </div>
                <H3>
                  Margherita 2.0 with Fior di Latte
                </H3>
              </div>

              {/* Body */}
              <div className="pt-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="editorial-caps text-brick-600">Body Editorial</span>
                  <code className="font-mono text-[11px]">1rem (16px) &bull; Plus Jakarta Sans 300 &bull; line-height 1.65</code>
                </div>
                <BodyText size="md" className="max-w-2xl">
                  Our dough matures slowly across two full days, allowing natural wild yeasts to develop delicate acidity and incredible lightness. When placed inside the 450°C clay dome, moisture vaporizes instantly into an airy leopard-charred cornicione.
                </BodyText>
              </div>

              {/* Caption & Navigation */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-charcoal-500">
                    <span className="editorial-caps text-brick-600">Navigation Link</span>
                    <code className="font-mono text-[11px]">0.75rem &bull; 0.18em track</code>
                  </div>
                  <div className="flex gap-4">
                    <span className="nav-link">The Craft</span>
                    <span className="nav-link text-brick-600">Menu Highlights</span>
                    <span className="nav-link">Locations</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-charcoal-500">
                    <span className="editorial-caps text-brick-600">Price Tag</span>
                    <code className="font-mono text-[11px]">1.125rem &bull; Cormorant Garamond 600</code>
                  </div>
                  <div className="flex items-center gap-4">
                    <PriceTag amount="495" />
                    <PriceTag amount="625" />
                    <PriceTag amount="740" />
                  </div>
                </div>
              </div>

              {/* Editorial Blockquote */}
              <div className="pt-6">
                <EditorialQuote author="Brick & Clay Kitchen" role="Pizzaiolo Standard">
                  Respect the fire, honor the grain, and never rush the dough.
                </EditorialQuote>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 4: BUTTON SYSTEM */}
        {activeTab === 'buttons' && (
          <motion.div
            variants={sectionRevealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div>
              <span className="editorial-caps text-xs text-brick-600 block">Component Architecture</span>
              <H2>Comprehensive Button System</H2>
              <BodyText size="md" className="mt-2 max-w-2xl">
                Engineered for conversion, tactile feedback, and accessible keyboard focus. Every button includes default, hover, active, focus, and disabled state rules.
              </BodyText>
            </div>

            {/* 1. All Button Variants */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-medium">1. Action CTA Variants</h3>
              <div className="p-8 rounded-subtle border border-clay-300 bg-surface-primary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                <div className="space-y-2">
                  <span className="editorial-caps text-[10px] text-charcoal-500 block">Primary CTA</span>
                  <Button variant="primary" size="md" icon={<Calendar className="w-4 h-4" />}>
                    Reserve Table
                  </Button>
                </div>

                <div className="space-y-2">
                  <span className="editorial-caps text-[10px] text-charcoal-500 block">Secondary CTA</span>
                  <Button variant="secondary" size="md">
                    Order Delivery
                  </Button>
                </div>

                <div className="space-y-2">
                  <span className="editorial-caps text-[10px] text-charcoal-500 block">Outline CTA</span>
                  <Button variant="outline" size="md" icon={<UtensilsCrossed className="w-4 h-4" />}>
                    Explore Menu
                  </Button>
                </div>

                <div className="space-y-2">
                  <span className="editorial-caps text-[10px] text-charcoal-500 block">Text CTA</span>
                  <Button variant="text" size="md">
                    View Ingredients
                  </Button>
                </div>
              </div>
            </div>

            {/* 2. Button States Matrix */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-medium">2. Interaction States Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-clay-300 bg-surface-primary rounded-subtle overflow-hidden">
                  <thead className="bg-clay-100/70 border-b border-clay-300 text-charcoal-700 uppercase tracking-editorial font-sans">
                    <tr>
                      <th className="p-4">Variant</th>
                      <th className="p-4">Default</th>
                      <th className="p-4">With Left Icon</th>
                      <th className="p-4">Disabled State</th>
                      <th className="p-4">Loading State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clay-200">
                    <tr>
                      <td className="p-4 font-semibold text-charcoal-900">Primary CTA</td>
                      <td className="p-4"><Button variant="primary" size="sm">Book Table</Button></td>
                      <td className="p-4"><Button variant="primary" size="sm" icon={<Calendar className="w-3.5 h-3.5" />} iconPosition="left">Book Table</Button></td>
                      <td className="p-4"><Button variant="primary" size="sm" disabled>Unavailable</Button></td>
                      <td className="p-4"><Button variant="primary" size="sm" isLoading>Processing</Button></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-charcoal-900">Secondary CTA</td>
                      <td className="p-4"><Button variant="secondary" size="sm">Order Now</Button></td>
                      <td className="p-4"><Button variant="secondary" size="sm" icon={<Flame className="w-3.5 h-3.5" />} iconPosition="left">Order Now</Button></td>
                      <td className="p-4"><Button variant="secondary" size="sm" disabled>Sold Out</Button></td>
                      <td className="p-4"><Button variant="secondary" size="sm" isLoading>Loading</Button></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-charcoal-900">Outline CTA</td>
                      <td className="p-4"><Button variant="outline" size="sm">View Menu</Button></td>
                      <td className="p-4"><Button variant="outline" size="sm" icon={<Search className="w-3.5 h-3.5" />} iconPosition="left">Search</Button></td>
                      <td className="p-4"><Button variant="outline" size="sm" disabled>Disabled</Button></td>
                      <td className="p-4"><Button variant="outline" size="sm" isLoading>Searching</Button></td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-charcoal-900">Icon CTA</td>
                      <td className="p-4"><Button variant="icon" size="sm" icon={<Calendar className="w-4 h-4" />} /></td>
                      <td className="p-4"><Button variant="icon" size="sm" icon={<UtensilsCrossed className="w-4 h-4" />} /></td>
                      <td className="p-4"><Button variant="icon" size="sm" disabled icon={<Calendar className="w-4 h-4" />} /></td>
                      <td className="p-4"><Button variant="icon" size="sm" isLoading icon={<Calendar className="w-4 h-4" />} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Sizes Scale */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium">3. Sizing Scale</h3>
              <div className="flex flex-wrap items-center gap-4 p-6 rounded-subtle border border-clay-300 bg-surface-primary">
                <div className="space-y-1">
                  <span className="editorial-caps text-[10px] text-charcoal-500 block">Small (sm)</span>
                  <Button variant="primary" size="sm">Compact Action</Button>
                </div>
                <div className="space-y-1">
                  <span className="editorial-caps text-[10px] text-charcoal-500 block">Medium (md)</span>
                  <Button variant="primary" size="md">Standard Action</Button>
                </div>
                <div className="space-y-1">
                  <span className="editorial-caps text-[10px] text-charcoal-500 block">Large (lg)</span>
                  <Button variant="primary" size="lg">Hero Conversion</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 5: CARD SYSTEM */}
        {activeTab === 'cards' && (
          <motion.div
            variants={sectionRevealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-14"
          >
            <div>
              <span className="editorial-caps text-xs text-brick-600 block">Atomic UI Hierarchy</span>
              <H2>Card System Specifications</H2>
              <BodyText size="md" className="mt-2 max-w-2xl">
                Five distinct card primitives tailored for dining websites: Pizza card, Menu list item, Gallery item, Diner quote, and Location block.
              </BodyText>
            </div>

            {/* 1. Pizza Card */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium">1. Pizza Card (Food-First Showcase)</h3>
                  <p className="text-xs text-charcoal-600 font-light">Includes aspect-locked frame, dietary badge, ingredient pill tags, and quick-order trigger.</p>
                </div>
                <span className="editorial-caps text-[10px] text-brick-600">Card Primitive 01</span>
              </div>

              <div className="max-w-md">
                <PizzaCard
                  name="Margherita 2.0"
                  italianName="La Vera Margherita Napoletana"
                  description="San Marzano tomato pulp, fresh buffalo fior di latte, hand-torn sweet basil, and extra virgin olive oil on blistered sourdough."
                  imageSrc="/images/hero-pizza.jpg"
                  price="495"
                  isSignature={true}
                  ingredients={['San Marzano', 'Buffalo Mozzarella', 'Sweet Basil', 'Cold-Pressed EVOO']}
                  onOrder={() => alert('Order triggered')}
                  onQuickView={() => alert('Quick view triggered')}
                />
              </div>
            </div>

            {/* 2. Menu Item Card */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium">2. Menu Item Card (Editorial List Variant)</h3>
                  <p className="text-xs text-charcoal-600 font-light">Compact horizontal layout with dotted leader, price alignment, and dietary indicator.</p>
                </div>
                <span className="editorial-caps text-[10px] text-brick-600">Card Primitive 02</span>
              </div>

              <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary max-w-2xl">
                <MenuItemCard
                  name="Fab di Fungo"
                  italianName="Funghi di Bosco & Tartufo"
                  description="Caramelized wild woodland mushrooms, roasted garlic crema, fresh mozzarella, and aromatic black truffle oil."
                  price="585"
                  isSignature={true}
                  dietary="veg"
                  ingredients={['Wild Mushrooms', 'Truffle Oil', 'Garlic Crema', 'Fior di Latte']}
                />
                <MenuItemCard
                  name="Chilli Spinaci"
                  italianName="Spinaci & Peperoncino"
                  description="Tuscan sautéed baby spinach, charred bird's eye chili flakes, delicate dollops of ricotta, and smoked scamorza."
                  price="540"
                  isSignature={false}
                  dietary="veg"
                  ingredients={['Baby Spinach', 'Bird\'s Eye Chili', 'Smoked Scamorza']}
                />
              </div>
            </div>

            {/* 3. Gallery Item Card */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium">3. Gallery Item Card (Atmospheric Photography)</h3>
                  <p className="text-xs text-charcoal-600 font-light">Aspect-locked frame with subtle hover scale, natural dark vignette, and corner category badge.</p>
                </div>
                <span className="editorial-caps text-[10px] text-brick-600">Card Primitive 03</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <GalleryItemCard
                  imageSrc="/images/clay-oven.jpg"
                  title="Wood-Fired Clay Dome (450°C)"
                  category="Live Oven"
                  aspectRatio="4:3"
                />
                <GalleryItemCard
                  imageSrc="/images/dough-craft.jpg"
                  title="48-Hour Cold Fermentation Prep"
                  category="Sourdough"
                  aspectRatio="4:3"
                />
                <GalleryItemCard
                  imageSrc="/images/table-spread.jpg"
                  title="Evening Dining Room Atmosphere"
                  category="Hospitality"
                  aspectRatio="4:3"
                />
              </div>
            </div>

            {/* 4. Testimonial Card */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium">4. Testimonial / Diner Impression Card</h3>
                  <p className="text-xs text-charcoal-600 font-light">Editorial quotation mark, serif text, and outlet attribution without fabricated claims.</p>
                </div>
                <span className="editorial-caps text-[10px] text-brick-600">Card Primitive 04</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                <TestimonialCard
                  quote="The blistered crust and leopard spots are as authentic as Neapolitan pizza gets in Odisha. You can taste the 48-hour slow ferment."
                  dinerType="Artisan Food Critic"
                  sourceOutlet="Bhubaneswar Dining Notes"
                  highlightedDish="Margherita 2.0"
                />
                <TestimonialCard
                  quote="Fab di Fungo with the wild mushrooms and truffle oil is an absolute masterclass. The airy crust never feels heavy."
                  dinerType="Frequent Diner"
                  sourceOutlet="Patia Outlet"
                  highlightedDish="Fab di Fungo"
                />
              </div>
            </div>

            {/* 5. Location Block */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium">5. Location Block (Architectural Outlet Card)</h3>
                  <p className="text-xs text-charcoal-600 font-light">Clear address, operational hours, contact dialing, and dual conversion triggers.</p>
                </div>
                <span className="editorial-caps text-[10px] text-brick-600">Card Primitive 05</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <LocationBlock
                  location={RESTAURANT_LOCATIONS[0]}
                  isActive={true}
                  onReserve={() => alert('Reserve Sahid Nagar')}
                />
                <LocationBlock
                  location={RESTAURANT_LOCATIONS[1]}
                  isActive={false}
                  onReserve={() => alert('Reserve Patia')}
                />
              </div>
            </div>

          </motion.div>
        )}

        {/* TAB 6: MOTION SYSTEM */}
        {activeTab === 'motion' && (
          <motion.div
            variants={sectionRevealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <div>
              <span className="editorial-caps text-xs text-brick-600 block">Framer Motion System</span>
              <H2>Motion &amp; Interaction Choreography</H2>
              <BodyText size="md" className="mt-2 max-w-2xl">
                Animations are intentional, restrained, and fast (200ms - 550ms). Designed to guide attention rather than distract.
              </BodyText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Preset Tokens */}
              <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary space-y-4">
                <h4 className="font-serif text-xl font-medium">Motion Tokens</h4>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-clay-200 pb-2">
                    <span className="font-semibold text-charcoal-900">Easing Curve</span>
                    <code className="font-mono text-charcoal-600">cubic-bezier(0.16, 1, 0.3, 1)</code>
                  </div>
                  <div className="flex items-center justify-between border-b border-clay-200 pb-2">
                    <span className="font-semibold text-charcoal-900">Micro Hover</span>
                    <code className="font-mono text-charcoal-600">200ms easeSubtle</code>
                  </div>
                  <div className="flex items-center justify-between border-b border-clay-200 pb-2">
                    <span className="font-semibold text-charcoal-900">Section Reveal</span>
                    <code className="font-mono text-charcoal-600">550ms easeEditorial (y: 20 &rarr; 0)</code>
                  </div>
                  <div className="flex items-center justify-between border-b border-clay-200 pb-2">
                    <span className="font-semibold text-charcoal-900">Image Reveal</span>
                    <code className="font-mono text-charcoal-600">700ms (scale 0.97 &rarr; 1.00)</code>
                  </div>
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-semibold text-charcoal-900">Reduced Motion</span>
                    <code className="font-mono text-olive-700">Supported via CSS &amp; tokens</code>
                  </div>
                </div>
              </div>

              {/* Interactive Test Bed */}
              <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl font-medium">Interactive Hover &amp; Tap Sandbox</h4>
                  <p className="text-xs text-charcoal-600 font-light mt-1">
                    Hover and tap below to experience the subtle tactile scale:
                  </p>
                </div>

                <div className="flex items-center gap-4 py-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={transitions.fast}
                    className="px-6 py-3 bg-brick-500 text-ivory-50 rounded-subtle text-xs uppercase tracking-editorial font-semibold shadow-subtle"
                  >
                    Tap Me (0.97 scale)
                  </motion.button>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={transitions.fast}
                    className="p-4 rounded-subtle border border-clay-300 bg-ivory-50 shadow-subtle text-xs text-charcoal-800"
                  >
                    Hover Me (-4px lift)
                  </motion.div>
                </div>

                <span className="text-[11px] text-charcoal-400 font-sans">
                  * Note: When OS "prefers-reduced-motion: reduce" is set, all transitions collapse to 0.01ms.
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 7: ACCESSIBILITY & TOKENS */}
        {activeTab === 'accessibility' && (
          <motion.div
            variants={sectionRevealVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <div>
              <span className="editorial-caps text-xs text-brick-600 block">Inclusive Standards</span>
              <H2>Accessibility &amp; Responsive Breakpoints</H2>
              <BodyText size="md" className="mt-2 max-w-2xl">
                A rigorous foundation ensuring all guests in Bhubaneswar enjoy a fast, accessible, and responsive dining web experience.
              </BodyText>
            </div>

            {/* Breakpoints */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium">1. Responsive Breakpoints Scale</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { name: 'Mobile', value: breakpoints.mobile, desc: 'Single col, sticky bar' },
                  { name: 'Tablet', value: breakpoints.tablet, desc: '2 col layout' },
                  { name: 'Desktop', value: breakpoints.desktop, desc: 'Full editorial grid' },
                  { name: 'Large Desktop', value: breakpoints.largeDesktop, desc: '1280px max bounds' },
                  { name: 'Wide Screen', value: breakpoints.wide, desc: '1536px centered canvas' },
                ].map((bp) => (
                  <div key={bp.name} className="p-4 rounded-subtle border border-clay-300 bg-surface-primary space-y-1">
                    <span className="editorial-caps text-[10px] text-brick-600 block">{bp.name}</span>
                    <span className="font-mono text-sm font-semibold text-charcoal-900">{bp.value}</span>
                    <span className="text-[10px] text-charcoal-500 block">{bp.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility Checklist */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-medium">2. WCAG 2.1 &amp; Semantic HTML Checklist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Semantic HTML5 Landmark Elements',
                    desc: 'Every region is structured using <header>, <nav>, <main>, <section>, <article>, and <footer>.',
                  },
                  {
                    title: 'High-Contrast Keyboard Focus Rings',
                    desc: 'Interactive elements feature a 2px Terracotta focus ring with 2px offset visible on Tab navigation.',
                  },
                  {
                    title: 'Prefers-Reduced-Motion Fallbacks',
                    desc: 'All Framer Motion transitions and CSS animations gracefully disable when reduced motion is preferred.',
                  },
                  {
                    title: 'Explicit ARIA Labels & Roles',
                    desc: 'Modals, mobile menus, and icon-only buttons include aria-label, aria-expanded, and aria-modal attributes.',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-subtle border border-clay-300 bg-surface-primary flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-olive-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-lg font-medium text-charcoal-900">{item.title}</h4>
                      <p className="text-xs text-charcoal-600 leading-relaxed font-light mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacing & Radii Matrix */}
            <div className="p-6 rounded-subtle border border-clay-300 bg-surface-primary space-y-4">
              <h4 className="font-serif text-xl font-medium">Spacing &amp; Radii Tokens in Code</h4>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-charcoal-400 font-mono block">2xs</span>
                  <span className="font-semibold text-charcoal-900">{spacing['2xs']} (4px)</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-400 font-mono block">xs</span>
                  <span className="font-semibold text-charcoal-900">{spacing.xs} (8px)</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-400 font-mono block">sm</span>
                  <span className="font-semibold text-charcoal-900">{spacing.sm} (12px)</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-400 font-mono block">md</span>
                  <span className="font-semibold text-charcoal-900">{spacing.md} (16px)</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-400 font-mono block">lg</span>
                  <span className="font-semibold text-charcoal-900">{spacing.lg} (24px)</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-400 font-mono block">xl</span>
                  <span className="font-semibold text-charcoal-900">{spacing.xl} (32px)</span>
                </div>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
};
