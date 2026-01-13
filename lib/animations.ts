import { Variants, Transition } from 'framer-motion';

// Custom easing curve for luxury feel
const luxuryEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Fade In from Bottom (Primary section entrance)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

// Fade In from Left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

// Fade In from Right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

// Scale Up (for images, cards)
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

// Stagger Container (parent for staggered children)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Stagger Item (children of stagger container)
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

// Hero Text Animation (dramatic entrance)
export const heroText: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

// Gold Line Reveal
export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: luxuryEase,
    },
  },
};

// Fade In Simple
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

// Hover animations for interactive elements - typed correctly
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.3, ease: 'easeOut' as const },
};

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
  transition: { duration: 0.3 },
};

export const buttonHover = {
  scale: 1.05,
  boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3)',
  transition: { duration: 0.3, ease: 'easeOut' as const },
};

// Image hover effect
export const imageHover = {
  scale: 1.05,
  transition: { duration: 0.7, ease: 'easeOut' as const },
};

// Card hover effect
export const cardHover = {
  y: -8,
  transition: { duration: 0.3, ease: 'easeOut' as const },
};
