# Synalis Group WEBサイト - コーディング実装仕様書
## 02: レイアウト基準値・BEM・HTML基本構造

---

## レイアウト基準値

### コンテナ
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px; /* PC */
}

@media (max-width: 767px) {
  .container {
    padding: 0 20px; /* SP */
  }
}
```

### セクション余白
```css
/* PC */
section {
  padding: 100px 0;
}

/* タブレット */
@media (max-width: 1023px) {
  section {
    padding: 80px 0;
  }
}

/* スマートフォン */
@media (max-width: 767px) {
  section {
    padding: 60px 0;
  }
}
```

### グリッド・カード間隔
```css
/* 2カラムグリッド */
.grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px; /* PC */
}

/* 3カラムグリッド */
.grid-3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px; /* PC */
}

@media (max-width: 767px) {
  .grid-2col,
  .grid-3col {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
```

---

## クラス命名規則: BEM

### 基本ルール
```
Block: .service-card
Element: .service-card__title
Modifier: .service-card--featured
```

### 主要なBlock名
- `.header` - ヘッダー
- `.hero` - メインビジュアル
- `.section` - 各セクション
- `.service-card` - サービスカード
- `.news-list` - お知らせリスト
- `.footer` - フッター
- `.hamburger` - ハンバーガーメニュー
- `.side-menu` - サイドメニュー

---

## HTML完全構造

### 基本テンプレート
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Synalis Groupは、研究支援と人材紹介で企業の成長を支援します">
  <title>Synalis Group | 研究支援・人材紹介</title>
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="/css/reset.css">
  <link rel="stylesheet" href="/css/variables.css">
  <link rel="stylesheet" href="/css/common.css">
  <link rel="stylesheet" href="/css/header.css">
  <link rel="stylesheet" href="/css/footer.css">
  <link rel="stylesheet" href="/css/hamburger.css">
  <link rel="stylesheet" href="/css/responsive.css">
  <link rel="stylesheet" href="/css/top.css">
</head>
<body>
  <!-- ヘッダー -->
  <header class="header" id="header">
    <!-- ヘッダー内容（詳細は03_header_implementation.mdを参照） -->
  </header>

  <!-- サイドメニュー（SP） -->
  <div class="side-menu" id="sideMenu">
    <!-- サイドメニュー内容（詳細は04_hamburger_menu.mdを参照） -->
  </div>

  <!-- メインコンテンツ -->
  <main class="main">
    <!-- メインビジュアル（詳細は06_hero_section.mdを参照） -->
    <section class="hero" id="hero">
      <!-- メインビジュアル内容 -->
    </section>

    <!-- 事業紹介セクション（詳細は07_services_section.mdを参照） -->
    <section class="services section" id="services">
      <!-- 事業紹介内容 -->
    </section>

    <!-- お問い合わせセクション（詳細は08_components.mdを参照） -->
    <section class="contact section" id="contact">
      <!-- お問い合わせ内容 -->
    </section>
  </main>

  <!-- フッター -->
  <footer class="footer">
    <!-- フッター内容（詳細は05_footer_implementation.mdを参照） -->
  </footer>

  <!-- JavaScript -->
  <script src="/js/common.js"></script>
  <script src="/js/hamburger.js"></script>
  <script src="/js/top.js"></script>
</body>
</html>
```

---

## レスポンシブ対応

### ブレイクポイント
```css
/* PC */
@media (min-width: 1024px) {
  /* PC専用スタイル */
}

/* タブレット */
@media (min-width: 768px) and (max-width: 1023px) {
  /* タブレット専用スタイル */
}

/* スマートフォン */
@media (max-width: 767px) {
  /* スマートフォン専用スタイル */
}
```

### 表示/非表示の切り替え
```css
/* PC専用要素 */
.pc-only {
  display: block;
}

@media (max-width: 1023px) {
  .pc-only {
    display: none !important;
  }
}

/* スマートフォン専用要素 */
.sp-only {
  display: none;
}

@media (max-width: 1023px) {
  .sp-only {
    display: block;
  }
}
```

---

## 参考サイト分析結果

### 参考URL
https://c-morinosato.com/

### 参考にするデザイン要素
- **余白の使い方**: セクション間に十分な余白（100px以上）
- **カードレイアウト**: 白背景+シャドウで浮かせる
- **アイコンの活用**: シンプルなラインアイコン
- **背景の切り替え**: 白→薄い色→白の交互配置
- **センター寄せテキスト**: 重要なセクションは中央寄せ
- **ホバーエフェクト**: 控えめな動き

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
