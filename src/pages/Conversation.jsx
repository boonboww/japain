import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { lessons } from '../data/lessons';
import { MessageCircle } from 'lucide-react';

const getAvatar = (name) => {
  const n = name.toLowerCase();
  if (n.includes('itachi')) return '/itachi_icon.png';
  if (n.includes('kisame')) return '/kisame_icon.png';
  if (n.includes('deidara')) return '/deidara_icon.png';
  if (n.includes('sasori')) return '/sasori_icon.png';
  if (n.includes('hidan')) return '/hidan_icon.png';
  if (n.includes('kakuzu')) return '/kakuzu_icon.png';
  if (n.includes('pain') || n.includes('leader')) return '/cute_pain_logo.png';
  return '/akatsuki_cloud.png';
};

export default function Conversation() {
  const conversationLessons = lessons.filter(l => l.conversation && l.conversation.length > 0);
  const [selectedLesson, setSelectedLesson] = useState(conversationLessons[0]?.id);
  const currentLessonData = useMemo(() => lessons.find(l => l.id === selectedLesson), [selectedLesson]);
  const conversationList = currentLessonData?.conversation || [];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto min-h-[70vh]">
      
      
      <div className="w-full flex justify-center mb-12">
        <div className="relative w-full md:max-w-md">
          <select 
            className="w-full appearance-none bg-white hover:bg-slate-50 transition-colors border-2 border-slate-200 rounded-2xl px-6 py-4 text-slate-900 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-red-400 custom-select-arrow cursor-pointer shadow-sm text-ellipsis overflow-hidden"
            value={selectedLesson} 
            onChange={(e) => setSelectedLesson(Number(e.target.value))}
          >
            {conversationLessons.map(l => (
              <option key={l.id} value={l.id} className="font-semibold text-slate-900 bg-white">
                {l.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <motion.div 
        className="w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border-2 border-slate-200 mb-20" 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {conversationList.length > 0 ? (
          <div className="flex flex-col gap-10">
            {conversationList.map((c, index) => (
              <motion.div 
                key={index} 
                className={`flex gap-4 md:gap-6 ${index < conversationList.length - 1 ? 'mb-4' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full border-2 border-slate-200 overflow-hidden bg-white shadow-sm flex items-center justify-center p-1 relative z-10">
                  <img src={getAvatar(c.speaker)} alt={c.speaker} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col bg-slate-50 rounded-2xl rounded-tl-none border border-slate-200 p-5 shadow-sm relative w-full group hover:border-red-200 transition-colors">
                  <div className="absolute inset-0 opacity-[0.02] bg-[url('/akatsuki_cloud.png')] bg-no-repeat bg-center bg-[length:60%] mix-blend-multiply pointer-events-none group-hover:scale-105 transition-transform duration-500" />
                  <span className="font-bold text-sm text-red-600 tracking-widest uppercase mb-2 relative z-10">{c.speaker}</span>
                  <p className="text-2xl md:text-3xl font-display text-slate-900 font-extrabold mb-1 relative z-10">{c.text_jp}</p>
                  <p className="text-slate-500 font-mono text-sm md:text-base font-medium mb-4 relative z-10">{c.romaji}</p>
                  <p className="text-slate-600 text-base md:text-lg font-medium border-t border-slate-200 pt-4 relative z-10">{c.text_vn}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 text-lg font-medium">
            Không có dữ liệu hội thoại cho bài này.
          </div>
        )}
      </motion.div>
    </div>
  );
}
