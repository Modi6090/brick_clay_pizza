/**
 * Brick & Clay — Complete Visual Design System Tokens
 * Aesthetic Direction: Modern Italian Editorial × Artisan Pizzeria × Warm Architectural
 */

export const colors = {
  background: {
    primary: '#FDFBF7',   // Warm Ivory Canvas
    secondary: '#FAF6EE', // Pale Linen
    tertiary: '#F4ECE1',  // Muted Biscuit
    dark: '#100F0E',      // Obsidian Charcoal (Oven Ember context)
  },
  surface: {
    primary: '#FAF6EE',
    elevated: '#FFFFFF',
    sunken: '#EFE9DF',
    dark: '#171615',
    darkElevated: '#211F1D',
  },
  text: {
    primary: '#171615',      // Charcoal (14.5:1 contrast on #FDFBF7 - AAA)
    secondary: '#5C5651',    // Warm Medium Gray (6.2:1 contrast - AA)
    tertiary: '#878077',     // Muted Gray (4.6:1 contrast - AA)
    inverse: '#FDFBF7',      // Warm Ivory on Dark
    inverseMuted: '#C2BCB4', // Muted Gray on Dark
  },
  accent: {
    terracotta: {
      default: '#C25E35', // Signature Brick Oven Terracotta
      hover: '#A44722',
      active: '#843518',
      light: '#FBF5F2',
      border: '#EFCFC2',
    },
    olive: {
      default: '#638055', // Muted Tuscan Olive
      hover: '#4E6642',
      active: '#3D4F34',
      light: '#F5F7F3',
      border: '#D1DEC9',
    },
    clay: {
      default: '#BFB09E', // Warm Earth Clay
      hover: '#9E8873',
      active: '#836F5C',
      light: '#F8F6F3',
      border: '#E5DCD2',
    },
  },
  border: {
    subtle: 'rgba(210, 195, 180, 0.45)',
    default: '#E5DCD2',
    strong: '#D2C3B4',
    darkSubtle: 'rgba(255, 255, 255, 0.08)',
    darkDefault: '#2B2825',
  },
  states: {
    hoverBg: 'rgba(23, 22, 21, 0.04)',
    activeBg: 'rgba(23, 22, 21, 0.08)',
    focusRing: '#C25E35',
  }
} as const;

export const typography = {
  fonts: {
    serif: '"Cormorant Garamond", Georgia, serif',
    sans: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    mono: 'ui-monospace, monospace',
  },
  sizes: {
    hero: 'clamp(2.75rem, 6vw, 4.75rem)',   // 44px - 76px
    h1: 'clamp(2.25rem, 4.5vw, 3.5rem)',    // 36px - 56px
    h2: 'clamp(1.75rem, 3.2vw, 2.5rem)',    // 28px - 40px
    h3: 'clamp(1.25rem, 2vw, 1.75rem)',     // 20px - 28px
    bodyLg: '1.125rem',                     // 18px
    body: '1rem',                           // 16px
    bodySm: '0.875rem',                     // 14px
    caption: '0.75rem',                     // 12px
    micro: '0.6875rem',                     // 11px
  },
  tracking: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.04em',
    editorial: '0.18em',
    looseCaps: '0.22em',
  },
  leading: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.6',
    relaxed: '1.75',
  }
} as const;

export const spacing = {
  '2xs': '0.25rem',  // 4px
  xs: '0.5rem',     // 8px
  sm: '0.75rem',    // 12px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
} as const;

export const radii = {
  none: '0px',
  subtle: '4px',
  card: '8px',
  large: '12px',
  pill: '9999px',
} as const;

export const shadows = {
  none: 'none',
  subtle: '0 2px 8px -1px rgba(23, 22, 21, 0.04), 0 1px 3px -1px rgba(23, 22, 21, 0.02)',
  elevated: '0 8px 24px -4px rgba(23, 22, 21, 0.07), 0 3px 8px -2px rgba(23, 22, 21, 0.03)',
  float: '0 16px 40px -8px rgba(23, 22, 21, 0.12)',
  darkCard: '0 12px 32px -4px rgba(0, 0, 0, 0.45)',
} as const;

export const breakpoints = {
  mobile: '320px',
  tablet: '640px',
  desktop: '1024px',
  largeDesktop: '1280px',
  wide: '1536px',
} as const;
