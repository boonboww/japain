import React from 'react';
import { motion } from 'framer-motion';
import { AkatsukiCloudLine } from './AkatsukiSVGs';

export const CloudPatternButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative overflow-hidden group bg-surface border border-primary/50 rounded-lg px-8 py-3 text-white font-bold tracking-widest uppercase transition-all duration-500 shadow-sm hover:shadow-glow hover:border-primary ${className}`}
      {...props}
    >
      {/* Cloud Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-500 overflow-hidden">
        <AkatsukiCloudLine className="absolute -left-6 -top-8 w-32 h-32 text-primary opacity-50 transform group-hover:translate-x-2 group-hover:translate-y-1 transition-transform duration-700" />
        <AkatsukiCloudLine className="absolute -right-8 -bottom-10 w-40 h-40 text-primary opacity-50 transform group-hover:-translate-x-2 group-hover:-translate-y-1 transition-transform duration-700" />
      </div>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
