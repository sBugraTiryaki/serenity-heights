'use client';

import { motion } from 'framer-motion';
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
  return (
    <section id="contact" className="section-primary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <SectionHeading
              preTitle="Get in Touch"
              title="Schedule Your Private Viewing"
              align="left"
              description="Experience the epitome of luxury living. Our dedicated team is ready to assist you in finding your perfect residence at Serenity Heights."
            />

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-white hover:text-gold transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Email</p>
                  <a
                    href="mailto:concierge@serenityheights.com"
                    className="text-white hover:text-gold transition-colors duration-300"
                  >
                    concierge@serenityheights.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Address</p>
                  <p className="text-white">
                    123 Luxury Lane, Prestige District
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-muted">Showroom Hours</p>
                  <p className="text-white">
                    Mon-Fri: 9AM-7PM | Sat: 10AM-5PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <form className="space-y-6 bg-luxury-charcoal/50 p-8 rounded-lg border border-gold/10">
              <div className="grid gap-6 md:grid-cols-2">
                <Input label="First Name" name="firstName" required />
                <Input label="Last Name" name="lastName" required />
              </div>

              <Input label="Email Address" name="email" type="email" required />

              <Input label="Phone Number" name="phone" type="tel" />

              <Select
                label="Interested In"
                name="interestedIn"
                options={floorPlanOptions}
              />

              <Textarea
                label="Message"
                name="message"
                rows={4}
                placeholder="Tell us about your requirements..."
              />

              <Button type="submit" className="w-full">
                Request Information
              </Button>

              <p className="text-xs text-text-muted text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
