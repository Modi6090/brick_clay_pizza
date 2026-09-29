/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',   // Tablet portrait
      'md': '768px',   // Tablet landscape
      'lg': '1024px',  // Desktop
      'xl': '1280px',  // Large desktop
      '2xl': '1536px', // Wide display
    },
    extend: {
      colors: {
        // Semantic Backgrounds
        background: {
          primary: '#FDFBF7',
          secondary: '#FAF6EE',
          tertiary: '#F4ECE1',
          dark: '#100F0E',
        },
        // Semantic Surfaces
        surface: {
          primary: '#FAF6EE',
          elevated: '#FFFFFF',
          sunken: '#EFE9DF',
          dark: '#171615',
          'dark-elevated': '#211F1D',
        },
        // Semantic Typography
        typography: {
          primary: '#171615',
          secondary: '#5C5651',
          tertiary: '#878077',
          inverse: '#FDFBF7',
          'inverse-muted': '#C2BCB4',
        },
        // Brand Terracotta / Brick (Primary Accent & CTA)
        brick: {
          50: '#FBF5F2',
          100: '#F6E7E0',
          200: '#EFCFC2',
          300: '#E3B099',
          400: '#D48666',
          500: '#C25E35', // Primary CTA default
          600: '#A44722', // Hover
          700: '#843518', // Active
          800: '#672812',
          900: '#4A1C0C',
        },
        // Obsidian Charcoal (High contrast & Dark surfaces)
        charcoal: {
          950: '#100F0E',
          900: '#171615',
          850: '#201E1C',
          800: '#2B2825',
          700: '#413D39',
          600: '#5C5651',
          500: '#7D766F',
          400: '#9E978F',
          300: '#C2BCB4',
          200: '#E0DDD7',
          100: '#EFECE8',
        },
        // Warm Ivory Canvas
        ivory: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4ECE1',
          300: '#E9DDCE',
          400: '#D5C4B0',
          900: '#221F1C',
        },
        // Natural Earth Clay
        clay: {
          50: '#F8F6F3',
          100: '#F2EDE7',
          200: '#E5DCD2',
          300: '#D2C3B4',
          400: '#B8A390',
          500: '#9E8873',
          600: '#836F5C',
          700: '#675647',
        },
        // Muted Tuscan Olive (Secondary Accent)
        olive: {
          50: '#F5F7F3',
          100: '#E7EDE3',
          200: '#D1DEC9',
          300: '#ADC4A1',
          400: '#86A378',
          500: '#638055', // Olive default
          600: '#4E6642', // Hover
          700: '#3D4F34',
          800: '#2D3A26',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'editorial': '0.18em',
        'loose-caps': '0.22em',
      },
      borderRadius: {
        'none': '0px',
        'subtle': '4px',
        'soft': '6px',
        'card': '8px',
        'large': '12px',
        'pill': '9999px',
      },
      boxShadow: {
        'none': 'none',
        'subtle': '0 2px 8px -1px rgba(23, 22, 21, 0.04), 0 1px 3px -1px rgba(23, 22, 21, 0.02)',
        'elevated': '0 8px 24px -4px rgba(23, 22, 21, 0.07), 0 3px 8px -2px rgba(23, 22, 21, 0.03)',
        'float': '0 16px 40px -8px rgba(23, 22, 21, 0.12)',
        'dark-card': '0 12px 32px -4px rgba(0, 0, 0, 0.45)',
        'deep': '0 24px 60px -8px rgba(0, 0, 0, 0.55), 0 8px 20px -4px rgba(0, 0, 0, 0.3)',
        'glow': '0 8px 32px -4px rgba(194, 94, 53, 0.45)',
      },
    },
  },
  plugins: [
    // Adds scrollbar-none utility class
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.scrollbar-none::-webkit-scrollbar': {
          'display': 'none',
        },
      });
    },
  ],
}
