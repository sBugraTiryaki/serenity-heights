'use client';

import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';

interface GalleryNavProps {
  totalSlides: number;
  activeIndex: number;
  isPlaying: boolean;
  progress: number;
  onDotClick: (index: number) => void;
  onTogglePlay: () => void;
}

export function GalleryNav({
  totalSlides,
  activeIndex,
  isPlaying,
  progress,
  onDotClick,
  onTogglePlay,
}: GalleryNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="flex items-center gap-4"
    >
      {/* Dots/Progress Container - Apple style */}
      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-full px-4 py-3">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className="relative cursor-pointer group"
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Container that morphs from dot to bar */}
              <motion.div
                className="relative h-2 rounded-full overflow-hidden bg-white/30"
                animate={{
                  width: isActive ? 32 : 8,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Progress fill - only visible on active */}
                {isActive && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-white rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}

                {/* Hover effect for inactive dots */}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300 rounded-full" />
                )}
              </motion.div>
            </button>
          );
        })}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={onTogglePlay}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md hover:bg-black/80 transition-colors duration-300 cursor-pointer"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? (
          <Pause size={16} className="text-white" strokeWidth={2} fill="white" />
        ) : (
          <Play size={16} className="text-white ml-0.5" strokeWidth={2} fill="white" />
        )}
      </button>
    </motion.div>
  );
}
