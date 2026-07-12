import React from 'react';
import { motion } from 'framer-motion';

export function CloudButton({ children, className = "", onClick, color = "", disabled }) {
  return (
    <motion.button 
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={`relative h-12 md:h-14 px-8 flex items-center justify-center rounded-lg font-bold text-sm tracking-wide uppercase overflow-hidden transition-all duration-300
        ${disabled ? 'cursor-not-allowed opacity-50 bg-muted text-gray-400' : 'cursor-pointer bg-primary text-white hover:shadow-glow-strong'} 
        ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 drop-shadow-md">
        {children}
      </span>
      {/* Subtle Akatsuki pattern placeholder (e.g. slight red gradient) */}
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      )}
    </motion.button>
  );
}
