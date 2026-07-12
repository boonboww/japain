import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function CustomSelect({ value, options, onChange, buttonClassName = "", dropdownClassName = "", optionClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between bg-transparent hover:bg-surface/30 transition-colors border-b hover:border-primary/50 px-2 py-3 focus:outline-none focus:border-primary cursor-pointer ${isOpen ? 'border-primary' : 'border-white/10'} ${buttonClassName}`}
      >
        <span className="truncate pr-4">{selectedOption?.label}</span>
        {/* Removed ChevronDown to make it even more minimal, or keep a very subtle one */}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full left-0 min-w-[100%] w-max max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] mt-1 bg-[#111] border border-white/10 shadow-2xl z-50 max-h-[50vh] overflow-y-auto ${dropdownClassName}`}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-6 py-4 transition-colors duration-300 border-b border-white/5 last:border-0 hover:bg-white/10 hover:text-primary whitespace-normal break-words ${
                  opt.value === value ? 'text-primary bg-primary/10' : 'text-foreground/80'
                } ${optionClassName}`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
