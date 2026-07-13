import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExerciseEngine } from '../../lib/ExerciseEngine';
import { FuriganaText } from './FuriganaText';
import { BackButton } from './BackButton';

export const VocabSurvival = ({ lessonData, onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); 
  const [gameState, setGameState] = useState('playing'); // playing, gameover, won
  const [feedback, setFeedback] = useState(null);
  const [showConfirmQuit, setShowConfirmQuit] = useState(false);

  useEffect(() => {
    if (lessonData) {
      const engine = new ExerciseEngine(lessonData);
      const generated = engine.generateVocabSurvival();
      if (generated.length > 0) {
        setQuestions(generated);
      } else {
        setGameState('error'); // No vocab found
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

  useEffect(() => {
    if (gameState !== 'playing' || questions.length === 0 || showConfirmQuit) return;
    
    if (timeLeft <= 0) {
      handleWrongAnswer(null); // Timeout
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameState, questions, showConfirmQuit]);

  const handleAnswer = (selected) => {
    const currentQ = questions[currentIndex];
    
    if (selected === currentQ.answer) {
      // Correct
      setFeedback('correct');
      setScore(s => s + 100 + timeLeft * 10);
      
      setTimeout(() => {
        advanceQuestion();
      }, 800);
    } else {
      handleWrongAnswer(selected);
    }
  };

  const handleWrongAnswer = (selected) => {
    setFeedback('wrong');
    const newLives = lives - 1;
    setLives(newLives);

    setTimeout(() => {
      if (newLives <= 0) {
        setGameState('gameover');
      } else {
        advanceQuestion();
      }
    }, 1000);
  };

  const advanceQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      const nextQ = questions[currentIndex + 1];
      setCurrentIndex(c => c + 1);
      // Harder round -> Less time
      setTimeLeft(nextQ.round >= 3 ? 10 : 15);
      setFeedback(null);
    } else {
      setGameState('won');
    }
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
        Không đủ dữ liệu từ vựng cho bài học này.
      </div>
    );
  }

  if (questions.length === 0) return <div className="text-center p-8">Loading...</div>;

  if (gameState === 'gameover' || gameState === 'won') {
    return (
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 relative min-h-[50vh]">
        <BackButton onClick={onComplete} />
        <div className="flex flex-col items-center justify-center p-12 bg-surface/50 border border-white/10 rounded-2xl w-full h-full mt-12">
          <h2 className="text-4xl font-serifjp text-primary font-bold mb-4">
            {gameState === 'won' ? 'CHIẾN THẮNG' : 'GAME OVER'}
          </h2>
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
  const maxTime = currentQ.round >= 3 ? 10 : 15;

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 relative min-h-[60vh]">
      <BackButton onClick={handleBack} />

      {/* Confirm Quit Modal */}
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

      {/* HUD */}
      <div className="flex justify-between items-end w-full mb-8 font-mono text-sm uppercase tracking-widest mt-12">
        <div className="flex flex-col gap-2">
          <div className="text-muted-foreground">Round {currentQ.round} / 3</div>
          <div className="flex gap-2 text-red-500">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: i < lives ? 1 : 0.2, scale: i < lives ? 1 : 0.8 }}
                className="text-xl"
              >
                ❤️
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-accent font-bold text-lg">SCORE: {score}</div>
          <div className="text-muted-foreground text-xs">{currentIndex + 1} / {questions.length}</div>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="w-full h-2 bg-white/10 rounded-full mb-12 overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "100%" }}
          animate={{ width: `${(timeLeft / maxTime) * 100}%` }}
          transition={{ ease: "linear", duration: 1 }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="text-center w-full"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 font-serifjp text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <FuriganaText text={currentQ.question} />
          </h3>
          <p className="text-muted-foreground tracking-widest uppercase font-mono text-sm mb-12">
            {currentQ.mode === 0 ? "Chọn chữ Hán/Kana tương ứng" : 
             currentQ.mode === 1 ? "Chọn nghĩa tiếng Việt" : "Chọn chữ Hán/Nghĩa tương ứng"}
          </p>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {currentQ.options.map((opt, i) => {
              let btnClass = "bg-surface/50 border-white/10 text-foreground hover:bg-white/5";
              
              if (feedback) {
                if (opt === currentQ.answer) {
                  btnClass = "bg-green-500/20 border-green-500/50 text-green-400"; 
                } else if (feedback === 'wrong') {
                  btnClass = "bg-red-500/20 border-red-500/50 text-red-400 opacity-50"; 
                } else {
                  btnClass = "opacity-50 border-white/5 bg-surface/20"; 
                }
              }

              return (
                <motion.button
                  key={i}
                  disabled={feedback !== null}
                  onClick={() => handleAnswer(opt)}
                  whileHover={!feedback ? { scale: 1.02 } : {}}
                  whileTap={!feedback ? { scale: 0.98 } : {}}
                  className={`p-6 text-2xl font-serifjp rounded-xl border transition-all duration-300 ${btnClass}`}
                >
                  <FuriganaText text={opt} />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
