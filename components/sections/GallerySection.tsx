'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, staggerItem, imageHover, revealMask } from '@/lib/animations';
import { GALLERY_IMAGES } from '@/lib/constants';

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section ref={sectionRef} id="gallery" className="section-primary py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          preTitle="Gallery"
          title="Visual Journey"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-container"
        >
          {/* Featured Large Image */}
          <motion.div
            variants={revealMask}
            style={{ y: y1, rotateZ: rotate }}
            className="group relative md:col-span-2 lg:col-span-2 aspect-[16/10] overflow-hidden rounded-lg cursor-pointer card-3d"
          >
            <motion.div
              whileHover={imageHover}
              className="absolute inset-0"
            >
              <Image
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
              <p className="text-white font-serif text-2xl font-light">{GALLERY_IMAGES[0].alt}</p>
            </div>
          </motion.div>

          {/* Smaller Gallery Images */}
          {GALLERY_IMAGES.slice(1).map((image, index) => (
            <motion.div
              key={image.id}
              variants={staggerItem}
              style={{ y: index % 2 === 0 ? y2 : undefined }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer card-3d"
            >
              <motion.div
                whileHover={imageHover}
                className="absolute inset-0"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-white font-serif text-xl font-light">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
