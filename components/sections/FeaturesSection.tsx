'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, staggerItem, cardHover } from '@/lib/animations';
import { FEATURES } from '@/lib/constants';

export function FeaturesSection() {
  return (
    <section id="features" className="section-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          preTitle="Exclusive Amenities"
          title="Exceptional Living"
          description="Every detail has been meticulously crafted for the most discerning residents."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={staggerItem}
              whileHover={cardHover}
              className="group rounded-lg border border-gold/10 bg-luxury-dark/30 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-gold/30 hover:bg-luxury-dark/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20 group-hover:glow-gold">
                <feature.icon size={28} />
              </div>
              <h3 className="mt-6 font-serif text-xl text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
