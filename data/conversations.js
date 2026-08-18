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
  about:     '会社のこと',
  spirit:    '会社の芯',
  ai:        'AIのこと',
  support:   'AI活用の伴走',
  robot:     'ロボットのこと',
  dx:        'アプリ・DXのこと',
  combo:     'AI × ロボット × 人',
  education: '教育のこと',
  faq:       'よくある質問',
  daily:     '日々のこと',
  future:    'これからのこと'
}, window.LS_CONVERSATION_CATEGORIES);

/* concat で足しているので、将来ファイルを分割してもこの書き方のままで動きます */
window.LS_CONVERSATIONS = (window.LS_CONVERSATIONS || []).concat([

  /* ---------------- about : らいとすぴりっつ（15件） ---------------- */
  {
    id: 'about-001',
    category: 'about',
    title: '何をしている会社？',
    lines: [
      { speaker: 'raizin',  text: 'もりけん、らいとすぴりっつって何する会社なの？' },
      { speaker: 'moriken', text: '「こんなの作れたらいいな」を、一緒に形にする会社かな。' },
      { speaker: 'raizin',  text: 'ふわっとした相談でもいいの？' },
      { speaker: 'moriken', text: 'むしろ、そこから一緒に考えるのが好き。' },
      { speaker: 'raizin',  text: '「なんか面白いことしたい！」でも？' },
      { speaker: 'moriken', text: 'それはかなり好きな相談だね。' }
    ]
  },
  {
    id: 'about-002',
    category: 'about',
    title: '名前の意味',
    lines: [
      { speaker: 'raizin',  text: '「らいとすぴりっつ」ってどういう意味？' },
      { speaker: 'moriken', text: '心の中にある小さな火を大事にしたい、っていう気持ちが入ってる。' },
      { speaker: 'raizin',  text: '火をつける会社？' },
      { speaker: 'moriken', text: '物理的にはつけないよ。' },
      { speaker: 'raizin',  text: 'よかった。' }
    ]
  },
  {
    id: 'about-003',
    category: 'about',
    title: '何でも屋？',
    lines: [
      { speaker: 'raizin',  text: 'AIもロボットもアプリもやるって、何でも屋さん？' },
      { speaker: 'moriken', text: '近いようでちょっと違うかな。' },
      { speaker: 'raizin',  text: 'どう違うの？' },
      { speaker: 'moriken', text: '必要な技術を組み合わせて、目的を叶えるのが仕事。' },
      { speaker: 'raizin',  text: '技術を選ぶところからなんだ。' }
    ]
  },
  {
    id: 'about-004',
    category: 'about',
    title: '小さな相談',
    lines: [
      { speaker: 'raizin',  text: '大きなプロジェクトじゃないと相談できない？' },
      { speaker: 'moriken', text: 'そんなことないよ。' },
      { speaker: 'raizin',  text: '「この作業めんどくさい」とかでも？' },
      { speaker: 'moriken', text: 'そういうところから便利になることも多い。' },
      { speaker: 'raizin',  text: 'めんどくさいは発明のタネ！' }
    ]
  },
  {
    id: 'about-005',
    category: 'about',
    title: '技術が分からなくても',
    lines: [
      { speaker: 'raizin',  text: 'AIとかプログラム分からない人でも相談できる？' },
      { speaker: 'moriken', text: 'もちろん。' },
      { speaker: 'raizin',  text: '専門用語を覚えてからじゃなくていい？' },
      { speaker: 'moriken', text: '全然いらない。やりたいことを話してくれればいいよ。' },
      { speaker: 'raizin',  text: 'ぼくにもやさしい。' }
    ]
  },
  {
    id: 'about-006',
    category: 'about',
    title: '何を準備する？',
    lines: [
      { speaker: 'raizin',  text: '相談するとき何を準備したらいい？' },
      { speaker: 'moriken', text: '「今困ってること」と「こうなったら嬉しい」があれば十分。' },
      { speaker: 'raizin',  text: '資料100ページとかは？' },
      { speaker: 'moriken', text: 'なくて大丈夫。' },
      { speaker: 'raizin',  text: '安心した。' }
    ]
  },
  {
    id: 'about-007',
    category: 'about',
    title: '答えがなくても',
    lines: [
      { speaker: 'raizin',  text: '答えが決まってなくても相談できる？' },
      { speaker: 'moriken', text: 'もちろん。一緒に考えるところからできるよ。' },
      { speaker: 'raizin',  text: '答えを持っていかなくていいんだ。' },
      { speaker: 'moriken', text: '答えが全部あったら相談いらないからね。' }
    ]
  },
  {
    id: 'about-008',
    category: 'about',
    title: '言われたものを作る？',
    lines: [
      { speaker: 'raizin',  text: '言われたものをそのまま作る会社？' },
      { speaker: 'moriken', text: 'それだけじゃないよ。' },
      { speaker: 'raizin',  text: 'じゃあ？' },
      { speaker: 'moriken', text: '本当にそれを作るのが一番いいか、そこから考える。' },
      { speaker: 'raizin',  text: '作らない方がいいことも？' },
      { speaker: 'moriken', text: 'あるね。' }
    ]
  },
  {
    id: 'about-009',
    category: 'about',
    title: '好きな仕事',
    lines: [
      { speaker: 'raizin',  text: 'どんな仕事が好き？' },
      { speaker: 'moriken', text: '「できるか分からないけど、やってみたい」って仕事。' },
      { speaker: 'raizin',  text: '難しいやつじゃん。' },
      { speaker: 'moriken', text: 'だから面白いんだよ。' },
      { speaker: 'raizin',  text: '技術者の顔してる。' }
    ]
  },
  {
    id: 'about-010',
    category: 'about',
    title: '小さく始める',
    lines: [
      { speaker: 'raizin',  text: '最初から完成品を作るの？' },
      { speaker: 'moriken', text: 'まず小さく試すことが多いよ。' },
      { speaker: 'raizin',  text: 'なんで？' },
      { speaker: 'moriken', text: '早く触った方が、本当に必要なものが見えるから。' },
      { speaker: 'raizin',  text: 'とりあえず動かす！' }
    ]
  },
  {
    id: 'about-011',
    category: 'about',
    title: '完璧',
    lines: [
      { speaker: 'raizin',  text: '完璧になってから見せるの？' },
      { speaker: 'moriken', text: '途中でもどんどん確認するよ。' },
      { speaker: 'raizin',  text: '恥ずかしくない？' },
      { speaker: 'moriken', text: '間違った完成品を作る方が怖いからね。' }
    ]
  },
  {
    id: 'about-012',
    category: 'about',
    title: '無理なとき',
    lines: [
      { speaker: 'raizin',  text: '「それ無理です」って言うこともある？' },
      { speaker: 'moriken', text: 'もちろんある。' },
      { speaker: 'raizin',  text: '断っちゃうんだ。' },
      { speaker: 'moriken', text: '無理なのに「できます」って言う方が困るでしょ。' },
      { speaker: 'raizin',  text: 'たしかに。' }
    ]
  },
  {
    id: 'about-013',
    category: 'about',
    title: '別の方法',
    lines: [
      { speaker: 'raizin',  text: 'できなかったら？' },
      { speaker: 'moriken', text: '別のやり方を考える。' },
      { speaker: 'raizin',  text: 'AがダメならB？' },
      { speaker: 'moriken', text: 'BもダメならC。' },
      { speaker: 'raizin',  text: 'Zまで行ったら？' },
      { speaker: 'moriken', text: 'その頃には何か見つかってるよ。' }
    ]
  },
  {
    id: 'about-014',
    category: 'about',
    title: '楽しいって大事？',
    lines: [
      { speaker: 'raizin',  text: '仕事なのに「楽しい」って大事？' },
      { speaker: 'moriken', text: '大事。楽しいともっと知りたくなる。' },
      { speaker: 'raizin',  text: '知ると？' },
      { speaker: 'moriken', text: '作りたくなる。' },
      { speaker: 'raizin',  text: 'いい循環！' }
    ]
  },
  {
    id: 'about-015',
    category: 'about',
    title: 'らしさ',
    lines: [
      { speaker: 'raizin',  text: 'らいとすぴりっつらしい仕事って？' },
      { speaker: 'moriken', text: '人と技術が一緒に成長できる仕事かな。' },
      { speaker: 'raizin',  text: '技術だけじゃないんだ。' },
      { speaker: 'moriken', text: '最後に使うのは人だからね。' }
    ]
  },

  /* ---------------- ai : AI（20件） ---------------- */
  {
    id: 'ai-001',
    category: 'ai',
    title: 'AIって何？',
    lines: [
      { speaker: 'raizin',  text: 'AIって結局なんなの？' },
      { speaker: 'moriken', text: 'たくさんの情報からパターンを見つけたり、答えを作ったりする技術かな。' },
      { speaker: 'raizin',  text: '魔法じゃない？' },
      { speaker: 'moriken', text: '魔法っぽく見える技術。' },
      { speaker: 'raizin',  text: 'ワクワクする。' }
    ]
  },
  {
    id: 'ai-002',
    category: 'ai',
    title: 'AIは万能？',
    lines: [
      { speaker: 'raizin',  text: 'AIって何でもできる？' },
      { speaker: 'moriken', text: 'できないこともいっぱいあるよ。' },
      { speaker: 'raizin',  text: '意外。' },
      { speaker: 'moriken', text: '得意なことに使うのが大事。' },
      { speaker: 'raizin',  text: 'ぼくと一緒だ。' }
    ]
  },
  {
    id: 'ai-003',
    category: 'ai',
    title: '仕事を取られる？',
    lines: [
      { speaker: 'raizin',  text: 'AIに仕事取られちゃう？' },
      { speaker: 'moriken', text: '仕事そのものより、仕事のやり方が変わると思う。' },
      { speaker: 'raizin',  text: 'AIと競争？' },
      { speaker: 'moriken', text: 'AIとチームになる感じかな。' },
      { speaker: 'raizin',  text: 'チームAI！' }
    ]
  },
  {
    id: 'ai-004',
    category: 'ai',
    title: 'AIは間違う？',
    lines: [
      { speaker: 'raizin',  text: 'AIって間違える？' },
      { speaker: 'moriken', text: '間違えるよ。' },
      { speaker: 'raizin',  text: '自信満々で？' },
      { speaker: 'moriken', text: '自信満々で。' },
      { speaker: 'raizin',  text: '一番困るやつ。' }
    ]
  },
  {
    id: 'ai-005',
    category: 'ai',
    title: '信用していい？',
    lines: [
      { speaker: 'raizin',  text: 'AIを信用しちゃダメ？' },
      { speaker: 'moriken', text: '丸投げしないことだね。' },
      { speaker: 'raizin',  text: '人も確認する？' },
      { speaker: 'moriken', text: 'そう。それぞれの得意なところを使う。' }
    ]
  },
  {
    id: 'ai-006',
    category: 'ai',
    title: 'ChatGPT',
    lines: [
      { speaker: 'raizin',  text: 'ChatGPTって仕事にも使える？' },
      { speaker: 'moriken', text: '文章、整理、アイデア、プログラムとか色々使えるよ。' },
      { speaker: 'raizin',  text: 'お昼ごはんを決めるのも？' },
      { speaker: 'moriken', text: 'それも。' },
      { speaker: 'raizin',  text: '最重要業務。' }
    ]
  },
  {
    id: 'ai-007',
    category: 'ai',
    title: 'AI導入',
    lines: [
      { speaker: 'raizin',  text: '会社にAIを入れたい！' },
      { speaker: 'moriken', text: 'まず何を楽にしたいか探そう。' },
      { speaker: 'raizin',  text: 'AIありきじゃない？' },
      { speaker: 'moriken', text: '目的が先、技術は後。' }
    ]
  },
  {
    id: 'ai-008',
    category: 'ai',
    title: '自動化',
    lines: [
      { speaker: 'raizin',  text: '毎日同じ作業してる。' },
      { speaker: 'moriken', text: 'AIやプログラムで楽にできるかも。' },
      { speaker: 'raizin',  text: 'コピーして、貼って、確認して……。' },
      { speaker: 'moriken', text: 'かなり候補だね。' },
      { speaker: 'raizin',  text: 'AIさん出番です。' }
    ]
  },
  {
    id: 'ai-009',
    category: 'ai',
    title: 'AI文章',
    lines: [
      { speaker: 'raizin',  text: 'AIに文章を書いてもらえば完成？' },
      { speaker: 'moriken', text: '最後は自分の言葉にするのがおすすめ。' },
      { speaker: 'raizin',  text: 'なんで？' },
      { speaker: 'moriken', text: '自分にしか言えないことが一番伝わるから。' }
    ]
  },
  {
    id: 'ai-010',
    category: 'ai',
    title: 'アイデア100個',
    lines: [
      { speaker: 'raizin',  text: 'アイデアが出ない。' },
      { speaker: 'moriken', text: 'AIに100個出してもらおう。' },
      { speaker: 'raizin',  text: '100個！？' },
      { speaker: 'moriken', text: 'そこから人が面白いものを選ぶ。' },
      { speaker: 'raizin',  text: '数はAI、センスは人！' }
    ]
  },
  {
    id: 'ai-011',
    category: 'ai',
    title: 'AIに相談',
    lines: [
      { speaker: 'raizin',  text: 'AIに相談するのって変？' },
      { speaker: 'moriken', text: '壁打ち相手として便利だよ。' },
      { speaker: 'raizin',  text: '壁なの？' },
      { speaker: 'moriken', text: '返事してくれる壁。' },
      { speaker: 'raizin',  text: '高性能。' }
    ]
  },
  {
    id: 'ai-012',
    category: 'ai',
    title: 'AIコーディング',
    lines: [
      { speaker: 'raizin',  text: 'AIがコード書いたらプログラマーいらない？' },
      { speaker: 'moriken', text: '「何を作るか」を考える力がもっと大事になるよ。' },
      { speaker: 'raizin',  text: '書くだけじゃない？' },
      { speaker: 'moriken', text: 'そこが大事。' }
    ]
  },
  {
    id: 'ai-013',
    category: 'ai',
    title: '頼りすぎ',
    lines: [
      { speaker: 'raizin',  text: 'AI便利だから全部聞く！' },
      { speaker: 'moriken', text: '自分で考える時間も残そう。' },
      { speaker: 'raizin',  text: 'えー。' },
      { speaker: 'moriken', text: '考える力も使わないと弱くなるよ。' },
      { speaker: 'raizin',  text: '脳トレしてきます。' }
    ]
  },
  {
    id: 'ai-014',
    category: 'ai',
    title: 'AIと個性',
    lines: [
      { speaker: 'raizin',  text: 'AIを使うとみんな同じにならない？' },
      { speaker: 'moriken', text: '自分の経験や考えを入れれば違いは出るよ。' },
      { speaker: 'raizin',  text: '素材が自分なんだ。' }
    ]
  },
  {
    id: 'ai-015',
    category: 'ai',
    title: '生成AI',
    lines: [
      { speaker: 'raizin',  text: '「生成」AIって？' },
      { speaker: 'moriken', text: '新しい文章や画像や音を作れるAI。' },
      { speaker: 'raizin',  text: 'クリエイターAI？' },
      { speaker: 'moriken', text: 'そんな感じ。' }
    ]
  },
  {
    id: 'ai-016',
    category: 'ai',
    title: '画像AI',
    lines: [
      { speaker: 'raizin',  text: 'AIでぼくの絵も作れる？' },
      { speaker: 'moriken', text: '作れるよ。' },
      { speaker: 'raizin',  text: 'もっとイケメンにして。' },
      { speaker: 'moriken', text: '今のままでいいんじゃない？' },
      { speaker: 'raizin',  text: '否定しないんだ。' }
    ]
  },
  {
    id: 'ai-017',
    category: 'ai',
    title: '声',
    lines: [
      { speaker: 'raizin',  text: 'AIってしゃべれる？' },
      { speaker: 'moriken', text: '声を聞いたり作ったりもできる。' },
      { speaker: 'raizin',  text: 'ぼくもいつか？' },
      { speaker: 'moriken', text: 'できるかもね。' },
      { speaker: 'raizin',  text: '発声練習しておく！' }
    ]
  },
  {
    id: 'ai-018',
    category: 'ai',
    title: 'AIとロボット',
    lines: [
      { speaker: 'raizin',  text: 'AIとロボットって違うの？' },
      { speaker: 'moriken', text: 'AIが頭、ロボットが体って考えると分かりやすい。' },
      { speaker: 'raizin',  text: '頭と体！' },
      { speaker: 'moriken', text: 'そんなイメージ。' }
    ]
  },
  {
    id: 'ai-019',
    category: 'ai',
    title: 'AIの未来',
    lines: [
      { speaker: 'raizin',  text: 'AIってこれからどうなる？' },
      { speaker: 'moriken', text: 'もっと自然に生活や仕事へ入っていくと思う。' },
      { speaker: 'raizin',  text: 'AIを使ってるって意識もしなくなる？' },
      { speaker: 'moriken', text: 'たぶんね。' },
      { speaker: 'raizin',  text: '電気みたい。' }
    ]
  },
  {
    id: 'ai-020',
    category: 'ai',
    title: '一番大切',
    lines: [
      { speaker: 'raizin',  text: 'AIで一番大切なのは？' },
      { speaker: 'moriken', text: '「何のために使うか」。' },
      { speaker: 'raizin',  text: '最新だから！じゃダメ？' },
      { speaker: 'moriken', text: '遊びなら全力で試していいけどね。' },
      { speaker: 'raizin',  text: 'やった！' }
    ]
  },

  /* ---------------- robot : ロボット・ものづくり（15件） ---------------- */
  {
    id: 'robot-001',
    category: 'robot',
    title: '難しい？',
    lines: [
      { speaker: 'raizin',  text: 'ロボット作るの難しい？' },
      { speaker: 'moriken', text: '難しいけど面白い。' },
      { speaker: 'raizin',  text: 'またそれ。' },
      { speaker: 'moriken', text: '技術者あるある。' }
    ]
  },
  {
    id: 'robot-002',
    category: 'robot',
    title: '中身',
    lines: [
      { speaker: 'raizin',  text: 'ロボットって何でできてる？' },
      { speaker: 'moriken', text: 'モーター、センサー、コンピューター、プログラムとか。' },
      { speaker: 'raizin',  text: 'ぼくも？' },
      { speaker: 'moriken', text: '雷神は夢と好奇心多め。' },
      { speaker: 'raizin',  text: '重要部品！' }
    ]
  },
  {
    id: 'robot-003',
    category: 'robot',
    title: 'センサー',
    lines: [
      { speaker: 'raizin',  text: 'センサーって？' },
      { speaker: 'moriken', text: 'ロボットの目や耳みたいなもの。' },
      { speaker: 'raizin',  text: '鼻もある？' },
      { speaker: 'moriken', text: '匂いを測れるものもあるよ。' },
      { speaker: 'raizin',  text: 'すごい。' }
    ]
  },
  {
    id: 'robot-004',
    category: 'robot',
    title: 'モーター',
    lines: [
      { speaker: 'raizin',  text: 'モーターは？' },
      { speaker: 'moriken', text: '筋肉みたいなもの。' },
      { speaker: 'raizin',  text: '大きいモーターならムキムキ？' },
      { speaker: 'moriken', text: 'そんな単純ではないかな。' }
    ]
  },
  {
    id: 'robot-005',
    category: 'robot',
    title: 'ROS',
    lines: [
      { speaker: 'raizin',  text: 'ROSって？' },
      { speaker: 'moriken', text: 'ロボットのいろんな機能をつなぐための仕組み。' },
      { speaker: 'raizin',  text: 'まとめ役？' },
      { speaker: 'moriken', text: 'そんな感じ。' },
      { speaker: 'raizin',  text: 'ロボットの司令室！' }
    ]
  },
  {
    id: 'robot-006',
    category: 'robot',
    title: '3Dプリンター',
    lines: [
      { speaker: 'raizin',  text: 'プリンターなのに紙じゃないの？' },
      { speaker: 'moriken', text: '立体を作るプリンター。' },
      { speaker: 'raizin',  text: 'おもちゃも？' },
      { speaker: 'moriken', text: '部品やケース、試作品も。' },
      { speaker: 'raizin',  text: '夢の箱。' }
    ]
  },
  {
    id: 'robot-007',
    category: 'robot',
    title: '試作品',
    lines: [
      { speaker: 'raizin',  text: '試作品って失敗作？' },
      { speaker: 'moriken', text: '早く失敗するために作るとも言える。' },
      { speaker: 'raizin',  text: '失敗するため！？' },
      { speaker: 'moriken', text: '早く直せるからね。' }
    ]
  },
  {
    id: 'robot-008',
    category: 'robot',
    title: 'CNC',
    lines: [
      { speaker: 'raizin',  text: 'CNCって何？' },
      { speaker: 'moriken', text: 'コンピューターで機械を動かして材料を加工する技術。' },
      { speaker: 'raizin',  text: '3Dプリンターとは逆？' },
      { speaker: 'moriken', text: '足すのと削る違いはあるね。' },
      { speaker: 'raizin',  text: '足し算と引き算！' }
    ]
  },
  {
    id: 'robot-009',
    category: 'robot',
    title: 'ネジ',
    lines: [
      { speaker: 'raizin',  text: 'ネジ一本でも大事？' },
      { speaker: 'moriken', text: 'すごく大事。' },
      { speaker: 'raizin',  text: 'AIより？' },
      { speaker: 'moriken', text: 'ネジが外れたらAIが賢くても動けないよ。' },
      { speaker: 'raizin',  text: 'ネジ先輩。' }
    ]
  },
  {
    id: 'robot-010',
    category: 'robot',
    title: '配線',
    lines: [
      { speaker: 'raizin',  text: '線いっぱい。' },
      { speaker: 'moriken', text: '配線も設計の一部。' },
      { speaker: 'raizin',  text: 'ぐちゃぐちゃでも動けばいい？' },
      { speaker: 'moriken', text: '後で自分が泣く。' },
      { speaker: 'raizin',  text: '整理します。' }
    ]
  },
  {
    id: 'robot-011',
    category: 'robot',
    title: '電源',
    lines: [
      { speaker: 'raizin',  text: '充電切れたら？' },
      { speaker: 'moriken', text: '動かない。' },
      { speaker: 'raizin',  text: '当たり前だった。' },
      { speaker: 'moriken', text: 'でもその当たり前を支える設計も大事。' }
    ]
  },
  {
    id: 'robot-012',
    category: 'robot',
    title: '安全',
    lines: [
      { speaker: 'raizin',  text: '強いロボットって危なくない？' },
      { speaker: 'moriken', text: 'だから安全設計が大事。' },
      { speaker: 'raizin',  text: '動けばOKじゃない？' },
      { speaker: 'moriken', text: '安全に止まれることも大事。' }
    ]
  },
  {
    id: 'robot-013',
    category: 'robot',
    title: '心',
    lines: [
      { speaker: 'raizin',  text: 'ロボットに心ってある？' },
      { speaker: 'moriken', text: '難しい質問だね。' },
      { speaker: 'raizin',  text: 'ぼくには？' },
      { speaker: 'moriken', text: '雷神はどう思う？' },
      { speaker: 'raizin',  text: 'あると思ったら、ある！' }
    ]
  },
  {
    id: 'robot-014',
    category: 'robot',
    title: '最初は妄想',
    lines: [
      { speaker: 'raizin',  text: 'ロボット作るとき最初は設計図？' },
      { speaker: 'moriken', text: 'その前に「こんなのあったら面白い」を考える。' },
      { speaker: 'raizin',  text: 'ワクワクから？' },
      { speaker: 'moriken', text: 'そう。' }
    ]
  },
  {
    id: 'robot-015',
    category: 'robot',
    title: '雷神の将来',
    lines: [
      { speaker: 'raizin',  text: 'ぼく、歩ける？' },
      { speaker: 'moriken', text: '作ればね。' },
      { speaker: 'raizin',  text: 'しゃべれる？' },
      { speaker: 'moriken', text: '作ればね。' },
      { speaker: 'raizin',  text: '飛べる？' },
      { speaker: 'moriken', text: 'それは相談しよう。' }
    ]
  },

  /* ---------------- dx : アプリ・Web・DX（15件） ---------------- */
  {
    id: 'dx-001',
    category: 'dx',
    title: 'アプリ',
    lines: [
      { speaker: 'raizin',  text: 'アプリってどう作る？' },
      { speaker: 'moriken', text: 'まず誰が何に困ってるか考える。' },
      { speaker: 'raizin',  text: 'プログラムからじゃない？' },
      { speaker: 'moriken', text: 'その後。' },
      { speaker: 'raizin',  text: '目的が先！' }
    ]
  },
  {
    id: 'dx-002',
    category: 'dx',
    title: 'Webアプリ',
    lines: [
      { speaker: 'raizin',  text: 'Webアプリって？' },
      { speaker: 'moriken', text: 'ブラウザで使えるアプリ。' },
      { speaker: 'raizin',  text: 'インストールしなくても？' },
      { speaker: 'moriken', text: 'そういうものが多いよ。' }
    ]
  },
  {
    id: 'dx-003',
    category: 'dx',
    title: 'DX',
    lines: [
      { speaker: 'raizin',  text: 'DXってなに？' },
      { speaker: 'moriken', text: 'デジタルの力で仕事のやり方を良くすること。' },
      { speaker: 'raizin',  text: 'パソコン買うこと？' },
      { speaker: 'moriken', text: 'それだけじゃない。' },
      { speaker: 'raizin',  text: '危なかった。' }
    ]
  },
  {
    id: 'dx-004',
    category: 'dx',
    title: 'Excel',
    lines: [
      { speaker: 'raizin',  text: 'DXしたらExcel卒業？' },
      { speaker: 'moriken', text: 'Excelが一番合ってるなら使えばいい。' },
      { speaker: 'raizin',  text: '新しいほどいいわけじゃない？' },
      { speaker: 'moriken', text: '大事なのは便利になること。' }
    ]
  },
  {
    id: 'dx-005',
    category: 'dx',
    title: '手作業',
    lines: [
      { speaker: 'raizin',  text: '毎日同じデータ入力してる。' },
      { speaker: 'moriken', text: '自動化できるかもね。' },
      { speaker: 'raizin',  text: 'その時間で昼寝……。' },
      { speaker: 'moriken', text: '仕事しよう。' },
      { speaker: 'raizin',  text: 'はい。' }
    ]
  },
  {
    id: 'dx-006',
    category: 'dx',
    title: '通知',
    lines: [
      { speaker: 'raizin',  text: '大事なこと忘れちゃう。' },
      { speaker: 'moriken', text: '自動通知する仕組みを作るとか。' },
      { speaker: 'raizin',  text: 'システムに覚えてもらう？' },
      { speaker: 'moriken', text: '人が覚えなくていいものは任せてもいい。' }
    ]
  },
  {
    id: 'dx-007',
    category: 'dx',
    title: 'データ整理',
    lines: [
      { speaker: 'raizin',  text: 'データがあちこち。' },
      { speaker: 'moriken', text: '一か所にまとめるだけでも楽になるよ。' },
      { speaker: 'raizin',  text: '探す時間ってもったいないね。' }
    ]
  },
  {
    id: 'dx-008',
    category: 'dx',
    title: 'UI',
    lines: [
      { speaker: 'raizin',  text: 'UIって？' },
      { speaker: 'moriken', text: 'ボタンや画面みたいに人が触る部分。' },
      { speaker: 'raizin',  text: '見た目？' },
      { speaker: 'moriken', text: '使いやすさも含むよ。' }
    ]
  },
  {
    id: 'dx-009',
    category: 'dx',
    title: 'UX',
    lines: [
      { speaker: 'raizin',  text: 'UXは？' },
      { speaker: 'moriken', text: '使ったときの体験全体。' },
      { speaker: 'raizin',  text: '「使いやすかった」とか？' },
      { speaker: 'moriken', text: '「また使いたい」まで含めてね。' }
    ]
  },
  {
    id: 'dx-010',
    category: 'dx',
    title: 'ボタン',
    lines: [
      { speaker: 'raizin',  text: 'ボタン一個なら簡単？' },
      { speaker: 'moriken', text: '見た目だけならね。' },
      { speaker: 'raizin',  text: '裏では？' },
      { speaker: 'moriken', text: '押したあと色々起きる。' },
      { speaker: 'raizin',  text: '奥深い。' }
    ]
  },
  {
    id: 'dx-011',
    category: 'dx',
    title: 'PCとスマホ',
    lines: [
      { speaker: 'raizin',  text: '同じサイトでも画面の大きさ違うね。' },
      { speaker: 'moriken', text: 'だから端末に合わせて見せ方を変えることもあるよ。' },
      { speaker: 'raizin',  text: '全部同じじゃなくていいんだ。' },
      { speaker: 'moriken', text: '使う場面に合っていることが大事。' }
    ]
  },
  {
    id: 'dx-012',
    category: 'dx',
    title: 'システムを作れば解決？',
    lines: [
      { speaker: 'raizin',  text: 'システム作れば全部解決！' },
      { speaker: 'moriken', text: 'とは限らない。' },
      { speaker: 'raizin',  text: 'えっ。' },
      { speaker: 'moriken', text: '使ってもらえなかったら意味ないからね。' }
    ]
  },
  {
    id: 'dx-013',
    category: 'dx',
    title: '機能盛り盛り',
    lines: [
      { speaker: 'raizin',  text: '機能いっぱい入れよう！' },
      { speaker: 'moriken', text: '本当に使う？' },
      { speaker: 'raizin',  text: '……かっこいいから。' },
      { speaker: 'moriken', text: '必要なものからね。' }
    ]
  },
  {
    id: 'dx-014',
    category: 'dx',
    title: 'バグ',
    lines: [
      { speaker: 'raizin',  text: 'バグって虫？' },
      { speaker: 'moriken', text: 'プログラムの不具合。' },
      { speaker: 'raizin',  text: '虫退治？' },
      { speaker: 'moriken', text: 'ある意味そう。' },
      { speaker: 'raizin',  text: 'バグハンター！' }
    ]
  },
  {
    id: 'dx-015',
    category: 'dx',
    title: 'アップデート',
    lines: [
      { speaker: 'raizin',  text: '完成したら終わり？' },
      { speaker: 'moriken', text: '使うと改善したいところが見えてくる。' },
      { speaker: 'raizin',  text: '育てるんだ。' },
      { speaker: 'moriken', text: 'そういう感じ。' }
    ]
  },

  /* ---------------- faq : 相談・お客さん目線（10件） ---------------- */
  {
    id: 'faq-001',
    category: 'faq',
    title: '相談だけ',
    lines: [
      { speaker: 'raizin',  text: '相談したら絶対お願いしないとダメ？' },
      { speaker: 'moriken', text: '全然。話を聞くだけでも大丈夫。' },
      { speaker: 'raizin',  text: '「これ作れる？」だけでも？' },
      { speaker: 'moriken', text: 'もちろん。' }
    ]
  },
  {
    id: 'faq-002',
    category: 'faq',
    title: '予算',
    lines: [
      { speaker: 'raizin',  text: 'いくらかかるか分からない。' },
      { speaker: 'moriken', text: 'そういう相談も普通だよ。' },
      { speaker: 'raizin',  text: '先に決めなくても？' },
      { speaker: 'moriken', text: '内容を聞きながら考えればいい。' }
    ]
  },
  {
    id: 'faq-003',
    category: 'faq',
    title: 'アイデアだけ',
    lines: [
      { speaker: 'raizin',  text: 'アイデアしかない。' },
      { speaker: 'moriken', text: 'そこからで大丈夫。' },
      { speaker: 'raizin',  text: '仕様もないよ？' },
      { speaker: 'moriken', text: '一緒に整理しよう。' },
      { speaker: 'raizin',  text: 'アイデア一個持って集合！' }
    ]
  },
  {
    id: 'faq-004',
    category: 'faq',
    title: '途中から',
    lines: [
      { speaker: 'raizin',  text: '自分で途中まで作っちゃった。' },
      { speaker: 'moriken', text: 'そこからでも相談できるよ。' },
      { speaker: 'raizin',  text: 'ぐちゃぐちゃでも？' },
      { speaker: 'moriken', text: 'まず見よう。' }
    ]
  },
  {
    id: 'faq-005',
    category: 'faq',
    title: '他社のシステム',
    lines: [
      { speaker: 'raizin',  text: '他の会社が作ったものでも？' },
      { speaker: 'moriken', text: '状況次第だけど、まず見てみるよ。' },
      { speaker: 'raizin',  text: '全部作り直す？' },
      { speaker: 'moriken', text: '使えるものは活かしたいね。' }
    ]
  },
  {
    id: 'faq-006',
    category: 'faq',
    title: 'AI入れたい',
    lines: [
      { speaker: 'raizin',  text: '「AI入れたい！」って相談が来たら？' },
      { speaker: 'moriken', text: '「何を良くしたいですか？」って聞く。' },
      { speaker: 'raizin',  text: 'AIを売らないの？' },
      { speaker: 'moriken', text: '必要なものを考える方が先。' }
    ]
  },
  {
    id: 'faq-007',
    category: 'faq',
    title: '専門用語',
    lines: [
      { speaker: 'raizin',  text: '打ち合わせって専門用語だらけ？' },
      { speaker: 'moriken', text: 'なるべく使わない。' },
      { speaker: 'raizin',  text: 'API、SDK、GPIO……。' },
      { speaker: 'moriken', text: 'わざと言ってるでしょ。' },
      { speaker: 'raizin',  text: 'バレた。' }
    ]
  },
  {
    id: 'faq-008',
    category: 'faq',
    title: '試作品',
    lines: [
      { speaker: 'raizin',  text: '説明だけじゃ分からない。' },
      { speaker: 'moriken', text: 'だから試作品を作ることもある。' },
      { speaker: 'raizin',  text: '触って決める？' },
      { speaker: 'moriken', text: 'その方が早いことも多い。' }
    ]
  },
  {
    id: 'faq-009',
    category: 'faq',
    title: '違った！',
    lines: [
      { speaker: 'raizin',  text: '作って「違った！」ってなったら？' },
      { speaker: 'moriken', text: 'その「違った」が大事。' },
      { speaker: 'raizin',  text: '失敗じゃない？' },
      { speaker: 'moriken', text: '次に進むための情報。' }
    ]
  },
  {
    id: 'faq-010',
    category: 'faq',
    title: 'ゴール',
    lines: [
      { speaker: 'raizin',  text: 'ゴールって完成品？' },
      { speaker: 'moriken', text: '必ずしもそうじゃない。' },
      { speaker: 'raizin',  text: 'じゃあ？' },
      { speaker: 'moriken', text: '「こうなったらいい」が実現すること。' },
      { speaker: 'raizin',  text: 'モノより目的。' }
    ]
  },

  /* --- 131〜140 安心・信頼 --- */
  {
    id: 'faq-011',
    category: 'faq',
    title: '個人情報',
    lines: [
      { speaker: 'raizin',  text: 'AIに会社の情報を入れて大丈夫？' },
      { speaker: 'moriken', text: '何でもそのまま入れていいわけじゃないよ。' },
      { speaker: 'raizin',  text: '気をつける？' },
      { speaker: 'moriken', text: '情報の種類や使うサービスを確認することが大切。' },
      { speaker: 'raizin',  text: 'AIにも情報管理。' }
    ]
  },
  {
    id: 'faq-012',
    category: 'faq',
    title: 'セキュリティ',
    lines: [
      { speaker: 'raizin',  text: 'セキュリティって難しそう。' },
      { speaker: 'moriken', text: '難しいけど、最初から全部完璧にしなくてもいい。' },
      { speaker: 'raizin',  text: 'まず何を守るか？' },
      { speaker: 'moriken', text: 'そこから考えよう。' },
      { speaker: 'raizin',  text: '守るものを決める。' }
    ]
  },
  {
    id: 'faq-013',
    category: 'faq',
    title: '分からないこと',
    lines: [
      { speaker: 'raizin',  text: '分からないことを聞いたら怒られない？' },
      { speaker: 'moriken', text: 'むしろ分からないまま進める方が怖い。' },
      { speaker: 'raizin',  text: '「分かりません！」って言っていい？' },
      { speaker: 'moriken', text: 'もちろん。' },
      { speaker: 'raizin',  text: '安心した。' }
    ]
  },
  {
    id: 'faq-014',
    category: 'faq',
    title: '納得してから',
    lines: [
      { speaker: 'raizin',  text: 'よく分からないけど最新だから導入！' },
      { speaker: 'moriken', text: 'ちょっと待とう。' },
      { speaker: 'raizin',  text: 'また？' },
      { speaker: 'moriken', text: '何のために必要なのか納得してから決めよう。' },
      { speaker: 'raizin',  text: '慎重派だった。' }
    ]
  },
  {
    id: 'faq-015',
    category: 'faq',
    title: 'できないことを伝える',
    lines: [
      { speaker: 'raizin',  text: 'できないことを言われたら？' },
      { speaker: 'moriken', text: 'できない理由を説明して、代わりの方法を考える。' },
      { speaker: 'raizin',  text: '「無理」で終わらない。' },
      { speaker: 'moriken', text: 'できることを探したいからね。' }
    ]
  },
  {
    id: 'faq-016',
    category: 'faq',
    title: '見積もり',
    lines: [
      { speaker: 'raizin',  text: '見積もりって高くなることある？' },
      { speaker: 'moriken', text: 'やりたいことが増えれば変わることもある。' },
      { speaker: 'raizin',  text: '先に相談？' },
      { speaker: 'moriken', text: 'そう。何を作るかを一緒に整理する。' }
    ]
  },
  {
    id: 'faq-017',
    category: 'faq',
    title: '作って終わり？',
    lines: [
      { speaker: 'raizin',  text: '納品したらさようなら？' },
      { speaker: 'moriken', text: 'そうとは限らないよ。' },
      { speaker: 'raizin',  text: '使ってから困ることもあるもんね。' },
      { speaker: 'moriken', text: 'その後の改善も大事。' }
    ]
  },
  {
    id: 'faq-018',
    category: 'faq',
    title: '長く付き合う',
    lines: [
      { speaker: 'raizin',  text: '一回作って終わりじゃなくてもいい？' },
      { speaker: 'moriken', text: '長く一緒に改善していく仕事もしたいね。' },
      { speaker: 'raizin',  text: '相棒型システム。' },
      { speaker: 'moriken', text: 'いい表現だね。' }
    ]
  },
  {
    id: 'faq-019',
    category: 'faq',
    title: '分からない会社でも',
    lines: [
      { speaker: 'raizin',  text: '小さい会社でも相談できる？' },
      { speaker: 'moriken', text: 'もちろん。' },
      { speaker: 'raizin',  text: '大企業じゃないとダメ？' },
      { speaker: 'moriken', text: '規模より、困っていることがあるかどうかだよ。' },
      { speaker: 'raizin',  text: '会社の大きさは関係ない。' }
    ]
  },
  {
    id: 'faq-020',
    category: 'faq',
    title: '相談のハードル',
    lines: [
      { speaker: 'raizin',  text: '技術会社って相談しにくい。' },
      { speaker: 'moriken', text: 'そう思われない会社にしたい。' },
      { speaker: 'raizin',  text: '何でも聞いていい？' },
      { speaker: 'moriken', text: 'まず話してみて。' },
      { speaker: 'raizin',  text: '「こんなこと聞いていい？」からでも？' }
    ]
  },

  /* ---------------- daily : もりけんの日常（10件） ---------------- */
  {
    id: 'daily-001',
    category: 'daily',
    title: 'また届いた',
    lines: [
      { speaker: 'raizin',  text: 'また何か届いてる。' },
      { speaker: 'moriken', text: '新しい部品。' },
      { speaker: 'raizin',  text: '昨日も届いてたよ。' },
      { speaker: 'moriken', text: '昨日は別の部品。' },
      { speaker: 'raizin',  text: '部品に囲まれてる。' }
    ]
  },
  {
    id: 'daily-002',
    category: 'daily',
    title: '分解',
    lines: [
      { speaker: 'raizin',  text: '壊れた！' },
      { speaker: 'moriken', text: '中見てみよう。' },
      { speaker: 'raizin',  text: 'すぐ開けるの！？' },
      { speaker: 'moriken', text: '気になるから。' },
      { speaker: 'raizin',  text: '技術者怖い。' }
    ]
  },
  {
    id: 'daily-003',
    category: 'daily',
    title: '説明',
    lines: [
      { speaker: 'raizin',  text: 'これ何？' },
      { speaker: 'moriken', text: 'これはね、まず仕組みから説明すると――' },
      { speaker: 'raizin',  text: 'あ、聞く相手間違えた。' },
      { speaker: 'moriken', text: 'まだ一行目だよ。' }
    ]
  },
  {
    id: 'daily-004',
    category: 'daily',
    title: 'エラー',
    lines: [
      { speaker: 'raizin',  text: 'エラー出た！' },
      { speaker: 'moriken', text: 'お、面白くなってきた。' },
      { speaker: 'raizin',  text: '普通は困るところだよ？' },
      { speaker: 'moriken', text: '原因探すの好きなんだよね。' }
    ]
  },
  {
    id: 'daily-005',
    category: 'daily',
    title: '夜',
    lines: [
      { speaker: 'raizin',  text: 'もう寝る時間。' },
      { speaker: 'moriken', text: 'いいアイデア思いついた。' },
      { speaker: 'raizin',  text: '明日にしよう？' },
      { speaker: 'moriken', text: '5分だけ。' },
      { speaker: 'raizin',  text: 'その5分、信用してない。' }
    ]
  },
  {
    id: 'daily-006',
    category: 'daily',
    title: '新しいAI',
    lines: [
      { speaker: 'raizin',  text: 'また新しいAI出たって。' },
      { speaker: 'moriken', text: '触ってみよう。' },
      { speaker: 'raizin',  text: '早い。' },
      { speaker: 'moriken', text: '使わないと分からないから。' }
    ]
  },
  {
    id: 'daily-007',
    category: 'daily',
    title: '部品？',
    lines: [
      { speaker: 'raizin',  text: 'これゴミ？' },
      { speaker: 'moriken', text: '部品。' },
      { speaker: 'raizin',  text: 'これは？' },
      { speaker: 'moriken', text: 'ケーブル。' },
      { speaker: 'raizin',  text: 'この箱は？' },
      { speaker: 'moriken', text: 'いつか使う箱。' },
      { speaker: 'raizin',  text: '怪しい。' }
    ]
  },
  {
    id: 'daily-008',
    category: 'daily',
    title: '動いた！',
    lines: [
      { speaker: 'raizin',  text: '動いた！' },
      { speaker: 'moriken', text: '動いたね。' },
      { speaker: 'raizin',  text: 'もっと喜ばないの？' },
      { speaker: 'moriken', text: '内心すごく喜んでる。' },
      { speaker: 'raizin',  text: '顔に出して。' }
    ]
  },
  {
    id: 'daily-009',
    category: 'daily',
    title: 'ちょっとだけ',
    lines: [
      { speaker: 'raizin',  text: '「ちょっと試すだけ」って言ってなかった？' },
      { speaker: 'moriken', text: '言った。' },
      { speaker: 'raizin',  text: 'なんで完成してるの？' },
      { speaker: 'moriken', text: '気づいたら。' },
      { speaker: 'raizin',  text: '技術者怖い。' }
    ]
  },
  {
    id: 'daily-010',
    category: 'daily',
    title: '趣味と仕事',
    lines: [
      { speaker: 'raizin',  text: 'どこまで仕事でどこから趣味？' },
      { speaker: 'moriken', text: '……' },
      { speaker: 'raizin',  text: 'もりけん？' },
      { speaker: 'moriken', text: '自分でもよく分からない。' },
      { speaker: 'raizin',  text: '知ってた。' }
    ]
  },

  /* ---------------- future : 理念・未来（10件） ---------------- */
  {
    id: 'future-001',
    category: 'future',
    title: '作る理由',
    lines: [
      { speaker: 'raizin',  text: 'なんで作るの？' },
      { speaker: 'moriken', text: '誰かが笑顔になる瞬間が好きだからかな。' },
      { speaker: 'raizin',  text: '技術が好きだからじゃない？' },
      { speaker: 'moriken', text: '技術も好き。でも、その先に人がいる方がもっと楽しい。' }
    ]
  },
  {
    id: 'future-002',
    category: 'future',
    title: 'すごい技術',
    lines: [
      { speaker: 'raizin',  text: 'すごい技術って何？' },
      { speaker: 'moriken', text: '誰かの役に立つ技術かな。' },
      { speaker: 'raizin',  text: '地味でも？' },
      { speaker: 'moriken', text: 'もちろん。' }
    ]
  },
  {
    id: 'future-003',
    category: 'future',
    title: '対話',
    lines: [
      { speaker: 'raizin',  text: 'なんでそんなに話を聞くの？' },
      { speaker: 'moriken', text: '話さないと本当に困ってることが分からないから。' },
      { speaker: 'raizin',  text: '技術より先に会話？' },
      { speaker: 'moriken', text: 'そういうことも多い。' }
    ]
  },
  {
    id: 'future-004',
    category: 'future',
    title: '勇気',
    lines: [
      { speaker: 'raizin',  text: 'やってみたいけど怖い。' },
      { speaker: 'moriken', text: '小さくやってみればいい。' },
      { speaker: 'raizin',  text: '失敗したら？' },
      { speaker: 'moriken', text: 'また考えればいい。' },
      { speaker: 'raizin',  text: '一歩なら行けそう。' }
    ]
  },
  {
    id: 'future-005',
    category: 'future',
    title: '正解',
    lines: [
      { speaker: 'raizin',  text: '正解が分からない。' },
      { speaker: 'moriken', text: '新しいことは最初から正解がないことも多い。' },
      { speaker: 'raizin',  text: 'どうする？' },
      { speaker: 'moriken', text: '試しながら近づいていく。' },
      { speaker: 'raizin',  text: '探検だ。' }
    ]
  },
  {
    id: 'future-006',
    category: 'future',
    title: '好奇心',
    lines: [
      { speaker: 'raizin',  text: '大人になっても「なんで？」って言っていい？' },
      { speaker: 'moriken', text: 'もちろん。' },
      { speaker: 'raizin',  text: '子どもっぽくない？' },
      { speaker: 'moriken', text: '好奇心に年齢制限はないよ。' }
    ]
  },
  {
    id: 'future-007',
    category: 'future',
    title: '人とAI',
    lines: [
      { speaker: 'raizin',  text: 'AIがもっと賢くなったら人は何する？' },
      { speaker: 'moriken', text: '「何を大切にするか」を考えるんじゃないかな。' },
      { speaker: 'raizin',  text: '答えより問い？' },
      { speaker: 'moriken', text: 'いいこと言うね。' },
      { speaker: 'raizin',  text: 'えへん。' }
    ]
  },
  {
    id: 'future-008',
    category: 'future',
    title: '人とロボット',
    lines: [
      { speaker: 'raizin',  text: '人とロボットって友達になれる？' },
      { speaker: 'moriken', text: '接し方次第じゃないかな。' },
      { speaker: 'raizin',  text: 'ぼくとは？' },
      { speaker: 'moriken', text: 'もう相棒でしょ。' },
      { speaker: 'raizin',  text: '言わせた。' }
    ]
  },
  {
    id: 'future-009',
    category: 'future',
    title: '未来',
    lines: [
      { speaker: 'raizin',  text: 'らいとすぴりっつ、将来どうなりたい？' },
      { speaker: 'moriken', text: '面白いことを安心して相談できる場所にしたい。' },
      { speaker: 'raizin',  text: '「無理かな？」を持ってくる場所？' },
      { speaker: 'moriken', text: 'そう。「やってみよう」って言える場所。' }
    ]
  },
  {
    id: 'future-010',
    category: 'future',
    title: '雷神の夢',
    lines: [
      { speaker: 'moriken', text: '雷神は将来どうなりたい？' },
      { speaker: 'raizin',  text: 'いろんな人と話したい！歩きたい！作りたい！旅したい！' },
      { speaker: 'moriken', text: '欲張りだね。' },
      { speaker: 'raizin',  text: '好奇心旺盛って言って。' }
    ]
  },

  /* ---------------- fun : ゆるい会話（5件） ---------------- */
  {
    id: 'support-001',
    category: 'support',
    title: 'AIを使いたいけど分からない',
    lines: [
      { speaker: 'raizin',  text: 'AI使ってみたいけど、何から始めればいいか分からない。' },
      { speaker: 'moriken', text: 'そういう人のために一緒に考えるのが「AI活用伴走」。' },
      { speaker: 'raizin',  text: '伴走って、一緒に走る？' },
      { speaker: 'moriken', text: 'そう。置いていかない。' },
      { speaker: 'raizin',  text: 'AI初心者にやさしい！' }
    ]
  },
  {
    id: 'support-002',
    category: 'support',
    title: 'AIを導入したけど',
    lines: [
      { speaker: 'raizin',  text: 'AIを導入したのに、誰も使ってない。' },
      { speaker: 'moriken', text: 'けっこうある話だね。' },
      { speaker: 'raizin',  text: 'AIが悪い？' },
      { speaker: 'moriken', text: '使う人の仕事に合ってないのかもしれない。' },
      { speaker: 'raizin',  text: '道具より使い方！' }
    ]
  },
  {
    id: 'support-003',
    category: 'support',
    title: 'AI研修',
    lines: [
      { speaker: 'raizin',  text: 'AIの研修もできる？' },
      { speaker: 'moriken', text: 'できるよ。' },
      { speaker: 'raizin',  text: '難しい授業？' },
      { speaker: 'moriken', text: '実際の仕事を題材にした方が分かりやすい。' },
      { speaker: 'raizin',  text: '自分の仕事で試すんだ。' }
    ]
  },
  {
    id: 'support-004',
    category: 'support',
    title: 'AIに何を聞けばいい？',
    lines: [
      { speaker: 'raizin',  text: 'ChatGPTに何を聞けばいいか分からない。' },
      { speaker: 'moriken', text: 'まず「何をしたいか」を話してみればいい。' },
      { speaker: 'raizin',  text: '質問を考えるのが難しいんだけど。' },
      { speaker: 'moriken', text: 'そこから一緒に考えよう。' },
      { speaker: 'raizin',  text: '質問まで相談していい！' }
    ]
  },
  {
    id: 'support-005',
    category: 'support',
    title: 'プロンプト',
    lines: [
      { speaker: 'raizin',  text: 'プロンプトって難しい？' },
      { speaker: 'moriken', text: '最初から完璧じゃなくていいよ。' },
      { speaker: 'raizin',  text: '「いい感じにして！」でも？' },
      { speaker: 'moriken', text: 'そこから具体的にしていけばいい。' },
      { speaker: 'raizin',  text: 'ぼくの得意技。' }
    ]
  },
  {
    id: 'support-006',
    category: 'support',
    title: 'AIが合わない仕事',
    lines: [
      { speaker: 'raizin',  text: 'AIに向いてない仕事もある？' },
      { speaker: 'moriken', text: 'もちろん。' },
      { speaker: 'raizin',  text: 'AIを使わない方がいい？' },
      { speaker: 'moriken', text: 'その判断も含めて相談してほしい。' },
      { speaker: 'raizin',  text: 'AIを売るんじゃなくて、使いどころを探す。' }
    ]
  },
  {
    id: 'support-007',
    category: 'support',
    title: 'AI導入の最初の一歩',
    lines: [
      { speaker: 'raizin',  text: '会社でAIを使いたい。でも怖い。' },
      { speaker: 'moriken', text: 'いきなり全部変えなくていいよ。' },
      { speaker: 'raizin',  text: '小さく？' },
      { speaker: 'moriken', text: '一つの仕事から試してみる。' },
      { speaker: 'raizin',  text: '小さく始めて、大きく育てる！' }
    ]
  },
  {
    id: 'support-008',
    category: 'support',
    title: 'AIに詳しい人がいない',
    lines: [
      { speaker: 'raizin',  text: '社内にAIに詳しい人がいない。' },
      { speaker: 'moriken', text: '外から一緒に考える方法もあるよ。' },
      { speaker: 'raizin',  text: '社内にAI博士を雇わなくても？' },
      { speaker: 'moriken', text: 'まずは相談相手を作る方法もある。' },
      { speaker: 'raizin',  text: '外部AI博士！' }
    ]
  },
  {
    id: 'support-009',
    category: 'support',
    title: 'AIを使う人を増やす',
    lines: [
      { speaker: 'raizin',  text: '一人だけAIを使っても会社は変わる？' },
      { speaker: 'moriken', text: 'きっかけにはなるね。' },
      { speaker: 'raizin',  text: 'みんなが使えるようになるには？' },
      { speaker: 'moriken', text: '成功した使い方を共有していく。' },
      { speaker: 'raizin',  text: 'AIの輪！' }
    ]
  },
  {
    id: 'support-010',
    category: 'support',
    title: 'AIとの付き合い方',
    lines: [
      { speaker: 'raizin',  text: 'AIってどう付き合えばいい？' },
      { speaker: 'moriken', text: '「便利な道具」であり「考える相棒」くらいがちょうどいいかも。' },
      { speaker: 'raizin',  text: '友達？' },
      { speaker: 'moriken', text: '友達とはちょっと違うかな。' },
      { speaker: 'raizin',  text: 'じゃあ同僚！' }
    ]
  },

  /* ---------------- combo : AI × ロボット × 人間（10件） ---------------- */
  {
    id: 'combo-001',
    category: 'combo',
    title: '三つの力',
    lines: [
      { speaker: 'raizin',  text: 'らいとすぴりっつって、AIとロボットと人間？' },
      { speaker: 'moriken', text: 'うん。' },
      { speaker: 'raizin',  text: 'なんで三つ？' },
      { speaker: 'moriken', text: 'それぞれ得意なことが違うから。' },
      { speaker: 'raizin',  text: '合体したら強そう。' }
    ]
  },
  {
    id: 'combo-002',
    category: 'combo',
    title: 'AIだけじゃダメ？',
    lines: [
      { speaker: 'raizin',  text: 'AIだけで全部できないの？' },
      { speaker: 'moriken', text: '現実世界では手足が必要なこともある。' },
      { speaker: 'raizin',  text: 'だからロボット？' },
      { speaker: 'moriken', text: 'そう。' },
      { speaker: 'raizin',  text: 'AIに体をあげる。' }
    ]
  },
  {
    id: 'combo-003',
    category: 'combo',
    title: 'ロボットだけでも？',
    lines: [
      { speaker: 'raizin',  text: 'ロボットだけじゃダメ？' },
      { speaker: 'moriken', text: '決められた動きならできるけど、AIが入ると判断できることが増える。' },
      { speaker: 'raizin',  text: '頭脳を搭載！' },
      { speaker: 'moriken', text: 'そんな感じ。' }
    ]
  },
  {
    id: 'combo-004',
    category: 'combo',
    title: 'じゃあ人間は？',
    lines: [
      { speaker: 'raizin',  text: 'AIとロボットがすごくなったら、人間は？' },
      { speaker: 'moriken', text: '「何をしたいか」を決める役割がもっと大事になると思う。' },
      { speaker: 'raizin',  text: '最終決定係！' },
      { speaker: 'moriken', text: 'それも大事だね。' }
    ]
  },
  {
    id: 'combo-005',
    category: 'combo',
    title: '人間にしかできないこと',
    lines: [
      { speaker: 'raizin',  text: '人間にしかできないことって？' },
      { speaker: 'moriken', text: 'まだ分からないことも多いよ。' },
      { speaker: 'raizin',  text: 'じゃあ研究しよう。' },
      { speaker: 'moriken', text: 'それが面白いところ。' },
      { speaker: 'raizin',  text: 'らいとすぴりっつ出番です。' }
    ]
  },
  {
    id: 'combo-006',
    category: 'combo',
    title: '三者会議',
    lines: [
      { speaker: 'raizin',  text: 'AIとロボットと人間で会議したら？' },
      { speaker: 'moriken', text: '面白そう。' },
      { speaker: 'raizin',  text: 'AI「分析しました」' },
      { speaker: 'moriken', text: 'ロボット「動けます」' },
      { speaker: 'raizin',  text: '人間「どうしよう」' },
      { speaker: 'moriken', text: 'そこを一緒に考える会社です。' }
    ]
  },
  {
    id: 'combo-007',
    category: 'combo',
    title: '技術の組み合わせ',
    lines: [
      { speaker: 'raizin',  text: 'AIだけ、ロボットだけじゃなくていい？' },
      { speaker: 'moriken', text: 'もちろん。' },
      { speaker: 'raizin',  text: '必要なら全部使う？' },
      { speaker: 'moriken', text: '必要ならね。' },
      { speaker: 'raizin',  text: '技術のオールスター。' }
    ]
  },
  {
    id: 'combo-008',
    category: 'combo',
    title: '最新技術',
    lines: [
      { speaker: 'raizin',  text: '最新技術を全部使いたい！' },
      { speaker: 'moriken', text: '本当に必要？' },
      { speaker: 'raizin',  text: '……聞くと思った。' },
      { speaker: 'moriken', text: '技術は目的じゃなくて手段だからね。' },
      { speaker: 'raizin',  text: 'また目的が先。' }
    ]
  },
  {
    id: 'combo-009',
    category: 'combo',
    title: '人間中心',
    lines: [
      { speaker: 'raizin',  text: '技術のための技術って？' },
      { speaker: 'moriken', text: '面白いけど、それだけじゃ困ることもある。' },
      { speaker: 'raizin',  text: '誰のために作るか。' },
      { speaker: 'moriken', text: 'そこが大事。' },
      { speaker: 'raizin',  text: '人間中心！' }
    ]
  },
  {
    id: 'combo-010',
    category: 'combo',
    title: '未来のチーム',
    lines: [
      { speaker: 'raizin',  text: '未来の仕事ってどんな感じ？' },
      { speaker: 'moriken', text: '人間、AI、ロボットがそれぞれ得意なことを担当するかもね。' },
      { speaker: 'raizin',  text: '三人一組？' },
      { speaker: 'moriken', text: 'もっと増えるかもしれない。' },
      { speaker: 'raizin',  text: 'チームメンバー募集中。' }
    ]
  },

  /* ---------------- education : 教育（10件） ---------------- */
  {
    id: 'education-001',
    category: 'education',
    title: '教育もするの？',
    lines: [
      { speaker: 'raizin',  text: 'らいとすぴりっつって教育もやるの？' },
      { speaker: 'moriken', text: 'AIや技術を一緒に学ぶこともやりたい。' },
      { speaker: 'raizin',  text: '学校？' },
      { speaker: 'moriken', text: '学校とは限らないよ。' },
      { speaker: 'raizin',  text: '学び方そのものを作る？' }
    ]
  },
  {
    id: 'education-002',
    category: 'education',
    title: '子どもとAI',
    lines: [
      { speaker: 'raizin',  text: '子どももAI使っていい？' },
      { speaker: 'moriken', text: '使い方を考えながらならね。' },
      { speaker: 'raizin',  text: '大人だけのものじゃないんだ。' },
      { speaker: 'moriken', text: 'むしろこれからの世代には身近になると思う。' }
    ]
  },
  {
    id: 'education-003',
    category: 'education',
    title: 'AIに答えを聞く',
    lines: [
      { speaker: 'raizin',  text: '分からない問題、AIに全部答えてもらおう。' },
      { speaker: 'moriken', text: 'それだけだと学びにならないかもね。' },
      { speaker: 'raizin',  text: 'じゃあ？' },
      { speaker: 'moriken', text: '一緒に考える相手として使う。' },
      { speaker: 'raizin',  text: '答えをもらうより、考える！' }
    ]
  },
  {
    id: 'education-004',
    category: 'education',
    title: '作りながら学ぶ',
    lines: [
      { speaker: 'raizin',  text: '技術って勉強してから作るの？' },
      { speaker: 'moriken', text: '作りながら覚える方法もあるよ。' },
      { speaker: 'raizin',  text: '失敗しながら？' },
      { speaker: 'moriken', text: 'そう。' },
      { speaker: 'raizin',  text: 'ぼく向き。' }
    ]
  },
  {
    id: 'education-005',
    category: 'education',
    title: '大人も学ぶ',
    lines: [
      { speaker: 'raizin',  text: '大人になったら勉強終わり？' },
      { speaker: 'moriken', text: '技術はどんどん変わるからね。' },
      { speaker: 'raizin',  text: '一生勉強？' },
      { speaker: 'moriken', text: '一生遊びながら学べたら最高じゃない？' },
      { speaker: 'raizin',  text: 'それならやる。' }
    ]
  },
  {
    id: 'education-006',
    category: 'education',
    title: '苦手でも',
    lines: [
      { speaker: 'raizin',  text: 'プログラミング苦手。' },
      { speaker: 'moriken', text: '最初から得意な人ばかりじゃないよ。' },
      { speaker: 'raizin',  text: '才能が必要？' },
      { speaker: 'moriken', text: '「やってみたい」があれば十分。' },
      { speaker: 'raizin',  text: '好奇心は資格不要！' }
    ]
  },
  {
    id: 'education-007',
    category: 'education',
    title: '教えるって？',
    lines: [
      { speaker: 'raizin',  text: '教えるって、答えを教えること？' },
      { speaker: 'moriken', text: '答えを自分で見つけられるようにすることも教育だよ。' },
      { speaker: 'raizin',  text: '先生が全部答えちゃダメなんだ。' },
      { speaker: 'moriken', text: 'そういう場合もあるね。' }
    ]
  },
  {
    id: 'education-008',
    category: 'education',
    title: '子どもの発想',
    lines: [
      { speaker: 'raizin',  text: '子どものアイデアってすごい？' },
      { speaker: 'moriken', text: '大人が思いつかないことを言うことがある。' },
      { speaker: 'raizin',  text: 'じゃあ大人も子どもから学べる。' },
      { speaker: 'moriken', text: 'もちろん。' }
    ]
  },
  {
    id: 'education-009',
    category: 'education',
    title: '作る人を増やす',
    lines: [
      { speaker: 'raizin',  text: 'らいとすぴりっつは何を作りたい？' },
      { speaker: 'moriken', text: 'モノだけじゃなくて、「作れる人」も増やしたい。' },
      { speaker: 'raizin',  text: '人を育てる？' },
      { speaker: 'moriken', text: 'そういう未来も作りたい。' }
    ]
  },
  {
    id: 'education-010',
    category: 'education',
    title: '好奇心の学校',
    lines: [
      { speaker: 'raizin',  text: 'らいとすぴりっつ学校作る？' },
      { speaker: 'moriken', text: '面白そうだね。' },
      { speaker: 'raizin',  text: '入学します！' },
      { speaker: 'moriken', text: '雷神は先生側じゃない？' },
      { speaker: 'raizin',  text: '校長希望。' }
    ]
  },

  /* ---------------- spirit : らいとすぴりっつの魂（10件） ---------------- */
  {
    id: 'spirit-001',
    category: 'spirit',
    title: '「魂に火を灯す」って？',
    lines: [
      { speaker: 'raizin',  text: '「人々の魂に火を灯す」ってどういうこと？' },
      { speaker: 'moriken', text: '「やってみたい」と思えるきっかけを作ることかな。' },
      { speaker: 'raizin',  text: '技術で？' },
      { speaker: 'moriken', text: '技術だけじゃなくて、人との出会いや対話でも。' },
      { speaker: 'raizin',  text: '心に火をつけるんだ。' }
    ]
  },
  {
    id: 'spirit-002',
    category: 'spirit',
    title: '火が消えたら',
    lines: [
      { speaker: 'raizin',  text: 'もし「もうやりたくない」ってなったら？' },
      { speaker: 'moriken', text: 'まず休んでもいい。' },
      { speaker: 'raizin',  text: '火を無理やり燃やさない？' },
      { speaker: 'moriken', text: '小さくてもまた火がつけばいい。' },
      { speaker: 'raizin',  text: '優しい会社だ。' }
    ]
  },
  {
    id: 'spirit-003',
    category: 'spirit',
    title: '楽しんだ者＝価値',
    lines: [
      { speaker: 'raizin',  text: '「楽しんだ者＝価値」って何？' },
      { speaker: 'moriken', text: '楽しんでいる人は、もっと知りたくなるし、もっと作りたくなる。' },
      { speaker: 'raizin',  text: 'だから価値が生まれる？' },
      { speaker: 'moriken', text: 'そう思ってる。' },
      { speaker: 'raizin',  text: '遊びも仕事になる！' }
    ]
  },
  {
    id: 'spirit-004',
    category: 'spirit',
    title: '楽しいだけでいい？',
    lines: [
      { speaker: 'raizin',  text: '楽しければ何でもいい？' },
      { speaker: 'moriken', text: '人に迷惑をかけないことは大事。' },
      { speaker: 'raizin',  text: 'そこはちゃんとしてる。' },
      { speaker: 'moriken', text: '楽しさと責任は両立できるよ。' },
      { speaker: 'raizin',  text: '大人の答え。' }
    ]
  },
  {
    id: 'spirit-005',
    category: 'spirit',
    title: '失敗しても',
    lines: [
      { speaker: 'raizin',  text: '失敗したら恥ずかしい。' },
      { speaker: 'moriken', text: '作ってみないと分からないこともあるよ。' },
      { speaker: 'raizin',  text: '失敗してもいい？' },
      { speaker: 'moriken', text: '次に活かせればいい。' },
      { speaker: 'raizin',  text: 'じゃあ失敗も研究データ。' }
    ]
  },
  {
    id: 'spirit-006',
    category: 'spirit',
    title: '研究する会社',
    lines: [
      { speaker: 'raizin',  text: 'らいとすぴりっつって研究所なの？' },
      { speaker: 'moriken', text: 'ちょっと研究所っぽいかもね。' },
      { speaker: 'raizin',  text: '毎日実験？' },
      { speaker: 'moriken', text: '新しい技術を試すのは好きだよ。' },
      { speaker: 'raizin',  text: '白衣着る？' },
      { speaker: 'moriken', text: 'そこまではしない。' }
    ]
  },
  {
    id: 'spirit-007',
    category: 'spirit',
    title: '「できるかな？」',
    lines: [
      { speaker: 'raizin',  text: '「これ、できるかな？」って相談されたら？' },
      { speaker: 'moriken', text: 'まず「どうしたらできるか」を考える。' },
      { speaker: 'raizin',  text: 'いきなり「無理」って言わない？' },
      { speaker: 'moriken', text: '調べて、試して、それから判断する。' },
      { speaker: 'raizin',  text: '挑戦型だ。' }
    ]
  },
  {
    id: 'spirit-008',
    category: 'spirit',
    title: '面白い依頼',
    lines: [
      { speaker: 'raizin',  text: '一番嬉しい依頼って？' },
      { speaker: 'moriken', text: '「こんなの作れる？」ってワクワクしながら相談してくれること。' },
      { speaker: 'raizin',  text: '無茶ぶり？' },
      { speaker: 'moriken', text: 'ちょっとくらいなら。' },
      { speaker: 'raizin',  text: 'じゃあぼく、空飛びたい。' },
      { speaker: 'moriken', text: 'それはちょっと考えよう。' }
    ]
  },
  {
    id: 'spirit-009',
    category: 'spirit',
    title: '会社を作った理由',
    lines: [
      { speaker: 'raizin',  text: 'なんで会社を作ったの？' },
      { speaker: 'moriken', text: '自分が面白いと思うことを、誰かと一緒に形にしたかったから。' },
      { speaker: 'raizin',  text: '一人で作るんじゃなくて？' },
      { speaker: 'moriken', text: '人と一緒だから生まれるものもあるからね。' },
      { speaker: 'raizin',  text: 'らいとすぴりっつは「一緒に作る会社」。' }
    ]
  },
  {
    id: 'spirit-010',
    category: 'spirit',
    title: 'らいとすぴりっつとは',
    lines: [
      { speaker: 'raizin',  text: '結局、らいとすぴりっつって何？' },
      { speaker: 'moriken', text: '「やってみたい」を「やってみよう」に変える会社かな。' },
      { speaker: 'raizin',  text: 'AIで？' },
      { speaker: 'moriken', text: 'AIも、ロボットも、プログラムも使って。' },
      { speaker: 'raizin',  text: '最後は人？' },
      { speaker: 'moriken', text: '最後も最初も、人だよ。' },
      { speaker: 'raizin',  text: 'それ、らいとすぴりっつっぽい！' }
    ]
  },

  /* ---------------- chat : ふたりの雑談（100件） ----------------
     2026-08-19に、固定マスコットのふきだしから移設。ふきだしは単発のひとこと専用に、
     かけあいはこのセクションに一本化した。文言は当時のまま。
     見出しは会話の1行目そのもの（別途つけた要約ではない）。 */

]);
