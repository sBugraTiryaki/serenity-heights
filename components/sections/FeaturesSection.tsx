'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES } from '@/lib/constants';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image?: string;
  index: number;
  size: 'large' | 'wide' | 'tall' | 'small';
  className?: string;
}

function BentoCard({ title, description, icon: Icon, image, index, size, className = '' }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    large: 'col-span-2 row-span-2',     // 2x2 - büyük kare
    wide: 'col-span-2 row-span-1',      // 2x1 - yatay dikdörtgen
    tall: 'col-span-1 row-span-2',      // 1x2 - dikey dikdörtgen
    small: 'col-span-1 row-span-1',     // 1x1 - küçük kare
    medium: 'col-span-1 row-span-1',    // fallback
  };

  // Height handled by grid auto-rows
  const heightClasses = {
    large: '',
    wide: '',
    tall: '',
    small: '',
  };

  return (
    <motion.article
      className={`relative overflow-hidden cursor-pointer group ${sizeClasses[size]} ${heightClasses[size]} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent
                          group-hover:via-luxury-black/30 transition-all duration-700" />
        </div>
      )}

      {/* Fallback background */}
      {!image && (
        <div className="absolute inset-0 z-0 bg-luxury-charcoal border border-gold/10 group-hover:border-gold/20 transition-all duration-500" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        {/* Index Number */}
        <span className="absolute top-6 right-6 font-serif text-4xl md:text-5xl text-white/10
                         group-hover:text-white/20 transition-colors duration-500">
          0{index + 1}
        </span>

        {/* Icon */}
        <div className="absolute top-6 left-6 text-gold/60 group-hover:text-gold transition-all duration-500">
          <Icon size={size === 'large' ? 28 : size === 'small' ? 22 : 24} />
        </div>

        {/* Text Content */}
        <div>
          <motion.h3
            className={`font-serif text-white font-light tracking-wide ${
              size === 'large' ? 'text-2xl md:text-3xl' : size === 'wide' || size === 'tall' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
            }`}
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h3>

          {(size === 'wide' || size === 'large' || size === 'tall') && (
            <p className="mt-2 text-sm text-white/60 group-hover:text-white/80 font-light leading-relaxed transition-colors duration-500">
              {description}
            </p>
          )}

          {/* Gold line accent */}
          <motion.div
            className="mt-4 h-[1px] bg-gradient-to-r from-gold/50 to-transparent"
            initial={{ width: 30 }}
            animate={{ width: isHovered ? 60 : 30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.article>
  );
}

// Asymmetric Bento Layout - 6 amenities
// large (2x2), wide (2x1), tall (1x2), small (1x1)
const BENTO_CONFIG: Array<{ size: 'large' | 'wide' | 'tall' | 'small' }> = [
  { size: 'large' },      // 01 - Cinema (2x2)
  { size: 'small' },      // 02 - Wine
  { size: 'tall' },       // 03 - Wellness (1x2)
  { size: 'tall' },       // 04 - Concierge (1x2)
  { size: 'wide' },       // 05 - Garage (2x1)
  { size: 'large' },      // 06 - Sky Gardens (2x2)
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-secondary py-32 md:py-40 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeading
          preTitle="Amenities"
          title="Exceptional Living"
          align="center"
        />

        {/* Asymmetric Bento Grid */}
        <div className="mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[160px] md:auto-rows-[180px] grid-flow-dense">
          {FEATURES.map((feature, index) => (
            <BentoCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              index={index}
              size={BENTO_CONFIG[index]?.size || 'small'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
