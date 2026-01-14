'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FloorMarker } from '@/components/ui/FloorMarker';
import { ResidenceModal } from '@/components/ui/ResidenceModal';
import { FLOOR_POSITIONS } from '@/lib/constants';

export function ResidencesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedResidence, setSelectedResidence] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Building image parallax - moves up as user scrolls
  const buildingY = useTransform(scrollYProgress, [0, 1], ['10%', '-40%']);

  // Title fade out as user scrolls
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  // Scroll hint fade
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      {/* Tall scroll container */}
      <section ref={containerRef} id="residences" className="relative h-[300dvh] bg-luxury-black">
        {/* Sticky viewport */}
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
          {/* Section Title */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute top-20 left-0 right-0 z-20 text-center px-6"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-gold font-light mb-4">
              Select Your
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light">
              Residence
            </h2>
          </motion.div>

          {/* Building Image Container */}
          <motion.div
            style={{ y: buildingY }}
            className="absolute inset-x-0 top-0 bottom-0 flex justify-center items-start pt-20"
          >
            {/* Building wrapper with markers */}
            <div className="relative h-[150dvh] w-[96vw] md:w-[92vw] lg:w-[88vw]">
              {/* Building Image */}
              <Image
                src="/images/building/building-design.png"
                alt="Serenity Heights Tower"
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 85vw, 60vw"
                priority
              />

              {/* Floor Markers - positioned on the building */}
              {FLOOR_POSITIONS.map((floor, index) => (
                <FloorMarker
                  key={floor.id}
                  floor={floor}
                  scrollProgress={scrollYProgress}
                  onSelect={() => setSelectedResidence(floor.id)}
                  index={index}
                  totalFloors={FLOOR_POSITIONS.length}
                />
              ))}
            </div>
          </motion.div>

          {/* Gradient overlays for depth */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-luxury-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-luxury-black to-transparent z-10 pointer-events-none" />

          {/* Scroll hint */}
          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-text-muted font-light">
              Scroll to explore
            </span>
            <ChevronDown className="text-gold animate-bounce" size={20} />
          </motion.div>

          {/* Current floor indicator - shows which residence type is in focus */}
          <FloorIndicator scrollProgress={scrollYProgress} />
        </div>
      </section>

      {/* Residence Detail Modal */}
      <ResidenceModal
        residenceId={selectedResidence}
        onClose={() => setSelectedResidence(null)}
      />
    </>
  );
}

// Small indicator showing current floor type
function FloorIndicator({ scrollProgress }: { scrollProgress: ReturnType<typeof useTransform> }) {
  const labels = ['Penthouse', 'Residence', 'Suite'];

  // Determine active index based on scroll
  const activeIndex = useTransform(scrollProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <div className="absolute left-6 md:left-12 bottom-20 z-20">
      <div className="flex flex-col gap-3">
        {labels.map((label, index) => (
          <FloorIndicatorItem
            key={label}
            label={label}
            index={index}
            scrollProgress={scrollProgress}
          />
        ))}
      </div>
    </div>
  );
}

function FloorIndicatorItem({
  label,
  index,
  scrollProgress
}: {
  label: string;
  index: number;
  scrollProgress: ReturnType<typeof useTransform>;
}) {
  const segmentSize = 1 / 3;
  const start = index * segmentSize;
  const end = start + segmentSize;

  const opacity = useTransform(
    scrollProgress,
    [start, start + 0.05, end - 0.05, end],
    [0.3, 1, 1, 0.3]
  );

  const width = useTransform(
    scrollProgress,
    [start, start + 0.05, end - 0.05, end],
    [8, 24, 24, 8]
  );

  return (
    <motion.div className="flex items-center gap-3">
      <motion.div
        style={{ width, opacity }}
        className="h-[2px] bg-gold rounded-full"
      />
      <motion.span
        style={{ opacity }}
        className="text-sm text-white font-light"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
