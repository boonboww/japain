import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { lessons } from '../data/lessons';
import { ArrowLeft, ArrowRight, RefreshCcw, Layers, List } from 'lucide-react';
import { CloudButton } from '@/components/ui/CloudButton';

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
  const displayJp = currentVocab?.jp ? currentVocab.jp.split(/\(|（/)[0].trim() : '';

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
      

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-white p-4 md:p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
        
        <div className="relative w-full md:max-w-xs lg:max-w-md">
          <select 
            className="w-full appearance-none bg-slate-50 hover:bg-slate-100 transition-colors border-2 border-slate-200 rounded-2xl px-5 py-3 text-slate-900 font-bold text-base md:text-lg focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 custom-select-arrow cursor-pointer shadow-sm text-ellipsis overflow-hidden"
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
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${viewType === 'flashcard' ? 'bg-white text-red-600 shadow-md border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <Layers className="w-4 h-4" />
              Flashcard
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewType('list')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${viewType === 'list' ? 'bg-white text-red-600 shadow-md border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <List className="w-4 h-4" />
              Danh sách
            </motion.button>
          </div>

          {viewType === 'flashcard' && (
            <CloudButton
              onClick={() => {
                setMode(mode === 'jp2vn' ? 'vn2jp' : 'jp2vn');
                setIsFlipped(false);
              }}
            >
              <RefreshCcw className="w-4 h-4" />
              {mode === 'jp2vn' ? 'JP → VN' : 'VN → JP'}
            </CloudButton>
          )}
        </div>
      </div>

      {vocabList.length > 0 && viewType === 'flashcard' && currentVocab && (
        <div className="w-full max-w-3xl mx-auto perspective-2000 px-4 md:px-0">
          
          <motion.div 
            className="relative w-full max-w-[380px] md:max-w-[420px] h-[380px] md:h-[440px] mx-auto cursor-pointer preserve-3d"
            whileHover={!isFlipped ? { rotateX: 5, rotateY: -5, scale: 1.02 } : { scale: 1.02 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of Trading Card */}
            <div className="absolute inset-0 backface-hidden flex flex-col bg-[#e2e8f0] rounded-[1.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-300 p-2.5 transition-all">
              <div className="bg-white rounded-[1rem] border-2 border-slate-300 h-full flex flex-col p-4 relative overflow-hidden">
                
                {/* Header Nameplate */}
                <div className="flex justify-between items-center border-b-2 border-slate-200 pb-2 mb-3">
                  <span className="font-extrabold text-slate-800 tracking-wider text-sm uppercase">NINJA CARD</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Main Image/Text Area */}
                <div className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden shadow-inner mb-3 group">
                  <div className="absolute inset-0 opacity-[0.02] bg-[url('/akatsuki_cloud.png')] bg-no-repeat bg-center bg-[length:80%] mix-blend-multiply pointer-events-none" />
                  <h2 
                    className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight leading-tight w-full text-center relative z-10"
                    style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
                  >
                    {mode === 'jp2vn' ? displayJp : currentVocab.vn}
                  </h2>
                </div>

                {/* Description Area */}
                <div className="bg-slate-100 border border-slate-200 rounded-lg p-3 flex flex-col items-center justify-center min-h-[80px]">
                  {mode === 'jp2vn' && currentVocab.kana && (
                    <h3 className="text-xl font-bold text-slate-600 tracking-wide text-center mb-1">
                      {currentVocab.kana}
                    </h3>
                  )}
                  <p className="text-xs text-slate-400 font-semibold italic flex items-center gap-1 mt-auto pt-2 border-t border-slate-200/50 w-full justify-center">
                    <RefreshCcw className="w-3 h-3" /> Nhấp để lật bài
                  </p>
                </div>

              </div>
            </div>

            {/* Back of Trading Card */}
            <div 
              className="absolute inset-0 backface-hidden flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 rounded-[1.5rem] shadow-[0_20px_50px_rgba(225,29,72,0.25)] border border-slate-700 p-2.5 transition-all"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="bg-black/90 rounded-[1rem] border-2 border-red-900/50 h-full flex flex-col p-4 relative overflow-hidden group">
                
                {/* Single Centered Cloud Background */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('/akatsuki_cloud.png')] bg-no-repeat bg-center bg-[length:80%] pointer-events-none mix-blend-screen invert" />
                
                {/* Header Nameplate */}
                <div className="flex justify-between items-center border-b-2 border-red-900/30 pb-2 mb-3 relative z-10">
                  <span className="font-extrabold text-red-500 tracking-wider text-sm uppercase">NGHĨA TIẾNG VIỆT</span>
                  <span className="px-3 py-1 bg-red-900/40 text-red-400 text-[10px] rounded border border-red-800/50 font-bold tracking-wide">
                    {currentVocab.type || "TỪ VỰNG"}
                  </span>
                </div>

                {/* Main Text Area */}
                <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
                  <h2 
                    className="text-4xl md:text-5xl font-display font-black text-red-500 mb-4 tracking-tight drop-shadow-md leading-tight w-full text-center"
                    style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
                  >
                    {mode === 'jp2vn' ? currentVocab.vn : displayJp}
                  </h2>
                  {currentVocab.romaji && (
                    <p className="text-lg md:text-xl text-slate-300 font-mono font-medium text-center uppercase tracking-widest bg-black/50 px-4 py-2 rounded-lg border border-slate-800">
                      {currentVocab.romaji}
                    </p>
                  )}
                </div>

                {/* Footer Area */}
                <div className="mt-auto flex justify-center pb-1 relative z-10">
                   <p className="text-xs text-slate-500 font-semibold italic flex items-center gap-1">
                    <RefreshCcw className="w-3 h-3" /> Nhấp để úp bài
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-between mt-12 px-4 md:px-0">
            <CloudButton 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className="!px-0 !min-w-[80px]"
            >
              <ArrowLeft className="w-7 h-7 stroke-[2.5]" />
            </CloudButton>
            
            <div className="text-slate-900 font-extrabold font-mono text-xl md:text-2xl bg-white px-8 py-3.5 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 z-10 relative">
              {currentIndex + 1} <span className="text-slate-400">/ {vocabList.length}</span>
            </div>
            
            <CloudButton 
              onClick={handleNext} 
              disabled={currentIndex === vocabList.length - 1}
              className="!px-0 !min-w-[80px]"
            >
              <ArrowRight className="w-7 h-7 stroke-[2.5]" />
            </CloudButton>
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
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all group">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-extrabold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">{vocab.jp.split(/\(|（/)[0].trim()}</span>
                  <span className="text-slate-500 font-mono text-sm font-medium">{vocab.romaji}</span>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <span className="text-xl font-bold text-slate-800 block mb-2">{vocab.vn}</span>
                  <span className="text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg border border-slate-200 inline-block font-bold">
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
