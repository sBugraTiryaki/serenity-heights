'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import { LOCATION_HIGHLIGHTS } from '@/lib/constants';

export function LocationSection() {
  return (
    <section id="location" className="section-tertiary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Map/Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/location/location.png"
              alt="Serenity Heights Location"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gold border accent */}
            <div className="absolute inset-0 rounded-lg ring-1 ring-gold/20" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <SectionHeading
              preTitle="Prime Location"
              title="Perfectly Positioned"
              align="left"
              description="Nestled in the heart of the city's most prestigious neighborhood, Serenity Heights offers unparalleled access to world-class dining, shopping, and entertainment."
            />

            <div className="mt-10 space-y-6">
              {LOCATION_HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
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
