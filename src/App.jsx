import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  Clock,
  BookType,
  Code,
  Palette,
} from "lucide-react";
import HomeView from "./pages/Home";
import VocabView from "./pages/Vocab";
import GrammarView from "./pages/Grammar";
import ConversationView from "./pages/Conversation";
import NumbersView from "./pages/Numbers";
import AnimeView from "./pages/Anime";
import { Button } from "@/components/ui/button";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomeView />} />
          <Route path="/vocab" element={<VocabView />} />
          <Route path="/grammar" element={<GrammarView />} />
          <Route path="/conversation" element={<ConversationView />} />
          <Route path="/numbers" element={<NumbersView />} />
          <Route path="/anime" element={<AnimeView />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8 relative">
        <NavLink
          to="/"
          className="flex items-center gap-3 relative z-10 hover:opacity-80 transition-opacity"
        >
          <motion.img
            src="/cute_pain_logo.png"
            alt="Pain Logo"
            whileHover={{ rotate: 10, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col uppercase font-black text-slate-900 leading-[0.85] tracking-tighter text-lg">
            <span>JA PAIN.</span>
          </div>
        </NavLink>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-1 items-center bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200 z-10">
          <NavLink to="/vocab" className={({ isActive }) => `px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive ? "bg-slate-900 text-white shadow-md border border-slate-900" : "text-slate-600 hover:text-red-600 hover:bg-white/60"}`}>
            Từ vựng
          </NavLink>
          <NavLink to="/grammar" className={({ isActive }) => `px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive ? "bg-slate-900 text-white shadow-md border border-slate-900" : "text-slate-600 hover:text-red-600 hover:bg-white/60"}`}>
            Ngữ pháp
          </NavLink>
          <NavLink to="/conversation" className={({ isActive }) => `px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive ? "bg-slate-900 text-white shadow-md border border-slate-900" : "text-slate-600 hover:text-red-600 hover:bg-white/60"}`}>
            Hội thoại
          </NavLink>
          <NavLink to="/numbers" className={({ isActive }) => `px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isActive ? "bg-slate-900 text-white shadow-md border border-slate-900" : "text-slate-600 hover:text-red-600 hover:bg-white/60"}`}>
            Số đếm
          </NavLink>
        </div>

        <div className="flex items-center gap-2 relative z-10">
          {/* Menu for mobile can go here */}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-hidden">
        {/* Subtle decorative background cloud pattern could go here */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-red-50/50 to-transparent pointer-events-none" />
        <Navbar />
        <main className="flex-1 w-full container mx-auto px-4 md:px-8 pt-28 pb-16 relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
