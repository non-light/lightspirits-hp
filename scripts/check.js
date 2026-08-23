/* ============================================================
   公開前の軽い検査。外部パッケージは使わない（Nodeだけで動く）。

   1. data/conversations.js が読めて、書式が正しいか
   2. HTML から参照しているローカルファイルが実在するか
   3. RAIZIN の綴り間違い（RAIJIN）が混ざっていないか

   ローカルで動かすとき:  node scripts/check.js
   ============================================================ */
'use strict';

var fs = require('fs');

var errors = [];
var checked = [];
var parsed = null;   // 読み込めた会話データ（綴り検査で使う）

function fail(msg){ errors.push(msg); }
function ok(msg){ checked.push(msg); }

/* ---------- 1. 会話データ ---------- */
function checkConversations(){
  var path = 'data/conversations.js';
  if (!fs.existsSync(path)) { fail(path + ' が見つかりません'); return; }

  var src = fs.readFileSync(path, 'utf8');
  var win = {};
  try {
    // window だけを渡して評価する。ファイル自身は window にしか書き込まない
    new Function('window', src)(win);
  } catch (e) {
    fail(path + ' が JavaScript として読めません: ' + e.message);
    return;
  }

  var list = win.LS_CONVERSATIONS;
  var cats = win.LS_CONVERSATION_CATEGORIES;
  if (!Array.isArray(list)) { fail('LS_CONVERSATIONS が配列ではありません'); return; }
  if (!cats || typeof cats !== 'object') { fail('LS_CONVERSATION_CATEGORIES が定義されていません'); return; }

  var SPEAKERS = { raizin: 1, moriken: 1 };
  var idRe = /^[a-z]+-\d{3}$/;
  var seen = {};

  list.forEach(function(c, i){
    var at = 'conversations.js の ' + (c && c.id ? '"' + c.id + '"' : '[' + i + '] 番目');

    if (!c || typeof c !== 'object') { fail(at + ' が空です'); return; }
    if (!c.id)       { fail(at + ' に id がありません'); return; }
    if (!idRe.test(c.id)) fail(at + ' の id は「カテゴリー-連番3桁」にしてください（例 ai-002）');
    if (seen[c.id])  fail('id が重複しています: ' + c.id);
    seen[c.id] = 1;

    if (!c.category)        fail(at + ' に category がありません');
    else if (!cats[c.category])
      fail(at + ' のカテゴリー "' + c.category + '" は未定義です。conversations.js 冒頭の一覧に足してください');

    if (!c.title || !String(c.title).trim()) fail(at + ' に title がありません');

    if (!Array.isArray(c.lines) || !c.lines.length) { fail(at + ' に lines がありません'); return; }

    c.lines.forEach(function(l, j){
      var where = at + ' の ' + (j + 1) + '行目';
      if (!l || typeof l !== 'object') { fail(where + ' が空です'); return; }
      if (!SPEAKERS[l.speaker])
        fail(where + ' の speaker は raizin か moriken だけです（今: ' + JSON.stringify(l.speaker) + '）');
      if (typeof l.text !== 'string' || !l.text.trim())
        fail(where + ' の text が空です');
    });
  });

  parsed = list;
  if (!errors.length) ok('会話データ ' + list.length + ' 件、カテゴリー ' + Object.keys(cats).length + ' 種類 — 書式OK');
}

