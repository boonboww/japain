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
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm justify-center">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`px-5 py-3 rounded-xl font-bold text-sm md:text-base transition-all ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-red-600 hover:bg-slate-50'}`}
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
            className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md border-2 border-slate-200 hover:border-red-200 transition-all flex flex-col justify-between relative overflow-hidden group" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/akatsuki_cloud.png')] bg-no-repeat bg-center bg-[length:60%] mix-blend-multiply pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            <div className="relative z-10">
              {item.num && <div className="text-white bg-red-600 px-3 py-1 rounded-lg w-fit text-sm font-bold mb-4">{item.num}</div>}
              <h2 className="text-4xl font-display text-slate-900 font-extrabold mb-3 group-hover:text-red-600 transition-colors">{item.jp}</h2>
              <p className="text-slate-500 font-medium text-lg mb-1">{item.kana}</p>
              <p className="text-slate-400 font-mono text-sm font-medium mb-6">{item.romaji}</p>
            </div>
            <div className="text-slate-800 text-lg font-bold border-t border-slate-100 pt-5 relative z-10">
              {item.vn}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
