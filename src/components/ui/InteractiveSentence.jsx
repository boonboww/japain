import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FuriganaText } from './FuriganaText';
import { Check, X, HelpCircle } from 'lucide-react';

export const InteractiveSentence = ({ text, isPracticeMode }) => {
  // Parse text like: "１１時{{まで|grammar|Trợ từ chỉ kết thúc thời gian}}修行{{しました|vocab|Quá khứ của します}}。"
  const regex = /\{\{(.*?)\|(.*?)\|(.*?)\}\}/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let blankIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex, match.index),
      });
    }

    parts.push({
      type: 'blank',
      answer: match[1],
      category: match[2],
      hint: match[3],
      id: `blank-${blankIndex++}`,
    });

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.substring(lastIndex),
    });
  }

  if (!isPracticeMode) {
    return (
      <span className="inline-block leading-loose">
        {parts.map((p, i) => (
          <React.Fragment key={i}>
            {p.type === 'text' ? (
              <FuriganaText text={p.content} />
            ) : (
              <span className={p.category === 'grammar' ? 'text-accent font-bold px-1' : 'text-primary font-bold px-1'}>
                <FuriganaText text={p.answer} />
              </span>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  }

  return (
    <span className="inline-block leading-[3rem]">
      {parts.map((p, i) => {
        if (p.type === 'text') {
          return <FuriganaText key={i} text={p.content} />;
        }
        return <BlankInput key={p.id} answer={p.answer} category={p.category} hint={p.hint} />;
      })}
    </span>
  );
};

const BlankInput = ({ answer, category, hint }) => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('idle'); // idle, correct, incorrect
  const [showHint, setShowHint] = useState(false);

  const handleBlur = () => {
    if (!value) {
      setStatus('idle');
      return;
    }
    
    // Clean answer from furigana for checking
    const rawAnswer = answer.replace(/[\(（][^\)）]+[\)）]/g, ''); // Remove (kana)
    const kanaAnswer = answer.includes('(') || answer.includes('（') 
      ? answer.replace(/[^\(（]+[\(（]([^\)）]+)[\)）]/g, '$1') 
      : answer;
    
    if (value === answer || value === rawAnswer || value === kanaAnswer) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setStatus('idle');
  };

  const getBorderColor = () => {
    if (status === 'correct') return 'border-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.3)] bg-green-500/10 text-green-400';
    if (status === 'incorrect') return 'border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)] bg-red-500/10 text-red-400';
    return category === 'grammar' ? 'border-accent/40 bg-accent/10 focus:border-accent' : 'border-primary/40 bg-primary/10 focus:border-primary';
  };

  return (
    <span className="inline-flex items-center relative mx-1 group align-middle">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`w-24 text-center px-2 py-1 text-base font-medium rounded-md outline-none transition-all duration-300 border ${getBorderColor()}`}
        placeholder={category === 'grammar' ? 'Ngữ pháp' : 'Từ vựng'}
      />
      
      {/* Icon feedback */}
      <span className="absolute -right-6 flex items-center">
        {status === 'correct' && <Check className="w-4 h-4 text-green-500" />}
        {status === 'incorrect' && <X className="w-4 h-4 text-red-500" />}
        {status === 'idle' && (
          <button 
            className="text-muted-foreground hover:text-white transition-colors"
            onClick={() => setShowHint(!showHint)}
            title="Gợi ý"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        )}
      </span>

      {/* Hint Tooltip */}
      {showHint && status === 'idle' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-[200px] bg-surface border border-white/10 p-2 rounded-md shadow-xl z-20 text-xs font-sans text-center"
        >
          <div className="text-muted-foreground mb-1 font-mono text-[10px] uppercase tracking-wider">{category}</div>
          <div>{hint}</div>
        </motion.div>
      )}

      {/* Correct feedback Tooltip */}
      {status === 'correct' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-[200px] bg-green-500/20 border border-green-500/30 p-2 rounded-md shadow-xl z-20 text-xs font-sans text-center text-green-100 backdrop-blur-md"
        >
          {hint}
        </motion.div>
      )}
    </span>
  );
};
