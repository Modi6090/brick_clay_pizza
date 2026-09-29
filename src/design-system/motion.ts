/**
 * Brick & Clay — Framer Motion Animation System
 * Principles: Subtle, fast, smooth, purposeful. Respects prefers-reduced-motion.
 */

import { type Variants, type Transition } from 'framer-motion';

// Refined easing curves
export const easeEditorial = [0.16, 1, 0.3, 1] as const;
export const easeSubtle = [0.25, 0.1, 0.25, 1] as const;

// Transition presets
export const transitions = {
  fast: {
    duration: 0.2,
    ease: easeSubtle,
  } satisfies Transition,
  standard: {
    duration: 0.35,
    ease: easeEditorial,
  } satisfies Transition,
  reveal: {
    duration: 0.6,
    ease: easeEditorial,
  } satisfies Transition,
  slow: {
    duration: 0.8,
    ease: easeEditorial,
  } satisfies Transition,
};

// 1. Page Entrance
export const pageEntranceVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeEditorial,
      staggerChildren: 0.1,
    },
  },
};

// 2. Section Reveal
export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeEditorial,
    },
  },
};

// 3. Image Reveal (Gentle scale + fade)
export const imageRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeEditorial,
    },
  },
};

// 4. Staggered Container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// 5. Staggered Item
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeEditorial,
    },
  },
};

// 6. Navigation / Drawer Transitions
export const drawerVariants: Variants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.2,
      ease: easeSubtle,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeEditorial,
    },
  },
};

// 7. Modal Backdrop & Dialog
export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};

export const modalDialogVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeEditorial,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: 8,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

// 8. Micro Interactions (Buttons, Cards)
export const buttonTapMotion = {
  tap: { scale: 0.98 },
  hover: { scale: 1.01 },
};

export const cardHoverMotion = {
  rest: { y: 0, transition: transitions.fast },
  hover: { y: -3, transition: transitions.fast },
};
