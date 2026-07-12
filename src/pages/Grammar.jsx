import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { lessons } from '../data/lessons';
import { BookType } from 'lucide-react';

export default function Grammar() {
  const grammarLessons = lessons.filter(l => l.grammar && l.grammar.length > 0);
  const [selectedLesson, setSelectedLesson] = useState(grammarLessons[0]?.id);
  const currentLessonData = useMemo(() => lessons.find(l => l.id === selectedLesson), [selectedLesson]);
  const grammarList = currentLessonData?.grammar || [];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto min-h-[70vh]">
      

      <div className="w-full flex justify-center mb-12">
        <div className="relative w-full md:max-w-md">
          <select 
            className="w-full appearance-none bg-white hover:bg-slate-50 transition-colors border-2 border-slate-200 rounded-2xl px-6 py-4 text-slate-900 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 custom-select-arrow cursor-pointer shadow-sm text-ellipsis overflow-hidden"
            value={selectedLesson}
            onChange={(e) => setSelectedLesson(Number(e.target.value))}
          >
            {grammarLessons.map(l => (
              <option key={l.id} value={l.id} className="font-semibold text-slate-900 bg-white">
                {l.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full pb-20">
        {grammarList.map((g, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border-2 border-slate-200 hover:border-slate-900 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-6 flex flex-col md:flex-row md:items-center gap-4 border-b border-slate-100 pb-6">
              <span className="px-4 py-1.5 bg-slate-900 text-white rounded-xl text-sm tracking-wide shadow-sm w-fit border border-slate-800">
                Cấu trúc {index + 1}
              </span>
              <span>{g.title.split(': ')[1] || g.title}</span>
            </h3>
            
            <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl mb-8 flex items-center justify-center">
              <code className="text-xl md:text-2xl font-bold text-red-600 text-center leading-relaxed">
                {g.formula}
              </code>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-slate-400 text-sm uppercase tracking-widest font-bold">Ví dụ minh họa</h4>
              <div className="grid gap-6">
                {g.examples.map((ex, exIdx) => (
                  <div key={exIdx} className="pl-6 border-l-4 border-red-500 py-1">
                    <p className="text-2xl text-slate-900 font-bold mb-2">{ex.jp}</p>
                    <p className="text-slate-500 font-mono text-sm font-medium mb-3">{ex.romaji}</p>
                    <p className="text-slate-600 text-lg font-medium">{ex.vn}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
