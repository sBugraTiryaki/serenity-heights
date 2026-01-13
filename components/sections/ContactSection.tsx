'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import { FLOOR_PLANS } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const floorPlanOptions = FLOOR_PLANS.map((plan) => ({
  value: plan.id,
  label: `${plan.name} - ${plan.sqft}`,
}));

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yRight = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="contact" className="section-primary py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 perspective-container">
          {/* Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{ y: yLeft }}
          >
            <SectionHeading
              preTitle="Contact"
              title="Get in Touch"
              align="left"
            />

            <div className="mt-12 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="flex items-center gap-5 group"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-white font-serif text-lg hover:text-gold transition-colors duration-500"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-center gap-5 group"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Email</p>
                  <a
                    href="mailto:concierge@serenityheights.com"
                    className="text-white font-serif text-lg hover:text-gold transition-colors duration-500"
                  >
                    concierge@serenityheights.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-5 group"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Address</p>
                  <p className="text-white font-serif text-lg">
                    123 Luxury Lane, Prestige District
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-5 group"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold/20">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Hours</p>
                  <p className="text-white font-serif text-lg">
                    Mon-Fri 9-7 | Sat 10-5
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            style={{ y: yRight }}
            className="card-3d"
          >
            <form className="space-y-6 bg-luxury-charcoal/50 p-8 rounded-lg border border-gold/10">
              <div className="grid gap-6 md:grid-cols-2">
                <Input label="First Name" name="firstName" required />
                <Input label="Last Name" name="lastName" required />
              </div>

              <Input label="Email" name="email" type="email" required />

              <Input label="Phone" name="phone" type="tel" />

              <Select
                label="Interest"
                name="interestedIn"
                options={floorPlanOptions}
              />

              <Textarea
                label="Message"
                name="message"
                rows={3}
                placeholder="Your message..."
              />

              <Button type="submit" className="w-full">
                Send Inquiry
              </Button>

              <p className="text-xs text-text-muted text-center font-light">
                We respect your privacy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
