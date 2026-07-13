const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/minna');

const files = fs.readdirSync(dataDir).filter(f => f.startsWith('lesson_') && f.endsWith('.js'));

function generateParts(jp) {
  let chunks = jp.split(/[\s　]+/); 
  
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
  
  let finalParts = [];
  const endParticleRegex = /^(.*?)(は|が|を|に|で|へ|と|も|から|まで|です|ですか|でした|じゃありません)$/;
  
  for (let chunk of chunks) {
    if (chunk.length <= 1) {
      finalParts.push(chunk);
      continue;
    }
    
    const match = chunk.match(endParticleRegex);
    if (match && match[1].length > 0) {
      finalParts.push(match[1]);
      finalParts.push(match[2]);
    } else {
      finalParts.push(chunk);
    }
  }

  return finalParts.filter(p => p.length > 0);
}

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // We need to only modify inside the `grammar:` block, specifically `examples: [...]`
  // A safer regex: find grammar blocks and process them.
  // We can use a regex that captures { jp: "...", romaji: "...", vn: "..." } but we need to ensure it's not in vocabulary.
  // Actually, vocabulary objects usually have `kana:` and `type:`. Grammar examples DO NOT have `type`.
  // So we can match objects that have `jp`, `romaji`, `vn` but DO NOT have `kana` or `type`.
  
  let modified = content.replace(
    /(\{\s*jp:\s*["'][^"']*["'],\s*romaji:\s*["'][^"']*["'],\s*vn:\s*["'][^"']*["'])(?:\s*,\s*parts:\s*\[.*?\])?(\s*\})/g, 
    (match, p1, p2) => {
      // p1 is the first part of the object: { jp: "...", romaji: "...", vn: "..."
      // extract jp from p1
      const jpMatch = p1.match(/jp:\s*["']([^"']*)["']/);
      if (!jpMatch) return match;
      const jp = jpMatch[1];
      const parts = generateParts(jp);
      const partsStr = JSON.stringify(parts);
      return `${p1}, parts: ${partsStr}${p2}`;
    }
  );

  fs.writeFileSync(filePath, modified, 'utf8');
  console.log(`Updated ${file}`);
});
