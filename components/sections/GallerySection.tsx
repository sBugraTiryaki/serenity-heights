'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { staggerContainer, staggerItem, imageHover } from '@/lib/animations';
import { GALLERY_IMAGES } from '@/lib/constants';

export function GallerySection() {
  return (
    <section id="gallery" className="section-primary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          preTitle="Visual Journey"
          title="The Gallery"
          description="Discover the exquisite interiors and breathtaking views that await you."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Featured Large Image */}
          <motion.div
            variants={staggerItem}
            className="group relative md:col-span-2 lg:col-span-2 aspect-[16/10] overflow-hidden rounded-lg"
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
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white font-serif text-xl">{GALLERY_IMAGES[0].alt}</p>
              <p className="text-text-muted text-sm mt-1">Spacious interiors with panoramic views</p>
            </div>
          </motion.div>

          {/* Smaller Gallery Images */}
          {GALLERY_IMAGES.slice(1).map((image) => (
            <motion.div
              key={image.id}
              variants={staggerItem}
              className="group relative aspect-square overflow-hidden rounded-lg"
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
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-serif text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
