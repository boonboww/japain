import KuroshiroModule from "kuroshiro";
import KuromojiAnalyzerModule from "kuroshiro-analyzer-kuromoji";

const Kuroshiro = KuroshiroModule.default || KuroshiroModule;
const KuromojiAnalyzer = KuromojiAnalyzerModule.default || KuromojiAnalyzerModule;

const kuroshiro = new Kuroshiro();
const analyzer = new KuromojiAnalyzer();

async function test() {
  await kuroshiro.init(analyzer);
  
  const text1 = "春野サクラ";
  console.log("name:", await kuroshiro.convert(text1, { mode: "okurigana", to: "hiragana" }));
  
  const text2 = "日向 (Hyūga / Hinata)";
  console.log("kanji field:", await kuroshiro.convert(text2, { mode: "okurigana", to: "hiragana" }));
  
  const text3 = "うちは (Uchiha)";
  console.log("kanji field 2:", await kuroshiro.convert(text3, { mode: "okurigana", to: "hiragana" }));
}

test();
