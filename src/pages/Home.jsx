import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, BookType, MessageCircle, Clock, Code, Palette, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CloudButton } from '@/components/ui/CloudButton';

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
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto relative z-10">
      
      {/* Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        
        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/vocab" className="block h-full group">
            <div className="h-full border border-slate-200 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(225,29,72,0.12)] hover:border-red-600 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-slate-200 group-hover:border-red-600">
                  <img src="/itachi_icon.png" alt="Itachi" className="w-10 h-10 object-cover rounded-xl mix-blend-multiply group-hover:mix-blend-normal bg-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Từ vựng</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Thuộc làu làu! Lật thẻ là nhớ ngay.</p>
              </div>
              <div className="relative z-10 flex items-center justify-end mt-auto pt-6 w-full pointer-events-none">
                <CloudButton color="text-slate-200 group-hover:text-red-600">Vô học</CloudButton>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/grammar" className="block h-full group">
            <div className="h-full border border-slate-200 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(225,29,72,0.12)] hover:border-red-600 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-slate-200 group-hover:border-red-600">
                  <img src="/kisame_icon.png" alt="Kisame" className="w-10 h-10 object-cover rounded-xl mix-blend-multiply group-hover:mix-blend-normal bg-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Ngữ pháp</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Dễ hiểu cực! Ngữ pháp dễ như ăn kẹo.</p>
              </div>
              <div className="relative z-10 flex items-center justify-end mt-auto pt-6 w-full pointer-events-none">
                <CloudButton color="text-slate-200 group-hover:text-red-600">Vô học</CloudButton>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/conversation" className="block h-full group">
            <div className="h-full border border-slate-200 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(225,29,72,0.12)] hover:border-red-600 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-slate-200 group-hover:border-red-600">
                  <img src="/deidara_icon.png" alt="Deidara" className="w-10 h-10 object-cover rounded-xl mix-blend-multiply group-hover:mix-blend-normal bg-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Hội thoại</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Bắn tiếng Nhật! Tự tin chém gió thả ga.</p>
              </div>
              <div className="relative z-10 flex items-center justify-end mt-auto pt-6 w-full pointer-events-none">
                <CloudButton color="text-slate-200 group-hover:text-red-600">Vô học</CloudButton>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/numbers" className="block h-full group">
            <div className="h-full border border-slate-200 bg-white rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(225,29,72,0.12)] hover:border-red-600 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-slate-200 group-hover:border-red-600">
                  <img src="/sasori_icon.png" alt="Sasori" className="w-10 h-10 object-cover rounded-xl mix-blend-multiply group-hover:mix-blend-normal bg-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Số đếm</h3>
                <p className="text-base mt-2 text-slate-500 font-medium leading-relaxed">Đếm không vấp! Số, ngày tháng dễ ẹc.</p>
              </div>
              <div className="relative z-10 flex items-center justify-end mt-auto pt-6 w-full pointer-events-none">
                <CloudButton color="text-slate-200 group-hover:text-red-600">Vô học</CloudButton>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Special Dark Card for IT Vocab */}
        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/vocab" state={{ selectedId: 6 }} className="block h-full group">
            <div className="h-full border-2 border-slate-900 bg-slate-900 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(15,23,42,0.3)] hover:border-slate-800 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 text-red-500 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-md border border-slate-700">
                  <img src="/kakuzu_icon.png" alt="Kakuzu" className="w-10 h-10 object-cover rounded-xl bg-white" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Từ vựng IT</h3>
                <p className="text-base mt-2 text-slate-300 font-medium leading-relaxed">Code Nhật Bản! Bộ từ vựng cho Dev.</p>
              </div>
              <div className="relative z-10 flex items-center justify-end mt-auto pt-6 w-full pointer-events-none">
                <CloudButton color="text-slate-700 group-hover:text-red-500">Vô học</CloudButton>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Special Red Card for Anime */}
        <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
          <Link to="/anime" className="block h-full group">
            <div className="h-full border-2 border-red-600 bg-red-600 rounded-3xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(225,29,72,0.3)] hover:border-red-500 cursor-pointer overflow-hidden relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white text-red-600 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 shadow-md">
                  <img src="/hidan_icon.png" alt="Hidan" className="w-10 h-10 object-cover rounded-xl mix-blend-multiply group-hover:mix-blend-normal bg-white" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Tên Anime</h3>
                <p className="text-base mt-2 text-red-100 font-medium leading-relaxed">Wibu chúa! Ý nghĩa đằng sau các Ninja.</p>
              </div>
              <div className="relative z-10 flex items-center justify-end mt-auto pt-6 w-full pointer-events-none">
                <CloudButton color="text-red-400 group-hover:text-white" className="text-red-600 group-hover:text-red-600">Vô học</CloudButton>
              </div>
            </div>
          </Link>
        </motion.div>

      </motion.div>

    </div>
  );
}
