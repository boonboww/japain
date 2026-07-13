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
  
  // Find all name_kanji: "..." and kanji: "..."
  const regex = /(name_kanji|kanji):\s*["']([^"']+)["']/g;
  let matches = [...content.matchAll(regex)];
  
  if (matches.length === 0) return;
  console.log(`Processing ${filePath}...`);
  
  for (const match of matches) {
    const field = match[1];
    const originalText = match[2];
    
    // Check if it has Kanji
    const hasKanji = /[\u4e00-\u9faf]/.test(originalText);
    if (!hasKanji) continue;

    // Special check: If originalText is like "日向 (Hyūga / Hinata)", it DOES have a parenthesis,
    // but the parenthesis contains romaji or English. 
    // `kuroshiro` can still process it safely: "日向 (Hyūga / Hinata)" -> "日向(ひなた) (Hyūga / Hinata)"
    // But wait! If it already has okurigana from a previous run, it might be double processed.
    // Let's assume this is a fresh run. We only skip if it has parenthesis AND NO romaji?
    // Let's just process it, Kuroshiro is generally safe. But to be safe from double processing:
    // If it already matches our Furigana regex, we skip.
    const hasOkurigana = /[\u4e00-\u9faf]+[\(（][^\)）]+[\)）]/.test(originalText);
    if (hasOkurigana) continue;

    const okurigana = await kuroshiro.convert(originalText, { mode: "okurigana", to: "hiragana" });
    
    // Replace in content
    content = content.replace(`${field}: "${originalText}"`, `${field}: "${okurigana}"`);
    content = content.replace(`${field}: '${originalText}'`, `${field}: '${okurigana}'`);
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

async function main() {
  await kuroshiro.init(analyzer);
  
  const filesToProcess = [
    'd:/japain/src/data/anime.js'
  ];

  for (const file of filesToProcess) {
    if (fs.existsSync(file)) {
      await processFile(file);
    }
  }
  
  console.log("Done!");
}

main();
