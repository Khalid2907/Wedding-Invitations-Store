import { Variants } from 'framer-motion';

export const luxurySpring = {
  type: 'spring',
  stiffness: 70,
  damping: 22,
  mass: 0.9,
};

export const snappySpring = {
  type: 'spring',
  stiffness: 180,
  damping: 24,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxurySpring,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxurySpring,
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: luxurySpring,
  },
};

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

export const glowPulse: Variants = {
  initial: { opacity: 0.4, scale: 0.98 },
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [0.98, 1.03, 0.98],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
