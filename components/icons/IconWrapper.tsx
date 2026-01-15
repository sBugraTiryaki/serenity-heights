'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'circle' | 'minimal' | 'none';
  className?: string;
}

export function IconWrapper({
  children,
  size = 'md',
  variant = 'minimal',
  className = '',
}: IconWrapperProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  if (variant === 'none') {
    return <>{children}</>;
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        className={`${sizes[size]} flex items-center justify-center text-gold ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  // Circle variant - refined border style
  return (
    <motion.div
      className={`${sizes[size]} flex items-center justify-center rounded-full
                  border border-gold/20 text-gold
                  transition-all duration-700 ${className}`}
      whileHover={{
        borderColor: 'rgba(212, 175, 55, 0.4)',
        boxShadow: '0 0 30px rgba(212, 175, 55, 0.1)',
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
