'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import { Landmark, MapPin, Key, Calendar } from 'lucide-react';

const SIGNATURE_POINTS = [
  {
    id: 'architect',
    icon: Landmark,
    title: 'World-Renowned Design',
    description: 'Crafted by Pritzker Prize-winning architects, blending timeless elegance with modern innovation.',
  },
  {
    id: 'location',
    icon: MapPin,
    title: 'Iconic Address',
    description: 'Rising at the heart of the city\'s most coveted neighborhood, steps from Central Park.',
  },
  {
    id: 'units',
    icon: Key,
    title: 'Limited Collection',
    description: 'Only 42 meticulously designed residences, ensuring exclusivity and privacy.',
  },
  {
    id: 'delivery',
    icon: Calendar,
    title: 'Ready 2026',
    description: 'Anticipated completion Q4 2026. Private viewings now available by appointment.',
  },
];

export function OverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="overview" className="section-primary py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Content Side - Left */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{ y: contentY }}
            className="order-2 lg:order-1"
          >
            <SectionHeading
              preTitle="The Vision"
              title="A New Standard of Living"
              align="left"
            />

            <p className="mt-8 text-lg text-text-muted leading-relaxed font-light">
              Serenity Heights represents the pinnacle of urban luxury—a sanctuary where
              architectural mastery meets uncompromising craftsmanship. Every detail has been
              considered, every material thoughtfully selected.
            </p>

            <div className="mt-14 space-y-6">
              {SIGNATURE_POINTS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20 group-hover:glow-gold mt-1">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-white font-light">{item.title}</p>
                    <p className="text-sm text-text-muted leading-relaxed mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side - Right with Parallax */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden perspective-container order-1 lg:order-2"
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-[-15%] w-[130%] h-[130%]"
            >
              <Image
                src="/images/overview/overview.png"
                alt="Serenity Heights Architectural Vision"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 rounded-lg ring-1 ring-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
