'use client';

import { motion, Variants } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function AnimatedContainer({
  children,
  className = '',
  delay = 0,
  variants = fadeInUp,
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
