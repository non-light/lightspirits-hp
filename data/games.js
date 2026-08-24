/* ============================================================
   RAIZIN GAMES — ゲーム一覧
   games/index.html がこの配列を読んでカードを組み立てます。

   ゲームを増やすときは、このファイルの配列に1件足すだけです。
   games/index.html も CSS も触りません。

   {
     id:      'daruma',              // 英小文字とハイフン。重複禁止。公開後は変えない
     name:    '雷神だるま落とし',      // カードの見出し
     en:      'RAIZIN DARUMA',       // 英字の副題（省略可）
     desc:    '説明。\n で改行できます',
     url:     'https://…',           // 遊べる場所。null なら COMING SOON 表示になる
     tags:    ['タイミング', '1人用'], // 省略可。0〜3個くらいが読みやすい
     isNew:   true,                  // 省略可。NEW バッジが付く
     thumb:   null                   // 省略可。画像のパスを入れると看板が画像に変わる
   }

   ・英字表記は必ず RAIZIN です。RAIJIN ではありません
   ・url が null のカードは押せません。URLが決まったら url に書くだけで
     PLAY ボタンに切り替わります
   ・将来ハイスコアや称号を出すときは、ここに項目を足して
     games/index.html の renderMeta() に対応を書きます（下の方にコメントあり）
   ============================================================ */

window.LS_GAMES = [

  {
    id:    'daruma',
    name:  '雷神Drop Tower',
    en:    'RAIZIN DROP TOWER',
    desc:  'タイミングよくコマを吹き飛ばせ！\n雷神と挑む、ちょっと変わっただるま落とし。',
    url:   'https://daruma.lightspirits.jp/',
    tags:  ['タイミング'],
    isNew: true
  },

  {
    id:    'tower',
    name:  '雷神Weather Tower',
    en:    'RAIZIN WEATHER TOWER',
    desc:  '崩さずに、そーっと引き抜け。\n雷神とハラハラのタワー勝負。',
    url:   'https://play.lightspirits.jp/raizin-tower/',
    tags:  ['バランス'],
    isNew: true
  }

];

/* 一覧の最後に置く「次はなにを作ろう」のカード。
   comingSoon のカードは押せません。文言だけ変えたいときはここを直します */
window.LS_GAMES_NEXT = {
  title: 'COMING SOON',
  desc:  '次のゲーム、開発中。',
  line:  'つぎは何して遊ぶ？'
};
