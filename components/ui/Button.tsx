'use client';

import { motion } from 'framer-motion';
import { buttonHover } from '@/lib/animations';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-gold text-luxury-black hover:bg-gold-light',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-luxury-black',
    ghost: 'text-gold hover:bg-gold/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? buttonHover : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </motion.button>
  );
}
