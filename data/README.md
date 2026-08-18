# もりけん × 雷神 会話コンテンツ

## 会話を追加するときに編集するファイル

```
data/conversations.js
```

**このファイルだけ**です。index.html もモバイル版も、その他の設定ファイルも触りません。

## 追加のしかた

`window.LS_CONVERSATIONS` の配列に、末尾から1件足します。

```js
{
  id: 'ai-002',                 // カテゴリー-連番3桁。重複禁止。公開後は変更しない
  category: 'ai',               // 下の一覧にあるキー
  title: '見出しになる一言',
  lines: [
    { speaker: 'raizin',  text: '雷神のせりふ' },
    { speaker: 'moriken', text: 'もりけんのせりふ' }
  ]
}
```

- `speaker` は `raizin`（雷神）か `moriken`（もりけん）の2つだけ。
  英字表記は **RAIZIN** です。RAIJIN ではありません。
- `lines` は何往復でも構いません。長文でも折り返して表示されます。
- 並べた順が、そのカテゴリー内の表示順になります。
- `id` は将来リンクの目印に使う想定なので、公開後は変更しないでください。

## カテゴリー

同ファイル冒頭の `LS_CONVERSATION_CATEGORIES` で定義しています。

| キー | 表示名 |
|---|---|
| `about` | 会社のこと |
| `ai` | AIのこと |
| `robot` | ロボットのこと |
| `dx` | DXのこと |
| `faq` | よくある質問 |
| `daily` | 日々のこと |
| `future` | これからのこと |
| `fun` | ゆるい話 |

新しいカテゴリーが要るときは、この表に1行足すだけです。
**会話が0件のカテゴリーは画面に出ません**（タブも生えません）。

## 追加したあとの確認

ブラウザで開いて、DevTools のコンソールを見てください。
書式に問題があると `[会話]` から始まる警告が出ます。

- `IDが重複しています`
- `未定義のカテゴリー`
- `speaker は raizin か moriken だけです`
- `項目が不完全です`

該当する会話だけが表示から外れ、**他の会話やページ本体は壊れません**。

## 自動検査

`main` へ push すると、GitHub Actions が `scripts/check.js` を走らせます
（`.github/workflows/check.yml`）。数秒で終わり、**デプロイは行いません**。

検査に引っかかると、GitHub上でそのコミットに赤いバツが付き、
Actions のログに日本語で理由が出ます。

- 会話データが JavaScript として読めない（カンマや括弧の閉じ忘れ）
- id の重複、id の形式ちがい
- 未定義のカテゴリー
- speaker が `raizin` / `moriken` 以外
- title や text が空
- HTMLが参照している画像・スクリプトのパス切れ
- 会話の中に `RAIJIN` の綴り

手元でも同じ検査ができます（Nodeが入っている場合）:

```
node scripts/check.js
```

なお、検査が赤くなっても**サイトの公開は止まりません**。
GitHub Pages は従来どおり main の中身をそのまま配信します。
検査はあくまで「気づくため」のものです。

## 表示条件

| | 表示 |
|---|---|
| PC（769px 以上） | 表示される |
| スマホ（768px 以下） | **表示されない**（DOMごと生成しない） |
| 一般・個人向けテーマ | 表示される |
| 企業・法人向けテーマ | 表示されない |

768px は、このサイトが以前から使っている `mobile.html` への振り分け幅と同じ値です。
新しいブレークポイントは足していません。

スマホ利用者はそもそも `mobile.html` に転送され、そちらは
`data/conversations.js` を読み込みません。会話データも画像も一切ダウンロードされません。

## ファイルが大きくなってきたら

1カテゴリーが20件を超えたあたりで、表示の絞り込み（ページ送りなど）を足すのが良い頃合いです。
また `data/conversations.js` は `concat` で追記する書き方にしてあるため、

```
data/conversations/about.js
data/conversations/ai.js
```

のようにカテゴリー別へ分割しても、**各ファイルの中身はそのままの書式で動きます**
（分割時は index.html に script タグを足す作業が一度だけ必要です）。

## 仕組みの置き場所

| 役割 | 場所 |
|---|---|
| 会話データ | `data/conversations.js` |
| 表示ロジック | `index.html` 末尾の `<script>`（`#dialogue` を組み立てる） |
| 見た目 | `index.html` の `<style>` 内、`#dialogue` から始まる指定 |
| 置き場所 | `index.html` の `<section id="dialogue">`（雷神日記と代表についての間） |
| キャラクター画像 | `images/mascot-raizin.png` / `images/moriken.png`（マスコットと共用） |
