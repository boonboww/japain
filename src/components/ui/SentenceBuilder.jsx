import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExerciseEngine } from '../../lib/ExerciseEngine';
import { RefreshCcw } from 'lucide-react';
import { FuriganaText } from './FuriganaText';
import { BackButton } from './BackButton';

export const SentenceBuilder = ({ lessonData, onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedParts, setSelectedParts] = useState([]);
  const [availableParts, setAvailableParts] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing'); 
  const [feedback, setFeedback] = useState(null);
  const [showConfirmQuit, setShowConfirmQuit] = useState(false);

  useEffect(() => {
    if (lessonData) {
      const engine = new ExerciseEngine(lessonData);
      const generated = engine.generateSentenceBuilder();
      if (generated.length > 0) {
        setQuestions(generated);
        setAvailableParts(generated[0].shuffledParts.map((p, i) => ({ id: `p${i}`, text: p })));
      } else {
        setGameState('error');
      }
    }
  }, [lessonData]);

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

  const handleSelectPart = (part, idx) => {
    if (feedback !== null) return;
    setAvailableParts(prev => prev.filter((_, i) => i !== idx));
    setSelectedParts(prev => [...prev, part]);
  };

  const handleDeselectPart = (part, idx) => {
    if (feedback !== null) return;
    setSelectedParts(prev => prev.filter((_, i) => i !== idx));
    setAvailableParts(prev => [...prev, part]);
  };

  const handleReset = () => {
    if (feedback !== null) return;
    setSelectedParts([]);
    setAvailableParts(questions[currentIndex].shuffledParts.map((p, i) => ({ id: `p${i}`, text: p })));
  };

  const handleCheck = () => {
    const currentQ = questions[currentIndex];
    const isCorrect = selectedParts.map(p => p.text).join('') === currentQ.correctParts.join('');

    if (isCorrect) {
      setFeedback('correct');
      setScore(s => s + 200);
    } else {
      setFeedback('wrong');
      // For wrong answers, don't auto-advance. Let user retry.
      setTimeout(() => {
        setFeedback(null);
        handleReset(); // reset parts so they can try again
        setScore(s => Math.max(0, s - 50));
      }, 1500);
      return;
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        const nextQ = questions[currentIndex + 1];
        setCurrentIndex(c => c + 1);
        setSelectedParts([]);
        setAvailableParts(nextQ.shuffledParts.map((p, i) => ({ id: `p${i}`, text: p })));
        setFeedback(null);
      } else {
        setGameState('won');
      }
    }, 1500);
  };

  const handleBack = () => {
    if (gameState === 'playing') {
      setShowConfirmQuit(true);
    } else {
      onComplete();
    }
  };

  if (gameState === 'error') {
    return (
      <div className="text-center p-8 relative w-full h-full">
        <BackButton onClick={onComplete} />
        Không đủ dữ liệu ngữ pháp (parts) cho bài học này.
      </div>
    );
  }
  if (questions.length === 0) return <div className="text-center p-8">Loading...</div>;

  if (gameState === 'won') {
    return (
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-6 relative min-h-[50vh]">
        <BackButton onClick={onComplete} />
        <div className="flex flex-col items-center justify-center p-12 bg-surface/50 border border-white/10 rounded-2xl w-full h-full mt-12">
          <h2 className="text-4xl font-serifjp text-primary font-bold mb-4">HOÀN THÀNH</h2>
          <p className="text-xl mb-8">Điểm của bạn: <span className="font-bold text-accent">{score}</span></p>
          <button 
            onClick={onComplete}
            className="px-8 py-3 bg-primary/20 text-primary border border-primary hover:bg-primary/30 transition-colors font-bold tracking-widest uppercase rounded-sm"
          >
            Trở về Menu
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  let dropZoneClass = "flex flex-wrap gap-2 min-h-[80px] p-4 rounded-xl border-2 border-dashed transition-colors";
  if (feedback === 'correct') dropZoneClass += " border-green-500 bg-green-500/10";
  else if (feedback === 'wrong') dropZoneClass += " border-red-500 bg-red-500/10";
  else dropZoneClass += " border-white/20 bg-surface/30";

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 relative min-h-[70vh]">
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

      <div className="flex justify-between items-end w-full mb-12 font-mono text-sm uppercase tracking-widest mt-12">
        <div>
          <span className="text-muted-foreground">Round {currentQ.round} / 3</span>
          {currentQ.round > 1 && <span className="ml-4 text-xs text-yellow-500/80 hidden md:inline">Có mảnh ghép nhiễu</span>}
        </div>
        <div className="text-right">
          <div className="text-accent font-bold text-lg">SCORE: {score}</div>
          <div className="text-muted-foreground text-xs">{currentIndex + 1} / {questions.length}</div>
        </div>
      </div>

      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full flex flex-col items-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white text-center">
          {currentQ.vn}
        </h3>
        <p className="text-muted-foreground mb-8 text-sm">Sắp xếp các từ sau thành câu hoàn chỉnh</p>

        {/* Drop Zone (Selected Parts) */}
        <div className="w-full mb-8 relative">
          <div className={dropZoneClass}>
            <AnimatePresence>
              {selectedParts.map((part, i) => (
                <motion.button
                  key={part.id}
                  layoutId={part.id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={() => handleDeselectPart(part, i)}
                  className="px-4 py-2 bg-primary/20 border border-primary text-primary font-serifjp text-xl md:text-2xl rounded-md shadow-lg"
                >
                  <FuriganaText text={part.text} />
                </motion.button>
              ))}
              {selectedParts.length === 0 && (
                <div className="w-full flex items-center justify-center text-white/20 font-serifjp text-xl absolute inset-0 pointer-events-none">
                  Kéo hoặc bấm vào từ để chọn
                </div>
              )}
            </AnimatePresence>
          </div>
          
          <button 
            onClick={handleReset}
            className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-white transition-colors"
            title="Làm lại"
          >
            <RefreshCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Available Parts */}
        <div className="flex flex-wrap gap-3 justify-center min-h-[100px] mb-12">
          <AnimatePresence>
            {availableParts.map((part, i) => (
              <motion.button
                key={part.id}
                layoutId={part.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSelectPart(part, i)}
                className="px-4 py-2 bg-surface hover:bg-white/10 border border-white/10 text-foreground font-serifjp text-xl md:text-2xl rounded-md transition-colors"
              >
                <FuriganaText text={part.text} />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        <button 
          onClick={handleCheck}
          disabled={selectedParts.length === 0 || feedback !== null}
          className="px-12 py-4 bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(255,107,107,0.4)] transition-all"
        >
          Kiểm tra
        </button>

      </motion.div>
    </div>
  );
};