/* ---------- 1b. ひとこと・かけあいデータ ---------- */
function checkBubbles(){
  var path = 'data/bubbles.js';
  if (!fs.existsSync(path)) { fail(path + ' が見つかりません'); return; }

  var win = {};
  try {
    new Function('window', fs.readFileSync(path, 'utf8'))(win);
  } catch (e) {
    fail(path + ' が JavaScript として読めません: ' + e.message);
    return;
  }

  var b = win.LS_BUBBLES;
  if (!b || typeof b !== 'object' || Array.isArray(b)) {
    fail('LS_BUBBLES は { raizin: [...], moriken: [...], pairs: [...] } の形にしてください');
    return;
  }

  function text(t, at){
    if (typeof t !== 'string' || !t.trim()) { fail(at + ' が空です'); return false; }
    if (/raijin/i.test(t)) fail(at + ' に RAIJIN があります。正しい綴りは RAIZIN です');
    return true;
  }

  var solo = 0;
  ['raizin', 'moriken'].forEach(function(key){
    var list = b[key];
    if (!Array.isArray(list)) { fail('LS_BUBBLES.' + key + ' が配列ではありません'); return; }
    var seen = {};
    list.forEach(function(t, i){
      var at = 'bubbles.js の ' + key + '[' + i + ']';
      if (!text(t, at)) return;
      // ひとりで喋るぶんは、返事を待つ形にできない
      if (/[？?]\s*$/.test(t))
        fail(at + ' は疑問で終わっています。ひとりで喋るぶんは返事が来ません: 「'
           + t.replace(/\n/g, '') + '」。かけあいにするなら pairs へ移してください');
      var k = t.replace(/\s/g, '');
      if (seen[k]) fail(at + ' は ' + key + '[' + seen[k] + '] と同じ文です'); else seen[k] = i;
      solo++;
    });
  });

  var pairs = b.pairs;
  var np = 0;
  if (pairs !== undefined) {
    if (!Array.isArray(pairs)) { fail('LS_BUBBLES.pairs が配列ではありません'); return; }
    var seenP = {};
    pairs.forEach(function(p, i){
      var at = 'bubbles.js の pairs[' + i + ']';
      if (!p || typeof p !== 'object') { fail(at + ' が空です'); return; }
      // ふきだしは2つしかないので、1往復を超えるものは持てない
      var extra = Object.keys(p).filter(function(k){
        return k !== 'raizin' && k !== 'moriken' && k !== 'first';
      });
      if (p.first !== undefined && p.first !== 'raizin' && p.first !== 'moriken')
        fail(at + " の first は 'raizin' か 'moriken' だけです");
      if (extra.length)
        fail(at + ' に ' + extra.join('/') + ' があります。かけあいは1往復までです。'
           + '長い会話は data/conversations.js へ');
      if (!text(p.raizin, at + ' の raizin')) return;
      if (!text(p.moriken, at + ' の moriken')) return;
      var k = (p.raizin + '|' + p.moriken).replace(/\s/g, '');
      if (seenP[k] !== undefined) fail(at + ' は pairs[' + seenP[k] + '] と同じかけあいです');
      else seenP[k] = i;
      np++;
    });
  }

  var chats = b.chats, nc = 0, nl = 0;
  if (chats !== undefined) {
    if (!Array.isArray(chats)) { fail('LS_BUBBLES.chats が配列ではありません'); return; }
    var seenC = {};
    chats.forEach(function(c, i){
      var at = 'bubbles.js の chats[' + i + ']' + (c && c.id ? '（' + c.id + '）' : '');
      if (!c || !Array.isArray(c.lines) || c.lines.length < 2) { fail(at + ' は2行以上にしてください'); return; }
      c.lines.forEach(function(l, j){
        var w = at + ' の ' + (j+1) + '行目';
        if (!l || (l.speaker !== 'raizin' && l.speaker !== 'moriken'))
          fail(w + ' の speaker は raizin か moriken だけです');
        else text(l.text, w);
      });
      if (c.id) {
        if (seenC[c.id] !== undefined) fail(at + ' は chats[' + seenC[c.id] + '] と同じ id です');
        else seenC[c.id] = i;
      }
      nc++; nl += c.lines.length;
    });
  }

  if (!errors.length)
    ok('雑談 ' + nc + ' 件（' + nl + 'せりふ）');
  if (!errors.length)
    ok('ひとこと ' + solo + ' 件（雷神 ' + (b.raizin||[]).length + ' / もりけん ' + (b.moriken||[]).length
     + '）＋ 一言かけあい ' + np + ' 件 — 書式OK');
}

/* ---------- 2. リンク切れ ---------- */
function checkLinks(){
  var files = ['index.html', 'mobile.html', 'thanks.html', '404.html'];
  var count = 0;

  files.forEach(function(f){
    if (!fs.existsSync(f)) return;
    var raw = fs.readFileSync(f, 'utf8');

    // script / style の中は文字列の組み立てが混ざるので、属性の走査からは外す
    var markup = raw
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

    var refs = [];
    var m, re = /(?:src|href)\s*=\s*"([^"]+)"/g;
    while ((m = re.exec(markup))) refs.push(m[1]);

    // 外した script の src だけは拾い直す
    var re2 = /<script\b[^>]*\bsrc\s*=\s*"([^"]+)"/gi;
    while ((m = re2.exec(raw))) refs.push(m[1]);

    refs.forEach(function(r){
      if (/^(https?:|\/\/|mailto:|tel:|data:|#|javascript:)/i.test(r)) return;
      var p = decodeURIComponent(r.split('#')[0].split('?')[0]);
      // 404.html は深いパスでも出るのでルート基準（/images/... ）で書いてある。
      // 公開時のルート＝リポジトリのルートなので、先頭の / を落として見に行く
      if (p.charAt(0) === '/') p = p.slice(1);
      if (!p) return;
      count++;
      if (!fs.existsSync(p)) fail(f + ' が参照している ' + p + ' が見つかりません');
    });
  });

  ok('HTML から参照しているローカルファイル ' + count + ' 件 — すべて実在');
}

/* ---------- 3. RAIZIN の綴り ----------
   説明文やファイル名にも RAIJIN の字が出るため、生のファイルではなく
   読み込んだ会話の中身（id / category / title / speaker / text）だけを見る */
function checkSpelling(){
  if (!parsed) return;
  var n = 0;
  parsed.forEach(function(c){
    if (!c) return;
    var vals = [c.id, c.category, c.title];
    (c.lines || []).forEach(function(l){ if (l) vals.push(l.speaker, l.text); });
    vals.forEach(function(v){
      if (typeof v !== 'string') return;
      n++;
      if (/raijin/i.test(v))
        fail('"' + c.id + '" の中に RAIJIN があります。正しい綴りは RAIZIN です → ' + v);
    });
  });
  ok('会話の中の RAIZIN の綴り ' + n + '項目 — OK');
}

checkConversations();
checkBubbles();
checkLinks();
checkSpelling();

checked.forEach(function(m){ console.log('  OK  ' + m); });
if (errors.length) {
  console.error('\n検査に失敗しました（' + errors.length + '件）:');
  errors.forEach(function(m){ console.error('  NG  ' + m); });
  process.exit(1);
}
console.log('\nすべての検査を通過しました。');
