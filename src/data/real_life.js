export const dailyConversations = {
  id: 100,
  title: "Giao tiếp đời sống",
  description: "Các tình huống giao tiếp tiếng Nhật thực tế trong đời sống hàng ngày: Chào hỏi, ăn uống, mua sắm và đi chơi.",
  vocabulary: [
    { jp: "初めまして", kana: "はじめまして", romaji: "Hajimemashite", vn: "Rất vui được gặp bạn", type: "Chào hỏi", jlpt: "N5", example: "初めまして、田中です。(Rất vui được gặp, tôi là Tanaka)" },
    { jp: "宜しくお願いします", kana: "よろしくおねがいします", romaji: "Yoroshiku onegaishimasu", vn: "Mong được giúp đỡ", type: "Chào hỏi", jlpt: "N5", example: "どうぞ宜しくお願いします。(Rất mong được bạn giúp đỡ)" },
    { jp: "お会計", kana: "おかいけい", romaji: "Okaikei", vn: "Tính tiền / Thanh toán", type: "Nhà hàng", jlpt: "N4", example: "お会計をお願いします。(Làm ơn tính tiền giúp tôi)" },
    { jp: "おすすめ", kana: "おすすめ", romaji: "Osusume", vn: "Gợi ý / Đề cử", type: "Nhà hàng", jlpt: "N4", example: "おすすめは何ですか。(Món gợi ý là gì vậy?)" },
    { jp: "注文", kana: "ちゅうもん", romaji: "Chuumon", vn: "Gọi món / Đặt hàng", type: "Nhà hàng", jlpt: "N4", example: "注文をお願いします。(Cho tôi gọi món)" },
    { jp: "美味しい", kana: "おいしい", romaji: "Oishii", vn: "Ngon", type: "Ăn uống", jlpt: "N5", example: "このラーメンはとても美味しいです。(Món ramen này rất ngon)" },
    { jp: "いくら", kana: "いくら", romaji: "Ikura", vn: "Bao nhiêu tiền", type: "Mua sắm", jlpt: "N5", example: "これはいくらですか。(Cái này bao nhiêu tiền?)" },
    { jp: "試着", kana: "しちゃく", romaji: "Shichaku", vn: "Thử đồ", type: "Mua sắm", jlpt: "N3", example: "試着してもいいですか。(Tôi mặc thử có được không?)" },
    { jp: "サイズ", kana: "さいず", romaji: "Saizu", vn: "Kích cỡ", type: "Mua sắm", jlpt: "N5", example: "Mサイズはありますか。(Có size M không?)" },
    { jp: "映画館", kana: "えいがかん", romaji: "Eigakan", vn: "Rạp chiếu phim", type: "Đi chơi", jlpt: "N4", example: "週末、映画館に行きます。(Cuối tuần tôi đi rạp chiếu phim)" },
    { jp: "チケット", kana: "ちけっと", romaji: "Chiketto", vn: "Vé", type: "Đi chơi", jlpt: "N5", example: "チケットを２枚買いました。(Tôi đã mua 2 vé)" },
    { jp: "待ち合わせ", kana: "まちあわせ", romaji: "Machiawase", vn: "Hẹn gặp", type: "Đi chơi", jlpt: "N3", example: "駅で待ち合わせしましょう。(Hẹn gặp nhau ở nhà ga nhé)" },
    { jp: "遊びに行く", kana: "あそびにいく", romaji: "Asobi ni iku", vn: "Đi chơi", type: "Đi chơi", jlpt: "N5", example: "明日、友達と遊びに行きます。(Ngày mai tôi đi chơi với bạn)" },
    { jp: "駅", kana: "えき", romaji: "Eki", vn: "Nhà ga", type: "Hỏi đường", jlpt: "N5", example: "駅はどこですか。(Nhà ga ở đâu vậy?)" },
    { jp: "真っ直ぐ", kana: "まっすぐ", romaji: "Massugu", vn: "Đi thẳng", type: "Hỏi đường", jlpt: "N5", example: "この道を真っ直ぐ行ってください。(Hãy đi thẳng con đường này)" }
  ],
  grammar: [
    {
      title: "Cấu trúc: N は どこですか",
      formula: "N は どこですか",
      examples: [
        { jp: "駅はどこですか。", romaji: "Eki wa doko desu ka.", vn: "Nhà ga ở đâu vậy?" },
        { jp: "トイレはどこですか。", romaji: "Toire wa doko desu ka.", vn: "Nhà vệ sinh ở đâu vậy?" }
      ]
    },
    {
      title: "Cấu trúc: ~てもいいですか (Xin phép)",
      formula: "V-て + もいいですか",
      examples: [
        { jp: "試着してもいいですか。", romaji: "Shichaku shite mo ii desu ka.", vn: "Tôi mặc thử có được không?" },
        { jp: "ここに座ってもいいですか。", romaji: "Koko ni suwatte mo ii desu ka.", vn: "Tôi ngồi đây có được không?" }
      ]
    },
    {
      title: "Cấu trúc: ~ませんか (Rủ rê)",
      formula: "V-masu (bỏ masu) + ませんか",
      examples: [
        { jp: "一緒に映画を見に行きませんか。", romaji: "Issho ni eiga o mi ni ikimasen ka.", vn: "Bạn có muốn cùng đi xem phim không?" },
        { jp: "お茶を飲みませんか。", romaji: "Ocha o nomimasen ka.", vn: "Chúng ta đi uống trà nhé?" }
      ]
    }
  ],
  conversation: [
    { 
      speaker: "Itachi", 
      text_jp: "すみません、一番(いちばん)近(ちか)い駅(えき)はどこですか。", 
      romaji: "Sumimasen, ichiban chikai eki wa doko desu ka.", 
      text_vn: "Xin lỗi, nhà ga gần nhất ở đâu vậy?" 
    },
    { 
      speaker: "Kisame", 
      text_jp: "この道(みち)を真(ま)っ直(す)ぐ行(い)って、右(みぎ)に曲(ま)がってください。", 
      romaji: "Kono michi o massugu itte, migi ni magatte kudasai.", 
      text_vn: "Bạn đi thẳng con đường này, rồi rẽ phải nhé." 
    },
    { 
      speaker: "Kakuzu", 
      text_jp: "すみません、注文(ちゅうもん)をお願(ねが)いします。", 
      romaji: "Sumimasen, chuumon o onegaishimasu.", 
      text_vn: "Xin lỗi, cho tôi gọi món." 
    },
    { 
      speaker: "Nhân viên", 
      text_jp: "はい、何(なに)になさいますか。", 
      romaji: "Hai, nani ni nasaimasu ka.", 
      text_vn: "Vâng, quý khách muốn dùng gì ạ?" 
    },
    { 
      speaker: "Kakuzu", 
      text_jp: "このおすすめのラーメンを一(ひと)つください。", 
      romaji: "Kono osusume no raamen o hitotsu kudasai.", 
      text_vn: "Cho tôi một suất ramen gợi ý này." 
    },
    { 
      speaker: "Konan", 
      text_jp: "すみません、これ、いくらですか。", 
      romaji: "Sumimasen, kore, ikura desu ka.", 
      text_vn: "Xin lỗi, cái này bao nhiêu tiền vậy?" 
    },
    { 
      speaker: "Nhân viên", 
      text_jp: "それは３千(せん)円(えん)です。", 
      romaji: "Sore wa san-zen en desu.", 
      text_vn: "Cái đó giá 3.000 yên ạ." 
    },
    { 
      speaker: "Konan", 
      text_jp: "試(試)着(ちゃく)してもいいですか。", 
      romaji: "Shichaku shite mo ii desu ka.", 
      text_vn: "Tôi mặc thử có được không?" 
    },
    { 
      speaker: "Hidan", 
      text_jp: "今週(こんしゅう)末(まつ)、一緒(いっしょ)に映画(えいが)を見(み)に行(い)きませんか。", 
      romaji: "Konshuumatsu, issho ni eiga o mi ni ikimasen ka.", 
      text_vn: "Cuối tuần này, đi xem phim cùng tôi không?" 
    },
    { 
      speaker: "Kakuzu", 
      text_jp: "いいですね。何(なに)を見(み)ますか。", 
      romaji: "Ii desu ne. Nani o mimasu ka.", 
      text_vn: "Được đấy. Chúng ta xem gì?" 
    },
    { 
      speaker: "Hidan", 
      text_jp: "アクション映画(えいが)はどうですか。", 
      romaji: "Akushon eiga wa dou desu ka.", 
      text_vn: "Phim hành động thì sao?" 
    },
    { 
      speaker: "Kakuzu", 
      text_jp: "じゃあ、日曜日(にちようび)の午後(ごご)、駅(えき)で待(ま)ち合(あ)わせしましょう。", 
      romaji: "Jaa, nichiyoubi no gogo, eki de machiawase shimashou.", 
      text_vn: "Vậy chiều Chủ nhật, tụi mình hẹn gặp ở ga nhé." 
    }
  ]
};

