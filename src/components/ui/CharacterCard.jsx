import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export const CharacterCard = ({ title, subtitle, description, link, indexStr }) => {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link to={link} className="block h-full group outline-none">
        <div className="h-full bg-surface/40 backdrop-blur-md border border-white/5 rounded-none p-8 transition-all duration-700 hover:border-primary/50 hover:bg-surface/60 relative flex flex-col overflow-hidden shadow-ambient hover:shadow-ambient-strong">
          
          {/* Massive Background Number */}
          <div className="absolute -right-8 -bottom-12 text-[140px] md:text-[180px] font-mono font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700 pointer-events-none select-none z-0">
            {indexStr}
          </div>

          {/* Top Line Accent */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-1000" />

          {/* Header Area */}
          <div className="relative z-10 mb-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-primary/80 group-hover:text-primary transition-colors duration-500">
                {indexStr}
              </span>
              <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-primary/20 transition-colors duration-500" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                {subtitle}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serifjp font-bold text-foreground tracking-tight mb-4 group-hover:text-primary transition-colors duration-500 leading-snug">
              {title}
            </h3>
          </div>

          {/* Description Area */}
          <div className="relative z-10 mt-8">
            <p className="text-sm text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
