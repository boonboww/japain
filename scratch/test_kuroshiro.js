import KuroshiroModule from "kuroshiro";
import KuromojiAnalyzerModule from "kuroshiro-analyzer-kuromoji";

const Kuroshiro = KuroshiroModule.default || KuroshiroModule;
const KuromojiAnalyzer = KuromojiAnalyzerModule.default || KuromojiAnalyzerModule;

const kuroshiro = new Kuroshiro();
const analyzer = new KuromojiAnalyzer();

async function test() {
  await kuroshiro.init(analyzer);
  const text1 = "おはようございます。初めまして、うちはイタチです。";
  const result1 = await kuroshiro.convert(text1, { mode: "furigana", to: "hiragana" });
  console.log("furigana:", result1);

  const result2 = await kuroshiro.convert(text1, { mode: "okurigana", to: "hiragana" });
  console.log("okurigana:", result2);
}

test();
