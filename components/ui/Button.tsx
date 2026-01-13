'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'elegant' | 'ghost';
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
  const baseStyles = 'relative inline-flex items-center justify-center tracking-widest uppercase transition-all duration-500 cursor-pointer overflow-hidden group';

  const variants = {
    primary: 'bg-gold text-luxury-black hover:bg-gold-light font-medium',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-luxury-black font-medium',
    elegant: 'bg-transparent border border-gold/50 text-white font-light hover:border-gold hover:text-gold',
    ghost: 'text-gold hover:bg-gold/10 font-medium',
  };

  const sizes = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-sm',
  };

  // Elegant variant has special hover effect
  if (variant === 'elegant') {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={!disabled ? { scale: 0.98 } : undefined}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      >
        {/* Hover fill effect */}
        <span className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

        {/* Text */}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </motion.button>
  );
}
