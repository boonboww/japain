export const lessons = [
  {
    id: 1,
    title: "Bài 1: Giới thiệu bản thân & Danh tính",
    description: "Làm quen với cấu trúc câu danh từ và cách giới thiệu tên tuổi, nghề nghiệp, quốc tịch.",
    vocabulary: [
      { jp: "私", kana: "わたし", romaji: "watashi", vn: "Tôi", explanation: "Chữ Tư (私). Nghĩa là cá nhân, riêng tư." },
      { jp: "私たち", kana: "わたしたち", romaji: "watashitachi", vn: "Chúng tôi, chúng ta", explanation: "私 (Tư - Tôi) + たち (hậu tố chỉ số nhiều). Tập hợp những người bao gồm cả người nói." },
      { jp: "あなた", kana: "あなた", romaji: "anata", vn: "Bạn", explanation: "Đại từ nhân xưng ngôi thứ hai." },
      { jp: "あの人", kana: "あのひと", romaji: "ano hito", vn: "Người kia, người đó", explanation: "あの (đó, kia) + 人 (Nhân - người)." },
      { jp: "あの方", kana: "あのかた", romaji: "ano kata", vn: "Vị kia (lịch sự của あの人)", explanation: "あの (kia) + 方 (Phương - vị, ngài). Cách gọi lịch sự hơn của 人." },
      { jp: "皆さん", kana: "みなさん", romaji: "minasan", vn: "Các bạn, mọi người", explanation: "皆 (Giai - mọi người) + さん (kính ngữ)." },
      { jp: "～さん", kana: "～さん", romaji: "~san", vn: "Anh, chị, ông, bà (hậu tố)", explanation: "Hậu tố lịch sự thêm vào sau tên người khác." },
      { jp: "～ちゃん", kana: "～ちゃん", romaji: "~chan", vn: "Bé (hậu tố cho trẻ em)", explanation: "Hậu tố gọi thân mật dành cho trẻ em hoặc con gái." },
      { jp: "～くん", kana: "～くん", romaji: "~kun", vn: "Bé trai (hậu tố)", explanation: "Hậu tố gọi thân mật dành cho con trai hoặc cấp dưới." },
      { jp: "～人", kana: "～じん", romaji: "~jin", vn: "Người nước ~", explanation: "Tên nước + 人 (Nhân). Ví dụ: ベトナム人 (Người Việt Nam)." },
      { jp: "先生", kana: "せんせい", romaji: "sensei", vn: "Giáo viên", explanation: "先 (Tiên - đi trước) + 生 (Sinh - sinh ra, sống). Người sinh ra trước, người đi trước truyền đạt kiến thức." },
      { jp: "教師", kana: "きょうし", romaji: "kyoushi", vn: "Giáo viên (nghề nghiệp)", explanation: "教 (Giáo - dạy dỗ) + 師 (Sư - thầy). Từ dùng để chỉ nghề nghiệp giáo viên." },
      { jp: "学生", kana: "がくせい", romaji: "gakusei", vn: "Học sinh, sinh viên", explanation: "学 (Học - học tập) + 生 (Sinh - người). Người đang đi học." },
      { jp: "会社員", kana: "かいしゃいん", romaji: "kaishain", vn: "Nhân viên công ty", explanation: "会 (Hội) + 社 (Xã) + 員 (Viên). Người làm việc trong một tổ chức/công ty." },
      { jp: "社員", kana: "しゃいん", romaji: "shain", vn: "Nhân viên công ty ~", explanation: "Tên công ty + 社員. Ví dụ: FPTの社員 (Nhân viên của FPT)." },
      { jp: "銀行員", kana: "ぎんこういん", romaji: "ginkouin", vn: "Nhân viên ngân hàng", explanation: "銀 (Ngân - Bạc) + 行 (Hành - cửa hàng) + 員 (Viên). Nhân viên làm việc tại nơi giữ tiền/bạc." },
      { jp: "医者", kana: "いしゃ", romaji: "isha", vn: "Bác sĩ", explanation: "医 (Y - y tế) + 者 (Giả - người). Người làm nghề y tế." },
      { jp: "研究者", kana: "けんきゅうしゃ", romaji: "kenkyuusha", vn: "Nhà nghiên cứu", explanation: "研 (Nghiên - mài giũa) + 究 (Cứu - tìm tòi) + 者 (Giả). Người đào sâu tìm tòi kiến thức." },
      { jp: "エンジニア", kana: "エンジニア", romaji: "enjinia", vn: "Kỹ sư", explanation: "Từ mượn tiếng Anh: Engineer." },
      { jp: "大学", kana: "だいがく", romaji: "daigaku", vn: "Đại học", explanation: "大 (Đại - Lớn) + 学 (Học). Bậc học lớn, cao nhất." },
      { jp: "病院", kana: "びょういん", romaji: "byouin", vn: "Bệnh viện", explanation: "病 (Bệnh - ốm đau) + 院 (Viện - cơ sở). Cơ sở khám chữa bệnh." },
      { jp: "電気", kana: "でんき", romaji: "denki", vn: "Điện, đèn điện", explanation: "電 (Điện) + 気 (Khí - năng lượng). Năng lượng điện." },
      { jp: "だれ", kana: "だれ", romaji: "dare", vn: "Ai", explanation: "Từ để hỏi người. Nghĩa là 'Ai'." },
      { jp: "どなた", kana: "どなた", romaji: "donata", vn: "Vị nào", explanation: "Cách nói lịch sự của だれ." },
      { jp: "歳", kana: "さい", romaji: "sai", vn: "Tuổi", explanation: "Tuế (歳 - Năm, Tuổi). Dùng để đếm tuổi." },
      { jp: "何歳", kana: "なんさい", romaji: "nansai", vn: "Mấy tuổi", explanation: "Hà (何 - Cái gì/Mấy) + Tuế (歳). Dùng hỏi tuổi." },
      { jp: "おいくつ", kana: "おいくつ", romaji: "oikutsu", vn: "Bao nhiêu tuổi", explanation: "Cách hỏi tuổi lịch sự hơn 何歳." },
      { jp: "はい", kana: "はい", romaji: "hai", vn: "Vâng, dạ", explanation: "Dùng để đồng ý, xác nhận." },
      { jp: "いいえ", kana: "いいえ", romaji: "iie", vn: "Không", explanation: "Dùng để phủ định." }
    ],
    grammar: [
      {
        title: "Cấu trúc 1: Khẳng định (N1 là N2)",
        formula: "N1 は N2 です。",
        examples: [
          { jp: "私は Quân です。", romaji: "Watashi wa Quân desu.", vn: "Tôi là Quân." },
          { jp: "山田さんは 医者 です。", romaji: "Yamada-san wa isha desu.", vn: "Anh Yamada là bác sĩ." }
        ]
      },
      {
        title: "Cấu trúc 2: Phủ định (N1 không phải là N2)",
        formula: "N1 は N2 じゃありません / ではりません。",
        examples: [
          { jp: "私は 学生じゃありません。", romaji: "Watashi wa gakusei ja arimasen.", vn: "Tôi không phải là học sinh." },
          { jp: "サントスさんは 先生じゃありません。", romaji: "Santosu-san wa sensei ja arimasen.", vn: "Ông Santos không phải là giáo viên." }
        ]
      },
      {
        title: "Cấu trúc 3: Câu hỏi (N1 là N2 phải không?)",
        formula: "N1 は N2 ですか。",
        examples: [
          { jp: "あの人は エンジニアですか。", romaji: "Ano hito wa enjinia desu ka.", vn: "Người kia là kỹ sư phải không?" },
          { jp: "グエンさんは 会社員ですか。", romaji: "Guen-san wa kaishain desu ka.", vn: "Anh Nguyễn là nhân viên công ty phải không?" }
        ]
      },
      {
        title: "Cấu trúc 4: Trợ từ も (N cũng ...)",
        formula: "N も ... です。",
        examples: [
          { jp: "私も 学生です。", romaji: "Watashi mo gakusei desu.", vn: "Tôi CŨNG là học sinh." },
          { jp: "ミラーさんも 会社員です。", romaji: "Miraa-san mo kaishain desu.", vn: "Anh Miller CŨNG là nhân viên công ty." }
        ]
      }
    ],
    conversation: [
      { speaker: "Sato", text_jp: "初めまして。佐藤です。IMCの社員です。どうぞよろしく。", romaji: "Hajimemashite. Satou desu. IMC no shain desu. Douzo yoroshiku.", text_vn: "Rất hân hạnh được làm quen. Tôi là Sato. Nhân viên công ty IMC. Mong được giúp đỡ." },
      { speaker: "Quan", text_jp: "初めまして。グエン・クアンです。ダナン大学の学生です。どうぞよろしくおねがいします。", romaji: "Hajimemashite. Guen Kuan desu. Danan daigaku no gakusei desu. Douzo yoroshiku onegaishimasu.", text_vn: "Rất hân hạnh được làm quen. Tôi là Nguyễn Quân. Sinh viên Đại học Đà Nẵng. Rất mong được giúp đỡ." },
      { speaker: "Yamada", text_jp: "クアンさんはエンジニアですか。", romaji: "Kuan-san wa enjinia desu ka.", text_vn: "Anh Quân là kĩ sư phải không?" },
      { speaker: "Quan", text_jp: "いいえ、エンジニアじゃありません。学生です。", romaji: "Iie, enjinia ja arimasen. Gakusei desu.", text_vn: "Không, tôi không phải kỹ sư. Tôi là sinh viên." }
    ]
  },
  {
    id: 2,
    title: "Bài 2: Chỉ định từ",
    description: "Cái này, cái đó, cái kia.",
    vocabulary: [
      { jp: "これ", kana: "これ", romaji: "kore", vn: "Cái này", explanation: "Vật ở gần người nói." },
      { jp: "それ", kana: "それ", romaji: "sore", vn: "Cái đó", explanation: "Vật ở gần người nghe." },
      { jp: "あれ", kana: "あれ", romaji: "are", vn: "Cái kia", explanation: "Vật ở xa cả người nói và người nghe." },
      { jp: "この～", kana: "この", romaji: "kono", vn: "~ này", explanation: "Theo sau là danh từ. Ví dụ: この本 (Cuốn sách này)." },
      { jp: "その～", kana: "その", romaji: "sono", vn: "~ đó", explanation: "Theo sau là danh từ." },
      { jp: "あの～", kana: "あの", romaji: "ano", vn: "~ kia", explanation: "Theo sau là danh từ." },
      { jp: "本", kana: "ほん", romaji: "hon", vn: "Sách", explanation: "Bản (本) - Gốc rễ, cội nguồn. Sách là gốc rễ của tri thức." },
      { jp: "辞書", kana: "じしょ", romaji: "jisho", vn: "Từ điển", explanation: "Từ (辞 - Từ ngữ) + Thư (書 - Sách). Cuốn sách tập hợp các từ ngữ." },
      { jp: "雑誌", kana: "ざっし", romaji: "zasshi", vn: "Tạp chí", explanation: "Tạp (雑 - Hỗn hợp, đa dạng) + Chí (誌 - Ghi chép). Ấn phẩm ghi chép nhiều chủ đề đa dạng." },
      { jp: "新聞", kana: "しんぶん", romaji: "shinbun", vn: "Báo", explanation: "Tân (新 - Mới) + Văn (聞 - Nghe, biết). Những thông tin mới được nghe/biết tới." },
      { jp: "ノート", kana: "ノート", romaji: "nooto", vn: "Vở", explanation: "Từ mượn tiếng Anh: Note." },
      { jp: "手帳", kana: "てちょう", romaji: "techou", vn: "Sổ tay", explanation: "Thủ (手 - Tay) + Trướng (帳 - Sổ). Cuốn sổ nhỏ gọn mang theo trên tay." },
      { jp: "名刺", kana: "めいし", romaji: "meishi", vn: "Danh thiếp", explanation: "Danh (名 - Tên) + Thứ (刺 - Tấm thẻ). Tấm thẻ ghi tên tuổi, chức vụ." },
      { jp: "鉛筆", kana: "えんぴつ", romaji: "enpitsu", vn: "Bút chì", explanation: "Duyên (鉛 - Chì) + Bút (筆 - Bút). Bút làm bằng lõi chì." },
      { jp: "時計", kana: "とけい", romaji: "tokei", vn: "Đồng hồ", explanation: "Thời (時 - Thời gian) + Kế (計 - Đo lường). Dụng cụ đo lường thời gian." },
      { jp: "傘", kana: "かさ", romaji: "kasa", vn: "Cái ô", explanation: "Tản (傘). Chữ Hán có hình dáng giống 4 người đang trú dưới một mái ô." },
      { jp: "鞄", kana: "かばん", romaji: "kaban", vn: "Cặp, túi xách", explanation: "Cặp đựng sách vở hoặc tài liệu." },
      { jp: "靴", kana: "くつ", romaji: "kutsu", vn: "Giày", explanation: "Ngoa (靴). Đồ đi ở chân." },
      { jp: "自動車", kana: "じどうしゃ", romaji: "jidousha", vn: "Ô tô", explanation: "Tự (自 - Tự mình) + Động (動 - Di chuyển) + Xa (車 - Xe). Cỗ xe tự di chuyển (bằng động cơ)." },
      { jp: "日本語", kana: "にほんご", romaji: "nihongo", vn: "Tiếng Nhật", explanation: "Nhật (日) + Bản (本) + Ngữ (語). Ngôn ngữ của nước Nhật." },
      { jp: "英語", kana: "えいご", romaji: "eigo", vn: "Tiếng Anh", explanation: "Anh (英) + Ngữ (語). Ngôn ngữ của nước Anh." },
      { jp: "何", kana: "なん", romaji: "nan / nani", vn: "Cái gì", explanation: "Hà (何)." },
      { jp: "そうです", kana: "そうです", romaji: "sou desu", vn: "Đúng vậy", explanation: "Dùng để đồng tình với câu hỏi." },
      { jp: "違います", kana: "ちがいます", romaji: "chigaimasu", vn: "Không phải, sai rồi", explanation: "Vi (違 - Sai khác). Nghĩa đen là 'khác', 'sai'." }
    ],
    grammar: [
      {
        title: "Cấu trúc 1: これ / それ / あれ",
        formula: "[これ / それ / あれ] は N です。",
        examples: [
          { jp: "これは 本です。", romaji: "Kore wa hon desu.", vn: "Đây là cuốn sách." },
          { jp: "それは 辞書です。", romaji: "Sore wa jisho desu.", vn: "Đó là cuốn từ điển." }
        ]
      },
      {
        title: "Cấu trúc 2: Câu hỏi lựa chọn",
        formula: "N1 ですか、 N2 ですか。",
        examples: [
          { jp: "これは 本ですか、雑誌ですか。", romaji: "Kore wa hon desu ka, zasshi desu ka.", vn: "Đây là sách hay là tạp chí?" }
        ]
      },
      {
        title: "Cấu trúc 3: この/その/あの + N",
        formula: "この N は ... です。",
        examples: [
          { jp: "この傘は 私のです。", romaji: "Kono kasa wa watashi no desu.", vn: "Cái ô này là của tôi." }
        ]
      }
    ],
    conversation: [
      { speaker: "Santos", text_jp: "はい。どなたですか。", romaji: "Hai. Donata desu ka.", text_vn: "Vâng. Ai đấy ạ?" },
      { speaker: "Sato", text_jp: "403の佐藤です。こんにちは。", romaji: "Yon-maru-san no Satou desu. Konnichiwa.", text_vn: "Tôi là Sato ở phòng 403. Xin chào." },
      { speaker: "Sato", text_jp: "これからお世話になります。どうぞよろしく。これはコーヒーです。どうぞ。", romaji: "Korekara osewa ni narimasu. Douzo yoroshiku. Kore wa koohii desu. Douzo.", text_vn: "Từ nay mong được giúp đỡ. Xin nhờ anh. Đây là chút cà phê. Xin mời anh." },
      { speaker: "Santos", text_jp: "どうもありがとうございます。", romaji: "Doumo arigatou gozaimasu.", text_vn: "Rất cảm ơn anh." },
      { speaker: "Yamada", text_jp: "あのう、それは何ですか。", romaji: "Anou, sore wa nan desu ka.", text_vn: "À ừm, cái đó là cái gì vậy?" },
      { speaker: "Quan", text_jp: "これですか。名刺です。", romaji: "Kore desu ka. Meishi desu.", text_vn: "Cái này á? Là danh thiếp." }
    ]
  },
  {
    id: 3,
    title: "Bài 3: Địa điểm & Nơi chốn",
    description: "Học cách hỏi và chỉ đường, vị trí của đồ vật hoặc địa điểm.",
    vocabulary: [
      { jp: "ここ", kana: "ここ", romaji: "koko", vn: "Chỗ này, đây", explanation: "Vị trí gần người nói." },
      { jp: "そこ", kana: "そこ", romaji: "soko", vn: "Chỗ đó, đó", explanation: "Vị trí gần người nghe." },
      { jp: "あそこ", kana: "あそこ", romaji: "asoko", vn: "Chỗ kia, kia", explanation: "Vị trí xa cả hai người." },
      { jp: "どこ", kana: "どこ", romaji: "doko", vn: "Ở đâu", explanation: "Từ để hỏi về địa điểm." },
      { jp: "こちら", kana: "こちら", romaji: "kochira", vn: "Phía này, đằng này", explanation: "Cách nói lịch sự của ここ." },
      { jp: "そちら", kana: "そちら", romaji: "sochira", vn: "Phía đó", explanation: "Cách nói lịch sự của そこ." },
      { jp: "あちら", kana: "あちら", romaji: "achira", vn: "Phía kia", explanation: "Cách nói lịch sự của あそこ." },
      { jp: "どちら", kana: "どちら", romaji: "dochira", vn: "Phía nào, đằng nào", explanation: "Cách hỏi lịch sự của どこ." },
      { jp: "教室", kana: "きょうしつ", romaji: "kyoushitsu", vn: "Phòng học", explanation: "Giáo (教 - Dạy học) + Thất (室 - Phòng). Căn phòng dùng để dạy học." },
      { jp: "食堂", kana: "しょくどう", romaji: "shokudou", vn: "Nhà ăn", explanation: "Thực (食 - Ăn) + Đường (堂 - Sảnh lớn). Sảnh lớn để ăn uống tập thể." },
      { jp: "事務所", kana: "じむしょ", romaji: "jimusho", vn: "Văn phòng", explanation: "Sự (事 - Việc) + Vụ (務 - Nhiệm vụ) + Sở (所 - Nơi). Nơi làm việc, giải quyết giấy tờ." },
      { jp: "会議室", kana: "かいぎしつ", romaji: "kaigishitsu", vn: "Phòng họp", explanation: "Hội (会 - Gặp gỡ) + Nghị (議 - Bàn bạc) + Thất (室 - Phòng). Phòng để gặp gỡ bàn bạc." },
      { jp: "受付", kana: "うけつけ", romaji: "uketsuke", vn: "Quầy lễ tân", explanation: "Thụ (受 - Nhận) + Phó (付 - Gắn vào). Nơi tiếp nhận thông tin hoặc khách đến." },
      { jp: "部屋", kana: "へや", romaji: "heya", vn: "Căn phòng", explanation: "Bộ (部 - Phần) + Ốc (屋 - Nhà). Một phần của căn nhà." },
      { jp: "お手洗い", kana: "おてあらい", romaji: "otearai", vn: "Nhà vệ sinh", explanation: "Thủ (手 - Tay) + Tẩy (洗 - Rửa). Nơi để rửa tay (cách nói tránh lịch sự của WC)." },
      { jp: "階段", kana: "かいだん", romaji: "kaidan", vn: "Cầu thang", explanation: "Giai (階 - Bậc) + Đoạn (段 - Bậc). Các bậc thang nối tiếp nhau." },
      { jp: "電話", kana: "でんわ", romaji: "denwa", vn: "Điện thoại", explanation: "Điện (電 - Điện) + Thoại (話 - Nói chuyện). Nói chuyện thông qua tín hiệu điện." },
      { jp: "地下", kana: "ちか", romaji: "chika", vn: "Tầng hầm", explanation: "Địa (地 - Đất) + Hạ (下 - Dưới). Phần nằm dưới mặt đất." },
      { jp: "国", kana: "くに", romaji: "kuni", vn: "Đất nước", explanation: "Quốc (国 - Quốc gia)." },
      { jp: "会社", kana: "かいしゃ", romaji: "kaisha", vn: "Công ty", explanation: "Hội (会) + Xã (社). Tập thể làm ăn kinh doanh." },
      { jp: "家", kana: "うち / いえ", romaji: "uchi / ie", vn: "Nhà", explanation: "Gia (家 - Gia đình, ngôi nhà)." },
      { jp: "靴", kana: "くつ", romaji: "kutsu", vn: "Giày", explanation: "Ngoa (靴)." },
      { jp: "ネクタイ", kana: "ネクタイ", romaji: "nekutai", vn: "Cà vạt", explanation: "Từ tiếng Anh: Necktie." },
      { jp: "ワイン", kana: "ワイン", romaji: "wain", vn: "Rượu vang", explanation: "Từ tiếng Anh: Wine." },
      { jp: "いくら", kana: "いくら", romaji: "ikura", vn: "Bao nhiêu tiền", explanation: "Dùng để hỏi giá cả." }
    ],
    grammar: [
      {
        title: "Cấu trúc 1: ここ / そこ / あそこ (Chỉ nơi chốn)",
        formula: "N は [Nơi chốn] です。",
        examples: [
          { jp: "お手洗いは あそこです。", romaji: "Otearai wa asoko desu.", vn: "Nhà vệ sinh ở đằng kia." },
          { jp: "山田さんは 事務所です。", romaji: "Yamada-san wa jimusho desu.", vn: "Anh Yamada đang ở văn phòng." }
        ]
      },
      {
        title: "Cấu trúc 2: Hỏi địa điểm (どこ)",
        formula: "N は どこですか。",
        examples: [
          { jp: "エレベーターは どこですか。", romaji: "Erebeetaa wa doko desu ka.", vn: "Thang máy ở đâu vậy?" }
        ]
      }
    ],
    conversation: [
      { speaker: "Quan", text_jp: "すみません、そのネクタイを見せてください。", romaji: "Sumimasen, sono nekutai o misete kudasai.", text_vn: "Xin lỗi, cho tôi xem cái cà vạt đó." },
      { speaker: "Nhân viên", text_jp: "はい、どうぞ。これはイタリアのネクタイです。", romaji: "Hai, douzo. Kore wa Itaria no nekutai desu.", text_vn: "Vâng, xin mời. Đây là cà vạt của Ý." },
      { speaker: "Quan", text_jp: "いくらですか。", romaji: "Ikura desu ka.", text_vn: "Giá bao nhiêu tiền vậy?" },
      { speaker: "Nhân viên", text_jp: "7,000円です。", romaji: "Nana-sen en desu.", text_vn: "7,000 Yên ạ." },
      { speaker: "Quan", text_jp: "じゃ、これをください。", romaji: "Ja, kore o kudasai.", text_vn: "Vậy, cho tôi mua cái này." }
    ]
  },
  {
    id: 4,
    title: "Bài 4: Thời gian & Động từ",
    description: "Bắt đầu tiếp cận với động từ (hiện tại/quá khứ) và cách nói giờ giấc.",
    vocabulary: [
      { jp: "起きます", kana: "おきます", romaji: "okimasu", vn: "Thức dậy", explanation: "Khởi (起). Đứng lên, bắt đầu." },
      { jp: "寝ます", kana: "ねます", romaji: "nemasu", vn: "Ngủ", explanation: "Tẩm (寝). Đi ngủ." },
      { jp: "働きます", kana: "はたらきます", romaji: "hatarakimasu", vn: "Làm việc", explanation: "Động (働). Chữ Nhân (人) đứng cạnh chữ Động (動), ý chỉ người đang di chuyển, làm việc." },
      { jp: "休みます", kana: "やすみます", romaji: "yasumimasu", vn: "Nghỉ ngơi", explanation: "Hưu (休). Chữ Nhân (人) dựa vào cái Cây (木), hình ảnh người đang nghỉ ngơi." },
      { jp: "勉強します", kana: "べんきょうします", romaji: "benkyoushimasu", vn: "Học tập", explanation: "Miễn (勉 - Cố gắng) + Cường (強 - Mạnh). Ép bản thân cố gắng (việc học thường vất vả)." },
      { jp: "終わります", kana: "おわります", romaji: "owarimasu", vn: "Kết thúc", explanation: "Chung (終). Điểm dừng cuối cùng." },
      { jp: "デパート", kana: "デパート", romaji: "depaato", vn: "Cửa hàng bách hóa", explanation: "Từ tiếng Anh: Department store." },
      { jp: "銀行", kana: "ぎんこう", romaji: "ginkou", vn: "Ngân hàng", explanation: "Ngân (銀 - Bạc) + Hành (行 - Cửa tiệm)." },
      { jp: "郵便局", kana: "ゆうびんきょく", romaji: "yuubinkyoku", vn: "Bưu điện", explanation: "Bưu (郵) + Tiện (便) + Cục (局). Cục xử lý bưu kiện." },
      { jp: "図書館", kana: "としょかん", romaji: "toshokan", vn: "Thư viện", explanation: "Đồ (図 - Bản đồ/Tranh) + Thư (書 - Sách) + Quán (館 - Tòa nhà). Tòa nhà chứa sách và tài liệu." },
      { jp: "美術館", kana: "びじゅつかん", romaji: "bijutsukan", vn: "Bảo tàng mỹ thuật", explanation: "Mỹ (美 - Đẹp) + Thuật (術 - Nghệ thuật) + Quán (館). Nơi trưng bày tác phẩm nghệ thuật." },
      { jp: "午前", kana: "ごぜん", romaji: "gozen", vn: "Sáng (AM)", explanation: "Ngọ (午 - Giữa trưa) + Tiền (前 - Trước). Thời gian trước 12h trưa." },
      { jp: "午後", kana: "ごご", romaji: "gogo", vn: "Chiều (PM)", explanation: "Ngọ (午 - Giữa trưa) + Hậu (後 - Sau). Thời gian sau 12h trưa." },
      { jp: "朝", kana: "あさ", romaji: "asa", vn: "Buổi sáng", explanation: "Triêu (朝). Tờ mờ sáng." },
      { jp: "昼", kana: "ひる", romaji: "hiru", vn: "Buổi trưa", explanation: "Trú (昼)." },
      { jp: "晩", kana: "ばん", romaji: "ban", vn: "Buổi tối", explanation: "Vãn (晩). Buổi tối muộn." },
      { jp: "夜", kana: "よる", romaji: "yoru", vn: "Đêm", explanation: "Dạ (夜)." },
      { jp: "今", kana: "いま", romaji: "ima", vn: "Bây giờ", explanation: "Kim (今 - Hiện tại)." },
      { jp: "半", kana: "はん", romaji: "han", vn: "Rưỡi, một nửa", explanation: "Bán (半). Dùng cho giờ rưỡi." },
      { jp: "何時", kana: "なんじ", romaji: "nanji", vn: "Mấy giờ", explanation: "Hà (何 - Mấy) + Thời (時 - Giờ)." },
      { jp: "何分", kana: "なんぷん", romaji: "nanpun", vn: "Mấy phút", explanation: "Hà (何 - Mấy) + Phân (分 - Phút)." },
      { jp: "毎日", kana: "まいにち", romaji: "mainichi", vn: "Mỗi ngày", explanation: "Mỗi (毎) + Nhật (日)." },
      { jp: "毎朝", kana: "まいあさ", romaji: "maiasa", vn: "Mỗi sáng", explanation: "Mỗi (毎) + Triêu (朝)." }
    ],
    grammar: [
      {
        title: "Cấu trúc 1: Động từ thời hiện tại (〜ます)",
        formula: "V-ます / V-ません",
        examples: [
          { jp: "毎朝 6時に 起きます。", romaji: "Maiasa roku-ji ni okimasu.", vn: "Mỗi sáng tôi thức dậy lúc 6 giờ." },
          { jp: "きのう 勉強しませんでした。", romaji: "Kinou benkyoushimasen deshita.", vn: "Hôm qua tôi đã không học bài." }
        ]
      },
      {
        title: "Cấu trúc 2: Nói giờ",
        formula: "今は ~時 ~分 です。",
        examples: [
          { jp: "今は 8時 半 です。", romaji: "Ima wa hachi-ji han desu.", vn: "Bây giờ là 8 giờ rưỡi." }
        ]
      },
      {
        title: "Cấu trúc 3: Khoảng thời gian (から...まで)",
        formula: "N1 から N2 まで",
        examples: [
          { jp: "9時から 5時まで 働きます。", romaji: "Ku-ji kara go-ji made hatarakimasu.", vn: "Tôi làm việc từ 9 giờ đến 5 giờ." }
        ]
      }
    ],
    conversation: [
      { speaker: "Khách", text_jp: "すみません。ヤマト美術館の電話番号は何番ですか。", romaji: "Sumimasen. Yamato bijutsukan no denwabangou wa nanban desu ka.", text_vn: "Xin lỗi. Số điện thoại của bảo tàng nghệ thuật Yamato là số mấy?" },
      { speaker: "Bảo tàng", text_jp: "ヤマト美術館ですね。079-456-7890 です。", romaji: "Yamato bijutsukan desu ne. Zero-nana-kyuu - yon-go-roku - nana-hachi-kyuu-zero desu.", text_vn: "Bảo tàng nghệ thuật Yamato đúng không ạ. Số là 079-456-7890." },
      { speaker: "Khách", text_jp: "はい。何時から何時までですか。", romaji: "Hai. Nanji kara nanji made desu ka.", text_vn: "Vâng. Mở cửa từ mấy giờ đến mấy giờ vậy?" },
      { speaker: "Bảo tàng", text_jp: "9時から4時までです。休みは月曜日です。", romaji: "Ku-ji kara yo-ji made desu. Yasumi wa getsuyoubi desu.", text_vn: "Từ 9 giờ đến 4 giờ. Ngày nghỉ là thứ Hai." }
    ]
  },
  {
    id: 5,
    title: "Bài 5: Di chuyển (Đi, Đến, Về)",
    description: "Sử dụng các động từ di chuyển đi kèm với các trợ từ chỉ điểm đến, phương tiện và người đồng hành.",
    vocabulary: [
      { jp: "行きます", kana: "いきます", romaji: "ikimasu", vn: "Đi", explanation: "Hành (行). Đi tới một điểm đến xa người nói." },
      { jp: "来ます", kana: "きます", romaji: "kimasu", vn: "Đến", explanation: "Lai (来). Di chuyển về phía người nói." },
      { jp: "帰ります", kana: "かえります", romaji: "kaerimasu", vn: "Về", explanation: "Quy (帰). Trở về điểm gốc (nhà, quê hương)." },
      { jp: "学校", kana: "がっこう", romaji: "gakkou", vn: "Trường học", explanation: "Học (学 - Học tập) + Hiệu (校 - Ngôi trường)." },
      { jp: "スーパー", kana: "スーパー", romaji: "suupaa", vn: "Siêu thị", explanation: "Từ tiếng Anh: Supermarket." },
      { jp: "駅", kana: "えき", romaji: "eki", vn: "Nhà ga", explanation: "Dịch (駅 - Trạm xe)." },
      { jp: "飛行機", kana: "ひこうき", romaji: "hikouki", vn: "Máy bay", explanation: "Phi (飛 - Bay) + Hành (行 - Đi) + Cơ (機 - Máy móc). Cỗ máy di chuyển bằng cách bay." },
      { jp: "船", kana: "ふね", romaji: "fune", vn: "Tàu, thuyền", explanation: "Thuyền (船)." },
      { jp: "電車", kana: "でんしゃ", romaji: "densha", vn: "Tàu điện", explanation: "Điện (電) + Xa (車 - Xe)." },
      { jp: "地下鉄", kana: "ちかてつ", romaji: "chikatetsu", vn: "Tàu điện ngầm", explanation: "Địa (地) + Hạ (下) + Thiết (鉄 - Sắt). Tuyến đường sắt dưới lòng đất." },
      { jp: "新幹線", kana: "しんかんせん", romaji: "shinkansen", vn: "Tàu siêu tốc", explanation: "Tân (新 - Mới) + Cán (幹 - Cốt lõi) + Tuyến (線 - Đường ray). Tuyến đường sắt huyết mạch mới." },
      { jp: "バス", kana: "バス", romaji: "basu", vn: "Xe buýt", explanation: "Từ tiếng Anh: Bus." },
      { jp: "タクシー", kana: "タクシー", romaji: "takushii", vn: "Taxi", explanation: "Từ tiếng Anh: Taxi." },
      { jp: "自転車", kana: "じてんしゃ", romaji: "jitensha", vn: "Xe đạp", explanation: "Tự (自 - Tự mình) + Chuyển (転 - Lăn) + Xa (車 - Xe). Xe di chuyển bằng sức đạp của bản thân." },
      { jp: "歩いて", kana: "あるいて", romaji: "aruite", vn: "Đi bộ", explanation: "Bộ (歩). Dùng hai chân để đi." },
      { jp: "人", kana: "ひと", romaji: "hito", vn: "Người", explanation: "Nhân (人)." },
      { jp: "友達", kana: "ともだち", romaji: "tomodachi", vn: "Bạn bè", explanation: "Hữu (友) + Đạt (達)." },
      { jp: "彼", kana: "かれ", romaji: "kare", vn: "Anh ấy, bạn trai", explanation: "Bỉ (彼)." },
      { jp: "彼女", kana: "かのじょ", romaji: "kanojo", vn: "Cô ấy, bạn gái", explanation: "Bỉ (彼) + Nữ (女)." },
      { jp: "家族", kana: "かぞく", romaji: "kazoku", vn: "Gia đình", explanation: "Gia (家 - Nhà) + Tộc (族 - Họ hàng, gia tộc)." },
      { jp: "一人で", kana: "ひとりで", romaji: "hitori de", vn: "Một mình", explanation: "Nhất (一) + Nhân (人)." },
      { jp: "先週", kana: "せんしゅう", romaji: "senshuu", vn: "Tuần trước", explanation: "Tiên (先 - Trước) + Chu (週 - Tuần)." },
      { jp: "今週", kana: "こんしゅう", romaji: "konshuu", vn: "Tuần này", explanation: "Kim (今 - Nay) + Chu (週 - Tuần)." },
      { jp: "来週", kana: "らいしゅう", romaji: "raishuu", vn: "Tuần sau", explanation: "Lai (来 - Đến) + Chu (週 - Tuần)." },
      { jp: "誕生日", kana: "たんじょうび", romaji: "tanjoubi", vn: "Sinh nhật", explanation: "Đản (誕 - Ra đời) + Sinh (生 - Sống) + Nhật (日 - Ngày). Ngày sinh ra đời." }
    ],
    grammar: [
      {
        title: "Cấu trúc 1: Đi/Đến/Về đâu đó (Trợ từ へ)",
        formula: "[Nơi chốn] へ [行きます / 来ます / 帰ります]",
        examples: [
          { jp: "来週 日本へ 行きます。", romaji: "Raishuu Nihon e ikimasu.", vn: "Tuần sau tôi sẽ đi Nhật." },
          { jp: "どこへも 行きません。", romaji: "Doko e mo ikimasen.", vn: "Tôi không đi đâu cả." }
        ]
      },
      {
        title: "Cấu trúc 2: Đi bằng phương tiện gì (Trợ từ で)",
        formula: "[Phương tiện] で [Nơi chốn] へ 行きます",
        examples: [
          { jp: "自転車で 学校へ 行きます。", romaji: "Jitensha de gakkou e ikimasu.", vn: "Tôi đi đến trường bằng xe đạp." }
        ]
      },
      {
        title: "Cấu trúc 3: Đi cùng ai (Trợ từ と)",
        formula: "[Người] と [Nơi chốn] へ 行きます",
        examples: [
          { jp: "友達と 東京へ 行きます。", romaji: "Tomodachi to Toukyou e ikimasu.", vn: "Tôi đi Tokyo cùng với bạn." }
        ]
      }
    ],
    conversation: [
      { speaker: "Santos", text_jp: "すみません。甲子園（こうしえん）行きの電車はどれですか。", romaji: "Sumimasen. Koushien yuki no densha wa dore desu ka.", text_vn: "Xin lỗi. Tàu đi Koshien là tàu nào vậy?" },
      { speaker: "Nhân viên", text_jp: "3番線ですよ。", romaji: "Sanbansen desu yo.", text_vn: "Tuyến số 3 đấy ạ." },
      { speaker: "Santos", text_jp: "どうも。", romaji: "Doumo.", text_vn: "Cảm ơn." },
      { speaker: "Quan", text_jp: "佐藤さん、昨日はどこへ行きましたか。", romaji: "Satou-san, kinou wa doko e ikimashita ka.", text_vn: "Chị Sato, hôm qua chị đã đi đâu vậy?" },
      { speaker: "Sato", text_jp: "京都へ行きました。友達と新幹線で行きました。", romaji: "Kyouto e ikimashita. Tomodachi to shinkansen de ikimashita.", text_vn: "Tôi đã đi Kyoto. Tôi đi cùng bạn bằng tàu siêu tốc." }
    ]
  },
  {
    id: 6,
    title: "Từ vựng IT",
    description: "Các thuật ngữ chuyên ngành Công nghệ thông tin và Lập trình phần mềm bằng tiếng Nhật.",
    vocabulary: [
      { jp: "プログラミング", kana: "プログラミング", romaji: "Puroguramingu", vn: "Lập trình", explanation: "Từ mượn tiếng Anh: Programming." },
      { jp: "開発", kana: "かいはつ", romaji: "Kaihatsu", vn: "Phát triển", explanation: "開 (Khai - Mở) + 発 (Phát - Bắn ra). Việc tạo ra phần mềm (Software Development)." },
      { jp: "変数", kana: "へんすう", romaji: "Hensuu", vn: "Biến số", explanation: "変 (Biến - Thay đổi) + 数 (Số). Giá trị có thể thay đổi trong quá trình chạy chương trình." },
      { jp: "関数", kana: "かんすう", romaji: "Kansuu", vn: "Hàm (Function)", explanation: "関 (Quan - Liên quan) + 数 (Số). Mối quan hệ đầu vào - đầu ra." },
      { jp: "引数", kana: "ひきすう", romaji: "Hikisuu", vn: "Tham số (Argument)", explanation: "引 (Dẫn - Kéo vào) + 数 (Số). Các giá trị được truyền (kéo) vào một hàm." },
      { jp: "配列", kana: "はいれつ", romaji: "Hairetsu", vn: "Mảng (Array)", explanation: "配 (Phối - Xếp, phân phát) + 列 (Liệt - Hàng, cột). Tập hợp dữ liệu xếp thành hàng." },
      { jp: "文字列", kana: "もじれつ", romaji: "Mojiretsu", vn: "Chuỗi (String)", explanation: "文字 (Văn Tự - Chữ cái) + 列 (Liệt - Hàng). Một chuỗi các ký tự." },
      { jp: "条件分岐", kana: "じょうけんぶんき", romaji: "Jouken bunki", vn: "Câu lệnh điều kiện (If)", explanation: "条件 (Điều kiện) + 分岐 (Phân nhánh). Chương trình rẽ nhánh dựa trên điều kiện." },
      { jp: "繰り返し", kana: "くりかえし", romaji: "Kurikaeshi", vn: "Vòng lặp (Loop)", explanation: "Nghĩa đen là 'Lặp đi lặp lại' một hành động (For, While)." },
      { jp: "画面", kana: "がめん", romaji: "Gamen", vn: "Màn hình, Giao diện", explanation: "画 (Họa - Hình ảnh) + 面 (Diện - Bề mặt). Bề mặt hiển thị." },
      { jp: "実装", kana: "じっそう", romaji: "Jissou", vn: "Triển khai (Implement)", explanation: "実 (Thực) + 装 (Trang - Lắp ráp). Đưa code vào hoạt động thực tế." },
      { jp: "仕様書", kana: "しようしょ", romaji: "Shiyousho", vn: "Tài liệu đặc tả (Spec)", explanation: "仕 (Sĩ) + 様 (Dạng) + 書 (Thư - Giấy). Tài liệu mô tả tính năng phần mềm." },
      { jp: "バグ", kana: "バグ", romaji: "Bagu", vn: "Lỗi (Bug)", explanation: "Từ mượn tiếng Anh: Bug." },
      { jp: "修正", kana: "しゅうせい", romaji: "Shuusei", vn: "Fix lỗi, chỉnh sửa", explanation: "修 (Tu - Sửa chữa) + 正 (Chính - Đúng đắn)." },
      { jp: "データベース", kana: "データベース", romaji: "Deetabeesu", vn: "Cơ sở dữ liệu", explanation: "Từ mượn tiếng Anh: Database." },
      { jp: "環境", kana: "かんきょう", romaji: "Kankyou", vn: "Môi trường", explanation: "環 (Hoàn - Bao quanh) + 境 (Cảnh - Ranh giới). Môi trường phát triển (Dev Env)." },
      { jp: "構築", kana: "こうちく", romaji: "Kouchiku", vn: "Cấu trúc, Xây dựng", explanation: "構 (Cấu - Tạo thành) + 築 (Trúc - Xây cất). Build hệ thống (Build / Setup)." },
      { jp: "運用", kana: "うんよう", romaji: "Unyou", vn: "Vận hành", explanation: "運 (Vận - Chuyển động) + 用 (Dụng - Sử dụng). Vận hành hệ thống (Operation)." },
      { jp: "保守", kana: "ほしゅ", romaji: "Hoshu", vn: "Bảo trì", explanation: "保 (Bảo - Giữ gìn) + 守 (Thủ - Bảo vệ). Maintenance." },
      { jp: "要件定義", kana: "ようけんていぎ", romaji: "Youken teigi", vn: "Định nghĩa yêu cầu", explanation: "要件 (Yêu cầu) + 定義 (Định nghĩa). Requirement Definition." },
      { jp: "設計", kana: "せっけい", romaji: "Sekkei", vn: "Thiết kế", explanation: "設 (Thiết - Lập ra) + 計 (Kế - Tính toán). Design (System Design)." },
      { jp: "テスト", kana: "テスト", romaji: "Tesuto", vn: "Kiểm thử (Test)", explanation: "Từ mượn tiếng Anh: Test." },
      { jp: "単体テスト", kana: "たんたいテスト", romaji: "Tantai tesuto", vn: "Unit Test", explanation: "単体 (Đơn thể - Một khối duy nhất) + Test. Test từng function nhỏ." },
      { jp: "結合テスト", kana: "けつごうテスト", romaji: "Ketsugou tesuto", vn: "Integration Test", explanation: "結合 (Kết hợp) + Test. Test khi nối các module lại với nhau." },
      { jp: "総合テスト", kana: "そうごうテスト", romaji: "Sougou tesuto", vn: "System Test", explanation: "総合 (Tổng hợp) + Test. Kiểm thử toàn bộ hệ thống." },
      { jp: "納品", kana: "のうひん", romaji: "Nouhin", vn: "Bàn giao sản phẩm", explanation: "納 (Nạp - Nộp) + 品 (Phẩm - Hàng hóa). Release / Deliver." },
      { jp: "サーバー", kana: "サーバー", romaji: "Saabaa", vn: "Máy chủ (Server)", explanation: "Từ mượn tiếng Anh: Server." },
      { jp: "暗号化", kana: "あんごうか", romaji: "Angouka", vn: "Mã hóa (Encryption)", explanation: "暗号 (Ám hiệu - Mật mã) + 化 (Hóa - Biến thành)." },
      { jp: "復号", kana: "ふくごう", romaji: "Fukugou", vn: "Giải mã (Decryption)", explanation: "復 (Phục - Khôi phục) + 号 (Hiệu). Dịch ngược từ mật mã." },
      { jp: "本番", kana: "ほんばん", romaji: "Honban", vn: "Môi trường thật", explanation: "本 (Bản - Thật) + 番 (Phiên - Lần). Môi trường Production." },
      { jp: "初期化", kana: "しょきか", romaji: "Shokika", vn: "Khởi tạo (Initialize)", explanation: "初期 (Sơ kỳ - Ban đầu) + 化 (Hóa). Đưa về trạng thái ban đầu." }
    ],
    grammar: [],
    conversation: [
      { speaker: "Leader", text_jp: "この機能の実装は終わりましたか。", romaji: "Kono kinou no jissou wa owarimashita ka.", text_vn: "Việc triển khai (implement) tính năng này đã xong chưa?" },
      { speaker: "Dev", text_jp: "はい、終わりました。今、単体テストをしています。", romaji: "Hai, owarimashita. Ima, tantai tesuto o shite imasu.", text_vn: "Vâng, xong rồi ạ. Bây giờ tôi đang chạy Unit Test." },
      { speaker: "Leader", text_jp: "バグがありますか。", romaji: "Bagu ga arimasu ka.", text_vn: "Có lỗi (bug) nào không?" },
      { speaker: "Dev", text_jp: "いいえ、ありません。すべて正常です。", romaji: "Iie, arimasen. Subete seijou desu.", text_vn: "Không, không có ạ. Tất cả đều bình thường." }
    ]
  }
];
