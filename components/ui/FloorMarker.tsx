'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { FloorPosition } from '@/types';

interface FloorMarkerProps {
  floor: FloorPosition;
  scrollProgress: MotionValue<number>;
  onSelect: () => void;
  index: number;
  totalFloors: number;
}

export function FloorMarker({ floor, scrollProgress, onSelect, index, totalFloors }: FloorMarkerProps) {
  // Her kat için scroll aralığı hesapla
  const segmentSize = 1 / totalFloors;
  const start = index * segmentSize;
  const end = start + segmentSize;
  const peak = start + segmentSize / 2;

  // Son eleman (Suite) için daha uzun görünürlük
  const isLast = index === totalFloors - 1;
  const fadeInPoint = start + 0.02;
  const fadeOutPoint = isLast ? end + 0.15 : end - 0.01;
  const endPoint = isLast ? end + 0.2 : end;

  const opacity = useTransform(
    scrollProgress,
    [start, fadeInPoint, fadeOutPoint, endPoint],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollProgress,
    [start, peak, end],
    [0.8, 1, 0.8]
  );

  const x = useTransform(
    scrollProgress,
    [start, peak, end],
    [20, 0, -20]
  );

  return (
    <motion.button
      style={{
        top: `${floor.top}%`,
        left: '50%',
        opacity,
        scale,
      }}
      onClick={onSelect}
      className="absolute -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer z-30"
    >
      {/* + Button - görselin üzerinde ortalanmış */}
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gold group-hover:border-gold
                      flex items-center justify-center transition-all duration-300
                      group-hover:bg-gold group-hover:scale-110 backdrop-blur-md bg-luxury-black/90 shadow-xl shadow-black/50">
        <Plus className="text-gold group-hover:text-luxury-black transition-colors" size={28} strokeWidth={2} />
      </div>

      {/* Label - butonun altında */}
      <span className="text-white/90 group-hover:text-white text-xs md:text-sm font-light tracking-wider uppercase
                       bg-luxury-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full whitespace-nowrap">
        {floor.label}
      </span>
    </motion.button>
  );
}
