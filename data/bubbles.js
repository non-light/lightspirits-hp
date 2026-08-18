/* ============================================================
   マスコットのふきだし（雷神・もりけんが画面の隅で交わす短いかけあい）

   ★ ふきだしの追加・修正は、このファイルだけを編集してください。

   ※ セクションの「もりけんと雷神の話」（data/conversations.js）とは別物です。
     あちらは読みにいくもの、こちらはふと目に入るもの。混ざりません。

   ── 書き方 ─────────────────────────────────────────────
   {
     id: 'bubble-017',
     lines: [
       { speaker: 'raizin',  text: '雷神のせりふ' },
       { speaker: 'moriken', text: 'もりけんのせりふ' }
     ]
   }

   ・speaker は 'raizin'（雷神）か 'moriken'（もりけん）だけ。
     英字表記は RAIZIN です。RAIJIN ではありません。
   ・\n で改行できます。ふきだしは幅が狭いので、2行くらいが読みやすい目安です。
   ・2往復（4行）以上にすると「▸ クリックでつづき」が出て、
     クリックで最後まで再生されます。2行だけなら案内は出ません。
   ・4分に1度、この中からランダムに1つ出ます。
   ============================================================ */

window.LS_BUBBLES = (window.LS_BUBBLES || []).concat([

  { id: 'bubble-001', lines: [
    { speaker: 'raizin',  text: 'そうそう！\nたのしさが原動力⚡' },
    { speaker: 'moriken', text: '今日もいい仕事\nできそうな予感🔥' } ] },

  { id: 'bubble-002', lines: [
    { speaker: 'raizin',  text: 'ぼくも一緒に\nがんばるよ💪' },
    { speaker: 'moriken', text: '失敗恐れず\nまず動く！それだけ🔥' } ] },

  { id: 'bubble-003', lines: [
    { speaker: 'raizin',  text: 'AIもロボットも\nすごい時代だね！' },
    { speaker: 'moriken', text: 'うまく使えば\n可能性は無限大🔥' } ] },

  { id: 'bubble-004', lines: [
    { speaker: 'raizin',  text: 'アプリもロボットも\nまかせてね！' },
    { speaker: 'moriken', text: 'どんな業種でも\n一緒に考えるよ🙌' } ] },

  { id: 'bubble-005', lines: [
    { speaker: 'raizin',  text: 'それ聞いて\nぼくもワクワク！✨' },
    { speaker: 'moriken', text: 'ゲームで学ぶ\n仕掛けを作りたい🔥' } ] },

  { id: 'bubble-006', lines: [
    { speaker: 'raizin',  text: '声かけてみてね👋\nぼくもいるよ！' },
    { speaker: 'moriken', text: '小さな一歩が\n大きくなるよ🔥' } ] },

  { id: 'bubble-007', lines: [
    { speaker: 'raizin',  text: 'なんでも気軽に\n相談してね！🙌' },
    { speaker: 'moriken', text: 'どんな相談でも\n大歓迎です😄' } ] },

  { id: 'bubble-008', lines: [
    { speaker: 'raizin',  text: 'ロボット・AI・アプリ\n全部つながるよ⚡' },
    { speaker: 'moriken', text: 'ひとりで全部\nやり切ります💪' } ] },

  { id: 'bubble-009', lines: [
    { speaker: 'raizin',  text: '大会で優勝も\nしたんだよ！🏆' },
    { speaker: 'moriken', text: 'あの試合は\n燃えたな〜🔥' } ] },

  { id: 'bubble-010', lines: [
    { speaker: 'raizin',  text: 'お問い合わせは\ninfo@lightspirits.jp' },
    { speaker: 'moriken', text: '小さな相談から\n大歓迎です🙏' } ] },

  { id: 'bubble-011', lines: [
    { speaker: 'raizin',  text: '一緒に面白いもの\nつくろう！✨' },
    { speaker: 'moriken', text: '楽しいが一番！\nまず話しかけて' } ] },

  { id: 'bubble-012', lines: [
    { speaker: 'raizin',  text: 'もりけん！\n最近何つくってる？' },
    { speaker: 'moriken', text: '新しいロボットと\n格闘中だよ🤖' } ] },

  { id: 'bubble-013', lines: [
    { speaker: 'raizin',  text: '大会の前って\nドキドキするよね⚡' },
    { speaker: 'moriken', text: '本番こそ燃える！\nそれが楽しい🔥' } ] },

  { id: 'bubble-014', lines: [
    { speaker: 'raizin',  text: 'ゲームで学べる\nってすごいよね！' },
    { speaker: 'moriken', text: '楽しみながら\n学ぶのが一番✨' } ] },

  { id: 'bubble-015', lines: [
    { speaker: 'raizin',  text: '今日はいい天気！\n気分も上がるね☀️' },
    { speaker: 'moriken', text: 'こんな日は\nモチベが違う🔥' } ] },

  { id: 'bubble-016', lines: [
    { speaker: 'raizin',  text: '雨の日もなんか\n好きなんだよね☔' },
    { speaker: 'moriken', text: '雨音の中の\n集中作業、最高だ' } ] }

]);
