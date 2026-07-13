import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExerciseEngine } from '../../lib/ExerciseEngine';
import { FuriganaText } from './FuriganaText';
import { BackButton } from './BackButton';

export const MatchMaker = ({ lessonData, onComplete }) => {
  const [allPairs, setAllPairs] = useState([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [pairs, setPairs] = useState(null);
  
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matched, setMatched] = useState(new Set());
  
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing'); 
  const [showConfirmQuit, setShowConfirmQuit] = useState(false);

  const ROUND_SIZE = 6;

  useEffect(() => {
    if (lessonData) {
      const engine = new ExerciseEngine(lessonData);
      const generated = engine.generateMatchMaker();
      if (generated && generated.length > 0) {
        setAllPairs(generated);
        loadRound(generated, 0);
      } else {
        setGameState('error');
      }
    }
  }, [lessonData]);

  // Handle Browser Back button
  useEffect(() => {
    const handlePopState = (e) => {
      e.preventDefault();
      if (gameState === 'playing') {
        setShowConfirmQuit(true);
        window.history.pushState(null, null, window.location.pathname);
      } else {
        onComplete();
      }
    };
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [gameState, onComplete]);

  const loadRound = (pairsList, roundIdx) => {
    const chunk = pairsList.slice(roundIdx * ROUND_SIZE, (roundIdx + 1) * ROUND_SIZE);
    
    if (chunk.length === 0) {
      setGameState('won');
      return;
    }

    const left = [];
    const right = [];
    
    chunk.forEach((v, idx) => {
      const id = `match-${roundIdx}-${idx}`;
      left.push({ id, text: v.left, matchId: id, type: v.type });
      right.push({ id, text: v.right, matchId: id, type: v.type });
    });

    setPairs({
      left: ExerciseEngine.shuffle(left),
      right: ExerciseEngine.shuffle(right)
    });
    setMatched(new Set());
    setGameState('playing');
  };

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      if (selectedLeft.matchId === selectedRight.matchId) {
        // Match!
        setScore(s => s + (selectedLeft.type === 'conv' ? 150 : 100)); // More points for conversation
        setMatched(prev => new Set(prev).add(selectedLeft.matchId));
        setSelectedLeft(null);
        setSelectedRight(null);
      } else {
        // Wrong match
        setScore(s => Math.max(0, s - 20));
        setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 500);
      }
    }
  }, [selectedLeft, selectedRight]);

  useEffect(() => {
    if (pairs && matched.size === pairs.left.length && pairs.left.length > 0) {
      setTimeout(() => {
        const nextRound = currentRoundIndex + 1;
        if (nextRound * ROUND_SIZE >= allPairs.length) {
          setGameState('won');
        } else {
          setCurrentRoundIndex(nextRound);
          loadRound(allPairs, nextRound);
        }
      }, 800);
    }
  }, [matched, pairs, currentRoundIndex, allPairs]);

  const handleBack = () => {
    if (gameState === 'playing') {
      setShowConfirmQuit(true);
    } else {
      onComplete();
    }
  };

  if (gameState === 'error') return (
    <div className="text-center p-8 relative w-full h-full">
      <BackButton onClick={onComplete} />
      Không đủ dữ liệu cho trò chơi này.
    </div>
  );
  if (!pairs) return <div className="text-center p-8">Loading...</div>;

  const totalRounds = Math.ceil(allPairs.length / ROUND_SIZE);

  if (gameState === 'won') {
    return (
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 relative min-h-[50vh]">
        <BackButton onClick={onComplete} />
        <div className="flex flex-col items-center justify-center p-12 bg-surface/50 border border-white/10 rounded-2xl w-full h-full mt-12">
          <h2 className="text-4xl font-serifjp text-primary font-bold mb-4">HOÀN THÀNH</h2>
          <p className="text-xl mb-8">Điểm tổng kết: <span className="font-bold text-accent">{score}</span></p>
          <button onClick={onComplete} className="px-8 py-3 bg-primary text-white rounded-md uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(255,107,107,0.4)]">
            Trở về Menu
          </button>
        </div>
      </div>
    );
  }

  // Determine if this round has conversations (which need smaller text)
  const hasConv = pairs.left.some(p => p.type === 'conv');

  return (
    <div className="w-full max-w-5xl mx-auto p-4 flex flex-col items-center relative min-h-[70vh]">
      <BackButton onClick={handleBack} />

      <AnimatePresence>
        {showConfirmQuit && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-3xl"
          >
            <div className="bg-surface border border-white/10 p-8 rounded-2xl max-w-sm text-center shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Thoát vòng chơi?</h3>
              <p className="text-muted-foreground text-sm mb-6">Tiến trình của bạn sẽ không được lưu lại.</p>
              <div className="flex gap-4 justify-center">
                <button onClick={() => setShowConfirmQuit(false)} className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-sm font-bold uppercase tracking-widest">
                  Tiếp tục
                </button>
                <button onClick={onComplete} className="px-6 py-2 bg-red-500/20 text-red-500 hover:bg-red-500/30 rounded-md transition-colors text-sm font-bold uppercase tracking-widest">
                  Thoát
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end w-full mb-8 font-mono text-sm uppercase tracking-widest mt-12">
        <div>
          <span className="text-muted-foreground">Round {currentRoundIndex + 1} / {totalRounds}</span>
          {hasConv && <span className="ml-4 text-xs text-yellow-500/80 hidden md:inline">Ghép Hội Thoại</span>}
        </div>
        <div className="text-right">
          <div className="text-accent font-bold text-lg">SCORE: {score}</div>
          <div className="text-muted-foreground text-xs">{matched.size} / {pairs.left.length}</div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentRoundIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          className="grid grid-cols-2 gap-4 md:gap-8 w-full"
        >
          {/* Left Column (JP) */}
          <div className="flex flex-col gap-4">
            {pairs.left.map((item) => {
              const isMatched = matched.has(item.matchId);
              const isSelected = selectedLeft?.id === item.id;
              
              if (isMatched) {
                return <div key={item.id} className="min-h-[72px] border border-dashed border-white/10 rounded-xl opacity-20" />;
              }

              const textSize = item.type === 'conv' ? 'text-lg md:text-xl' : 'text-2xl';

              return (
                <motion.button
                  key={item.id}
                  layoutId={`left-${item.id}`}
                  onClick={() => setSelectedLeft(item)}
                  className={`min-h-[72px] flex items-center justify-center p-4 ${textSize} font-serifjp rounded-xl border transition-colors ${
                    isSelected ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(255,107,107,0.4)]' : 'bg-surface border-white/10 text-foreground hover:bg-white/5'
                  }`}
                >
                  <FuriganaText text={item.text} />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column (VN) */}
          <div className="flex flex-col gap-4">
            {pairs.right.map((item) => {
              const isMatched = matched.has(item.matchId);
              const isSelected = selectedRight?.id === item.id;
              
              if (isMatched) {
                return <div key={item.id} className="min-h-[72px] border border-dashed border-white/10 rounded-xl opacity-20" />;
              }

              const textSize = item.type === 'conv' ? 'text-sm md:text-base' : 'text-lg';

              return (
                <motion.button
                  key={item.id}
                  layoutId={`right-${item.id}`}
                  onClick={() => setSelectedRight(item)}
                  className={`min-h-[72px] flex items-center justify-center p-4 ${textSize} font-sans rounded-xl border transition-colors ${
                    isSelected ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(255,107,107,0.4)]' : 'bg-surface border-white/10 text-foreground hover:bg-white/5'
                  }`}
                >
                  <FuriganaText text={item.text} />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
