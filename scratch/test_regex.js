const text = "～階（～かい / がい）";
const regex = /([\u4e00-\u9faf]+)[\(（]([^\)）]+)[\)）]/g;

let match;
while ((match = regex.exec(text)) !== null) {
  console.log(`Matched base: ${match[1]}, kana: ${match[2]}`);
}
