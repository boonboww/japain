import fs from 'fs';
import path from 'path';
import KuroshiroModule from "kuroshiro";
import KuromojiAnalyzerModule from "kuroshiro-analyzer-kuromoji";

const Kuroshiro = KuroshiroModule.default || KuroshiroModule;
const KuromojiAnalyzer = KuromojiAnalyzerModule.default || KuromojiAnalyzerModule;

const kuroshiro = new Kuroshiro();
const analyzer = new KuromojiAnalyzer();

async function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find all text_jp: "..."
  const regex = /text_jp:\s*["']([^"']+)["']/g;
  let matches = [...content.matchAll(regex)];
  
  if (matches.length === 0) return;
  console.log(`Processing ${filePath}...`);
  
  for (const match of matches) {
    const originalText = match[1];
    
    // Skip if it already has parenthesis for okurigana, or no kanji
    if (originalText.includes('(') || originalText.includes('（')) continue;
    
    // Check if it has Kanji
    const hasKanji = /[\u4e00-\u9faf]/.test(originalText);
    if (!hasKanji) continue;

    const okurigana = await kuroshiro.convert(originalText, { mode: "okurigana", to: "hiragana" });
    
    // Replace in content
    content = content.replace(`text_jp: "${originalText}"`, `text_jp: "${okurigana}"`);
    content = content.replace(`text_jp: '${originalText}'`, `text_jp: '${okurigana}'`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

async function main() {
  await kuroshiro.init(analyzer);
  
  const filesToProcess = [
    'd:/japain/src/data/minna/lesson_1_5.js',
    'd:/japain/src/data/minna/lesson_6_10.js',
    'd:/japain/src/data/minna/lesson_11_15.js',
    'd:/japain/src/data/minna/lesson_16_20.js',
    'd:/japain/src/data/minna/lesson_21_25.js',
    'd:/japain/src/data/real_life.js',
    'd:/japain/src/data/itVocab.js'
  ];

  for (const file of filesToProcess) {
    if (fs.existsSync(file)) {
      await processFile(file);
    }
  }
  
  console.log("Done!");
}

main();
