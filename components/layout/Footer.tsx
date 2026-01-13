'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-darker border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="grid gap-12 lg:grid-cols-4"
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
            <h4 className="text-white font-serif text-base mb-6 font-light tracking-wide">Links</h4>
            <ul className="space-y-3">
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
            <h4 className="text-white font-serif text-base mb-6 font-light tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-text-muted text-sm font-light">
                  123 Luxury Lane<br />
                  Prestige District
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+15551234567"
                  className="text-text-muted hover:text-gold transition-colors duration-500 text-sm font-light"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" strokeWidth={1.5} />
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
            <h4 className="text-white font-serif text-base mb-6 font-light tracking-wide">Hours</h4>
            <ul className="space-y-2 text-sm text-text-muted font-light">
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
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
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
