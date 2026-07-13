import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { AkatsukiCloudLine, IconAkatsukiCloud } from '../ui/AkatsukiSVGs';

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/vocab", label: "Từ vựng" },
    { to: "/grammar", label: "Ngữ pháp" },
    { to: "/conversation", label: "Hội thoại" },
    { to: "/numbers", label: "Số đếm" },
    { to: "/practice", label: "Luyện tập" }
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Background with deep blur and subtle border */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl border-b border-white/5 transition-all duration-700" />

      <div className="container mx-auto flex items-center justify-between h-[72px] px-6 md:px-12 relative z-10">
        <NavLink to="/" className="flex items-center gap-4 group">
           <div className="relative w-8 h-8 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <IconAkatsukiCloud className="w-full h-full text-primary" />
           </div>
           <span className="font-serifjp font-black text-foreground tracking-[0.3em] uppercase text-sm md:text-base group-hover:text-primary transition-colors duration-500">Japain</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              className={({ isActive }) => `relative font-medium text-xs uppercase tracking-[0.2em] transition-colors duration-500 py-2 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground group'}`}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <motion.div layoutId="underline" className="absolute -bottom-[22px] left-0 right-0 h-[1px] bg-primary" />
                  ) : (
                    <div className="absolute -bottom-[22px] left-0 right-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-muted-foreground hover:text-foreground transition-colors p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[72px] left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-border/50 shadow-2xl flex flex-col px-6 py-4 md:hidden z-40 overflow-hidden"
          >
             {links.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block py-4 font-medium text-sm uppercase tracking-[0.2em] border-b border-white/5 last:border-0 transition-colors duration-500 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
