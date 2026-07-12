import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { lessons } from '../data/lessons';
import { ArrowLeft, ArrowRight, RefreshCcw, Layers, List, Shuffle } from 'lucide-react';
import { CustomSelect } from '../components/ui/CustomSelect';

function shuffleArray(array) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function Vocab() {
  const location = useLocation();
  const initialLesson = location.state?.selectedId || lessons[0].id;

  const [selectedLesson, setSelectedLesson] = useState(initialLesson);
  const [mode, setMode] = useState('jp2vn');
  const [viewType, setViewType] = useState('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const [wordCountLimit, setWordCountLimit] = useState("all");
  const [isShuffled, setIsShuffled] = useState(false);

  const currentLessonData = useMemo(() => lessons.find(l => l.id === selectedLesson), [selectedLesson]);
  const originalVocabList = currentLessonData?.vocabulary || [];

  const sessionVocabList = useMemo(() => {
    let list = [...originalVocabList];
    if (wordCountLimit !== "all") {
      const limit = parseInt(wordCountLimit, 10);
      if (!isNaN(limit)) list = list.slice(0, limit);
    }
    if (isShuffled) {
      list = shuffleArray(list);
    }
    return list;
  }, [originalVocabList, wordCountLimit, isShuffled]);

  useEffect(() => {
    if (location.state?.selectedId) {
      setSelectedLesson(location.state.selectedId);
      setCurrentIndex(0);
      setIsFlipped(false);
      setIsShuffled(false);
      setWordCountLimit("all");
    }
    return () => {
       setIsShuffled(false);
       setWordCountLimit("all");
    };
  }, [location.state]);

  const currentVocab = sessionVocabList[currentIndex];
  const displayJp = currentVocab?.jp ? currentVocab.jp.split(/\(|（/)[0].trim() : '';

  const handleNext = () => {
    if (currentIndex < sessionVocabList.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex - 1), 150);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto min-h-[70vh]">
      
      {/* Control Panel - Minimalist */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
        
        {/* Left Side: Configuration Controls */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 w-full lg:w-auto pb-4 lg:pb-0">
          {/* Lesson Select */}
          <div className="w-64 shrink-0">
            <CustomSelect
              value={selectedLesson}
              options={lessons.map(l => ({ value: l.id, label: l.title }))}
              onChange={(val) => {
                setSelectedLesson(Number(val));
                setCurrentIndex(0);
                setIsFlipped(false);
                setIsShuffled(false);
                setWordCountLimit("all");
              }}
              buttonClassName="text-foreground font-serifjp font-bold text-lg tracking-wide"
              optionClassName="font-sans text-sm"
            />
          </div>

          {/* Word Count Limit */}
          <div className="w-24 shrink-0">
            <CustomSelect
              value={wordCountLimit}
              options={[
                { value: "all", label: "ALL" },
                { value: "5", label: "05" },
                { value: "10", label: "10" },
                { value: "20", label: "20" },
              ]}
              onChange={(val) => {
                setWordCountLimit(val);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              buttonClassName="text-muted-foreground font-mono font-bold text-[10px] uppercase tracking-widest text-center"
              optionClassName="font-mono text-sm tracking-widest text-center"
            />
          </div>

          {/* Shuffle Toggle */}
          <button
            onClick={() => {
              setIsShuffled(!isShuffled);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`flex items-center justify-center p-3 transition-colors duration-500 border-b shrink-0 ${isShuffled ? 'border-primary text-primary' : 'border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/50'}`}
            title="Trộn ngẫu nhiên (Shuffle)"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side: View Toggles */}
        <div className="flex items-center gap-8 w-full lg:w-auto shrink-0 border-t border-white/5 lg:border-t-0 pt-6 lg:pt-0">
          <div className="flex gap-6 items-center">
            <button 
              onClick={() => setViewType('flashcard')}
              className={`pb-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-500 border-b-2 ${viewType === 'flashcard' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground'}`}
            >
              Card
            </button>
            <button 
              onClick={() => setViewType('list')}
              className={`pb-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-500 border-b-2 ${viewType === 'list' ? 'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground'}`}
            >
              List
            </button>
          </div>

          {viewType === 'flashcard' && (
            <button
              onClick={() => {
                setMode(mode === 'jp2vn' ? 'vn2jp' : 'jp2vn');
                setIsFlipped(false);
              }}
              className="flex items-center gap-2 pb-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground border-b-2 border-transparent hover:border-primary/50 hover:text-foreground transition-colors duration-500 ml-2"
            >
              <RefreshCcw className="w-3 h-3" />
              {mode === 'jp2vn' ? 'JP/VN' : 'VN/JP'}
            </button>
          )}
        </div>
      </div>

      {/* Flashcard View */}
      {sessionVocabList.length > 0 && viewType === 'flashcard' && currentVocab && (
        <div className="w-full max-w-3xl mx-auto perspective-2000 px-4 md:px-0">
          
          <motion.div 
            className="relative w-full max-w-[420px] md:max-w-[500px] h-[400px] mx-auto cursor-pointer preserve-3d group"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of Card (Obelisk) */}
            <div className="absolute inset-0 backface-hidden flex flex-col bg-surface/40 backdrop-blur-md shadow-ambient border border-white/5 transition-all duration-700 hover:border-primary/30">
              <div className="h-full flex flex-col p-8 relative overflow-hidden">
                
                {/* Red edge accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex justify-between items-center pb-4 mb-8 border-b border-white/5">
                  <span className="font-mono font-bold text-muted-foreground tracking-[0.2em] text-[10px] uppercase">
                    Vocab {isShuffled && "/ Shuffled"}
                  </span>
                  <span className="w-1.5 h-1.5 bg-primary/80" />
                </div>

                <div className="flex-1 flex flex-col items-center justify-center relative z-10">
                  <h2 className="text-5xl md:text-6xl font-serifjp font-black text-foreground tracking-tight leading-tight w-full text-center">
                    {mode === 'jp2vn' ? displayJp : currentVocab.vn}
                  </h2>
                </div>

                <div className="mt-auto pt-6 flex flex-col items-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  {mode === 'jp2vn' && currentVocab.kana && (
                    <h3 className="text-2xl md:text-3xl font-serifjp text-muted-foreground tracking-widest text-center mb-4">
                      {currentVocab.kana}
                    </h3>
                  )}
                  <div className="w-12 h-[1px] bg-white/10 mb-4" />
                  <p className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">
                    Tap to flip
                  </p>
                </div>
              </div>
            </div>

            {/* Back of Card */}
            <div 
              className="absolute inset-0 backface-hidden flex flex-col bg-surface/80 backdrop-blur-md shadow-ambient-strong border border-primary/20 transition-all duration-700"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="h-full flex flex-col p-8 relative overflow-hidden">
                
                {/* Red edge accent */}
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />

                <div className="flex justify-between items-center pb-4 mb-8 border-b border-primary/10">
                  <span className="font-mono font-bold text-primary/80 tracking-[0.2em] text-[10px] uppercase">Meaning</span>
                  <span className="px-2 py-0.5 bg-primary/5 text-primary text-[9px] border border-primary/20 font-mono uppercase tracking-widest">
                    {currentVocab.type || "Vocab"}
                  </span>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center relative z-10 gap-8">
                  <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground tracking-tight text-center leading-snug">
                    {mode === 'jp2vn' ? currentVocab.vn : displayJp}
                  </h2>
                  
                  {currentVocab.romaji && (
                    <div className="text-accent/80 font-mono text-sm uppercase tracking-[0.3em]">
                      {currentVocab.romaji}
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-6 flex justify-center opacity-60">
                   <p className="text-[10px] text-primary/60 font-mono tracking-widest uppercase">
                    Tap to flip
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-12 mt-16 px-4 md:px-0">
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className={`p-2 transition-colors duration-500 ${currentIndex === 0 ? 'text-white/10 cursor-not-allowed' : 'text-muted-foreground hover:text-primary'}`}
            >
              <ArrowLeft className="w-8 h-8 stroke-[1]" />
            </button>
            
            <div className="text-foreground font-mono text-sm tracking-[0.3em]">
              {String(currentIndex + 1).padStart(2, '0')} <span className="text-primary/50 mx-3">/</span> {String(sessionVocabList.length).padStart(2, '0')}
            </div>
            
            <button 
              onClick={handleNext} 
              disabled={currentIndex === sessionVocabList.length - 1}
              className={`p-2 transition-colors duration-500 ${currentIndex === sessionVocabList.length - 1 ? 'text-white/10 cursor-not-allowed' : 'text-muted-foreground hover:text-primary'}`}
            >
              <ArrowRight className="w-8 h-8 stroke-[1]" />
            </button>
          </div>
        </div>
      )}

      {/* List View - Minimalist */}
      {sessionVocabList.length > 0 && viewType === 'list' && (
        <div className="w-full max-w-4xl grid gap-0 pb-20">
          {sessionVocabList.map((vocab, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/5 hover:border-primary/30 transition-colors duration-500 group px-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-serifjp font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                    {vocab.jp.split(/\(|（/)[0].trim()}
                  </span>
                  <span className="text-muted-foreground/60 font-mono text-xs tracking-[0.2em] uppercase">
                    {vocab.romaji}
                  </span>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right flex flex-col md:items-end">
                  <span className="text-base font-medium text-foreground/90 block mb-2 group-hover:text-foreground transition-colors">
                    {vocab.vn}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-accent/70 font-mono">
                    {vocab.type || 'Vocab'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
