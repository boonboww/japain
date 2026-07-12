import { motion } from 'framer-motion';
import { narutoCharacters } from '../data/anime';
import { Palette } from 'lucide-react';

export default function Anime() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto min-h-[70vh]">
      

      <div className="w-full flex flex-col gap-8 pb-20">
        {narutoCharacters.map((char, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border-2 border-slate-200 hover:border-red-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            
            <div className="flex flex-col border-b border-slate-100 pb-6 mb-8 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 mb-2">{char.name_kanji}</h2>
              <h3 className="text-xl text-red-600 font-bold tracking-wide">{char.name_romaji}</h3>
            </div>
            
            <div className="flex flex-col gap-5 mb-8">
              <h4 className="text-slate-400 text-sm uppercase tracking-widest font-bold">Phân tích ý nghĩa</h4>
              <div className="flex flex-col gap-4">
                {char.explanation.map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-6 p-5 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                    <div className="text-2xl font-bold text-red-600 min-w-[140px]">
                      {item.kanji}
                    </div>
                    <div className="text-slate-700 text-base leading-relaxed font-medium">
                      {item.meaning}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl">
              <p className="text-base text-red-900 italic font-medium leading-relaxed">"{char.summary}"</p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
