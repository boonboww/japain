const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data/minna');

function injectVocab(filename, lessonId, newVocabList) {
  const filePath = path.join(dataDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to find the specific lesson object and its vocabulary array.
  // A regex to match: id: 5, ... vocabulary: [ ... ]
  
  const lessonRegex = new RegExp(`(id:\\s*${lessonId}\\s*,[\\s\\S]*?vocabulary:\\s*\\[)([\\s\\S]*?)(\\n\\s*\\],\\s*grammar:\\s*\\[)`);
  
  const match = content.match(lessonRegex);
  if (!match) {
    console.error(`Lesson ${lessonId} vocabulary not found in ${filename}`);
    return;
  }

  // Format the new vocabulary to strings
  const vocabStrings = newVocabList.map(v => 
    `      { jp: "${v.jp}", kana: "${v.kana}", romaji: "${v.romaji}", vn: "${v.vn}", type: "${v.type}", explanation: "${v.explanation}" }`
  );

  const newVocabBlock = match[2] + ",\n" + vocabStrings.join(',\n');
  
  content = content.replace(lessonRegex, `$1${newVocabBlock}$3`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully added ${newVocabList.length} words to Lesson ${lessonId} in ${filename}`);
}

// Data to inject

const lesson5_days = [
  { jp: "１日（ついたち）", kana: "ついたち", romaji: "tsuitachi", vn: "Ngày mùng 1", type: "Danh từ", explanation: "Ngày đầu tháng." },
  { jp: "２日（ふつか）", kana: "ふつか", romaji: "futsuka", vn: "Ngày mùng 2", type: "Danh từ", explanation: "Ngày mùng hai." },
  { jp: "３日（みっか）", kana: "みっか", romaji: "mikka", vn: "Ngày mùng 3", type: "Danh từ", explanation: "Ngày mùng ba." },
  { jp: "４日（よっか）", kana: "よっか", romaji: "yokka", vn: "Ngày mùng 4", type: "Danh từ", explanation: "Ngày mùng bốn." },
  { jp: "５日（いつか）", kana: "いつか", romaji: "itsuka", vn: "Ngày mùng 5", type: "Danh từ", explanation: "Ngày mùng năm." },
  { jp: "６日（むいか）", kana: "むいか", romaji: "muika", vn: "Ngày mùng 6", type: "Danh từ", explanation: "Ngày mùng sáu." },
  { jp: "７日（なのか）", kana: "なのか", romaji: "nanoka", vn: "Ngày mùng 7", type: "Danh từ", explanation: "Ngày mùng bảy." },
  { jp: "８日（ようか）", kana: "ようか", romaji: "youka", vn: "Ngày mùng 8", type: "Danh từ", explanation: "Ngày mùng tám." },
  { jp: "９日（ここのか）", kana: "ここのか", romaji: "kokonoka", vn: "Ngày mùng 9", type: "Danh từ", explanation: "Ngày mùng chín." },
  { jp: "１０日（とおか）", kana: "とおか", romaji: "tooka", vn: "Ngày mùng 10", type: "Danh từ", explanation: "Ngày mùng mười." },
  { jp: "１４日（じゅうよっか）", kana: "じゅうよっか", romaji: "juuyokka", vn: "Ngày 14", type: "Danh từ", explanation: "Mười bốn." },
  { jp: "２０日（はつか）", kana: "はつか", romaji: "hatsuka", vn: "Ngày 20", type: "Danh từ", explanation: "Hai mươi." },
  { jp: "２４日（にじゅうよっか）", kana: "にじゅうよっか", romaji: "nijuuyokka", vn: "Ngày 24", type: "Danh từ", explanation: "Hai mươi bốn." },
  { jp: "～日（にち）", kana: "にち", romaji: "nichi", vn: "Ngày ~", type: "Danh từ", explanation: "Dùng để đếm ngày khác hoặc đọc các ngày thường." }
];

const lesson10_positions = [
  { jp: "上（うえ）", kana: "うえ", romaji: "ue", vn: "Trên", type: "Danh từ", explanation: "Vị trí phía trên." },
  { jp: "下（した）", kana: "した", romaji: "shita", vn: "Dưới", type: "Danh từ", explanation: "Vị trí phía dưới." },
  { jp: "前（まえ）", kana: "まえ", romaji: "mae", vn: "Trước", type: "Danh từ", explanation: "Phía trước." },
  { jp: "後（うし）ろ", kana: "うしろ", romaji: "ushiro", vn: "Sau", type: "Danh từ", explanation: "Phía sau." },
  { jp: "右（みぎ）", kana: "みぎ", romaji: "migi", vn: "Phải", type: "Danh từ", explanation: "Bên phải." },
  { jp: "左（ひだり）", kana: "ひだり", romaji: "hidari", vn: "Trái", type: "Danh từ", explanation: "Bên trái." },
  { jp: "中（なか）", kana: "なか", romaji: "naka", vn: "Trong", type: "Danh từ", explanation: "Bên trong." },
  { jp: "外（そと）", kana: "そと", romaji: "soto", vn: "Ngoài", type: "Danh từ", explanation: "Bên ngoài." },
  { jp: "隣（となり）", kana: "となり", romaji: "tonari", vn: "Bên cạnh", type: "Danh từ", explanation: "Sát bên." },
  { jp: "近（ちか）く", kana: "ちかく", romaji: "chikaku", vn: "Gần", type: "Danh từ", explanation: "Ở gần." },
  { jp: "間（あいだ）", kana: "あいだ", romaji: "aida", vn: "Giữa", type: "Danh từ", explanation: "Ở giữa hai vật." }
];

const lesson11_counters = [
  { jp: "一つ（ひとつ）", kana: "ひとつ", romaji: "hitotsu", vn: "Một cái (đồ vật)", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "二つ（ふたつ）", kana: "ふたつ", romaji: "futatsu", vn: "Hai cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "三つ（みっつ）", kana: "みっつ", romaji: "mittsu", vn: "Ba cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "四つ（よっつ）", kana: "よっつ", romaji: "yottsu", vn: "Bốn cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "五つ（いつつ）", kana: "いつつ", romaji: "itsutsu", vn: "Năm cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "六つ（むっつ）", kana: "むっつ", romaji: "muttsu", vn: "Sáu cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "七つ（ななつ）", kana: "ななつ", romaji: "nanatsu", vn: "Bảy cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "八つ（やっつ）", kana: "やっつ", romaji: "yattsu", vn: "Tám cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "九つ（ここのつ）", kana: "ここのつ", romaji: "kokonotsu", vn: "Chín cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "十（とお）", kana: "とお", romaji: "too", vn: "Mười cái", type: "Danh từ", explanation: "Đếm chung đồ vật." },
  { jp: "いくつ", kana: "いくつ", romaji: "ikutsu", vn: "Bao nhiêu cái", type: "Từ để hỏi", explanation: "Hỏi số lượng đồ vật." },
  { jp: "一人（ひとり）", kana: "ひとり", romaji: "hitori", vn: "Một người", type: "Danh từ", explanation: "Đếm người." },
  { jp: "二人（ふたり）", kana: "ふたり", romaji: "futari", vn: "Hai người", type: "Danh từ", explanation: "Đếm người." },
  { jp: "～人（にん）", kana: "にん", romaji: "nin", vn: "Người", type: "Danh từ", explanation: "Đơn vị đếm người (từ 3 người trở lên)." },
  { jp: "～台（だい）", kana: "だい", romaji: "dai", vn: "Chiếc", type: "Danh từ", explanation: "Đơn vị đếm máy móc, xe cộ." },
  { jp: "～枚（まい）", kana: "まい", romaji: "mai", vn: "Tờ, tấm", type: "Danh từ", explanation: "Đơn vị đếm vật mỏng (giấy, áo)." },
  { jp: "～回（かい）", kana: "かい", romaji: "kai", vn: "Lần", type: "Danh từ", explanation: "Đơn vị đếm số lần." }
];

injectVocab('lesson_1_5.js', 5, lesson5_days);
injectVocab('lesson_6_10.js', 10, lesson10_positions);
injectVocab('lesson_11_15.js', 11, lesson11_counters);
