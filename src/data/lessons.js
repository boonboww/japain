import { lesson_1_5 } from './minna/lesson_1_5';
import { lesson_6_10 } from './minna/lesson_6_10';
import { lesson_11_15 } from './minna/lesson_11_15';
import { lesson_16_20 } from './minna/lesson_16_20';
import { lesson_21_25 } from './minna/lesson_21_25';
import { itVocab } from './itVocab';

// Convert itVocab array to a lesson format
const itLesson = {
  id: 26,
  title: "Từ vựng IT",
  description: "Các thuật ngữ chuyên ngành Công nghệ thông tin và Lập trình phần mềm bằng tiếng Nhật.",
  vocabulary: itVocab,
  grammar: [],
  conversation: [
    { speaker: "Leader", text_jp: "この機能の実装は終わりましたか。", romaji: "Kono kinou no jissou wa owarimashita ka.", text_vn: "Việc triển khai (implement) tính năng này đã xong chưa?" },
    { speaker: "Dev", text_jp: "はい、終わりました。今、単体テストをしています。", romaji: "Hai, owarimashita. Ima, tantai tesuto o shite imasu.", text_vn: "Vâng, xong rồi ạ. Bây giờ tôi đang chạy Unit Test." },
    { speaker: "Leader", text_jp: "バグがありますか。", romaji: "Bagu ga arimasu ka.", text_vn: "Có lỗi (bug) nào không?" },
    { speaker: "Dev", text_jp: "いいえ、ありません。すべて正常です。", romaji: "Iie, arimasen. Subete seijou desu.", text_vn: "Không, không có ạ. Tất cả đều bình thường." }
  ]
};

export const lessons = [
  ...lesson_1_5,
  ...lesson_6_10,
  ...lesson_11_15,
  ...lesson_16_20,
  ...lesson_21_25,
  itLesson
];
