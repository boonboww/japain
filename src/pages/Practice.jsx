import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lessons } from '../data/lessons';
import { CustomSelect } from '../components/ui/CustomSelect';
import { VocabSurvival } from '../components/ui/VocabSurvival';
import { SentenceBuilder } from '../components/ui/SentenceBuilder';
import { MatchMaker } from '../components/ui/MatchMaker';
import { QuizArena } from '../components/ui/QuizArena';

export default function Practice() {
  const practiceLessons = [
    { id: 'all', title: 'Tất Cả Các Bài' },
    ...lessons
  ];
  
  const [selectedLesson, setSelectedLesson] = useState('all');
  
  const currentLessonData = useMemo(() => {
    if (selectedLesson === 'all') {
      // Combine all lessons
      const combinedVocab = lessons.reduce((acc, cur) => [...acc, ...(cur.vocabulary || [])], []);
      const combinedGrammar = lessons.reduce((acc, cur) => [...acc, ...(cur.grammar || [])], []);
      
      return {
        id: 'all',
        title: 'Tất Cả Các Bài',
        vocabulary: combinedVocab,
        grammar: combinedGrammar,
      };
    }
    return lessons.find(l => l.id === selectedLesson);
  }, [selectedLesson]);

  const [activeGame, setActiveGame] = useState(null); // 'survival', 'builder', 'match', 'arena'

  const games = [
    { id: 'survival', title: 'Sinh Tồn Từ Vựng', subtitle: 'サバイバル', desc: 'Luyện phản xạ và tốc độ ghi nhớ từ vựng.' },
    { id: 'builder', title: 'Thuật Ghép Câu', subtitle: 'ビルダー', desc: 'Sắp xếp các mảnh vỡ thành câu hoàn chỉnh.' },
    { id: 'match', title: 'Trận Chiến Nối Từ', subtitle: 'マッチ', desc: 'Tìm và nối các cặp từ - nghĩa tương ứng.' },
    { id: 'arena', title: 'Dò Bài Tổng Hợp', subtitle: 'アリーナ', desc: 'Kiểm tra tổng hợp mọi kỹ năng của bài học.' },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto min-h-[70vh]">
      
      <AnimatePresence mode="wait">
        {!activeGame ? (
          <motion.div 
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full flex flex-col items-center"
          >
            {/* Lesson Selector */}
            <div className="w-full max-w-md mb-12">
              <CustomSelect
                value={selectedLesson}
                options={practiceLessons.map(l => ({ value: l.id, label: l.title }))}
                onChange={(val) => setSelectedLesson(val === 'all' ? 'all' : Number(val))}
                buttonClassName="text-foreground font-serifjp font-bold text-lg tracking-wide text-center justify-center gap-4 py-4"
                optionClassName="font-sans text-sm"
              />
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl py-4">
              {games.map((game, index) => {
                const indexStr = `0${index + 1}`;
                return (
                  <motion.button
                    key={game.id}
                    disabled={game.disabled}
                    whileHover={!game.disabled ? { scale: 1.02, y: -5 } : {}}
                    whileTap={!game.disabled ? { scale: 0.98 } : {}}
                    onClick={() => !game.disabled && setActiveGame(game.id)}
                    className={`block h-full group outline-none w-full text-left ${game.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
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
                            {game.subtitle}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-serifjp font-bold text-foreground tracking-tight mb-4 group-hover:text-primary transition-colors duration-500 leading-snug">
                          {game.title}
                        </h3>
                      </div>

                      {/* Description Area */}
                      <div className="relative z-10 mt-8">
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                          {game.desc}
                        </p>
                      </div>

                      {game.disabled && (
                        <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest uppercase px-2 py-1 bg-white/5 rounded-sm z-10">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-full"
          >
            {activeGame === 'survival' && (
              <VocabSurvival 
                lessonData={currentLessonData} 
                onComplete={() => setActiveGame(null)} 
              />
            )}
            {activeGame === 'builder' && (
              <SentenceBuilder 
                lessonData={currentLessonData} 
                onComplete={() => setActiveGame(null)} 
              />
            )}
            {activeGame === 'match' && (
              <MatchMaker 
                lessonData={currentLessonData} 
                onComplete={() => setActiveGame(null)} 
              />
            )}
            {activeGame === 'arena' && (
              <QuizArena 
                lessonData={currentLessonData} 
                onComplete={() => setActiveGame(null)} 
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
