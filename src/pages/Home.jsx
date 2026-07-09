import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, BookType, MessageCircle, Clock, Code, Palette, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      
      {/* Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        
        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/vocab" className="block h-full group">
            <div className="h-full border border-violet-100 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(124,58,237,0.12)] hover:border-violet-300 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Từ vựng</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Thuộc làu làu! Lật thẻ là nhớ ngay.</p>
              </div>
              <div className="relative z-10 flex items-center text-sm font-bold text-violet-500 group-hover:text-violet-700 mt-auto pt-6">
                Vô học <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/grammar" className="block h-full group">
            <div className="h-full border border-violet-100 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(124,58,237,0.12)] hover:border-violet-300 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                  <BookType size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Ngữ pháp</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Dễ hiểu cực! Ngữ pháp dễ như ăn kẹo.</p>
              </div>
              <div className="relative z-10 flex items-center text-sm font-bold text-violet-500 group-hover:text-violet-700 mt-auto pt-6">
                Vô học <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/conversation" className="block h-full group">
            <div className="h-full border border-violet-100 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(124,58,237,0.12)] hover:border-violet-300 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Hội thoại</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Bắn tiếng Nhật! Tự tin chém gió thả ga.</p>
              </div>
              <div className="relative z-10 flex items-center text-sm font-bold text-violet-500 group-hover:text-violet-700 mt-auto pt-6">
                Vô học <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/numbers" className="block h-full group">
            <div className="h-full border border-violet-100 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(124,58,237,0.12)] hover:border-violet-300 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-violet-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                  <Clock size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Số đếm</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Đếm không vấp! Số, ngày tháng dễ ẹc.</p>
              </div>
              <div className="relative z-10 flex items-center text-sm font-bold text-violet-500 group-hover:text-violet-700 mt-auto pt-6">
                Vô học <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/vocab" state={{ selectedId: 6 }} className="block h-full group">
            <div className="h-full border border-violet-200 bg-violet-50/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(124,58,237,0.12)] hover:border-violet-400 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-violet-700 group-hover:scale-110 group-hover:rotate-3 shadow-md">
                  <Code size={28} />
                </div>
                <h3 className="text-2xl font-bold text-violet-800 tracking-tight">Từ vựng IT</h3>
                <p className="text-base mt-2 text-violet-600/80 font-medium leading-relaxed">Code Nhật Bản! Bộ từ vựng cho Dev.</p>
              </div>
              <div className="relative z-10 flex items-center text-sm font-bold text-violet-600 group-hover:text-violet-800 mt-auto pt-6">
                Vô học <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/anime" className="block h-full group">
            <div className="h-full border border-rose-200 bg-rose-50/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(225,29,72,0.12)] hover:border-rose-300 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-rose-700 group-hover:scale-110 group-hover:-rotate-3 shadow-md">
                  <Palette size={28} />
                </div>
                <h3 className="text-2xl font-bold text-rose-900 tracking-tight">Tên Anime</h3>
                <p className="text-base mt-2 text-rose-600/80 font-medium leading-relaxed">Wibu chúa! Ý nghĩa đằng sau các Ninja.</p>
              </div>
              <div className="relative z-10 flex items-center text-sm font-bold text-rose-600 group-hover:text-rose-800 mt-auto pt-6">
                Vô học <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </motion.div>

      </motion.div>

    </div>
  );
}
