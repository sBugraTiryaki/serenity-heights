'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, staggerItem, card3DHover } from '@/lib/animations';
import { FEATURES } from '@/lib/constants';

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} id="features" className="section-secondary py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          preTitle="Amenities"
          title="Exceptional Living"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-24 grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 perspective-container"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={staggerItem}
              whileHover={card3DHover}
              style={{ y: index % 2 === 0 ? y : undefined }}
              className="group card-3d rounded-lg border border-gold/10 bg-luxury-dark/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-luxury-dark/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20 group-hover:glow-gold">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-xl text-white font-light tracking-wide">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
