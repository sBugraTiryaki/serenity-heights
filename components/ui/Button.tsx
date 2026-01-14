'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
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
  const baseStyles = `
    relative inline-flex items-center justify-center
    tracking-[0.2em] uppercase font-light
    transition-all duration-700 ease-out
    cursor-pointer overflow-hidden group
    border backdrop-blur-sm
  `;

  const variants = {
    primary: 'bg-transparent border-gold/60 text-white hover:border-gold',
    outline: 'bg-transparent border-white/30 text-white/90 hover:border-white hover:text-white',
  };

  const sizes = {
    sm: 'px-6 py-3 text-[10px]',
    md: 'px-8 py-4 text-xs',
    lg: 'px-12 py-5 text-xs',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {/* Animated gold fill from bottom */}
      <span className="absolute inset-0 bg-gradient-to-t from-gold/20 via-gold/10 to-transparent
                       translate-y-full group-hover:translate-y-0
                       transition-transform duration-700 ease-out" />

      {/* Subtle shimmer effect on hover */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100
                       bg-gradient-to-r from-transparent via-white/5 to-transparent
                       -translate-x-full group-hover:translate-x-full
                       transition-all duration-1000 ease-out" />

      {/* Top border glow on hover */}
      <span className="absolute top-0 left-0 right-0 h-[1px]
                       bg-gradient-to-r from-transparent via-gold/0 to-transparent
                       group-hover:via-gold/80 transition-all duration-500" />

      {/* Text with subtle lift */}
      <span className="relative z-10 group-hover:text-gold transition-colors duration-500">
        {children}
      </span>
    </motion.button>
  );
}
