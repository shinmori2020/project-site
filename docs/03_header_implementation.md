# Synalis Group WEBサイト - コーディング実装仕様書
## 03: ヘッダーの完全実装

---

## ヘッダー（共通パーツ）

### 要件

**PC版レイアウト**
```
[ロゴ]                    [研究支援事業▼] [人材紹介事業▼] [会社概要] [お問い合わせ]
```

**必須要素**
- ロゴエリア
  - Synalis Groupのロゴ（1/30提出予定）
  - クリックでTOPに遷移
  - サイズ: 高さ50px程度
- グローバルナビゲーション
  - 研究支援事業（ドロップダウン）
    - サービス内容・費用
    - 事例紹介
  - 人材紹介事業（ドロップダウン）
    - サービス内容
    - 求人検索
    - トピックス
  - 会社概要
- お問い合わせボタン（青系で強調）
- 固定ヘッダー（スクロール時も表示）

---

## HTML構造

```html
<header class="header" id="header">
  <div class="header__inner">
    <!-- ロゴ -->
    <div class="header__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Synalis Group" width="200" height="60">
      </a>
    </div>

    <!-- PC用ナビゲーション -->
    <nav class="header__nav pc-only">
      <ul class="header__nav-list">
        <li class="header__nav-item has-dropdown">
          <a href="/research/">
            <span class="header__nav-icon">
              <!-- アイコンSVG -->
            </span>
            研究支援事業
          </a>
          <ul class="header__dropdown">
            <li><a href="/research/service/">サービス内容・費用</a></li>
            <li><a href="/research/case/">事例紹介</a></li>
          </ul>
        </li>
        <li class="header__nav-item has-dropdown">
          <a href="/recruitment/">
            <span class="header__nav-icon">
              <!-- アイコンSVG -->
            </span>
            人材紹介事業
          </a>
          <ul class="header__dropdown">
            <li><a href="/recruitment/service/">サービス内容</a></li>
            <li><a href="/recruitment/jobs/">求人検索</a></li>
            <li><a href="/recruitment/news/">トピックス</a></li>
          </ul>
        </li>
        <li class="header__nav-item">
          <a href="/about/">
            <span class="header__nav-icon">
              <!-- アイコンSVG -->
            </span>
            会社概要
          </a>
        </li>
      </ul>
    </nav>

    <!-- CTAボタン -->
    <div class="header__cta pc-only">
      <a href="#contact" class="btn btn--primary btn--header">お問い合わせ</a>
    </div>

    <!-- ハンバーガーボタン（SP） -->
    <button class="hamburger sp-only" id="hamburger" aria-label="メニュー" aria-expanded="false">
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
    </button>
  </div>
</header>
```

---

## CSS詳細

```css
/* ========================================
   Header
======================================== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  transition: box-shadow 0.3s;
}

.header.scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.header__logo img {
  height: 50px;
  width: auto;
  display: block;
}

/* Navigation */
.header__nav-list {
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__nav-item {
  position: relative;
}

.header__nav-item > a {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 0;
  transition: color 0.3s;
}

.header__nav-item > a:hover {
  color: var(--primary-color);
}

/* Icon */
.header__nav-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__nav-icon svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
}

/* Dropdown */
.header__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: var(--white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s;
  list-style: none;
  margin: 0;
  z-index: 100;
}

.header__nav-item.has-dropdown:hover .header__dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.header__dropdown li a {
  display: block;
  padding: 12px 20px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 14px;
  transition: background 0.3s, color 0.3s;
}

.header__dropdown li a:hover {
  background: var(--primary-light);
  color: var(--primary-color);
}

/* CTA Button */
.header__cta .btn--header {
  padding: 12px 24px;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 1023px) {
  .header__inner {
    padding: 0 20px;
    height: 70px;
  }
  
  .header__logo img {
    height: 40px;
  }
  
  .pc-only {
    display: none !important;
  }
  
  .sp-only {
    display: block;
  }
}
```

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
