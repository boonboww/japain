const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/minna');

const files = fs.readdirSync(dataDir).filter(f => f.startsWith('lesson_') && f.endsWith('.js'));

function generateParts(jp) {
  // Remove punctuation at the end for cleaner parts, or keep them?
  // Let's keep them, it's fine.
  // We'll split by space first. If there are no spaces, we'll try a regex to split before particles.
  
  let chunks = jp.split(/[\s　]+/); // split by spaces or full-width spaces
  
  // If the sentence is just 1 chunk (no spaces), we try to split by particles
  if (chunks.length <= 1) {
    const particleRegex = /(.*?)(は|が|を|に|で|へ|と|も|から|まで)(.*)/;
    let newChunks = [];
    let remaining = jp;
    
    while(remaining.length > 0) {
      const match = remaining.match(particleRegex);
      if (match) {
        if (match[1]) newChunks.push(match[1]);
        newChunks.push(match[2]);
        remaining = match[3];
      } else {
        newChunks.push(remaining);
        break;
      }
    }
    chunks = newChunks.filter(c => c.length > 0);
  }
  
  // Further split chunks that have particles attached at the end, 
  // so particles become their own draggable parts (better for grammar)
  let finalParts = [];
  const endParticleRegex = /^(.*?)(は|が|を|に|で|へ|と|も|から|まで|です|ですか|でした|じゃありません)$/;
  
  for (let chunk of chunks) {
    if (chunk.length <= 1) {
      finalParts.push(chunk);
      continue;
    }
    
    const match = chunk.match(endParticleRegex);
    if (match && match[1].length > 0) {
      // It has a particle at the end
      finalParts.push(match[1]);
      finalParts.push(match[2]);
    } else {
      finalParts.push(chunk);
    }
  }

  // Remove empty strings
  return finalParts.filter(p => p.length > 0);
}

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to find examples array: examples: [ { ... }, { ... } ]
  // We will parse the file as AST? No, it's a JS export. We can just use string replacement carefully.
  // A safer way is to require() the file, but it's ES module syntax (`export const ...`).
  // Let's use regex to find { jp: "...", romaji: "...", vn: "..." } and add parts: [...]
  
  let modified = content.replace(
    /\{\s*jp:\s*["'](.*?)["'],\s*romaji:\s*["'](.*?)["'],\s*vn:\s*["'](.*?)["'](?:\s*,\s*parts:\s*\[.*?\])?\s*\}/g, 
    (match, jp, romaji, vn) => {
      const parts = generateParts(jp);
      const partsStr = JSON.stringify(parts);
      return `{ jp: "${jp}", romaji: "${romaji}", vn: "${vn}", parts: ${partsStr} }`;
    }
  );

  fs.writeFileSync(filePath, modified, 'utf8');
  console.log(`Updated ${file}`);
});
