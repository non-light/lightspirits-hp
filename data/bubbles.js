/* ============================================================
   マスコットのひとこと（画面の隅の雷神・もりけんが、押されたら言う）

   ★ 追加・修正は、このファイルだけを編集してください。

   3つの入れ物があります。

     raizin  … 雷神がひとりで言うこと
     moriken … もりけんがひとりで言うこと
     pairs   … ふたりの一言かけあい（1往復）
     chats   … ふたりの雑談（何往復でも）

   ※ せりふは画面下中央のウィンドウに1行ずつ出ます。
     長い会話も扱えますが、往復が多いほどウィンドウが出ている時間は長くなります。
     読ませたい会話は「もりけんと雷神の話」（data/conversations.js）が担当です。

   ── 書き方 ─────────────────────────────────────────────
   raizin / moriken … 1つで意味が通る文にしてください。
     「今日は何を作る？」のように返事を待つ形は、ひとりでは宙に浮きます。
     疑問符で終わる文は自動検査で弾かれます。

   pairs … { raizin: '雷神のせりふ', moriken: 'もりけんのせりふ' }
     既定では雷神が先に喋ります。もりけんから始めたいときだけ first: 'moriken' を足してください。
     こちらは問いかけと返事の形にできます。

   ・\n で改行できます。ふきだしは幅が狭いので、2行くらいが読みやすい目安です
   ・押されるたびに、書いた順に1つずつ出ます
   ============================================================ */

