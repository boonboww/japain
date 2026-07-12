import React from 'react';
import { motion } from 'framer-motion';

export function CloudButton({ children, className = "", onClick, color = "text-red-600 hover:text-red-500", disabled }) {
  return (
    <motion.div 
      onClick={disabled ? undefined : onClick}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={`relative min-w-[90px] h-12 md:h-14 px-6 flex items-center justify-center transition-all ${disabled ? 'cursor-not-allowed opacity-60 grayscale' : 'cursor-pointer hover:scale-110'} ${color} ${className}`}
    >
      <svg 
        viewBox="0 0 120 70" 
        preserveAspectRatio="none"
        fill="currentColor" 
        className="absolute inset-0 w-full h-full drop-shadow-md" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 25 55 
                 C 10 55, 5 40, 15 30 
                 C 15 15, 35 10, 45 20 
                 C 55 5, 80 5, 90 20 
                 C 110 15, 115 35, 105 45 
                 C 115 55, 95 60, 90 55
                 L 25 55 Z" />
      </svg>
      <span className="relative z-10 text-white font-extrabold text-sm pb-1 pointer-events-none drop-shadow-sm flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );
}
