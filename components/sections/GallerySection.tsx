'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion, PanInfo } from 'framer-motion';
import { GalleryNav } from '@/components/ui/GalleryNav';
import { Lightbox } from '@/components/ui/Lightbox';
import { GALLERY_IMAGES } from '@/lib/constants';

const AUTOPLAY_DURATION = 5000; // 5 seconds per slide
const TOTAL_IMAGES = GALLERY_IMAGES.length;

// Swipe thresholds for premium feel
const SWIPE_VELOCITY_THRESHOLD = 500; // Fast swipe = instant slide change
const SWIPE_DISTANCE_THRESHOLD = 50; // Minimum drag distance

// Luxury spring physics for smooth animations
const luxurySpring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

// Horizontal slide variants - smooth transitions
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0.3,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '50%' : '-50%',
    opacity: 0,
  }),
};

// Smooth transition config
const slideTransition = {
  x: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const },
  opacity: { duration: 0.6, ease: 'easeOut' as const },
};

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Reduced motion preference
  const prefersReducedMotion = useReducedMotion();

  // Swipe/scroll tracking
  const lastScrollTime = useRef(0);
  const accumulatedDeltaX = useRef(0);
  const lastSlideChangeTime = useRef(0);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // Track if section is in view for autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        // Resume autoplay when coming back into view
        if (entry.isIntersecting && !lightboxOpen) {
          setIsPlaying(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lightboxOpen]);

  // Auto-play logic - slides change automatically
  useEffect(() => {
    if (!isPlaying || !isInView) {
      return;
    }

    const startTime = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % TOTAL_IMAGES);
        setProgress(0);
      } else {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isPlaying, isInView, activeIndex]);

  // Pause autoplay when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else if (isInView && !lightboxOpen) {
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isInView, lightboxOpen]);

  const handleDotClick = useCallback((index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setProgress(0);
    // Keep autoplay running after manual navigation
  }, [activeIndex]);

  const handleTogglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
    if (!isPlaying) {
      setProgress(0);
    }
  }, [isPlaying]);

  const handleImageClick = useCallback(() => {
    setLightboxOpen(true);
    setIsPlaying(false);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
    setIsPlaying(true);
    setProgress(0);
  }, []);

  const handleLightboxNavigate = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  }, [activeIndex]);

  // Track if user is dragging to prevent tap from firing
  const isDragging = useRef(false);

  // Mobile touch swipe handler
  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;

    // Check if this was actually a drag or just a tap
    const wasDragged = Math.abs(offset.x) > 10 || Math.abs(offset.y) > 10;
    isDragging.current = wasDragged;

    // Fast velocity = instant slide change (premium feel)
    if (Math.abs(velocity.x) > SWIPE_VELOCITY_THRESHOLD) {
      if (velocity.x > 0 && activeIndex > 0) {
        // Swipe right = previous
        setDirection(-1);
        setActiveIndex((prev) => prev - 1);
      } else if (velocity.x < 0 && activeIndex < TOTAL_IMAGES - 1) {
        // Swipe left = next
        setDirection(1);
        setActiveIndex((prev) => prev + 1);
      }
      setProgress(0);
      setIsPlaying(true);
      return;
    }

    // Distance-based detection for slower swipes
    if (Math.abs(offset.x) > SWIPE_DISTANCE_THRESHOLD) {
      if (offset.x > 0 && activeIndex > 0) {
        setDirection(-1);
        setActiveIndex((prev) => prev - 1);
      } else if (offset.x < 0 && activeIndex < TOTAL_IMAGES - 1) {
        setDirection(1);
        setActiveIndex((prev) => prev + 1);
      }
      setProgress(0);
    }
    setIsPlaying(true);
  }, [activeIndex]);

  // Handle tap to open lightbox (only if not dragging)
  const handleTap = useCallback(() => {
    // Small delay to check if drag just ended
    setTimeout(() => {
      if (!isDragging.current) {
        setLightboxOpen(true);
        setIsPlaying(false);
      }
      isDragging.current = false;
    }, 50);
  }, []);

  // Horizontal scroll/swipe handler for trackpad
  const handleWheel = useCallback((e: WheelEvent) => {
    // Only handle horizontal scroll (trackpad swipe)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 3) {
      // Always prevent default to stop browser back/forward gestures
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();

      // Cooldown between slide changes (800ms)
      if (now - lastSlideChangeTime.current < 800) {
        return;
      }

      // Reset accumulated delta if too much time passed
      if (now - lastScrollTime.current > 150) {
        accumulatedDeltaX.current = 0;
      }

      lastScrollTime.current = now;
      accumulatedDeltaX.current += e.deltaX;

      // Higher threshold for changing slides
      const threshold = 120;

      if (accumulatedDeltaX.current > threshold) {
        // Scrolled right on trackpad = go to next
        if (activeIndex < TOTAL_IMAGES - 1) {
          setDirection(1);
          setActiveIndex((prev) => prev + 1);
          setProgress(0);
          lastSlideChangeTime.current = now;
        }
        accumulatedDeltaX.current = 0;
      } else if (accumulatedDeltaX.current < -threshold) {
        // Scrolled left on trackpad = go to previous
        if (activeIndex > 0) {
          setDirection(-1);
          setActiveIndex((prev) => prev - 1);
          setProgress(0);
          lastSlideChangeTime.current = now;
        }
        accumulatedDeltaX.current = 0;
      }
    }
  }, [activeIndex]);

  // Attach wheel event listener to the section
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isInView) return;

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, isInView]);

  const currentImage = GALLERY_IMAGES[activeIndex];

  return (
    <>
      {/* Tall container - scroll "goes to waste" here, section stays visible longer */}
      <div ref={containerRef} className="relative h-[150dvh]" id="gallery">
        {/* Sticky inner container - stays on screen while user scrolls */}
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-luxury-black">
          {/* Section Title - Top (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-20 left-0 right-0 z-20 text-center hidden md:block"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-gold font-light mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light">
              Visual Journey
            </h2>
          </motion.div>

          {/* Horizontal Slideshow Container with Touch Swipe */}
          <motion.div
            className="absolute inset-0 w-full h-full cursor-pointer"
            style={{ touchAction: 'pan-y pinch-zoom' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            dragMomentum={false}
            onDragStart={() => {
              isDragging.current = true;
              setIsPlaying(false);
            }}
            onDragEnd={handleDragEnd}
            onTap={handleTap}
            whileDrag={{ cursor: 'grabbing' }}
            transition={luxurySpring}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                {/* Ken Burns effect - disabled on mobile for performance */}
                {!isMobile && !prefersReducedMotion ? (
                  <motion.div
                    animate={{ scale: [1, 1.08] }}
                    transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      priority
                      quality={90}
                      className="object-cover"
                      sizes="100vw"
                    />
                  </motion.div>
                ) : (
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black/80 z-10 pointer-events-none" />

          {/* Image Label - Center (pointer-events-none to allow swipe through) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-white text-xl md:text-2xl font-serif font-light tracking-wide">
                  {currentImage.alt}
                </p>
                <p className="text-white/50 text-sm mt-3 font-light">
                  Tap to expand
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Counter - Left Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
            className="absolute left-8 md:left-12 bottom-24 z-20"
          >
            <div className="flex items-baseline gap-2">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-serif text-4xl md:text-5xl text-white font-light"
              >
                0{activeIndex + 1}
              </motion.span>
              <span className="text-white/30 text-sm">/</span>
              <span className="text-white/30 text-sm">0{TOTAL_IMAGES}</span>
            </div>
          </motion.div>

          {/* Bottom Navigation Bar - Apple style */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
            <GalleryNav
              totalSlides={TOTAL_IMAGES}
              activeIndex={activeIndex}
              isPlaying={isPlaying}
              progress={progress}
              onDotClick={handleDotClick}
              onTogglePlay={handleTogglePlay}
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={GALLERY_IMAGES}
        activeIndex={activeIndex}
        isOpen={lightboxOpen}
        onClose={handleLightboxClose}
        onNavigate={handleLightboxNavigate}
      />
    </>
  );
}
