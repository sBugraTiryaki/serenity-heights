'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import type { GalleryImage } from '@/types';

// Swipe thresholds for lightbox navigation
const SWIPE_VELOCITY_THRESHOLD = 300;
const SWIPE_DISTANCE_THRESHOLD = 100;

// Luxury spring for smooth transitions
const luxurySpring = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
};

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, activeIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const currentImage = images[activeIndex];
  const isZoomed = scale > 1;

  // Reset zoom when image changes or lightbox closes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [activeIndex, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          if (isZoomed) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
          } else {
            onClose();
          }
          break;
        case 'ArrowLeft':
          if (!isZoomed) {
            onNavigate((activeIndex - 1 + images.length) % images.length);
          }
          break;
        case 'ArrowRight':
          if (!isZoomed) {
            onNavigate((activeIndex + 1) % images.length);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images.length, onClose, onNavigate, isZoomed]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleImageClick = useCallback((e: React.MouseEvent) => {
    // Stop propagation so backdrop click doesn't fire
    e.stopPropagation();

    // Don't toggle zoom if user was dragging
    if (isDragging.current) {
      isDragging.current = false;
      return;
    }

    if (isZoomed) {
      // Zoom out
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      // Zoom in
      setScale(2);
    }
  }, [isZoomed]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (isZoomed) {
      dragStartPos.current = { x: e.clientX, y: e.clientY };
    }
  }, [isZoomed]);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (isZoomed) {
      const dx = Math.abs(e.clientX - dragStartPos.current.x);
      const dy = Math.abs(e.clientY - dragStartPos.current.y);
      // If moved more than 10px, consider it a drag
      if (dx > 10 || dy > 10) {
        isDragging.current = true;
      }
    }
  }, [isZoomed]);

  const handlePrev = useCallback(() => {
    if (!isZoomed) {
      onNavigate((activeIndex - 1 + images.length) % images.length);
    }
  }, [activeIndex, images.length, onNavigate, isZoomed]);

  const handleNext = useCallback(() => {
    if (!isZoomed) {
      onNavigate((activeIndex + 1) % images.length);
    }
  }, [activeIndex, images.length, onNavigate, isZoomed]);

  const handleClose = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    onClose();
  }, [onClose]);

  // Handle swipe for image navigation (only when not zoomed)
  const handleSwipeDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isZoomed) return;

    const { offset, velocity } = info;

    // Fast velocity = instant navigation
    if (Math.abs(velocity.x) > SWIPE_VELOCITY_THRESHOLD) {
      if (velocity.x > 0) {
        // Swipe right = previous
        onNavigate((activeIndex - 1 + images.length) % images.length);
      } else {
        // Swipe left = next
        onNavigate((activeIndex + 1) % images.length);
      }
      return;
    }

    // Distance-based detection
    if (Math.abs(offset.x) > SWIPE_DISTANCE_THRESHOLD) {
      if (offset.x > 0) {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      } else {
        onNavigate((activeIndex + 1) % images.length);
      }
    }
  }, [isZoomed, activeIndex, images.length, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop - click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Close button - always visible and prominent */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
            onClick={handleClose}
            className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X size={28} className="text-white" strokeWidth={2} />
          </motion.button>

          {/* Zoom indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.15 }}
            className="absolute top-6 right-20 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
          >
            {isZoomed ? (
              <>
                <ZoomOut size={18} className="text-white" strokeWidth={1.5} />
                <span className="text-white text-sm">Click to zoom out</span>
              </>
            ) : (
              <>
                <ZoomIn size={18} className="text-white" strokeWidth={1.5} />
                <span className="text-white text-sm">Click to zoom in</span>
              </>
            )}
          </motion.div>

          {/* Navigation arrows */}
          {!isZoomed && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.1 }}
                onClick={handlePrev}
                className="absolute left-6 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} className="text-white" strokeWidth={1.5} />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.1 }}
                onClick={handleNext}
                className="absolute right-6 z-20 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={28} className="text-white" strokeWidth={1.5} />
              </motion.button>
            </>
          )}

          {/* Image container - clicking outside image closes lightbox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-12"
            onClick={handleClose}
          >
            {/* Swipe wrapper for navigation (only when not zoomed) */}
            <motion.div
              className="relative max-w-[90vw] max-h-[80vh] w-full h-full touch-pan-y"
              drag={!isZoomed ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              dragMomentum={false}
              onDragEnd={handleSwipeDragEnd}
              transition={luxurySpring}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                  style={{
                    cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                  }}
                  onClick={handleImageClick}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  drag={isZoomed}
                  dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                  dragElastic={0.1}
                >
                  <motion.div
                    animate={{ scale, x: position.x, y: position.y }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      className="object-contain pointer-events-none"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Image counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2">
              <span className="text-white font-serif text-lg">{activeIndex + 1}</span>
              <span className="text-white/50">/</span>
              <span className="text-white/50 text-sm">{images.length}</span>
            </div>
          </motion.div>

          {/* Image title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.25 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
          >
            <p className="text-white/80 text-sm tracking-wider font-light">
              {currentImage.alt}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
