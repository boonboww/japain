import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { lessons } from '../data/lessons';
import { MessageCircle } from 'lucide-react';

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
            className="w-full appearance-none bg-white hover:bg-violet-50 transition-colors border-2 border-violet-100 rounded-2xl px-6 py-4 text-violet-900 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-violet-200 focus:border-violet-400 custom-select-arrow cursor-pointer shadow-sm text-ellipsis overflow-hidden"
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
        className="w-full bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(124,58,237,0.06)] border border-violet-100 mb-20" 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {conversationList.length > 0 ? (
          <div className="flex flex-col gap-10">
            {conversationList.map((c, index) => (
              <motion.div 
                key={index} 
                className={`flex flex-col gap-3 ${index < conversationList.length - 1 ? 'border-b border-slate-100 pb-10' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-violet-500' : 'bg-rose-400'}`}></div>
                  <span className="font-bold text-sm text-slate-400 tracking-widest uppercase">{c.speaker}</span>
                </div>
                <p className="text-2xl md:text-3xl font-display text-slate-900 font-extrabold">{c.text_jp}</p>
                <p className="text-violet-600/80 font-mono text-base md:text-lg font-medium">{c.romaji}</p>
                <p className="text-slate-600 text-lg md:text-xl font-medium mt-2">{c.text_vn}</p>
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
