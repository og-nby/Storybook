# Storybook デザイントークン検証環境

`rules/DESIGN.md` と、入手したデザイントークン（PDF/サイトCSS）をベースに、UIの見た目を **Storybook** 上で確認できるようにした検証用プロジェクトです。

## できること

- `rules/DESIGN.md` の方針・トークンを `src/styles/global.css` に反映
- **Global Tokens（値）** / **Semantic Tokens（用途）** を CSS変数で運用
- PDFの **Semantic Token名互換（原文名）** もエイリアスで併設
- `card.html` / `section.html` のマークアップを参考にした Story を追加

## セットアップ

```bash
npm i
```

## 起動（Storybook）

```bash
npm run storybook
```

ブラウザで `http://localhost:6006/` を開きます。

## ビルド

```bash
npm run build
npm run build-storybook
```

## 主なファイル

- **デザイン方針**: `rules/DESIGN.md`
- **デザイントークン（CSS変数）**: `src/styles/global.css`
  - `--color-*` / `--space-*` / `--radius-*` など（Global Tokens）
  - `--semantic-*`（用途名。コンポーネントは基本こちらを参照）
  - PDF互換の用途名エイリアス（例: `--semantic-text_normal` 等）
- **dポイントマーケット風カード（最小CSS）**: `src/styles/dpm-card.css`
- **dポイントマーケット風セクション（最小CSS）**: `src/styles/dpm-section.css`

## Story 一覧（抜粋）

- `Components/Button`
- `Components/Card`
- `Components/DpmCard`（`card.html` を元にしたマークアップ）
- `Sections/FavoriteAdvertisers`（`section.html` 相当）

## 注意

- `src/styles/dpm-card.css` / `src/styles/dpm-section.css` は、提供された巨大な `global.css` から **表示に必要な範囲だけ**を切り出した「最小セット」です。完全一致を狙う場合は、該当セレクタを段階的に追加してください。

