import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { lessons } from '../data/lessons';
import { ArrowLeft, ArrowRight, RefreshCcw, Layers, List } from 'lucide-react';

export default function Vocab() {
  const location = useLocation();
  const initialLesson = location.state?.selectedId || lessons[0].id;

  const [selectedLesson, setSelectedLesson] = useState(initialLesson);
  const [mode, setMode] = useState('jp2vn');
  const [viewType, setViewType] = useState('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentLessonData = useMemo(() => lessons.find(l => l.id === selectedLesson), [selectedLesson]);
  const vocabList = currentLessonData?.vocabulary || [];
  
  useEffect(() => {
    if (location.state?.selectedId) {
      setSelectedLesson(location.state.selectedId);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [location.state]);

  const currentVocab = vocabList[currentIndex];

  const handleNext = () => {
    if (currentIndex < vocabList.length - 1) {
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
      

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 md:p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-violet-100">
        
        <div className="relative w-full md:max-w-xs lg:max-w-md">
          <select 
            className="w-full appearance-none bg-violet-50 hover:bg-violet-100 transition-colors border-2 border-violet-100 rounded-2xl px-5 py-3 text-violet-900 font-bold text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-violet-200 focus:border-violet-400 custom-select-arrow cursor-pointer shadow-sm text-ellipsis overflow-hidden"
            value={selectedLesson}
            onChange={(e) => {
              setSelectedLesson(Number(e.target.value));
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
          >
            {lessons.map(lesson => (
              <option key={lesson.id} value={lesson.id} className="font-semibold text-slate-900 bg-white">
                {lesson.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewType('flashcard')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${viewType === 'flashcard' ? 'bg-white text-violet-600 shadow-md border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <Layers className="w-4 h-4" />
              Flashcard
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewType('list')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${viewType === 'list' ? 'bg-white text-violet-600 shadow-md border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <List className="w-4 h-4" />
              Danh sách
            </motion.button>
          </div>

          {viewType === 'flashcard' && (
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMode(mode === 'jp2vn' ? 'vn2jp' : 'jp2vn');
                setIsFlipped(false);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-sm bg-violet-50 text-violet-600 border-2 border-violet-200 hover:bg-violet-100 hover:border-violet-300 transition-colors shadow-sm"
            >
              <RefreshCcw className="w-4 h-4" />
              {mode === 'jp2vn' ? 'JP → VN' : 'VN → JP'}
            </motion.button>
          )}
        </div>
      </div>

      {vocabList.length > 0 && viewType === 'flashcard' && currentVocab && (
        <div className="w-full max-w-xl mx-auto perspective-2000">
          
          <motion.div 
            className="relative w-full h-[300px] md:h-[350px] cursor-pointer preserve-3d"
            whileHover={!isFlipped ? { rotateX: 5, rotateY: -5, scale: 1.02 } : { scale: 1.02 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front */}
            <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgb(124,58,237,0.12)] border-2 border-violet-100 p-8 text-center transition-all">
              <h2 className="text-6xl md:text-8xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
                {mode === 'jp2vn' ? currentVocab.jp : currentVocab.vn}
              </h2>
              <div className="absolute bottom-8 text-violet-600 text-sm md:text-base flex items-center gap-2 font-bold bg-violet-50 px-6 py-2.5 rounded-full border border-violet-100">
                <RefreshCcw className="w-4 h-4" /> Nhấp để lật thẻ
              </div>
            </div>

            {/* Back */}
            <div 
              className="absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-600 rounded-[2.5rem] shadow-[0_20px_60px_rgb(124,58,237,0.25)] border-2 border-violet-400 p-8 text-center"
              style={{ transform: "rotateY(180deg)" }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
                {mode === 'jp2vn' ? currentVocab.vn : currentVocab.jp}
              </h2>
              {currentVocab.romaji && (
                <p className="text-2xl md:text-3xl text-violet-100 mb-6 font-mono font-medium">{currentVocab.romaji}</p>
              )}
              {currentVocab.type && (
                <span className="px-5 py-2 bg-white/20 text-white backdrop-blur-md text-sm rounded-full border border-white/30 font-bold mt-4 shadow-sm">
                  {currentVocab.type}
                </span>
              )}
            </div>
          </motion.div>

          <div className="flex items-center justify-between mt-12 px-4 md:px-0">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className={`flex items-center justify-center gap-2 px-6 md:px-8 py-4 rounded-2xl font-bold text-lg transition-all ${currentIndex === 0 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 shadow-sm'}`}
            >
              <ArrowLeft className="w-5 h-5" /> <span className="hidden md:inline">Trước</span>
            </motion.button>
            
            <div className="text-slate-900 font-extrabold font-mono text-xl md:text-2xl bg-white px-8 py-3.5 rounded-2xl shadow-sm border border-slate-100">
              {currentIndex + 1} <span className="text-slate-400">/ {vocabList.length}</span>
            </div>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={handleNext} 
              disabled={currentIndex === vocabList.length - 1}
              className={`flex items-center justify-center gap-2 px-6 md:px-8 py-4 rounded-2xl font-bold text-lg transition-all ${currentIndex === vocabList.length - 1 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-violet-600 text-white shadow-[0_8px_25px_rgb(124,58,237,0.3)] hover:bg-violet-700 hover:shadow-[0_8px_30px_rgb(124,58,237,0.4)]'}`}
            >
              <span className="hidden md:inline">Tiếp</span> <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      )}

      {vocabList.length > 0 && viewType === 'list' && (
        <div className="w-full max-w-4xl grid gap-4 pb-20">
          {vocabList.map((vocab, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all group">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-extrabold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors">{vocab.jp}</span>
                  <span className="text-slate-500 font-mono text-sm font-medium">{vocab.romaji}</span>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <span className="text-xl font-bold text-slate-800 block mb-2">{vocab.vn}</span>
                  <span className="text-xs px-3 py-1.5 bg-violet-50 text-violet-700 rounded-lg border border-violet-100 inline-block font-bold">
                    {vocab.type || 'Từ vựng'}
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
