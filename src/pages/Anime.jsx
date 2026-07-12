import { motion } from 'framer-motion';
import { narutoCharacters } from '../data/anime';
import { FuriganaText } from '../components/ui/FuriganaText';
export default function Anime() {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto min-h-[70vh]">
      
      <div className="w-full flex flex-col gap-16 pb-32 mt-10">
        {narutoCharacters.map((char, index) => (
          <motion.div 
            key={index} 
            className="group relative px-6 md:px-12 py-12 transition-all duration-700 hover:bg-surface/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Background Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-primary/30 transition-colors duration-700" />
            
            <div className="flex flex-col border-b border-white/5 pb-8 mb-10 text-left relative">
              <h2 className="text-6xl md:text-8xl font-serifjp font-bold text-foreground mb-4 tracking-tight leading-none group-hover:text-primary transition-colors duration-700">
                <FuriganaText text={char.name_kanji} />
              </h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground/60 font-mono tracking-[0.4em] uppercase">{char.name_romaji}</h3>
            </div>
            
            <div className="flex flex-col gap-8 mb-12 pl-0 md:pl-8">
              <h4 className="text-primary/60 text-xs uppercase tracking-[0.3em] font-mono font-bold">Phân tích ý nghĩa</h4>
              <div className="flex flex-col gap-6">
                {char.explanation.map((item, i) => (
                  <div key={i} className="relative flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-surface/30 backdrop-blur-sm border border-white/5 items-start hover:border-primary/20 transition-all duration-500 shadow-ambient">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20" />
                    <div className="text-3xl font-bold font-serifjp text-primary min-w-[150px] md:min-w-[220px] shrink-0 tracking-widest break-words">
                      <FuriganaText text={item.kanji} />
                    </div>
                    <div className="text-foreground/80 text-base md:text-lg leading-relaxed font-medium">
                      {item.meaning}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative pl-8 md:pl-16 py-6 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-primary/30" />
              <p className="text-lg md:text-xl text-foreground font-serifjp leading-loose italic">
                "{char.summary}"
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
