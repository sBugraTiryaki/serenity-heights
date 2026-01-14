'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Bed, Bath, Square, Download, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { RESIDENCES } from '@/lib/constants';

interface ResidenceModalProps {
  residenceId: string | null;
  onClose: () => void;
}

export function ResidenceModal({ residenceId, onClose }: ResidenceModalProps) {
  const residence = RESIDENCES.find((r) => r.id === residenceId);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (residence) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [residence]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {residence && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal Panel - slides from right on desktop, bottom on mobile */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:max-w-2xl bg-luxury-charcoal z-50
                       overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10
                         hover:bg-white/20 transition-colors z-10 cursor-pointer"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Content */}
            <div className="p-6 md:p-10 pt-20">
              {/* Floor Plan Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative aspect-[4/3] bg-luxury-dark rounded-lg overflow-hidden mb-8"
              >
                <Image
                  src={residence.floorPlanImage}
                  alt={`${residence.name} Floor Plan`}
                  fill
                  className="object-contain p-4"
                />
              </motion.div>

              {/* Title & Price */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">{residence.name}</h2>
                <p className="text-gold text-xl md:text-2xl font-light mb-2">{residence.price}</p>
                <p className="text-text-muted text-sm mb-8">Floors {residence.floors}</p>
              </motion.div>

              {/* Specs Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="text-center p-4 border border-gold/20 rounded-lg bg-luxury-dark/50">
                  <Square className="text-gold mx-auto mb-2" size={22} strokeWidth={1.5} />
                  <p className="text-white font-serif text-lg">{residence.sqft}</p>
                  <p className="text-text-muted text-xs uppercase tracking-wider">Area</p>
                </div>
                <div className="text-center p-4 border border-gold/20 rounded-lg bg-luxury-dark/50">
                  <Bed className="text-gold mx-auto mb-2" size={22} strokeWidth={1.5} />
                  <p className="text-white font-serif text-lg">{residence.bedrooms}</p>
                  <p className="text-text-muted text-xs uppercase tracking-wider">Bedrooms</p>
                </div>
                <div className="text-center p-4 border border-gold/20 rounded-lg bg-luxury-dark/50">
                  <Bath className="text-gold mx-auto mb-2" size={22} strokeWidth={1.5} />
                  <p className="text-white font-serif text-lg">{residence.bathrooms}</p>
                  <p className="text-text-muted text-xs uppercase tracking-wider">Bathrooms</p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-text-muted leading-relaxed mb-10 text-lg"
              >
                {residence.description}
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4"
              >
                <Button size="lg" className="w-full">
                  <Building2 size={18} className="mr-2" />
                  Schedule Private Viewing
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Download size={18} className="mr-2" />
                  Download Floor Plan
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
