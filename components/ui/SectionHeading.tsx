'use client';

import { motion } from 'framer-motion';
import { fadeInUp, lineReveal } from '@/lib/animations';

interface SectionHeadingProps {
  preTitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  preTitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignmentClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={`flex flex-col ${alignmentClasses}`}
    >
      {preTitle && (
        <motion.p
          variants={fadeInUp}
          className="text-sm uppercase tracking-[0.4em] text-gold font-light mb-6"
        >
          {preTitle}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight ${
          light ? 'text-luxury-black' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        variants={lineReveal}
        className="h-[1px] w-20 bg-gold mt-10"
      />

      {description && (
        <motion.p
          variants={fadeInUp}
          className={`mt-10 text-xl md:text-2xl leading-relaxed max-w-2xl font-light ${
            light ? 'text-luxury-charcoal' : 'text-text-muted'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
