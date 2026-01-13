'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { heroText, fadeInUp, lineReveal, staggerContainer } from '@/lib/animations';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        {/* Hero Image */}
        <Image
          src="/images/hero/hero-main.png"
          alt="Serenity Heights Luxury Residence"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-luxury-black" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Pre-title */}
          <motion.p
            variants={fadeInUp}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-medium mb-6"
          >
            Introducing
          </motion.p>

          {/* Main Title */}
          <motion.h1
            variants={heroText}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-white tracking-tight text-shadow-luxury"
          >
            {SITE_NAME}
          </motion.h1>

          {/* Gold Line */}
          <motion.div
            variants={lineReveal}
            className="h-[2px] w-24 md:w-32 bg-gold my-8"
          />

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-cream font-light max-w-xl mb-10"
          >
            {SITE_TAGLINE}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Button size="lg">
              Schedule a Private Viewing
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-text-muted">Scroll</span>
          <ChevronDown className="text-gold" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
