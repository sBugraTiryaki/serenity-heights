'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/animations';
import { FLOOR_PLANS } from '@/lib/constants';
import { Bed, Bath, Square, Download } from 'lucide-react';

export function FloorPlansSection() {
  const [activePlan, setActivePlan] = useState(FLOOR_PLANS[0].id);

  const currentPlan = FLOOR_PLANS.find((plan) => plan.id === activePlan) || FLOOR_PLANS[0];

  return (
    <section id="floor-plans" className="section-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          preTitle="Residence Options"
          title="Floor Plans"
          description="Choose from our carefully designed residences, each offering the perfect blend of luxury and functionality."
        />

        {/* Plan Tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {FLOOR_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(plan.id)}
              className={`px-6 py-3 border-2 font-medium tracking-wide transition-all duration-300 cursor-pointer ${
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-8 lg:grid-cols-3"
          >
            {/* Floor Plan Image */}
            <div className="lg:col-span-2 relative aspect-[4/3] bg-luxury-dark rounded-lg overflow-hidden">
              <Image
                src={currentPlan.image}
                alt={`${currentPlan.name} Floor Plan`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              {/* Gold border accent */}
              <div className="absolute inset-0 rounded-lg ring-1 ring-gold/20" />
            </div>

            {/* Specifications */}
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl text-white mb-2">{currentPlan.name}</h3>
              <p className="text-gold text-2xl font-light mb-8">{currentPlan.price}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-gold/10">
                  <Square size={24} className="text-gold" />
                  <div>
                    <p className="text-sm text-text-muted">Total Area</p>
                    <p className="text-white font-medium">{currentPlan.sqft}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-gold/10">
                  <Bed size={24} className="text-gold" />
                  <div>
                    <p className="text-sm text-text-muted">Bedrooms</p>
                    <p className="text-white font-medium">{currentPlan.bedrooms}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-gold/10">
                  <Bath size={24} className="text-gold" />
                  <div>
                    <p className="text-sm text-text-muted">Bathrooms</p>
                    <p className="text-white font-medium">{currentPlan.bathrooms}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button>
                  Schedule Viewing
                </Button>
                <Button variant="outline">
                  <Download size={18} className="mr-2" />
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
