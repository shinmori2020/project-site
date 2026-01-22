# Synalis Group WEBサイト - コーディング実装仕様書
## 04: ハンバーガーメニュー・サイドメニューの完全実装

---

## ハンバーガーメニュー + サイドメニュー

### 要件

**表示条件**
- タブレット以下（768px以下）で表示
- PC版では非表示

**必須機能**
- 3本線（≡）→ ×（close）のアニメーション
- クリックでサイドメニュー展開
- メニュー展開時は背景固定（スクロール無効化）
- 右からスライドイン
- オーバーレイ（rgba(0, 0, 0, 0.5)）
- アコーディオン展開（子メニュー）
- ESCキーで閉じる

---

## HTML構造

```html
<!-- ハンバーガーボタン -->
<button class="hamburger sp-only" id="hamburger" aria-label="メニュー">
  <span class="hamburger__line"></span>
  <span class="hamburger__line"></span>
  <span class="hamburger__line"></span>
</button>

<!-- サイドメニュー -->
<div class="side-menu" id="sideMenu">
  <!-- オーバーレイ -->
  <div class="side-menu__overlay" id="sideMenuOverlay"></div>
  
  <!-- メニュー本体 -->
  <div class="side-menu__content">
    <!-- 閉じるボタン -->
    <button class="side-menu__close" id="sideMenuClose" aria-label="閉じる">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    
    <!-- ロゴ -->
    <div class="side-menu__logo">
      <a href="/">
        <img src="/images/logo.svg" alt="Synalis Group" width="160" height="48">
      </a>
    </div>
    
    <!-- ナビゲーション -->
    <nav class="side-menu__nav">
      <ul class="side-menu__list">
        <li class="side-menu__item">
          <a href="/" class="side-menu__link">TOP</a>
        </li>
        <li class="side-menu__item has-children">
          <button class="side-menu__link side-menu__toggle">
            研究支援事業
            <span class="side-menu__arrow">▼</span>
          </button>
          <ul class="side-menu__submenu">
            <li><a href="/research/service/">サービス内容・費用</a></li>
            <li><a href="/research/case/">事例紹介</a></li>
          </ul>
        </li>
        <li class="side-menu__item has-children">
          <button class="side-menu__link side-menu__toggle">
            人材紹介事業
            <span class="side-menu__arrow">▼</span>
          </button>
          <ul class="side-menu__submenu">
            <li><a href="/recruitment/service/">サービス内容</a></li>
            <li><a href="/recruitment/jobs/">求人検索</a></li>
            <li><a href="/recruitment/news/">トピックス</a></li>
          </ul>
        </li>
        <li class="side-menu__item">
          <a href="/about/" class="side-menu__link">会社概要</a>
        </li>
      </ul>
      
      <!-- CTAボタン -->
      <div class="side-menu__cta">
        <a href="#contact" class="btn btn--primary btn--block">お問い合わせ</a>
      </div>
    </nav>
  </div>
</div>
```

---

## CSS詳細

```css
/* ========================================
   Hamburger
======================================== */
.hamburger {
  width: 44px;
  height: 44px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger__line {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--primary-color);
  position: absolute;
  left: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.hamburger__line:nth-child(1) {
  top: 12px;
}

.hamburger__line:nth-child(2) {
  top: 21px;
}

.hamburger__line:nth-child(3) {
  top: 30px;
}

/* Active State (×表示) */
.hamburger.active .hamburger__line:nth-child(1) {
  top: 21px;
  transform: rotate(45deg);
}

.hamburger.active .hamburger__line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .hamburger__line:nth-child(3) {
  top: 21px;
  transform: rotate(-45deg);
}

/* ========================================
   Side Menu
======================================== */
.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
}

.side-menu.active {
  pointer-events: auto;
}

/* Overlay */
.side-menu__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.side-menu.active .side-menu__overlay {
  opacity: 1;
}

/* Menu Content */
.side-menu__content {
  position: absolute;
  top: 0;
  right: -100%;
  width: 85%;
  max-width: 340px;
  height: 100%;
  background: var(--white);
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
}

.side-menu.active .side-menu__content {
  right: 0;
}

/* Close Button */
.side-menu__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: color 0.3s;
}

.side-menu__close:hover {
  color: var(--primary-color);
}

/* Logo */
.side-menu__logo {
  padding: 24px;
  border-bottom: 1px solid var(--border-light);
}

.side-menu__logo img {
  height: 40px;
  width: auto;
}

/* Navigation */
.side-menu__nav {
  padding: 0 0 24px;
}

.side-menu__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.side-menu__item {
  border-bottom: 1px solid var(--border-light);
}

.side-menu__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.3s, color 0.3s;
  background: transparent;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.side-menu__link:hover {
  background: var(--primary-light);
  color: var(--primary-color);
}

/* Arrow */
.side-menu__arrow {
  font-size: 12px;
  transition: transform 0.3s;
}

.side-menu__toggle.active .side-menu__arrow {
  transform: rotate(180deg);
}

/* Submenu */
.side-menu__submenu {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  background: var(--bg-secondary);
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.side-menu__item.active .side-menu__submenu {
  max-height: 500px;
}

.side-menu__submenu li a {
  display: block;
  padding: 14px 24px 14px 40px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  transition: background 0.3s, color 0.3s;
}

.side-menu__submenu li a:hover {
  background: var(--white);
  color: var(--primary-color);
}

/* CTA */
.side-menu__cta {
  padding: 24px;
}
```

---

## JavaScript

```javascript
// ========================================
// Hamburger Menu
// ========================================
(function() {
  const hamburger = document.getElementById('hamburger');
  const sideMenu = document.getElementById('sideMenu');
  const sideMenuClose = document.getElementById('sideMenuClose');
  const sideMenuOverlay = document.getElementById('sideMenuOverlay');
  const toggleButtons = document.querySelectorAll('.side-menu__toggle');
  
  if (!hamburger || !sideMenu) return;
  
  // メニューを開く
  function openMenu() {
    hamburger.classList.add('active');
    sideMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }
  
  // メニューを閉じる
  function closeMenu() {
    hamburger.classList.remove('active');
    sideMenu.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }
  
  // ハンバーガーボタンクリック
  hamburger.addEventListener('click', function() {
    if (sideMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  
  // 閉じるボタンクリック
  if (sideMenuClose) {
    sideMenuClose.addEventListener('click', closeMenu);
  }
  
  // オーバーレイクリック
  if (sideMenuOverlay) {
    sideMenuOverlay.addEventListener('click', closeMenu);
  }
  
  // メニューリンククリックで閉じる
  const menuLinks = sideMenu.querySelectorAll('a[href^="#"], a[href^="/"]');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // ハッシュリンクまたは内部リンクの場合のみ閉じる
      const href = this.getAttribute('href');
      if (href.startsWith('#') || href.startsWith('/')) {
        closeMenu();
      }
    });
  });
  
  // アコーディオン
  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const parent = this.closest('.side-menu__item');
      const isActive = parent.classList.contains('active');
      
      // 他のアコーディオンを閉じる
      document.querySelectorAll('.side-menu__item.active').forEach(function(item) {
        if (item !== parent) {
          item.classList.remove('active');
          item.querySelector('.side-menu__toggle').classList.remove('active');
        }
      });
      
      // トグル
      parent.classList.toggle('active');
      button.classList.toggle('active');
    });
  });
  
  // ESCキーで閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
      closeMenu();
    }
  });
})();
```

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
