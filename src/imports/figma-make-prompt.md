# Figma Make プロンプト — GOOD GAME 採用サイト デザインリファイン

## 概要

GOOD GAME（株式会社ツーサイドアップ）のTCGカードショップ採用サイトをリファインする。現在のデザインは「Stylish White Editorial」スタイルで、白基調＋ブランドレッド（#e50020）のクリーンなレイアウト。以下5つの変異レイヤをすべて反映し、デザインシステムとしての一貫性・アクセシビリティ・独自性を同時に引き上げる。

---

## サイト構成（既存）

- **Header**: Glass morphismスティッキーナビ（ロゴ + ナビリンク + CTAボタン）
- **Hero**: フルワイド、キャッチコピー + サブコピー + CTA2つ（エントリー / カジュアル面談）
- **3つの特長**: カード3枚横並び（トレカが好き / 選べるキャリア / 成長環境）
- **GOOD GAMEとは**: 会社紹介セクション + 数字ハイライト（5ストア / 月売上5000万 etc.）
- **募集職種**: カテゴリカード（店舗運営 / 通販・EC / 事業推進）
- **インタビュー**: 代表 + スタッフ + 通販社員のQ&A
- **入社後最初の30日**: タイムライン（Week 1-4）
- **選考ステップ**: フロー図
- **FAQ**: アコーディオン
- **CTA**: 最終エントリーセクション
- **Footer**: リンク + ロゴ + コピーライト

---

## 変異レイヤA：意味論トークン（Semantic Design Tokens）

### 指示
現在のCSS変数（`:root`に定義された`--bg`, `--text`, `--brand`等）を、意味論的なトークン体系に再構築してください。

### トークン構造（3層）
```
Reference（Raw値）→ System（意味論）→ Component（用途特化）
```

### カラートークン
| Reference | System Token | 用途 |
|-----------|-------------|------|
| neutral.0: #FFFFFF | surface.default | 通常背景 |
| neutral.50: #FAFAFA | surface.subtle | セクション背景の交互色 |
| neutral.100: #F2F2F5 | surface.muted | カード背景 |
| neutral.900: #0D0D12 | text.primary | 本文テキスト |
| neutral.700: #3A3A4A | text.secondary | 補足テキスト |
| neutral.500: #6E6E82 | text.muted | キャプション・注釈 |
| red.500: #E50020 | brand.primary | CTA・アクセント |
| red.600: #C0001A | brand.primary.hover | CTA ホバー |
| red.50: rgba(229,0,32,0.04) | brand.surface | ブランド背景（薄） |
| orange.500: #FF6B3D | accent.secondary | グラデーション終点・サブアクセント |

### テーマ対応
- Light（デフォルト）: 上記のマッピング
- Dark（将来拡張用）: surface.default→#0D0D12, text.primary→#FAFAFA, brand.primary→#FF3350
- High Contrast: コントラスト比を全てWCAG AAA（7:1）以上に引き上げたバリアント

### Figmaでの実装
- Local Variablesで3層を作成（Collection: Reference / System / Component）
- すべてのフレーム・コンポーネントはSystem層のみ参照
- Reference層の直接参照は禁止

---

## 変異レイヤB：余白・密度の"署名"化（Spacing System）

### 指示
4pxベースの余白スケールを定義し、CTA周辺に大胆なホワイトスペースを配置して「呼吸のあるブランド」を表現する。

### スペーシングスケール（4px基準）
```
space.xs:   4px    — アイコンとラベルの間
space.sm:   8px    — インラインの余白
space.md:   16px   — カード内パディング
space.lg:   24px   — セクション内の要素間
space.xl:   32px   — カードグループ間
space.2xl:  48px   — セクション間の余白
space.3xl:  64px   — ヒーローとコンテンツの間
space.4xl:  96px   — CTAセクションの上下パディング
space.5xl:  128px  — ヒーローセクションの垂直余白
```

