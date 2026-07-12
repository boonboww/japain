import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { numbersAndDates } from '../data/numbers';

export default function Numbers() {
  const [activeTab, setActiveTab] = useState('numbers');

  const tabs = [
    { id: 'numbers', label: 'Số đếm' },
    { id: 'months', label: 'Tháng' },
    { id: 'daysOfMonth', label: 'Ngày trong tháng' },
    { id: 'daysOfWeek', label: 'Thứ trong tuần' },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto min-h-[70vh]">
      
      {/* Control Panel - Minimalist Tabs */}
      <div className="w-full flex justify-center mb-16">
        <div className="flex flex-wrap gap-8 border-b border-white/5 pb-2 justify-center">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`pb-2 font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 border-b-2 ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground/60 hover:text-foreground'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-32"
        >
          {numbersAndDates[activeTab].map((item, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-surface/30 backdrop-blur-sm border border-white/5 p-10 hover:border-primary/40 hover:bg-surface/50 transition-all duration-700 flex flex-col justify-between overflow-hidden shadow-ambient" 
            >
              {/* Massive Background Number removed based on feedback */}

              {/* Red Edge Accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-1000" />
              
              <div className="relative z-10 mb-8">
                {item.num && (
                  <div className="text-primary/80 font-mono text-[10px] font-bold mb-6 tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
                    [{item.num}]
                  </div>
                )}
                <h2 className="text-4xl md:text-5xl font-serifjp text-foreground font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-500 leading-tight">
                  {item.jp}
                </h2>
                <div className="flex flex-col gap-1">
                  <p className="text-muted-foreground/80 font-serifjp font-medium text-lg">{item.kana}</p>
                  <p className="text-accent/60 font-mono text-[10px] uppercase tracking-[0.3em]">{item.romaji}</p>
                </div>
              </div>
              
              <div className="text-foreground/90 text-sm md:text-base font-medium border-t border-white/10 pt-6 relative z-10 uppercase tracking-widest">
                {item.vn}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
