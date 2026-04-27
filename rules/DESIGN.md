# DESIGN.md

## Visual Theme
「dポイントマーケット」風の、情報量が多くても見やすいシンプルなUI。白基調のカードレイアウトに、主色の赤とリンクの青をアクセントとして使う。

## Color Palette
- Primary: #CF0F30 — 主要アクション（ボタン等）
- Background: #F9F9F9 — ページ背景
- Text: #282828 — 本文テキスト
- Border: #E0E0E0 — 区切り線・枠線
- Accent: #0C7ECC — リンク・ホバー

## Typography
- Font: system-ui（OS標準のサンセリフ）
- Body: 14px, Regular
- Heading: 18px, Bold (700)

## Components

### Button
- Primary: bg #CF0F30, text #FFFFFF, border-radius: 8px
- Hover: opacity 0.85

### Card
- Background: #FFFFFF
- Border: 1px solid #E0E0E0
- Border-radius: 8px
- Padding: 24px 16px

## Spacing Tokens（PDFより）
- mostNarrow: 2px
- veryNarrow: 4px
- narrow: 8px
- default: 16px
- wide: 24px

## Border Tokens（PDFより）
- Section Divider: 4px
- Box-Line: 2px
- List-Line: 1px

## Additional Colors（PDFより）
- Primary_light: #E83856
- Tertiary: #FFDC00
- Text_normal: #383838
- Text_gray: #606060
- Text_light: #B0B0B0
- Bg_100: #F0F0F0
- Bg_red-50: #FFF6F8
- Favorite-selected: #FF4E6C

## Semantic Tokens（運用ルール）
- 基本方針: コンポーネント実装は「値（Global）」ではなく「用途名（Semantic）」を参照する
- CSS変数の命名: `--semantic-*` を用途名として追加し、値は `--color-* / --space-* / --radius-*` 等から参照する
- 例:
  - text: `--semantic-text` / `--semantic-text-muted`
  - link: `--semantic-link`
  - surface: `--semantic-bg-surface` / `--semantic-border` / `--semantic-shadow-surface`
  - controls: `--semantic-control-primary-bg` / `--semantic-control-subtle-border` など

## Do's and Don'ts
- Do: カラーパレットの色のみ使用する
- Don't: 定義外の色を使わない