export const businessConversations = {
  id: 101,
  title: "Tiếng Nhật Công Sở",
  description: "Giao tiếp trong môi trường công sở, phỏng vấn và làm việc tại Nhật.",
  vocabulary: [
    { jp: "お疲れ様です", kana: "おつかれさまです", romaji: "Otsukaresama desu", vn: "Anh/chị đã vất vả rồi", type: "Chào hỏi", jlpt: "N4", example: "お疲れ様です、本日の報告書です。(Anh đã vất vả rồi, đây là báo cáo hôm nay)" },
    { jp: "お先に失礼します", kana: "おさきにしつれいします", romaji: "Osaki ni shitsureishimasu", vn: "Tôi xin phép về trước", type: "Chào hỏi", jlpt: "N4", example: "お先に失礼します。(Tôi xin phép về trước đây)" },
    { jp: "確認", kana: "かくにん", romaji: "Kakunin", vn: "Xác nhận", type: "Công việc", jlpt: "N3", example: "書類を確認してください。(Xin hãy xác nhận tài liệu)" },
    { jp: "報告", kana: "ほうこく", romaji: "Houkoku", vn: "Báo cáo", type: "Công việc", jlpt: "N3", example: "進捗を報告します。(Tôi xin báo cáo tiến độ)" }
  ],
  grammar: [
    {
      title: "Cấu trúc: 謙譲語 (Khiêm nhường ngữ)",
      formula: "お/ご + V-masu + します",
      examples: [
        { jp: "私がご案内します。", romaji: "Watashi ga go-annai shimasu.", vn: "Tôi xin phép được hướng dẫn." },
        { jp: "後でお電話します。", romaji: "Ato de o-denwa shimasu.", vn: "Lát nữa tôi sẽ gọi điện thoại." }
      ]
    }
  ],
  conversation: [
    { 
      speaker: "Deidara", 
      text_jp: "先輩(せんぱい)、お疲(つか)れ様(さま)です。明日(あした)の会議(かいぎ)の資料(しりょう)を作成(さくせい)しました。", 
      romaji: "Senpai, otsukaresama desu. Ashita no kaigi no shiryou o sakusei shimashita.", 
      text_vn: "Tiền bối, anh vất vả rồi. Tôi đã làm xong tài liệu cho cuộc họp ngày mai." 
    },
    { 
      speaker: "Sasori", 
      text_jp: "お疲(つか)れ様(さま)。確認(かくにん)するから、そこに置(お)いておいて。", 
      romaji: "Otsukaresama. Kakunin suru kara, soko ni oite oite.", 
      text_vn: "Vất vả rồi. Tôi sẽ kiểm tra, cậu cứ để ở đó đi." 
    },
    { 
      speaker: "Deidara", 
      text_jp: "承知(しょうち)いたしました。では、お先(さき)に失礼(しつれい)します。", 
      romaji: "Shouchi itashimashita. Dewa, osaki ni shitsureishimasu.", 
      text_vn: "Tôi hiểu rồi ạ. Vậy tôi xin phép về trước." 
    },
    { 
      speaker: "Sasori", 
      text_jp: "うん、お疲(つか)れ様(さま)。", 
      romaji: "Un, otsukaresama.", 
      text_vn: "Ừ, cậu vất vả rồi." 
    }
  ]
};
