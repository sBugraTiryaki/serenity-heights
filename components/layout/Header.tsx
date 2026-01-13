'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12, 12, 12, 0)', 'rgba(12, 12, 12, 0.95)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-2xl text-white tracking-wide font-light">
            {SITE_NAME}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-gold transition-colors duration-500 tracking-wider font-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="sm">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 bg-luxury-black lg:hidden"
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl text-white hover:text-gold transition-colors duration-500 font-light"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: NAV_LINKS.length * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4"
          >
            <Button onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
