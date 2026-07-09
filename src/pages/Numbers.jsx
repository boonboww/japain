import { useState } from 'react';
import { motion } from 'framer-motion';
import { numbersAndDates } from '../data/numbers';
import { Clock } from 'lucide-react';

export default function Numbers() {
  const [activeTab, setActiveTab] = useState('numbers');

  const tabs = [
    { id: 'numbers', label: 'Số đếm' },
    { id: 'months', label: 'Tháng' },
    { id: 'daysOfMonth', label: 'Ngày trong tháng' },
    { id: 'daysOfWeek', label: 'Thứ trong tuần' },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto min-h-[70vh]">
      
      
      <div className="w-full flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl border border-violet-100 shadow-[0_8px_30px_rgb(124,58,237,0.04)] justify-center">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`px-5 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${activeTab === tab.id ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:text-violet-600 hover:bg-violet-50'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-20">
        {numbersAndDates[activeTab].map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(124,58,237,0.1)] border border-violet-100 hover:border-violet-300 transition-all flex flex-col justify-between" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div>
              {item.num && <div className="text-violet-600 bg-violet-50 px-3 py-1 rounded-lg w-fit text-sm font-bold mb-4">{item.num}</div>}
              <h2 className="text-4xl font-display text-slate-900 font-extrabold mb-3">{item.jp}</h2>
              <p className="text-slate-400 font-medium text-lg mb-1">{item.kana}</p>
              <p className="text-violet-600/80 font-mono text-sm font-medium mb-6">{item.romaji}</p>
            </div>
            <div className="text-slate-800 text-lg font-bold border-t border-slate-100 pt-5">
              {item.vn}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
