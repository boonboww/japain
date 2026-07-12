import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { lessons } from '../data/lessons';
import { CustomSelect } from '../components/ui/CustomSelect';

export default function Grammar() {
  const grammarLessons = lessons.filter(l => l.grammar && l.grammar.length > 0);
  const [selectedLesson, setSelectedLesson] = useState(grammarLessons[0]?.id);
  const currentLessonData = useMemo(() => lessons.find(l => l.id === selectedLesson), [selectedLesson]);
  const grammarList = currentLessonData?.grammar || [];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto min-h-[70vh]">
      
      {/* Control Panel - Minimalist */}
      <div className="w-full flex justify-center mb-20 pb-6 border-b border-white/5">
        <div className="relative w-full md:max-w-md">
          <CustomSelect
            value={selectedLesson}
            options={grammarLessons.map(l => ({ value: l.id, label: l.title }))}
            onChange={(val) => setSelectedLesson(Number(val))}
            buttonClassName="text-foreground font-serifjp font-bold text-lg tracking-wide"
            optionClassName="font-sans text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-16 w-full pb-32">
        {grammarList.map((g, index) => (
          <motion.div 
            key={index} 
            className="group relative px-6 md:px-10 py-10 bg-surface/10 backdrop-blur-sm border border-white/[0.02] shadow-ambient transition-all duration-700 hover:bg-surface/30 hover:border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Background Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-primary/30 transition-colors duration-700" />

            <h3 className="text-3xl md:text-4xl font-serifjp font-bold text-foreground mb-8 flex flex-col md:flex-row md:items-baseline gap-6 border-b border-white/5 pb-8 transition-colors duration-700 group-hover:border-primary/20">
              <span className="font-mono text-primary/80 text-xs tracking-[0.3em] uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{g.title.split(': ')[1] || g.title}</span>
            </h3>
            
            <div className="mb-12 flex items-start">
              <code className="text-lg md:text-xl font-mono text-primary/90 leading-relaxed px-6 py-4 bg-surface/30 border border-white/5 shadow-ambient">
                {g.formula}
              </code>
            </div>

            <div className="flex flex-col gap-8 pl-0 md:pl-8">
              {g.examples.map((ex, exIdx) => (
                <div key={exIdx} className="relative pl-6 py-2 transition-all duration-500 hover:pl-8">
                  {/* Subtle Red Marker */}
                  <div className="absolute left-0 top-3 w-[2px] h-4 bg-primary/40 group-hover:bg-primary transition-colors duration-500" />
                  
                  <p className="text-2xl md:text-3xl text-foreground font-serifjp font-bold mb-3 tracking-wide">{ex.jp}</p>
                  <p className="text-muted-foreground/60 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4">{ex.romaji}</p>
                  <p className="text-foreground/80 text-base font-medium">{ex.vn}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
