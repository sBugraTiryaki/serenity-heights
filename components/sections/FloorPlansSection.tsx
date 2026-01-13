'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { fadeInUp, imageHover } from '@/lib/animations';
import { FLOOR_PLANS } from '@/lib/constants';
import { Bed, Bath, Square, Download } from 'lucide-react';

export function FloorPlansSection() {
  const [activePlan, setActivePlan] = useState(FLOOR_PLANS[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const currentPlan = FLOOR_PLANS.find((plan) => plan.id === activePlan) || FLOOR_PLANS[0];

  return (
    <section ref={sectionRef} id="floor-plans" className="section-secondary py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          preTitle="Residences"
          title="Floor Plans"
        />

        {/* Plan Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {FLOOR_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`px-6 py-3 border font-light tracking-wider transition-all duration-500 cursor-pointer ${
                activePlan === plan.id
                  ? 'border-gold bg-gold text-luxury-black'
                  : 'border-gold/30 text-gold hover:border-gold'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </motion.div>

        {/* Active Floor Plan Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePlan}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mt-16 grid gap-12 lg:grid-cols-3 perspective-container"
          >
            {/* Floor Plan Image */}
            <motion.div
              style={{ y }}
              className="lg:col-span-2 relative aspect-[4/3] bg-luxury-dark rounded-lg overflow-hidden group card-3d"
            >
              <motion.div
                whileHover={imageHover}
                className="absolute inset-0"
              >
                <Image
                  src={currentPlan.image}
                  alt={`${currentPlan.name} Floor Plan`}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-lg ring-1 ring-gold/20 group-hover:ring-gold/40 transition-all duration-500" />
            </motion.div>

            {/* Specifications */}
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-4xl text-white font-light mb-2">{currentPlan.name}</h3>
              <p className="text-gold text-2xl font-light mb-8">{currentPlan.price}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-gold/10">
                  <Square size={22} className="text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Area</p>
                    <p className="text-white font-serif text-lg">{currentPlan.sqft}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-gold/10">
                  <Bed size={22} className="text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Bedrooms</p>
                    <p className="text-white font-serif text-lg">{currentPlan.bedrooms}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-gold/10">
                  <Bath size={22} className="text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">Bathrooms</p>
                    <p className="text-white font-serif text-lg">{currentPlan.bathrooms}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <Button>
                  Schedule Viewing
                </Button>
                <Button variant="outline">
                  <Download size={16} className="mr-2" strokeWidth={1.5} />
                  Download PDF
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
