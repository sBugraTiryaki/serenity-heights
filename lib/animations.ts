import { Variants } from 'framer-motion';

// Ultra-luxury easing curve - smoother, more elegant
const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Slower, more dramatic easing for hero elements
const dramaticEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Fade In from Bottom (Primary section entrance) - Bidirectional
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.6,
      ease: luxuryEase,
    },
  },
};

// Fade In from Left - Bidirectional
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

// Fade In from Right - Bidirectional
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

// Scale Up (for images, cards) - More subtle
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: luxuryEase,
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

// Stagger Item (children of stagger container) - Bidirectional
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
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

// 3D Card Entrance - with rotation and depth
export const card3D: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 15,
    z: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    z: 0,
    transition: {
      duration: 1,
      ease: luxuryEase,
    },
  },
};

// Hero Text Animation (dramatic entrance) - More dramatic
export const heroText: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.6,
      ease: dramaticEase,
    },
  },
};

// Gold Line Reveal - Slower, more elegant
export const lineReveal: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0.5,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.4,
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
      duration: 1,
      ease: luxuryEase,
    },
  },
};

// ===== 3D & PARALLAX ANIMATIONS =====

// Ken Burns effect for hero background
export const kenBurns: Variants = {
  animate: {
    scale: [1, 1.08],
    transition: {
      duration: 25,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

// Reveal Mask - Horizontal reveal for images
export const revealMask: Variants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 1.5,
      ease: luxuryEase,
    },
  },
};

// Reveal Mask from Bottom
export const revealMaskUp: Variants = {
  hidden: {
    clipPath: 'inset(100% 0 0 0)',
  },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 1.5,
      ease: luxuryEase,
    },
  },
};

// Float Subtle - For decorative elements
export const floatSubtle: Variants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

// 3D Tilt on scroll
export const tilt3D: Variants = {
  hidden: {
    opacity: 0,
    rotateY: -10,
    x: -50,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

// Parallax Layer variants for different depths
export const parallaxFar: Variants = {
  hidden: { y: 100 },
  visible: { y: -100 },
};

export const parallaxMid: Variants = {
  hidden: { y: 50 },
  visible: { y: -50 },
};

export const parallaxNear: Variants = {
  hidden: { y: 20 },
  visible: { y: -20 },
};

// Blur In - Soft focus reveal
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(20px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.4,
      ease: luxuryEase,
    },
  },
};

// ===== HOVER ANIMATIONS =====

// Subtle hover scale
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.5, ease: luxuryEase },
};

// Gold glow on hover
export const hoverGlow = {
  boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)',
  transition: { duration: 0.5, ease: luxuryEase },
};

// Button hover - More elegant
export const buttonHover = {
  scale: 1.03,
  boxShadow: '0 15px 50px rgba(212, 175, 55, 0.25)',
  transition: { duration: 0.4, ease: luxuryEase },
};

// Image hover effect - Slower, more dramatic zoom
export const imageHover = {
  scale: 1.08,
  transition: { duration: 1, ease: luxuryEase },
};

// Card hover effect - Subtle lift with 3D tilt
export const cardHover = {
  y: -12,
  rotateX: -5,
  transition: { duration: 0.5, ease: luxuryEase },
};

// 3D Card Hover
export const card3DHover = {
  y: -15,
  z: 50,
  rotateX: -8,
  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
  transition: { duration: 0.5, ease: luxuryEase },
};

// Text reveal on hover
export const textRevealHover = {
  y: 0,
  opacity: 1,
  transition: { duration: 0.4, ease: luxuryEase },
};

// ===== SCROLL-TRIGGERED ANIMATIONS =====

// Fade up with delay for sequential elements
export const fadeUpSequential = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: luxuryEase,
    },
  },
});

// Scale up with rotation hint
export const scaleUpRotate: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    rotate: -2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: luxuryEase,
    },
  },
};

// 3D Pop effect
export const pop3D: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    z: -200,
  },
  visible: {
    opacity: 1,
    scale: 1,
    z: 0,
    transition: {
      duration: 1,
      ease: luxuryEase,
    },
  },
};
