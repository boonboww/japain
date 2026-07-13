import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomeView from "./pages/Home";
import VocabView from "./pages/Vocab";
import GrammarView from "./pages/Grammar";
import ConversationView from "./pages/Conversation";
import NumbersView from "./pages/Numbers";
import AnimeView from "./pages/Anime";
import PracticeView from "./pages/Practice";
import { AppHeader } from "@/components/layout/AppHeader";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomeView />} />
          <Route path="/vocab" element={<VocabView />} />
          <Route path="/grammar" element={<GrammarView />} />
          <Route path="/conversation" element={<ConversationView />} />
          <Route path="/numbers" element={<NumbersView />} />
          <Route path="/anime" element={<AnimeView />} />
          <Route path="/practice" element={<PracticeView />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col font-sans relative overflow-hidden text-foreground">
        {/* Subtle Paper Noise Texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none z-0" />

        {/* Subtle Akatsuki dark theme background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[50vh] bg-primary/5 blur-[150px] rounded-[100%] pointer-events-none z-0 mix-blend-screen" />
        
        <AppHeader />
        
        <main className="flex-1 w-full container mx-auto px-4 md:px-8 pt-32 pb-16 relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
