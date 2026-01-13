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
      viewport={{ once: true, margin: '-100px' }}
      className={`flex flex-col ${alignmentClasses}`}
    >
      {preTitle && (
        <motion.p
          variants={fadeInUp}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-medium mb-4"
        >
          {preTitle}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight ${
          light ? 'text-luxury-black' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        variants={lineReveal}
        className="h-[2px] w-16 bg-gold mt-6"
      />

      {description && (
        <motion.p
          variants={fadeInUp}
          className={`mt-6 text-lg md:text-xl leading-relaxed max-w-2xl ${
            light ? 'text-luxury-charcoal' : 'text-text-muted'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
