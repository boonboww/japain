import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const BackButton = ({ onClick, label = "Quay Lại" }) => {
  return (
    <motion.button
      whileHover={{ x: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="absolute top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-muted-foreground hover:text-white transition-colors bg-surface/30 backdrop-blur-md"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-mono text-sm tracking-widest uppercase">{label}</span>
    </motion.button>
  );
};