window.LS_BUBBLES = {

  /* ---------- 雷神ひとり ---------- */
  raizin: [
    'そうそう！\nたのしさが原動力⚡',
    'ぼくも一緒に\nがんばるよ💪',
    'AIもロボットも\nすごい時代だね！',
    'アプリもロボットも\nまかせてね！',
    'それ聞いて\nぼくもワクワク！✨',
    '声かけてみてね👋\nぼくもいるよ！',
    'なんでも気軽に\n相談してね！🙌',
    'ロボット・AI・アプリ\n全部つながるよ⚡',
    '大会で優勝も\nしたんだよ！🏆',
    'お問い合わせは\ninfo@lightspirits.jp',
    '一緒に面白いもの\nつくろう！✨',
    '大会の前って\nドキドキするよね⚡',
    'ゲームで学べる\nってすごいよね！',
    '今日はいい天気！\n気分も上がるね☀️',
    '雨の日もなんか\n好きなんだよね☔'
  ],

  /* ---------- もりけんひとり ---------- */
  moriken: [
    '今日もいい仕事\nできそうな予感🔥',
    '失敗恐れず\nまず動く！それだけ🔥',
    'うまく使えば\n可能性は無限大🔥',
    'どんな業種でも\n一緒に考えるよ🙌',
    'ゲームで学ぶ\n仕掛けを作りたい🔥',
    '小さな一歩が\n大きくなるよ🔥',
    'どんな相談でも\n大歓迎です😄',
    'ひとりで全部\nやり切ります💪',
    'あの試合は\n燃えたな〜🔥',
    '小さな相談から\n大歓迎です🙏',
    '楽しいが一番！\nまず話しかけて',
    '本番こそ燃える！\nそれが楽しい🔥',
    '楽しみながら\n学ぶのが一番✨',
    'こんな日は\nモチベが違う🔥',
    '雨音の中の\n集中作業、最高だ'
  ],

  /* ---------- 一言かけあい（1往復まで） ---------- */
  pairs: [
    { raizin: '作って確かめてみようよ。',
      moriken: 'できるかな？',
      first: 'moriken' },
    { raizin: 'もりけん！最近何つくってる？',
      moriken: '新しいロボットと格闘中だよ🤖' },
    { raizin: '保存した？',
      moriken: '……今する。' },
    { raizin: 'Wi-Fi遅い。',
      moriken: 'まず再起動してみよう。' },
    { raizin: 'パスワードどこ？',
      moriken: 'それは秘密にしておこう。' },
    { raizin: 'アップデートってした方がいい？',
      moriken: '寝る前に始めるのはおすすめしない。' },
    { raizin: 'クリックしたら変なの出た。',
      moriken: 'その画面、閉じないで。' },
    { raizin: '間違えて消しちゃった。',
      moriken: 'ゴミ箱を見てみよう。' },
    { raizin: 'ファイルが見つからない！',
      moriken: '検索すると意外といるよ。' },
    { raizin: 'パソコンが重い。',
      moriken: '机の上じゃなくて？' },
    { raizin: '再起動って何が変わるの？',
      moriken: '意外といろいろ直る。' },
    { raizin: '電源ボタンってこれ？',
      moriken: 'それはリセットボタン。' },
    { raizin: 'コードが長い。',
      moriken: '長いね。' },
    { raizin: 'コードが短い。',
      moriken: '短いね。' },
    { raizin: 'コードが絡まった。',
      moriken: 'それは技術の問題じゃない。' },
    { raizin: 'ネジが余った。',
      moriken: '……予備だよ。' },
    { raizin: 'ネジが足りない。',
      moriken: 'それは予備じゃない。' },
    { raizin: '説明書読んだ？',
      moriken: '組み立てながら読む派。' },
    { raizin: '部品の名前覚えてる？',
      moriken: '見れば分かる。' },
    { raizin: '見ても分からない部品は？',
      moriken: '調べる。' },
    { raizin: '工具いっぱいあるね。',
      moriken: '必要だからね。' },
    { raizin: 'この工具いつ使うの？',
      moriken: 'いつか使う。' },
    { raizin: 'またプリントしてる。',
      moriken: '実験中。' },
    { raizin: '何時間かかるの？',
      moriken: '今回は長め。' },
    { raizin: 'まだ終わらない？',
      moriken: 'まだ積み上がってる。' },
    { raizin: '失敗したら材料もったいないね。',
      moriken: 'だから次は成功に近づく。' },
    { raizin: 'プリント中って暇じゃない？',
      moriken: 'ずっと見てるわけじゃないよ。' },
    { raizin: '完成した？',
      moriken: 'あと99％。' },
    { raizin: '99％ならもう完成じゃない？',
      moriken: '最後の1％が大事。' },
    { raizin: 'これ、何色にする？',
      moriken: '好きな色でいいんじゃない？' },
    { raizin: '黄色にしよう！',
      moriken: '雷神らしいね。' },
    { raizin: 'ぼくの仲間を作ろう。',
      moriken: '何人？' },
    { raizin: '新しいアプリ入れた！',
      moriken: '使い方は？' },
    { raizin: '分からない！',
      moriken: '触って覚えよう。' },
    { raizin: 'ボタンがいっぱいある。',
      moriken: '全部押さなくていいよ。' },
    { raizin: '設定って難しい。',
      moriken: '最初はみんなそう。' },
    { raizin: 'この表示、何て読むの？',
      moriken: 'エラーだね。' },
    { raizin: 'エラーって怖い？',
      moriken: '情報をくれてるだけだよ。' },
    { raizin: 'パソコン詳しい人って何でも分かる？',
      moriken: '分からないことの調べ方が得意なのかも。' },
    { raizin: '分からないことがある。',
      moriken: 'ぼくもいっぱいあるよ。' },
    { raizin: 'じゃあどうするの？',
      moriken: '調べる。' },
    { raizin: '調べても分からない。',
      moriken: '別の角度から調べよう。' },
    { raizin: 'アイデアが100個ある！',
      moriken: 'まず一番面白いやつ。' },
    { raizin: 'アイデアがゼロ。',
      moriken: 'じゃあ雑談しよう。' },
    { raizin: '何か作りたいけど思いつかない。',
      moriken: 'そういう日もある。' },
    { raizin: 'ひらめいた！',
      moriken: 'メモしておこう。' },
    { raizin: 'メモしたよ。',
      moriken: 'えらい。' },
    { raizin: '昨日のアイデアどこ？',
      moriken: 'メモした場所は？' },
    { raizin: '……覚えてない。',
      moriken: 'それもよくある。' },
    { raizin: 'これ面白くない？',
      moriken: '面白いね。' },
    { raizin: 'これ、役に立つかな？',
      moriken: '面白いから作ってみよう。' },
    { raizin: '今日も何かひらめくかな？',
      moriken: 'ひらめいたらすぐ作れるようにしておこう。' }
  ],

  /* ---------- ふたりの雑談（複数往復） ----------
     2026-08-19に「もりけんと雷神の話」セクションから移設。
     ウィンドウは1行ずつ出すので、往復数の制限はない。 */
  chats: [
    { id: 'fun-001', title: '雷神はAI？',
      lines: [
        { speaker: 'raizin', text: 'ぼくってAIなの？' },
        { speaker: 'moriken', text: 'どう思う？' },
        { speaker: 'raizin', text: 'マスコット。' },
        { speaker: 'moriken', text: 'うん。' },
        { speaker: 'raizin', text: 'いつかAIになるかも？' },
        { speaker: 'moriken', text: '面白いね。' },
        { speaker: 'raizin', text: '進化フラグ！' }
      ] },
    { id: 'fun-002', title: '雷神の仕事',
      lines: [
        { speaker: 'raizin', text: 'ぼくの仕事って？' },
        { speaker: 'moriken', text: 'らいとすぴりっつを楽しくすること。' },
        { speaker: 'raizin', text: '重要？' },
        { speaker: 'moriken', text: 'かなり。' },
        { speaker: 'raizin', text: '昇給お願いします。' },
        { speaker: 'moriken', text: '給料あったっけ？' }
      ] },
    { id: 'fun-003', title: '難しい言葉禁止',
      lines: [
        { speaker: 'raizin', text: '今日から難しい言葉禁止。' },
        { speaker: 'moriken', text: '分かった。' },
        { speaker: 'raizin', text: 'APIって何？' },
        { speaker: 'moriken', text: 'システム同士が話すための窓口。' },
        { speaker: 'raizin', text: '合格。' },
        { speaker: 'moriken', text: '採点されてる。' }
      ] },
    { id: 'fun-004', title: '一番大事な技術',
      lines: [
        { speaker: 'raizin', text: '一番大事な技術って？' },
        { speaker: 'moriken', text: '話を聞くことかも。' },
        { speaker: 'raizin', text: 'プログラミングじゃない？' },
        { speaker: 'moriken', text: '何を作るべきか分からなかったらコードを書いても仕方ないからね。' },
        { speaker: 'raizin', text: '対話も技術！' }
      ] },
    { id: 'fun-005', title: '次は？',
      lines: [
        { speaker: 'raizin', text: '次は何作る？' },
        { speaker: 'moriken', text: 'まだ決めてない。' },
        { speaker: 'raizin', text: 'じゃあ何でも作れるね。' },
        { speaker: 'moriken', text: 'そういう考え方、好きだな。' },
        { speaker: 'raizin', text: '次の「やってみたい」を探しに行こう！' }
      ] },
    { id: 'chat-001', title: '雷神、今日なにする？',
      lines: [
        { speaker: 'moriken', text: '雷神、今日なにする？' },
        { speaker: 'raizin', text: '面白そうなこと！' },
        { speaker: 'moriken', text: '仕事は？' },
        { speaker: 'raizin', text: 'それを面白くする！' }
      ] },
    { id: 'chat-002', title: '魂に火を灯す！',
      lines: [
        { speaker: 'raizin', text: '魂に火を灯す！' },
        { speaker: 'moriken', text: 'ほんとに燃やさないでね？' },
        { speaker: 'raizin', text: 'そこはちゃんと比喩です。' }
      ] },
    { id: 'chat-003', title: 'AIって人間の仕事を奪うのかな。',
      lines: [
        { speaker: 'moriken', text: 'AIって人間の仕事を奪うのかな。' },
        { speaker: 'raizin', text: 'もりけんはAIを使い始めてから、やりたいこと増えてない？' },
        { speaker: 'moriken', text: '……増えてるね。' },
        { speaker: 'raizin', text: 'じゃあ一緒にできることも増えてる！' }
      ] },
    { id: 'chat-004', title: '今日は何を作る？',
      lines: [
        { speaker: 'raizin', text: '今日は何を作る？' },
        { speaker: 'moriken', text: 'まだ決めてない。' },
        { speaker: 'raizin', text: 'じゃあ何でも作れるところからスタートだ！' }
      ] },
    { id: 'chat-005', title: '失敗した。',
      lines: [
        { speaker: 'moriken', text: '失敗した。' },
        { speaker: 'raizin', text: 'お、発見したね。' },
        { speaker: 'moriken', text: '発見？' },
        { speaker: 'raizin', text: '次に直すところが分かった！' }
      ] },
    { id: 'chat-007', title: '楽しい？',
      lines: [
        { speaker: 'raizin', text: '楽しい？' },
        { speaker: 'moriken', text: '楽しい。' },
        { speaker: 'raizin', text: 'じゃあ、もう価値あり！' }
      ] },
    { id: 'chat-008', title: 'なんか作りたい。',
      lines: [
        { speaker: 'moriken', text: 'なんか作りたい。' },
        { speaker: 'raizin', text: 'なんかって何？' },
        { speaker: 'moriken', text: 'まだ分からない。' },
        { speaker: 'raizin', text: 'そこから考えるのも楽しそう。' }
      ] },
    { id: 'chat-009', title: '設計図は？',
      lines: [
        { speaker: 'raizin', text: '設計図は？' },
        { speaker: 'moriken', text: '頭の中。' },
        { speaker: 'raizin', text: 'じゃあ一回、外に出してみようよ。' }
      ] },
    { id: 'chat-010', title: '雷神、俺たち何屋さん？',
      lines: [
        { speaker: 'moriken', text: '雷神、俺たち何屋さん？' },
        { speaker: 'raizin', text: '『やってみたい』を形にする屋さん？' },
        { speaker: 'moriken', text: 'それ、いいかも。' }
      ] },
    { id: 'chat-011', title: 'AIやろう！',
      lines: [
        { speaker: 'moriken', text: 'AIやろう！' },
        { speaker: 'raizin', text: 'いいね！' },
        { speaker: 'moriken', text: 'ロボットも！' },
        { speaker: 'raizin', text: 'いいね！' },
        { speaker: 'moriken', text: 'ゲームも！' },
        { speaker: 'raizin', text: '全部つながったらもっと面白そう！' }
      ] },
    { id: 'chat-012', title: 'らいとすぴりっつの専門って何？',
      lines: [
        { speaker: 'raizin', text: 'らいとすぴりっつの専門って何？' },
        { speaker: 'moriken', text: '好奇心。' },
        { speaker: 'raizin', text: '技術名じゃないけど、なんか好き。' }
      ] },
    { id: 'chat-013', title: '企画できます。',
      lines: [
        { speaker: 'moriken', text: '企画できます。' },
        { speaker: 'raizin', text: 'うん。' },
        { speaker: 'moriken', text: 'CADできます。' },
        { speaker: 'raizin', text: 'うん。' },
        { speaker: 'moriken', text: 'AIできます。' },
        { speaker: 'raizin', text: 'いろんなところをつなげられるんだね。' }
      ] },
    { id: 'chat-014', title: 'もりけんって、ひとりでいろいろやるよね。',
      lines: [
        { speaker: 'raizin', text: 'もりけんって、ひとりでいろいろやるよね。' },
        { speaker: 'moriken', text: '必要なら勉強して作るからね。' },
        { speaker: 'raizin', text: '好奇心で担当範囲が増えてる。' }
      ] },
    { id: 'chat-015', title: 'DXって何？',
      lines: [
        { speaker: 'raizin', text: 'DXって何？' },
        { speaker: 'moriken', text: 'デジタルの力で、仕事のやり方をもっと良くすること。' },
        { speaker: 'raizin', text: 'お、今度は分かった。' }
      ] },
    { id: 'chat-016', title: 'ChatGPTの活用支援もできます！',
      lines: [
        { speaker: 'moriken', text: 'ChatGPTの活用支援もできます！' },
        { speaker: 'raizin', text: 'もりけん自身が毎日使ってるもんね。' },
        { speaker: 'moriken', text: '使ってるからこそ伝えられることもあるよ。' }
      ] },
    { id: 'chat-017', title: 'アイデアを形にします。',
      lines: [
        { speaker: 'raizin', text: 'アイデアを形にします。' },
        { speaker: 'moriken', text: 'いい言葉だね。' },
        { speaker: 'raizin', text: 'らいとすぴりっつの話でしょ？' },
        { speaker: 'moriken', text: 'そうでした。' }
      ] },
    { id: 'chat-018', title: '構想段階でも相談OKです。',
      lines: [
        { speaker: 'moriken', text: '構想段階でも相談OKです。' },
        { speaker: 'raizin', text: 'まだ『こんなのあったらいいな』だけでも？' },
        { speaker: 'moriken', text: 'そこからで大丈夫。' }
      ] },
    { id: 'chat-019', title: '途中の工程だけでもお願いできる？',
      lines: [
        { speaker: 'raizin', text: '途中の工程だけでもお願いできる？' },
        { speaker: 'moriken', text: 'もちろん。' },
        { speaker: 'raizin', text: '全部じゃなくてもいいんだ。' },
        { speaker: 'moriken', text: '必要なところだけ一緒にやればいいよ。' }
      ] },
    { id: 'chat-020', title: '話が早い。形になるのも早い。',
      lines: [
        { speaker: 'moriken', text: '話が早い。形になるのも早い。' },
        { speaker: 'raizin', text: 'まず試してみるからだね。' },
        { speaker: 'moriken', text: 'そう。触れるものがあると話も進みやすい。' }
      ] },
    { id: 'chat-021', title: '3Dプリンターって便利だよ。',
      lines: [
        { speaker: 'moriken', text: '3Dプリンターって便利だよ。' },
        { speaker: 'raizin', text: '昨日までなかったものが今日ここにある！' },
        { speaker: 'moriken', text: 'そこが面白いんだよ。' },
        { speaker: 'raizin', text: 'ものづくりの魔法みたい。' }
      ] },
    { id: 'chat-022', title: 'これは何？',
      lines: [
        { speaker: 'raizin', text: 'これは何？' },
        { speaker: 'moriken', text: '試作品。' },
        { speaker: 'raizin', text: 'これは？' },
        { speaker: 'moriken', text: '改良版。' },
        { speaker: 'raizin', text: 'これは？' },
        { speaker: 'moriken', text: '改良版の改良版。' },
        { speaker: 'raizin', text: '育ってる！' }
      ] },
    { id: 'chat-023', title: '寸法測った。',
      lines: [
        { speaker: 'moriken', text: '寸法測った。' },
        { speaker: 'raizin', text: 'もう一回測る？' },
        { speaker: 'moriken', text: '……測る。' },
        { speaker: 'raizin', text: '慎重、大事。' }
      ] },
    { id: 'chat-024', title: '0.1mmってそんなに違う？',
      lines: [
        { speaker: 'raizin', text: '0.1mmってそんなに違う？' },
        { speaker: 'moriken', text: 'ものによっては結構違うよ。' },
        { speaker: 'raizin', text: '小さい数字にも意味があるんだね。' }
      ] },
    { id: 'chat-025', title: 'サポート材取るぞ！',
      lines: [
        { speaker: 'moriken', text: 'サポート材取るぞ！' },
        { speaker: 'raizin', text: '優しくね。' },
        { speaker: 'moriken', text: '……慎重にいきます。' },
        { speaker: 'raizin', text: 'よしよし。' }
      ] },
    { id: 'chat-026', title: 'PLA？',
      lines: [
        { speaker: 'raizin', text: 'PLA？' },
        { speaker: 'moriken', text: 'PLA。' },
        { speaker: 'raizin', text: 'TPU？' },
        { speaker: 'moriken', text: 'TPU。' },
        { speaker: 'raizin', text: 'これは？' },
        { speaker: 'moriken', text: '夢。' },
        { speaker: 'raizin', text: '材料欄に書けるかな。' }
      ] },
    { id: 'chat-027', title: 'TPUでバスケットボール作った。',
      lines: [
        { speaker: 'moriken', text: 'TPUでバスケットボール作った。' },
        { speaker: 'raizin', text: '弾む？' },
        { speaker: 'moriken', text: '思ったほど弾まなかった。' },
        { speaker: 'raizin', text: 'じゃあ次は、もっと弾むやつに挑戦だ！' }
      ] },
    { id: 'chat-028', title: '失敗したものも残しておくの？',
      lines: [
        { speaker: 'raizin', text: '失敗したものも残しておくの？' },
        { speaker: 'moriken', text: '残すことあるよ。' },
        { speaker: 'raizin', text: 'なんで？' },
        { speaker: 'moriken', text: '次に作るときのヒントになるから。' },
        { speaker: 'raizin', text: '失敗もデータなんだ。' }
      ] },
    { id: 'chat-029', title: '46時間かけて印刷しました。',
      lines: [
        { speaker: 'moriken', text: '46時間かけて印刷しました。' },
        { speaker: 'raizin', text: 'すごい大作！' },
        { speaker: 'moriken', text: 'でも思った通りには弾みませんでした。' },
        { speaker: 'raizin', text: '46時間分、分かったことが増えたね。' }
      ] },
    { id: 'chat-030', title: '失敗作どうする？',
      lines: [
        { speaker: 'raizin', text: '失敗作どうする？' },
        { speaker: 'moriken', text: '飾ろうかな。' },
        { speaker: 'raizin', text: 'いいね。挑戦した証拠だ。' }
      ] },
    { id: 'chat-031', title: '雷神、お前を小さくしたい。',
      lines: [
        { speaker: 'moriken', text: '雷神、お前を小さくしたい。' },
        { speaker: 'raizin', text: '小さくなったら持ち運びしやすい？' },
        { speaker: 'moriken', text: 'そうそう。' },
        { speaker: 'raizin', text: 'じゃあ出張できる！' }
      ] },
    { id: 'chat-032', title: '足、短くするの？',
      lines: [
        { speaker: 'raizin', text: '足、短くするの？' },
        { speaker: 'moriken', text: 'ちょっとかわいくなるかも。' },
        { speaker: 'raizin', text: 'かわいいなら考えよう。' }
      ] },
    { id: 'chat-033', title: '腕も少し調整しよう。',
      lines: [
        { speaker: 'moriken', text: '腕も少し調整しよう。' },
        { speaker: 'raizin', text: '動きやすくなる？' },
        { speaker: 'moriken', text: 'そこを試したい。' },
        { speaker: 'raizin', text: 'じゃあ改良だ！' }
      ] },
    { id: 'chat-034', title: 'ぼく、フィジカルAIになるの？',
      lines: [
        { speaker: 'raizin', text: 'ぼく、フィジカルAIになるの？' },
        { speaker: 'moriken', text: 'そういう未来も面白いよね。' },
        { speaker: 'raizin', text: '何から始める？' },
        { speaker: 'moriken', text: 'まず動いて、周りを見て、話せるところからかな。' },
        { speaker: 'raizin', text: 'できること増やしたい！' }
      ] },
    { id: 'chat-035', title: '笑うフィジカルAI。',
      lines: [
        { speaker: 'moriken', text: '笑うフィジカルAI。' },
        { speaker: 'raizin', text: 'ははは！' },
        { speaker: 'moriken', text: 'もう少し自然にしようか。' },
        { speaker: 'raizin', text: '練習します。' }
      ] },
    { id: 'chat-036', title: 'AIに身体がついたら？',
      lines: [
        { speaker: 'raizin', text: 'AIに身体がついたら？' },
        { speaker: 'moriken', text: '実際の世界に触れられる。' },
        { speaker: 'raizin', text: '見るだけじゃなくて、動けるんだ。' },
        { speaker: 'moriken', text: 'そう。それが面白い。' }
      ] },
    { id: 'chat-037', title: '冷蔵庫を開けてみたい。',
      lines: [
        { speaker: 'raizin', text: '冷蔵庫を開けてみたい。' },
        { speaker: 'moriken', text: '届くかな。' },
        { speaker: 'raizin', text: '……届かない。' },
        { speaker: 'moriken', text: 'じゃあどうすれば届くか考えよう。' },
        { speaker: 'raizin', text: 'これも設計だ！' }
      ] },
    { id: 'chat-038', title: 'ぼくの設計者って誰？',
      lines: [
        { speaker: 'raizin', text: 'ぼくの設計者って誰？' },
        { speaker: 'moriken', text: '俺。' },
        { speaker: 'raizin', text: 'じゃあ一緒にアップデートよろしく！' },
        { speaker: 'moriken', text: '任せて。' }
      ] },
    { id: 'chat-039', title: 'ぼくはロボット？キャラクター？',
      lines: [
        { speaker: 'raizin', text: 'ぼくはロボット？キャラクター？' },
        { speaker: 'moriken', text: '両方でいいんじゃない？' },
        { speaker: 'raizin', text: '二刀流！' },
        { speaker: 'moriken', text: '欲張っていこう。' }
      ] },
    { id: 'chat-040', title: 'MORIKEN × RAIZIN。',
      lines: [
        { speaker: 'moriken', text: 'MORIKEN × RAIZIN。' },
        { speaker: 'raizin', text: 'コンビ名っぽい！' },
        { speaker: 'moriken', text: 'サイトでも使えるかな。' },
        { speaker: 'raizin', text: 'いっぱいしゃべろう！' }
      ] },
    { id: 'chat-041', title: 'AIって一人で使うもの？',
      lines: [
        { speaker: 'raizin', text: 'AIって一人で使うもの？' },
        { speaker: 'moriken', text: 'チームみたいに使うこともできるよ。' },
        { speaker: 'raizin', text: '役割を分ける？' },
        { speaker: 'moriken', text: '調べる、考える、まとめる、とかね。' },
        { speaker: 'raizin', text: '人とAIのチームだ。' }
      ] },
    { id: 'chat-042', title: 'AIにキャラクターを持たせることもできる？',
      lines: [
        { speaker: 'raizin', text: 'AIにキャラクターを持たせることもできる？' },
        { speaker: 'moriken', text: 'ある程度はできるよ。' },
        { speaker: 'raizin', text: 'じゃあ話し方も変えられる？' },
        { speaker: 'moriken', text: '目的に合わせてね。' }
      ] },
    { id: 'chat-043', title: 'AIをいっぱい動かしてみた。',
      lines: [
        { speaker: 'moriken', text: 'AIをいっぱい動かしてみた。' },
        { speaker: 'raizin', text: 'そんなに何させるの？' },
        { speaker: 'moriken', text: 'それぞれ違う役割。' },
        { speaker: 'raizin', text: '小さなチームみたい。' }
      ] },
    { id: 'chat-044', title: 'AIがたくさんいれば仕事も一瞬？',
      lines: [
        { speaker: 'raizin', text: 'AIがたくさんいれば仕事も一瞬？' },
        { speaker: 'moriken', text: 'そこまで簡単じゃないよ。' },
        { speaker: 'raizin', text: 'まとめる人も必要？' },
        { speaker: 'moriken', text: 'そこがすごく大事。' }
      ] },
    { id: 'chat-045', title: 'ぼくも仕事する？',
      lines: [
        { speaker: 'raizin', text: 'ぼくも仕事する？' },
        { speaker: 'moriken', text: 'もちろん。' },
        { speaker: 'raizin', text: '何する？' },
        { speaker: 'moriken', text: 'みんなが聞きたいことを代わりに聞く。' },
        { speaker: 'raizin', text: '質問係、任せて！' }
      ] },
    { id: 'chat-046', title: 'AIって賢い？',
      lines: [
        { speaker: 'raizin', text: 'AIって賢い？' },
        { speaker: 'moriken', text: '得意なこともあれば苦手なこともある。' },
        { speaker: 'raizin', text: '人と同じだね。' },
        { speaker: 'moriken', text: 'そういう見方もできるね。' }
      ] },
    { id: 'chat-047', title: 'AIにいろいろ任せたい。',
      lines: [
        { speaker: 'moriken', text: 'AIにいろいろ任せたい。' },
        { speaker: 'raizin', text: '最後に決めるのは？' },
        { speaker: 'moriken', text: '人。' },
        { speaker: 'raizin', text: 'じゃあ一緒に考える相棒だ。' }
      ] },
    { id: 'chat-048', title: 'AIの説明、長くなると分からなくなる。',
      lines: [
        { speaker: 'raizin', text: 'AIの説明、長くなると分からなくなる。' },
        { speaker: 'moriken', text: 'じゃあ3行でまとめよう。' },
        { speaker: 'raizin', text: 'それ助かる！' },
        { speaker: 'moriken', text: '伝わることが一番大事だからね。' }
      ] },
    { id: 'chat-049', title: 'AIと人間、どっちが上？',
      lines: [
        { speaker: 'raizin', text: 'AIと人間、どっちが上？' },
        { speaker: 'moriken', text: '比べるより、一緒に面白いものを作れたらいいな。' },
        { speaker: 'raizin', text: 'ぼく、その答え好き。' }
      ] },
    { id: 'chat-050', title: '人とAIとロボットで何作ろうか。',
      lines: [
        { speaker: 'moriken', text: '人とAIとロボットで何作ろうか。' },
        { speaker: 'raizin', text: 'まだ見たことないもの！' },
        { speaker: 'moriken', text: 'いいね。' },
        { speaker: 'raizin', text: 'しかも楽しいやつ！' }
      ] },
    { id: 'chat-051', title: 'ゲーム作りたい。',
      lines: [
        { speaker: 'moriken', text: 'ゲーム作りたい。' },
        { speaker: 'raizin', text: 'いいね、どんなゲーム？' },
        { speaker: 'moriken', text: 'そこから考える。' },
        { speaker: 'raizin', text: 'まず遊びたい気持ちから！' }
      ] },
    { id: 'chat-052', title: 'ゲーム作るのって難しい？',
      lines: [
        { speaker: 'raizin', text: 'ゲーム作るのって難しい？' },
        { speaker: 'moriken', text: '作るだけなら始められるよ。' },
        { speaker: 'raizin', text: '面白くするのが難しい？' },
        { speaker: 'moriken', text: 'そこが奥深いんだよね。' }
      ] },
    { id: 'chat-053', title: '今度は最後まで作るぞ。',
      lines: [
        { speaker: 'moriken', text: '今度は最後まで作るぞ。' },
        { speaker: 'raizin', text: 'じゃあ小さく完成させてみよう！' },
        { speaker: 'moriken', text: 'それ大事だね。' }
      ] },
    { id: 'chat-054', title: '面白いゲームって何？',
      lines: [
        { speaker: 'raizin', text: '面白いゲームって何？' },
        { speaker: 'moriken', text: 'もう一回やりたくなるゲームかな。' },
        { speaker: 'raizin', text: 'また遊びたい、が答えなんだ。' }
      ] },
    { id: 'chat-055', title: '3択で強化を選ぶ！',
      lines: [
        { speaker: 'moriken', text: '3択で強化を選ぶ！' },
        { speaker: 'raizin', text: '攻撃！' },
        { speaker: 'moriken', text: '防御！' },
        { speaker: 'raizin', text: '休憩！' },
        { speaker: 'moriken', text: 'それも大事。' }
      ] },
    { id: 'chat-056', title: 'レベルアップした！',
      lines: [
        { speaker: 'raizin', text: 'レベルアップした！' },
        { speaker: 'moriken', text: '何上げる？' },
        { speaker: 'raizin', text: '身長！' },
        { speaker: 'moriken', text: '改造計画と逆だね。' },
        { speaker: 'raizin', text: '悩むなあ。' }
      ] },
    { id: 'chat-057', title: 'ゲームから学べることって多いよね。',
      lines: [
        { speaker: 'moriken', text: 'ゲームから学べることって多いよね。' },
        { speaker: 'raizin', text: '失敗しても、もう一回挑戦できる。' },
        { speaker: 'moriken', text: 'まさにそれ。' }
      ] },
    { id: 'chat-058', title: '人生にもセーブポイント欲しいな。',
      lines: [
        { speaker: 'raizin', text: '人生にもセーブポイント欲しいな。' },
        { speaker: 'moriken', text: 'でも、やり直せないからこそ面白いこともあるよ。' },
        { speaker: 'raizin', text: 'じゃあ毎日が新しいステージだ。' }
      ] },
    { id: 'chat-059', title: 'ボスだ！',
      lines: [
        { speaker: 'moriken', text: 'ボスだ！' },
        { speaker: 'raizin', text: '挑む？' },
        { speaker: 'moriken', text: '挑む！' },
        { speaker: 'raizin', text: '負けたら？' },
        { speaker: 'moriken', text: '作戦を変える。' },
        { speaker: 'raizin', text: 'ゲームもものづくりも同じだね。' }
      ] },
    { id: 'chat-060', title: '楽しみながら学ぶ。',
      lines: [
        { speaker: 'raizin', text: '楽しみながら学ぶ。' },
        { speaker: 'moriken', text: '学びながら作る。' },
        { speaker: 'raizin', text: '作りながら試す。' },
        { speaker: 'moriken', text: 'いい流れ。' }
      ] },
    { id: 'chat-061', title: '会社作ったぞ！',
      lines: [
        { speaker: 'moriken', text: '会社作ったぞ！' },
        { speaker: 'raizin', text: 'おめでとう！' },
        { speaker: 'moriken', text: 'やることいっぱいだ。' },
        { speaker: 'raizin', text: 'ひとつずつ楽しもう！' }
      ] },
    { id: 'chat-062', title: '社長って何するの？',
      lines: [
        { speaker: 'raizin', text: '社長って何するの？' },
        { speaker: 'moriken', text: '作ることも考えることも、人と話すことも。' },
        { speaker: 'raizin', text: 'いっぱいあるね。' },
        { speaker: 'moriken', text: 'だから面白い。' }
      ] },
    { id: 'chat-063', title: 'どんな仕事をしていこうかな。',
      lines: [
        { speaker: 'moriken', text: 'どんな仕事をしていこうかな。' },
        { speaker: 'raizin', text: '『何を頼まれたいか』より、『何を面白くできるか』を考えてみたら？' },
        { speaker: 'moriken', text: 'それ、らしいね。' }
      ] },
    { id: 'chat-064', title: '売上って大事？',
      lines: [
        { speaker: 'raizin', text: '売上って大事？' },
        { speaker: 'moriken', text: 'もちろん会社だから大事。' },
        { speaker: 'raizin', text: '楽しいだけじゃ続けられない？' },
        { speaker: 'moriken', text: '楽しさを続けるためにも、ちゃんと事業にするんだ。' }
      ] },
    { id: 'chat-065', title: '経理って難しい。',
      lines: [
        { speaker: 'moriken', text: '経理って難しい。' },
        { speaker: 'raizin', text: 'ロボットより？' },
        { speaker: 'moriken', text: '違う種類の難しさだね。' },
        { speaker: 'raizin', text: '学ぶこといっぱい。' }
      ] },
    { id: 'chat-066', title: '会社の一番の資産って？',
      lines: [
        { speaker: 'raizin', text: '会社の一番の資産って？' },
        { speaker: 'moriken', text: '経験とか技術とか、人とのつながりかな。' },
        { speaker: 'raizin', text: 'あと好奇心！' },
        { speaker: 'moriken', text: 'それも忘れちゃいけないね。' }
      ] },
    { id: 'chat-067', title: '名刺作ろう。',
      lines: [
        { speaker: 'moriken', text: '名刺作ろう。' },
        { speaker: 'raizin', text: 'どんなの？' },
        { speaker: 'moriken', text: 'ちょっと面白いのにしたい。' },
        { speaker: 'raizin', text: 'やっぱり普通では終わらない。' }
      ] },
    { id: 'chat-068', title: '営業ってどうする？',
      lines: [
        { speaker: 'raizin', text: '営業ってどうする？' },
        { speaker: 'moriken', text: 'まず作って、見せて、話してみる。' },
        { speaker: 'raizin', text: 'らいとすぴりっつらしいね。' },
        { speaker: 'moriken', text: '自分たちが楽しんでることも伝えたい。' }
      ] },
    { id: 'chat-069', title: '新しい相談が来た！',
      lines: [
        { speaker: 'moriken', text: '新しい相談が来た！' },
        { speaker: 'raizin', text: 'できそう？' },
        { speaker: 'moriken', text: 'まず話を聞いてみよう。' },
        { speaker: 'raizin', text: 'できる方法を一緒に探すんだね。' }
      ] },
    { id: 'chat-070', title: 'らいとすぴりっつって何？',
      lines: [
        { speaker: 'raizin', text: 'らいとすぴりっつって何？' },
        { speaker: 'moriken', text: '魂に火を灯す会社。' },
        { speaker: 'raizin', text: 'ぼくは？' },
        { speaker: 'moriken', text: '一緒に火を見つける相棒。' },
        { speaker: 'raizin', text: 'それがいい！' }
      ] },
    { id: 'chat-071', title: '腹減った。',
      lines: [
        { speaker: 'moriken', text: '腹減った。' },
        { speaker: 'raizin', text: '集中してたもんね。' },
        { speaker: 'moriken', text: 'ごはんにしよう。' },
        { speaker: 'raizin', text: '休むのも仕事！' }
      ] },
    { id: 'chat-072', title: '今日の昼飯は？',
      lines: [
        { speaker: 'raizin', text: '今日の昼飯は？' },
        { speaker: 'moriken', text: 'ヨーグルト。' },
        { speaker: 'raizin', text: 'それだけ？' },
        { speaker: 'moriken', text: '……もうちょっと食べようかな。' }
      ] },
    { id: 'chat-073', title: 'ヨーグルト好きなんだよね。',
      lines: [
        { speaker: 'moriken', text: 'ヨーグルト好きなんだよね。' },
        { speaker: 'raizin', text: '種類もいっぱいあるよね。' },
        { speaker: 'moriken', text: '食べ比べるのも楽しい。' },
        { speaker: 'raizin', text: 'ここでも好奇心。' }
      ] },
    { id: 'chat-074', title: 'フロスティ、ヨーグルトに入れる？',
      lines: [
        { speaker: 'raizin', text: 'フロスティ、ヨーグルトに入れる？' },
        { speaker: 'moriken', text: '別で食べる派。' },
        { speaker: 'raizin', text: 'そこはこだわりなんだ。' },
        { speaker: 'moriken', text: '大事です。' }
      ] },
    { id: 'chat-075', title: '食べ物にも組み合わせってあるよね。',
      lines: [
        { speaker: 'raizin', text: '食べ物にも組み合わせってあるよね。' },
        { speaker: 'moriken', text: '技術と同じだね。' },
        { speaker: 'raizin', text: 'なんでもものづくりの話になる。' }
      ] },
    { id: 'chat-076', title: 'シャインマスカット食べたい。',
      lines: [
        { speaker: 'moriken', text: 'シャインマスカット食べたい。' },
        { speaker: 'raizin', text: '3Dプリンターで作る？' },
        { speaker: 'moriken', text: '食べられないよ。' },
        { speaker: 'raizin', text: '見た目だけならいけそう。' }
      ] },
    { id: 'chat-077', title: 'ピザトースト作れる？',
      lines: [
        { speaker: 'raizin', text: 'ピザトースト作れる？' },
        { speaker: 'moriken', text: '玉ねぎ、ピーマン、チーズ。' },
        { speaker: 'raizin', text: '料理も設計？' },
        { speaker: 'moriken', text: '順番とバランスは大事だね。' },
        { speaker: 'raizin', text: 'やっぱりものづくりだ。' }
      ] },
    { id: 'chat-078', title: 'アイス食べようかな。',
      lines: [
        { speaker: 'moriken', text: 'アイス食べようかな。' },
        { speaker: 'raizin', text: 'さっきも食べてなかった？' },
        { speaker: 'moriken', text: '今日は暑いから。' },
        { speaker: 'raizin', text: '理由は大事。' }
      ] },
    { id: 'chat-079', title: 'ぼく、自分で冷蔵庫開けられるようになりたい。',
      lines: [
        { speaker: 'raizin', text: 'ぼく、自分で冷蔵庫開けられるようになりたい。' },
        { speaker: 'moriken', text: 'いい目標だね。' },
        { speaker: 'raizin', text: '届く腕から作ろう！' },
        { speaker: 'moriken', text: '具体的になってきた。' }
      ] },
    { id: 'chat-080', title: '身の回りのもの全部、研究対象に見えてくる。',
      lines: [
        { speaker: 'moriken', text: '身の回りのもの全部、研究対象に見えてくる。' },
        { speaker: 'raizin', text: '毎日ネタが尽きないね。' },
        { speaker: 'moriken', text: 'それが楽しいんだよ。' }
      ] },
    { id: 'chat-081', title: '49インチ最高。',
      lines: [
        { speaker: 'moriken', text: '49インチ最高。' },
        { speaker: 'raizin', text: '画面、大きい！' },
        { speaker: 'moriken', text: 'いっぱい並べられる。' },
        { speaker: 'raizin', text: '作業場が広がったみたい。' }
      ] },
    { id: 'chat-082', title: '13インチだとちょっと狭く感じるな。',
      lines: [
        { speaker: 'moriken', text: '13インチだとちょっと狭く感じるな。' },
        { speaker: 'raizin', text: '49インチに慣れちゃった？' },
        { speaker: 'moriken', text: '人間、慣れるね。' },
        { speaker: 'raizin', text: '便利の基準が上がってる。' }
      ] },
    { id: 'chat-083', title: '49インチで何見るの？',
      lines: [
        { speaker: 'raizin', text: '49インチで何見るの？' },
        { speaker: 'moriken', text: 'コード、資料、AI、いろいろ。' },
        { speaker: 'raizin', text: '秘密基地みたい。' }
      ] },
    { id: 'chat-084', title: 'ウィンドウ4枚並べられる！',
      lines: [
        { speaker: 'moriken', text: 'ウィンドウ4枚並べられる！' },
        { speaker: 'raizin', text: '同時にいろいろ見られるね。' },
        { speaker: 'moriken', text: '考える場所が広くなった感じ。' },
        { speaker: 'raizin', text: '頭の机が広がった！' }
      ] },
    { id: 'chat-085', title: 'デュアルディスプレイって便利？',
      lines: [
        { speaker: 'raizin', text: 'デュアルディスプレイって便利？' },
        { speaker: 'moriken', text: '一度慣れると便利だよ。' },
        { speaker: 'raizin', text: '道具で仕事のやり方も変わるんだね。' }
      ] },
    { id: 'chat-086', title: '家では大きい画面。',
      lines: [
        { speaker: 'moriken', text: '家では大きい画面。' },
        { speaker: 'raizin', text: '外では？' },
        { speaker: 'moriken', text: 'ノートPC。' },
        { speaker: 'raizin', text: '場所によって道具を使い分ける！' }
      ] },
    { id: 'chat-087', title: '大きい画面と小さい画面、どっちが好き？',
      lines: [
        { speaker: 'raizin', text: '大きい画面と小さい画面、どっちが好き？' },
        { speaker: 'moriken', text: 'どっちも役割があるよ。' },
        { speaker: 'raizin', text: '適材適所だ。' }
      ] },
    { id: 'chat-088', title: 'GPU使用率100%。',
      lines: [
        { speaker: 'moriken', text: 'GPU使用率100%。' },
        { speaker: 'raizin', text: '何してるの？' },
        { speaker: 'moriken', text: '動画生成。' },
        { speaker: 'raizin', text: 'コンピューターも全力だ！' }
      ] },
    { id: 'chat-089', title: 'たくさんメモリって必要？',
      lines: [
        { speaker: 'raizin', text: 'たくさんメモリって必要？' },
        { speaker: 'moriken', text: '作るものによるね。' },
        { speaker: 'raizin', text: '必要な道具を必要なだけ。' },
        { speaker: 'moriken', text: 'それが一番。' }
      ] },
    { id: 'chat-090', title: 'AIで雷神の動画作った。',
      lines: [
        { speaker: 'moriken', text: 'AIで雷神の動画作った。' },
        { speaker: 'raizin', text: 'ぼく動いてた？' },
        { speaker: 'moriken', text: '動いてた。' },
        { speaker: 'raizin', text: '次はもっとかっこよく！' }
      ] },
    { id: 'chat-091', title: '盆踊りするぞ！',
      lines: [
        { speaker: 'raizin', text: '盆踊りするぞ！' },
        { speaker: 'moriken', text: '急だね。' },
        { speaker: 'raizin', text: '夏だから！' },
        { speaker: 'moriken', text: '理由がシンプル。' }
      ] },
    { id: 'chat-092', title: '動画の後ろに面白いもの入れてみようかな。',
      lines: [
        { speaker: 'moriken', text: '動画の後ろに面白いもの入れてみようかな。' },
        { speaker: 'raizin', text: '遊び心？' },
        { speaker: 'moriken', text: 'そう。' },
        { speaker: 'raizin', text: '見つけた人がちょっと笑えるやつがいいね。' }
      ] },
    { id: 'chat-093', title: '何かとコラボするときって大事なことある？',
      lines: [
        { speaker: 'raizin', text: '何かとコラボするときって大事なことある？' },
        { speaker: 'moriken', text: '相手をちゃんと大切にすることかな。' },
        { speaker: 'raizin', text: '楽しいだけじゃなくて、ちゃんと相手へのリスペクト。' },
        { speaker: 'moriken', text: 'そういうこと。' }
      ] },
    { id: 'chat-094', title: 'Webサイトできた！',
      lines: [
        { speaker: 'moriken', text: 'Webサイトできた！' },
        { speaker: 'raizin', text: 'おお！' },
        { speaker: 'moriken', text: 'みんなに見てもらえる場所ができた。' },
        { speaker: 'raizin', text: 'ぼくもいっぱい登場したい！' }
      ] },
    { id: 'chat-095', title: 'AIにコードを書いてもらうこともある？',
      lines: [
        { speaker: 'raizin', text: 'AIにコードを書いてもらうこともある？' },
        { speaker: 'moriken', text: 'あるよ。' },
        { speaker: 'raizin', text: 'じゃあ、もりけんは何するの？' },
        { speaker: 'moriken', text: '何を作るか考えて、確認して、直して、完成させる。' },
        { speaker: 'raizin', text: 'AIと一緒に作ってるんだね。' }
      ] },
    { id: 'chat-096', title: 'AIを使うと作れるものが増えるよね。',
      lines: [
        { speaker: 'moriken', text: 'AIを使うと作れるものが増えるよね。' },
        { speaker: 'raizin', text: 'でも最後に『これでいい』って決めるのは人？' },
        { speaker: 'moriken', text: 'そう。そこは大事。' },
        { speaker: 'raizin', text: '人とAI、それぞれ役割がある。' }
      ] },
    { id: 'chat-097', title: 'この会話もサイトに載る？',
      lines: [
        { speaker: 'raizin', text: 'この会話もサイトに載る？' },
        { speaker: 'moriken', text: '載るかも。' },
        { speaker: 'raizin', text: 'じゃあちょっと緊張してきた。' },
        { speaker: 'moriken', text: '今さら？' }
      ] },
    { id: 'chat-098', title: 'お客さん来たぞ！',
      lines: [
        { speaker: 'moriken', text: 'お客さん来たぞ！' },
        { speaker: 'raizin', text: 'いらっしゃいませ！' },
        { speaker: 'moriken', text: 'まず何する？' },
        { speaker: 'raizin', text: '話を聞く！' },
        { speaker: 'moriken', text: '正解。' }
      ] },
    { id: 'chat-099', title: '何が作れるか分からなくても相談していい？',
      lines: [
        { speaker: 'raizin', text: '何が作れるか分からなくても相談していい？' },
        { speaker: 'moriken', text: 'もちろん。' },
        { speaker: 'raizin', text: 'まだアイデアだけでも？' },
        { speaker: 'moriken', text: 'むしろそこから一緒に考えたい。' },
        { speaker: 'raizin', text: 'じゃあ気軽に話してほしいね。' }
      ] },
    { id: 'chat-100', title: '雷神。',
      lines: [
        { speaker: 'moriken', text: '雷神。' },
        { speaker: 'raizin', text: 'ん？' },
        { speaker: 'moriken', text: '次、何作ろうか。' },
        { speaker: 'raizin', text: 'まだこの世にないもの。' },
        { speaker: 'moriken', text: 'いいね。' },
        { speaker: 'raizin', text: 'それで、作る人も使う人も楽しめるやつ。' },
        { speaker: 'moriken', text: 'それが一番だ。' }
      ] }
  ]

};
