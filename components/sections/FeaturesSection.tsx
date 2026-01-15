'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES } from '@/lib/constants';

interface AmenityCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image?: string;
  index: number;
}

function AmenityCard({ title, description, icon: Icon, image, index }: AmenityCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="relative w-[85vw] md:w-[45vw] lg:w-[32vw] h-[55vh] md:h-[60vh] flex-shrink-0
                 overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image - Revealed on Hover */}
      {image && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 32vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Default State - Minimal with Border */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10
                      border border-gold/10 group-hover:border-gold/30
                      bg-luxury-dark/20 group-hover:bg-transparent
                      transition-all duration-700">

        {/* Index Number - Elegant positioning */}
        <motion.span
          className="absolute top-6 right-8 font-serif text-5xl md:text-6xl text-white/[0.03]
                     group-hover:text-white/[0.08] transition-colors duration-700
                     tracking-tight"
          animate={{ opacity: isHovered ? 0.15 : 1 }}
        >
          0{index + 1}
        </motion.span>

        {/* Icon - Minimal, top-left */}
        <motion.div
          className="absolute top-6 left-8 text-gold/50 group-hover:text-gold/80
                     transition-all duration-500"
          animate={{
            opacity: isHovered ? 0.6 : 1,
            scale: isHovered ? 0.9 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={28} />
        </motion.div>

        {/* Content */}
        <div className="mt-auto">
          <motion.h3
            className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide"
            animate={{ y: isHovered ? -8 : 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="mt-3 text-sm md:text-base text-text-muted font-light max-w-xs leading-relaxed"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Gold line accent */}
          <motion.div
            className="mt-6 h-[1px] bg-gradient-to-r from-gold/60 to-transparent"
            initial={{ width: 40 }}
            animate={{ width: isHovered ? 100 : 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.article>
  );
}

// Mobile version - vertical stack with tap to expand
function MobileAmenityCard({ title, description, icon: Icon, image, index }: AmenityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      className="relative w-full overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-30px' }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="relative border border-gold/10 bg-luxury-dark/20 overflow-hidden"
        animate={{ height: isExpanded ? 320 : 120 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background Image when expanded */}
        {image && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/70 to-luxury-black/30" />
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header row */}
          <div className="flex items-center gap-4">
            <div className="text-gold/60">
              <Icon size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl text-white font-light tracking-wide">
                {title}
              </h3>
            </div>
            <span className="font-serif text-3xl text-white/5">
              0{index + 1}
            </span>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-auto"
              >
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 h-[1px] w-16 bg-gold/40" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile layout - vertical stack
  if (isMobile) {
    return (
      <section id="features" className="section-secondary py-24 overflow-hidden">
        <div className="px-6">
          <SectionHeading
            preTitle="Amenities"
            title="Exceptional Living"
            align="left"
          />

          <div className="mt-16 space-y-4">
            {FEATURES.map((feature, index) => (
              <MobileAmenityCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - horizontal scroll
  return (
    <section
      ref={containerRef}
      id="features"
      className="relative h-[280vh] section-secondary"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        {/* Header */}
        <div className="px-8 md:px-16 mb-12">
          <SectionHeading
            preTitle="Amenities"
            title="Exceptional Living"
            align="left"
          />
        </div>

        {/* Horizontal scroll track */}
        <motion.div
          className="flex gap-6 md:gap-8 pl-8 md:pl-16"
          style={{ x }}
        >
          {FEATURES.map((feature, index) => (
            <AmenityCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              index={index}
            />
          ))}

          {/* End spacer */}
          <div className="w-[10vw] flex-shrink-0" />
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-16 left-8 md:left-16 right-8 md:right-16">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-light">
              Scroll to explore
            </span>
            <span className="text-xs text-text-muted font-light">
              {FEATURES.length} Amenities
            </span>
          </div>
          <div className="h-[1px] bg-gold/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/80 to-gold/40"
              style={{ width: progressWidth }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
