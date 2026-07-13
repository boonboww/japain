import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { lessons } from '../data/lessons';
import { CustomSelect } from '../components/ui/CustomSelect';
import { InteractiveSentence } from '../components/ui/InteractiveSentence';

export default function Conversation() {
  const conversationLessons = lessons.filter(l => l.conversation && l.conversation.length > 0);
  const [selectedLesson, setSelectedLesson] = useState(conversationLessons[0]?.id);
  const currentLessonData = useMemo(() => lessons.find(l => l.id === selectedLesson), [selectedLesson]);
  const conversationList = currentLessonData?.conversation || [];
  const uniqueSpeakers = Array.from(new Set(conversationList.map(c => c.speaker)));

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto min-h-[70vh]">
      
      {/* Control Panel */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center mb-16 pb-6 border-b border-white/5 gap-6">
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <CustomSelect
            value={selectedLesson}
            options={conversationLessons.map(l => ({ value: l.id, label: l.title }))}
            onChange={(val) => setSelectedLesson(Number(val))}
            buttonClassName="text-foreground font-serifjp font-bold text-lg tracking-wide text-center justify-center gap-4"
            optionClassName="font-sans text-sm"
          />
        </div>
      </div>

      <motion.div 
        className="w-full relative py-4" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {conversationList.length > 0 ? (
          <div className="flex flex-col gap-10 w-full px-4 md:px-0">
            {conversationList.map((c, index) => {
              const isLeft = uniqueSpeakers.indexOf(c.speaker) % 2 === 0;
              
              return (
                <motion.div 
                  key={index} 
                  className={`flex w-full group ${isLeft ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className={`relative max-w-[95%] md:max-w-[85%] bg-surface/30 backdrop-blur-sm border border-white/5 p-8 transition-all duration-500 hover:border-primary/20 hover:bg-surface/40 shadow-ambient ${isLeft ? 'text-left' : 'text-right'}`}>
                    
                    {/* Edge Accent */}
                    <div className={`absolute top-0 bottom-0 w-[2px] ${isLeft ? 'left-0 bg-primary/40' : 'right-0 bg-accent/40'} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                    <span className={`inline-block font-mono font-bold text-[10px] tracking-[0.3em] uppercase mb-6 px-3 py-1 border border-white/5 bg-background/30 ${isLeft ? 'text-primary' : 'text-accent'}`}>
                      {c.speaker}
                    </span>
                    
                    <div className="text-2xl md:text-3xl font-serifjp text-foreground font-bold mb-3 tracking-wide leading-relaxed">
                      <InteractiveSentence text={c.text_jp} isPracticeMode={false} />
                    </div>
                    
                    <p className={`text-muted-foreground/60 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6 transition-all duration-500 opacity-100`}>
                      {c.romaji}
                    </p>
                    
                    <p className={`text-foreground/80 text-sm md:text-base font-medium transition-all duration-500 opacity-100`}>
                      {c.text_vn}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground/50 text-xs tracking-[0.3em] uppercase font-mono">
            No Conversation Data
          </div>
        )}
      </motion.div>
    </div>
  );
}