### 適用ルール
- **Hero**: 上下パディングを`space.5xl`（128px）に拡大。CTAボタン群の上マージンを`space.3xl`（64px）に。キャッチコピーとサブコピーの間は`space.lg`（24px）
- **CTAボタン周辺**: ボタンの上下に最低`space.3xl`（64px）の空白を確保。周囲に他の要素を詰めない
- **セクション間**: 統一して`space.2xl`（48px）→`space.3xl`（64px）に引き上げ
- **カード内**: パディングを`space.lg`（24px）→`space.xl`（32px）に
- **セクションヘッダー下**: `space.xl`（32px）を統一マージンに

### 密度プリセット（Figmaバリアント）
- **Comfortable**（デフォルト）: 上記スケール
- **Compact**: 各値を75%にスケール（モバイル/情報密度が必要な場面）

---

## 変異レイヤC：モーション設計（Functional + Decorative）

### 指示
全アニメーションを「機能モーション」と「演出モーション」に分類し、演出側はすべて軽減可能にする。

### 分類表

| 要素 | タイプ | 目的 | 軽減時の挙動 |
|------|--------|------|-------------|
| scroll reveal（フェードイン+上昇） | 演出 | 情緒的な登場感 | 即座に表示（opacity:1, transform:none） |
| reveal-childの遅延カスケード | 演出 | リズム感 | 即座に全子要素表示 |
| ヘッダーのscrolled状態変化 | 機能 | スクロール位置の認知 | 維持（ただしtransition短縮: 0.1s） |
| ナビリンクのhover | 機能 | インタラクティブ状態の認知 | 維持（transition短縮） |
| CTAボタンのhover/press | 機能 | 操作フィードバック | 維持（scaleアニメのみ削除） |
| アコーディオンの開閉 | 機能 | コンテンツの表示/非表示 | 維持（height遷移を即時に） |
| タイムラインの連番アニメ | 演出 | 時系列の視覚化 | 即座に全表示 |

### reduced-motion対応
```css
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .reveal-child > * { opacity: 1; transform: none; transition: none; }
  /* 機能モーションは短縮のみ */
  .site-header { transition-duration: 0.1s; }
  .btn, .nav-links a { transition-duration: 0.1s; }
}
```

### Figmaでの表現
- Interaction Specシートを作成: 各コンポーネントに「Default / Hover / Active / Disabled / Loading」の5状態
- モーションを「Functional」「Decorative」タグで分類
- Prototypeで主要フロー（CTA → 職種詳細 → エントリー）のトランジションを設定

---

## 変異レイヤD：マイクロインタラクション — 状態の意味論

### 指示
全インタラクティブ要素に明確な状態定義を持たせ、ローディング・エラー・空状態のパターンも用意する。

### ボタンコンポーネント（`.btn` / `.btn-ghost`）
| 状態 | 見た目 | 補足 |
|------|--------|------|
| Default | ブランドグラデーション背景、白テキスト | |
| Hover | 背景やや明るく、shadow-brand適用、微上昇（translateY -2px） | |
| Active/Press | 背景やや暗く（brand-deep）、影縮小、scaleなし | |
| Focus-visible | 2px brand-softアウトライン（offset 2px） | キーボードナビ対応 |
| Disabled | opacity 0.4、cursor: not-allowed | |
| Loading | テキスト→スピナーに置換、pointer-events: none | フォーム送信時 |

### カードコンポーネント（`.card`, `.role-item`）
| 状態 | 見た目 |
|------|--------|
| Default | surface.muted背景、shadow-sm |
| Hover | shadow-md、border微強調、translateY -4px |
| Focus-within | brand-softアウトライン |

### FAQアコーディオン
| 状態 | 見た目 |
|------|--------|
| Closed | + アイコン、テキスト折りたたみ |
| Open | × アイコン回転、コンテンツ展開 |
| Hover | 背景 surface.subtle |

