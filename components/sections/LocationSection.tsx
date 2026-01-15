'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInLeft, fadeInRight, imageHover } from '@/lib/animations';
import { LOCATION_HIGHLIGHTS } from '@/lib/constants';

export function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="location" className="section-tertiary py-40 lg:py-64 overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32 items-center">
          {/* Map/Image Side with Parallax */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden perspective-container"
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              whileHover={imageHover}
              className="absolute inset-[-15%] w-[130%] h-[130%]"
            >
              <Image
                src="/images/location/location.png"
                alt="Serenity Heights Location"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 rounded-lg ring-1 ring-gold/20" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{ y: contentY }}
          >
            <SectionHeading
              preTitle="Location"
              title="Perfectly Positioned"
              align="left"
            />

            <div className="mt-20 space-y-8">
              {LOCATION_HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-500 group-hover:border-gold/40">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-white font-light">{item.name}</p>
                    <p className="text-sm text-text-muted">{item.distance}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
