'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { LocationPinIcon, PhoneIcon, MailIcon } from '@/components/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-darker border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-8 lg:px-12 py-20 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="grid gap-16 lg:grid-cols-4 lg:gap-20"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-white mb-4 font-light">{SITE_NAME}</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6 font-light">
              Where elegance finds its home.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-muted hover:text-gold transition-colors duration-500"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-gold transition-colors duration-500"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-gold transition-colors duration-500"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-base mb-8 font-light tracking-wide">Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-gold transition-colors duration-500 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-base mb-8 font-light tracking-wide">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <LocationPinIcon size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-text-muted text-sm font-light">
                  123 Luxury Lane<br />
                  Prestige District
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-gold shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-text-muted hover:text-gold transition-colors duration-500 text-sm font-light"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon size={18} className="text-gold shrink-0" />
                <a
                  href="mailto:concierge@serenityheights.com"
                  className="text-text-muted hover:text-gold transition-colors duration-500 text-sm font-light"
                >
                  concierge@serenityheights.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif text-base mb-8 font-light tracking-wide">Hours</h4>
            <ul className="space-y-3 text-sm text-text-muted font-light">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9AM - 7PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10AM - 5PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>By Appointment</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm font-light">
            &copy; {currentYear} {SITE_NAME}
          </p>
          <div className="flex gap-6 text-sm font-light">
            <a href="#" className="text-text-muted hover:text-gold transition-colors duration-500">
              Privacy
            </a>
            <a href="#" className="text-text-muted hover:text-gold transition-colors duration-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