### ローディングパターン（将来の動的コンテンツ用）
- **Skeleton**: 職種カードのプレースホルダー（Pulse animation、角丸を維持）
- 1秒未満のロード → 表示なし
- 1秒超 → Skeleton表示
- 5秒超 → 「読み込み中...」テキスト追加

### Figmaでの実装
- 各コンポーネントにProperty: State（Default / Hover / Active / Focus / Disabled / Loading）
- Auto Layoutで全状態をフレーム内に横並び一覧化
- Interaction Spec Annotation付き

---

## 変異レイヤE：素材表現と可読性ガード（Glass + Readability）

### 指示
既存のGlass morphismヘッダーを強化しつつ、透明・ブラー表現が可読性を損なわないガードレールを設計する。

### ヘッダー（Glass morphism）
- 通常: `backdrop-filter: blur(24px) saturate(1.6)`, 背景 `rgba(250,250,250,0.82)`
- **ガードレール**: テキストと背景のコントラスト比を常にWCAG AA（4.5:1）以上に保つ
- スクロール時: 不透明度を`0.95`に上げ、可読性を確保

### Hero（Liquid Glass インスピレーション）
- 背景にグラデーション（`gradient-hero`）を維持
- キャッチコピー領域に微細なfrosted glass効果を追加（blur 8px、白 0.6 opacity のオーバーレイ）
- **ガードレール**: テキストエリアは必ず半透明scrimを敷く。テキスト色とscrim後の背景で4.5:1以上
- 画像やパターンを背景に入れる場合のフォールバック: 無画像時でもテキストが読めるグラデーション

### カードの微細な奥行き
- Neumorphism風のソフトシャドウを「特長3枚カード」にのみ部分適用
- 外側シャドウ: `0 8px 32px rgba(0,0,0,0.06)`
- **ガードレール**: カード境界は背景と3:1以上のコントラスト差を維持（WCAG 2.2 1.4.11 Non-text Contrast）

### ダークセクション（CTAセクション `gradient-dark`）
- テキスト: 白（#FFFFFF）on ダーク背景（#0D0D12〜#1A1A2E）→ コントラスト21:1、問題なし
- CTAボタン: ブランドレッド背景に白テキスト → コントラスト確認（#E50020 on white = 要検証）
- **ガードレール**: ボタン内テキストは常に白、ボタン背景が明るい場合は自動でdark textに切替

### Figmaでの実装
- Glass系のスタイルをEffect Styleとして定義（"Glass / Light", "Glass / Dark"）
- 可読性チェック用のOverlayレイヤーを非表示で配置（コントラスト比の注釈付き）
- コンポーネントのDescription欄に最低コントラスト比を記載

---

## 全体レイアウト指示

### ページ構成（Figmaページ）
1. **Cover** — プロジェクト概要、ブランドカラー、フォント
2. **Tokens** — カラー / タイポグラフィ / スペーシング / エフェクトの一覧
3. **Components** — ボタン / カード / ナビ / FAQ / タイムライン（全状態）
4. **Interaction Spec** — モーション分類表 + 状態遷移図
5. **Desktop** — フルページデザイン（1440px幅）
6. **Mobile** — レスポンシブデザイン（375px幅）
7. **Accessibility** — コントラストチェック、フォーカス順序、reduced-motion

### フォント
- 見出し: Zen Kaku Gothic New（Black 900 / Bold 700）
- 本文: Zen Kaku Gothic New（Regular 400）
- 英数字サブ: Inter（Weight 300-900）

### ブランドカラー
- Primary: #E50020（GOOD GAMEレッド）
- Gradient: 135deg, #E50020 → #FF6B3D
- Background: #FAFAFA
- Text: #0D0D12

### アイコン
- Lucide Icons（線幅2px、24x24）推奨

---

## 備考
- 既存コンテンツ（テキスト・インタビュー内容）はすべて維持
- OGP画像用のデザインも1200x630pxで1枚作成
- 全コンポーネントはAuto Layout + 変数バインド
