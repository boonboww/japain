export class ExerciseEngine {
  constructor(lessonData) {
    this.lessonData = lessonData;
  }

  // Shuffle array utility
  static shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  // Generate Vocab Survival Questions in 3 rounds
  // Round 1: VN -> JP (easy distractor: same type if possible)
  // Round 2: JP -> VN (smart distractor: same type)
  // Round 3: Kana -> VN (or mixed)
  generateVocabSurvival() {
    if (!this.lessonData || !this.lessonData.vocabulary || this.lessonData.vocabulary.length === 0) return [];
    
    const vocabList = [...this.lessonData.vocabulary];
    ExerciseEngine.shuffle(vocabList);
    
    const questions = [];
    
    vocabList.forEach((target, index) => {
      // Determine round based on index (distribute evenly)
      let mode = index % 3; // 0: VN->JP, 1: JP->VN, 2: Kana->VN
      
      let question, answer, distractorKey;
      if (mode === 0) {
        question = target.vn;
        answer = target.jp || target.kana;
        distractorKey = (v) => v.jp || v.kana;
      } else if (mode === 1) {
        question = target.jp || target.kana;
        answer = target.vn;
        distractorKey = (v) => v.vn;
      } else {
        question = target.kana;
        answer = target.vn;
        distractorKey = (v) => v.vn;
      }

      // Smart distractors: try to find same 'type' (e.g. Danh từ, Động từ)
      let candidates = vocabList.filter(v => v !== target && v.type === target.type);
      if (candidates.length < 3) {
        // Fallback to any other vocab if not enough of same type
        const otherCandidates = vocabList.filter(v => v !== target && v.type !== target.type);
        candidates = [...candidates, ...otherCandidates];
      }
      
      const distractors = ExerciseEngine.shuffle(candidates).slice(0, 3).map(distractorKey);
      const options = ExerciseEngine.shuffle([answer, ...distractors]);
      
      // Determine round index based on progress (0 for first third, 1 for middle, 2 for last)
      const roundNum = Math.floor(index / Math.ceil(vocabList.length / 3)) + 1;
      
      questions.push({
        id: `vs-${index}`,
        round: roundNum,
        mode: mode,
        question: question,
        romaji: target.romaji,
        answer: answer,
        options: options
      });
    });

    return questions;
  }

  generateSentenceBuilder() {
    if (!this.lessonData || !this.lessonData.grammar) return [];
    
    const sentences = [];
    
    // First gather all particles or common small parts as distractor candidates
    const allPartsSet = new Set();
    this.lessonData.grammar.forEach(g => {
      if(g.examples) g.examples.forEach(e => {
        if(e.parts) e.parts.forEach(p => allPartsSet.add(p));
      });
    });
    const allParts = Array.from(allPartsSet);
    const particleDistractors = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'も', 'から', 'まで', 'じゃありません', 'でした', 'ですか'];

    this.lessonData.grammar.forEach(grammarPoint => {
      if (grammarPoint.examples) {
        grammarPoint.examples.forEach(ex => {
          if (ex.parts && ex.parts.length > 1) {
            sentences.push({
              vn: ex.vn,
              jp: ex.jp,
              romaji: ex.romaji,
              correctParts: [...ex.parts],
              rawParts: [...ex.parts]
            });
          }
        });
      }
    });

    ExerciseEngine.shuffle(sentences);
    
    // Assign rounds and distractors
    sentences.forEach((s, index) => {
      const roundNum = Math.floor(index / Math.ceil(sentences.length / 3)) + 1;
      s.id = `sb-${index}`;
      s.round = roundNum;
      
      let distractorsToPick = roundNum === 1 ? 0 : (roundNum === 2 ? 1 : 2);
      let chosenDistractors = [];
      
      if (distractorsToPick > 0) {
        // Try to pick a wrong particle if the sentence has particles
        const sentenceParticles = s.correctParts.filter(p => particleDistractors.includes(p));
        if (sentenceParticles.length > 0) {
          const wrongParticles = particleDistractors.filter(p => !sentenceParticles.includes(p));
          chosenDistractors.push(ExerciseEngine.shuffle(wrongParticles)[0]);
          distractorsToPick--;
        }
        
        // Fill remaining with random parts from other sentences
        if (distractorsToPick > 0) {
          const otherParts = allParts.filter(p => !s.correctParts.includes(p) && !chosenDistractors.includes(p));
          const randomOthers = ExerciseEngine.shuffle(otherParts).slice(0, distractorsToPick);
          chosenDistractors.push(...randomOthers);
        }
      }

      s.shuffledParts = ExerciseEngine.shuffle([...s.correctParts, ...chosenDistractors]);
      s.distractors = chosenDistractors; // keeping track just in case
    });

    return sentences;
  }

  // Generate Match Maker data
  // Returns all pairs shuffled for the component to chunk into rounds
  generateMatchMaker() {
    if (!this.lessonData) return null;
    
    let pairs = [];
    
    // Vocab Pairs (Round 1 style)
    if (this.lessonData.vocabulary && this.lessonData.vocabulary.length > 0) {
      const vocabList = ExerciseEngine.shuffle([...this.lessonData.vocabulary]);
      vocabList.forEach(v => {
        pairs.push({
          type: 'vocab',
          left: v.jp || v.kana,
          right: v.vn
        });
      });
    }

    // Conversation Pairs (Round 2 & 3 style)
    if (this.lessonData.conversation && this.lessonData.conversation.length > 1) {
      const conv = this.lessonData.conversation;
      // Pair Q & A by adjacent lines
      for (let i = 0; i < conv.length - 1; i++) {
        // Simple heuristic: if line has ? or か., next line is answer
        const currentLine = conv[i].text_jp;
        if (currentLine.includes('か。') || currentLine.includes('？')) {
          pairs.push({
            type: 'conv',
            left: currentLine, // The Question
            right: conv[i+1].text_jp // The Answer
          });
          i++; // Skip the answer line for next Q
        }
      }
    }

    // Shuffle and distribute
    // Let's put vocab pairs first, then conv pairs later, so they naturally become higher rounds.
    const vocabPairs = ExerciseEngine.shuffle(pairs.filter(p => p.type === 'vocab'));
    const convPairs = ExerciseEngine.shuffle(pairs.filter(p => p.type === 'conv'));
    
    return [...vocabPairs, ...convPairs];
  }

  // Generate Quiz Arena (Mixed questions)
  generateQuizArena(count = 10) {
    const vocabQuestions = this.generateVocabSurvival(Math.ceil(count / 2));
    const sentenceQuestions = this.generateSentenceBuilder().slice(0, Math.floor(count / 2));
    
    const mixed = [];
    
    vocabQuestions.forEach(q => {
      mixed.push({
        id: `qa-${mixed.length}`,
        type: 'vocab',
        question: q.question, // VN meaning
        options: q.options,
        answer: q.answer
      });
    });

    sentenceQuestions.forEach(q => {
      const parts = [...q.correctParts];
      if (parts.length > 2) {
        // Find a grammar particle if possible (1-2 chars)
        let blankIdx = parts.findIndex(p => p.length <= 2 && ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'から', 'まで'].includes(p));
        if (blankIdx === -1) blankIdx = Math.floor(Math.random() * (parts.length - 1)) + 1; 
        
        const answer = parts[blankIdx];
        parts[blankIdx] = '_____';
        
        let distractors = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'から', 'まで'];
        distractors = distractors.filter(d => d !== answer);
        const options = ExerciseEngine.shuffle([answer, ...ExerciseEngine.shuffle(distractors).slice(0, 3)]);
        
        mixed.push({
          id: `qa-${mixed.length}`,
          type: 'grammar',
          question: `${q.vn}\n\n${parts.join('')}`,
          options: options,
          answer: answer
        });
      }
    });

    return ExerciseEngine.shuffle(mixed).slice(0, count);
  }
}
