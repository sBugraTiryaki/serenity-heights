'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { floatSubtle } from '@/lib/animations';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/hero/hero-main.png',
    alt: 'Serenity Heights Exterior',
    preTitle: 'Welcome to',
    title: 'Serenity Heights',
    tagline: 'Where elegance finds its home.',
  },
  {
    id: 2,
    image: '/images/hero/penthouse-view.png',
    alt: 'Penthouse View at Night',
    preTitle: 'Experience',
    title: 'The View',
    tagline: 'Above the ordinary, beyond expectations.',
  },
  {
    id: 3,
    image: '/images/hero/grand-lobby.png',
    alt: 'Grand Lobby',
    preTitle: 'Discover',
    title: 'Grand Living',
    tagline: 'First impressions, lasting memories.',
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track active slide based on scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const slideIndex = Math.min(Math.floor(latest * 3), 2);
    setActiveSlide(slideIndex);
  });

  // Calculate opacity for each slide image
  const slide1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const slide2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const slide3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

  // Subtle zoom effect for active slide
  const slide1Scale = useTransform(scrollYProgress, [0, 0.33], [1, 1.1]);
  const slide2Scale = useTransform(scrollYProgress, [0.33, 0.66], [1, 1.1]);
  const slide3Scale = useTransform(scrollYProgress, [0.66, 1], [1, 1.1]);

  // Parallax Y transforms for text - each slide's content moves up as you scroll
  const text1Y = useTransform(scrollYProgress, [0, 0.33], [0, -150]);
  const text2Y = useTransform(scrollYProgress, [0.33, 0.66], [0, -150]);
  const text3Y = useTransform(scrollYProgress, [0.66, 1], [0, -150]);

  // Text opacity transforms
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.33], [1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.28, 0.38, 0.53, 0.66], [0, 1, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.61, 0.71, 0.95], [0, 1, 1]);

  // Content fade for bottom section
  const contentOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const textYTransforms = [text1Y, text2Y, text3Y];
  const textOpacityTransforms = [text1Opacity, text2Opacity, text3Opacity];

  return (
    <div ref={containerRef} className="relative h-[300dvh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Slide 1 - Building Exterior */}
        <motion.div
          style={{ opacity: slide1Opacity, scale: slide1Scale }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_SLIDES[0].image}
            alt={HERO_SLIDES[0].alt}
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Slide 2 - Penthouse View */}
        <motion.div
          style={{ opacity: slide2Opacity, scale: slide2Scale }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_SLIDES[1].image}
            alt={HERO_SLIDES[1].alt}
            fill
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Slide 3 - Grand Lobby */}
        <motion.div
          style={{ opacity: slide3Opacity, scale: slide3Scale }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_SLIDES[2].image}
            alt={HERO_SLIDES[2].alt}
            fill
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-luxury-black" />

        {/* Content - All Slides */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <div className="relative w-full max-w-5xl">
            {HERO_SLIDES.map((slide, index) => (
              <motion.div
                key={slide.id}
                style={{
                  y: textYTransforms[index],
                  opacity: textOpacityTransforms[index],
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {/* Pre-title */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: activeSlide === index ? 1 : 0,
                    y: activeSlide === index ? 0 : 30
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-sm uppercase tracking-[0.5em] text-gold font-light mb-6"
                >
                  {slide.preTitle}
                </motion.p>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: activeSlide === index ? 1 : 0,
                    y: activeSlide === index ? 0 : 50
                  }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white tracking-tight text-shadow-luxury"
                >
                  {slide.title}
                </motion.h1>

                {/* Gold Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSlide === index ? 1 : 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  className="h-[1px] w-32 md:w-40 bg-gold my-10 origin-center"
                />

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: activeSlide === index ? 1 : 0,
                    y: activeSlide === index ? 0 : 30
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl text-cream font-light max-w-2xl leading-relaxed"
                >
                  {slide.tagline}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeSlide === index ? 1 : 0,
                    y: activeSlide === index ? 0 : 20
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                  className="mt-12"
                >
                  <Button size="lg">
                    Schedule Private Viewing
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Slide Indicators - Right Side */}
        <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
          {HERO_SLIDES.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="relative h-12 md:h-16 w-[2px] bg-white/20 overflow-hidden cursor-pointer"
              onClick={() => {
                if (containerRef.current) {
                  const sectionHeight = containerRef.current.offsetHeight;
                  const targetScroll = (index / 3) * sectionHeight;
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }
              }}
            >
              {/* Active indicator fill */}
              <motion.div
                initial={{ height: '0%' }}
                animate={{
                  height: activeSlide === index ? '100%' : '0%',
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 left-0 w-full bg-gold"
              />
            </motion.div>
          ))}
        </div>

        {/* Slide Number */}
        <div className="absolute left-8 md:left-12 bottom-12 z-20">
          <div className="flex items-baseline gap-2">
            <motion.span
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl text-white font-light"
            >
              0{activeSlide + 1}
            </motion.span>
            <span className="text-text-muted text-sm font-light">/</span>
            <span className="text-text-muted text-sm font-light">03</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            variants={floatSubtle}
            animate="animate"
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-light">Scroll</span>
            <ChevronDown className="text-gold" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
