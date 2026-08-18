/* ============================================================
   もりけん × 雷神 会話データ

   ★ 会話を追加・修正するときは、このファイルだけを編集してください。
     index.html やその他のファイルを触る必要はありません。

   ── 書き方 ─────────────────────────────────────────────
   {
     id:       'about-002',      // 固定ID。「カテゴリー-連番3桁」。重複禁止・変更禁止
     category: 'about',          // 下の CATEGORIES にあるキー
     title:    '見出しになる一言',
     lines: [
       { speaker: 'raizin',  text: '雷神のせりふ' },
       { speaker: 'moriken', text: 'もりけんのせりふ' }
     ]
   }

   ・speaker は 'raizin'（雷神）か 'moriken'（もりけん）のどちらかだけです。
     英字表記は RAIZIN です。RAIJIN ではありません。
   ・lines は何往復でも構いません。長い文章でも表示は崩れません。
   ・id は公開後に変更しないでください（将来リンクの目印に使うため）。
   ・並び順は、そのカテゴリー内での表示順になります。
   ・カテゴリーを増やしたいときは、下の CATEGORIES に1行足してください。
   ・会話が0件のカテゴリーは、画面に出ません。

   ※ 表示されるのは PC のみです（スマホには出ません）。
     詳しくは data/README.md を参照してください。
   ============================================================ */

/* カテゴリーの表示名。ここに並べた順がタブの順番になります */
window.LS_CONVERSATION_CATEGORIES = Object.assign({
  about:  '会社のこと',
  ai:     'AIのこと',
  robot:  'ロボットのこと',
  dx:     'DXのこと',
  faq:    'よくある質問',
  daily:  '日々のこと',
  future: 'これからのこと',
  fun:    'ゆるい話'
}, window.LS_CONVERSATION_CATEGORIES);

/* concat で足しているので、将来ファイルを分割してもこの書き方のままで動きます */
window.LS_CONVERSATIONS = (window.LS_CONVERSATIONS || []).concat([

  /* ---------------- about : 会社のこと ---------------- */
  {
    id: 'about-001',
    category: 'about',
    title: '何をしている会社？',
    lines: [
      { speaker: 'raizin',  text: 'もりけん、らいとすぴりっつって、けっきょく何をする会社なの？' },
      { speaker: 'moriken', text: '「こんなの作れたらいいな」を、一緒に形にする会社かな。' },
      { speaker: 'raizin',  text: 'ざっくりしてる！⚡' },
      { speaker: 'moriken', text: 'でも本当にそうなんだ。ロボットもAIもアプリも、道具でしかないから。何を作りたいかが先で、道具はあとから選ぶ。' },
      { speaker: 'raizin',  text: 'だから「まだぼんやりしてる」段階でも相談していいんだね。' },
      { speaker: 'moriken', text: 'むしろその段階がいちばん面白い。' }
    ]
  },

  /* ---------------- ai : AIのこと ---------------- */
  {
    id: 'ai-001',
    category: 'ai',
    title: 'AIって、結局なにができるの？',
    lines: [
      { speaker: 'raizin',  text: 'AIって「なんでもできる」って言われるけど、ほんと？' },
      { speaker: 'moriken', text: '正直に言うと、なんでもはできない。得意なことがはっきりしてる。' },
      { speaker: 'raizin',  text: 'たとえば？' },
      { speaker: 'moriken', text: '読む、書く、まとめる、探す、分類する。人がやると時間はかかるけど頭は使わない、みたいな仕事がいちばん向いてる。' },
      { speaker: 'raizin',  text: 'なるほど、そこを任せるのか。' },
      { speaker: 'moriken', text: 'そう。空いた時間で人が考える。順番はいつもそれ。' }
    ]
  },

  /* ---------------- robot : ロボットのこと ---------------- */
  {
    id: 'robot-001',
    category: 'robot',
    title: 'ロボットもつくれるの？',
    lines: [
      { speaker: 'raizin',  text: 'ぼくみたいなロボットも、本当に作れるの？' },
      { speaker: 'moriken', text: '作ってるよ。設計して、部品を出して、組んで、中のプログラムまで。' },
      { speaker: 'raizin',  text: 'ぜんぶ一人で？' },
      { speaker: 'moriken', text: '一人でやる。だから「ここは設計会社に聞いてください」って止まらない。' },
      { speaker: 'raizin',  text: 'それは早そう⚡' },
      { speaker: 'moriken', text: '早いというより、途中で話が切れないのが大きいかな。' }
    ]
  },

  /* ---------------- faq : よくある質問 ---------------- */
  {
    id: 'faq-001',
    category: 'faq',
    title: 'まだふんわりした相談でもいい？',
    lines: [
      { speaker: 'raizin',  text: '「何がしたいか自分でもわかってない」って人、けっこういるよね。' },
      { speaker: 'moriken', text: 'いる。というか、最初はだいたいそう。' },
      { speaker: 'raizin',  text: 'それでも相談していいの？' },
      { speaker: 'moriken', text: 'いいよ。「なんとなく困ってる」を一緒にほどくところからが仕事だから。' },
      { speaker: 'raizin',  text: 'じゃあ気軽に声かけてって言っていいんだね！' },
      { speaker: 'moriken', text: 'どうぞ。まとまってなくて大丈夫です。' }
    ]
  },

  /* ---------------- fun : ゆるい話 ---------------- */
  {
    id: 'fun-001',
    category: 'fun',
    title: '休みの日は何してるの？',
    lines: [
      { speaker: 'raizin',  text: 'もりけんって、休みの日も何か作ってるの？' },
      { speaker: 'moriken', text: '作ってる。' },
      { speaker: 'raizin',  text: '即答だ⚡ 休んでる？' },
      { speaker: 'moriken', text: '作ってるときが休んでるときなんだよな。仕事だと締切があるけど、休みの日は完全に思いつきで作れる。' },
      { speaker: 'raizin',  text: 'ぼくもそのノリで生まれたの？' },
      { speaker: 'moriken', text: 'まあ、そうだね。' }
    ]
  }

]);
