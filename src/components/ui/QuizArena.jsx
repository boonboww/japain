import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExerciseEngine } from '../../lib/ExerciseEngine';
import { FuriganaText } from './FuriganaText';
import { BackButton } from './BackButton';

export const QuizArena = ({ lessonData, onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing'); // playing, checking, won, error
  const [feedback, setFeedback] = useState(null);
  const [showConfirmQuit, setShowConfirmQuit] = useState(false);

  useEffect(() => {
    if (lessonData) {
      const engine = new ExerciseEngine(lessonData);
      const generated = engine.generateQuizArena(10);
      if (generated && generated.length > 0) {
        setQuestions(generated);
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

  const handleAnswer = (selected) => {
    if (gameState !== 'playing') return;
    
    const currentQ = questions[currentIndex];
    const isCorrect = selected === currentQ.answer;

    setGameState('checking');
    
    if (isCorrect) {
      setFeedback('correct');
      setScore(s => s + 100);
    } else {
      setFeedback('wrong');
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(c => c + 1);
        setGameState('playing');
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

  if (gameState === 'error') return (
    <div className="text-center p-8 relative w-full h-full">
      <BackButton onClick={onComplete} />
      Không đủ dữ liệu cho Dò bài.
    </div>
  );
  if (questions.length === 0) return <div className="text-center p-8">Loading...</div>;

  if (gameState === 'won') {
    const accuracy = Math.round((score / (questions.length * 100)) * 100);
    
    return (
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 relative min-h-[50vh]">
        <BackButton onClick={onComplete} />
        <div className="flex flex-col items-center justify-center p-12 bg-surface/50 border border-white/10 rounded-2xl w-full h-full mt-12">
          <h2 className="text-4xl font-serifjp text-primary font-bold mb-2">TỔNG KẾT DÒ BÀI</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm mb-8">Final Results</p>
          
          <div className="flex justify-around w-full mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">{score}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Điểm số</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{accuracy}%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Độ chính xác</div>
            </div>
          </div>

          <button onClick={onComplete} className="px-12 py-4 bg-primary hover:bg-primary/80 text-white rounded-md uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(255,107,107,0.4)] transition-all">
            Hoàn Thành
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-6 relative min-h-[60vh]">
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

      <div className="w-full flex justify-between text-muted-foreground font-mono text-sm tracking-widest uppercase mb-12 mt-12">
        <div>Câu {currentIndex + 1} / {questions.length}</div>
        <div className="flex items-center gap-4">
          <span className="text-accent">Type: {currentQ.type}</span>
          <span>Score: {score}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="w-full flex flex-col items-center"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serifjp leading-relaxed whitespace-pre-wrap">
              <FuriganaText text={currentQ.question} />
            </h3>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-mono">
              {currentQ.type === 'vocab' ? 'Chọn chữ Kanji/Kana đúng' : 'Chọn đáp án điền vào chỗ trống'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {currentQ.options.map((opt, i) => {
              let btnClass = "bg-surface/50 border-white/10 text-foreground hover:bg-white/5";
              
              if (gameState === 'checking') {
                if (opt === currentQ.answer) {
                  btnClass = "bg-green-500/20 border-green-500/50 text-green-400";
                } else if (feedback === 'wrong') {
                  btnClass = "bg-red-500/20 border-red-500/50 text-red-400 opacity-50";
                } else {
                  btnClass = "opacity-50 border-white/5 bg-surface/20";
                }
              }

              return (
                <button
                  key={i}
                  disabled={gameState === 'checking'}
                  onClick={() => handleAnswer(opt)}
                  className={`p-6 text-2xl font-serifjp rounded-xl border transition-all duration-300 ${btnClass}`}
                >
                  <FuriganaText text={opt} />
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
