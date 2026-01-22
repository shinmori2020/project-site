# Synalis Group WEBサイト - コーディング実装仕様書
## 09: 画像仕様・アニメーション仕様

---

## 画像仕様

### 推奨サイズと形式

```markdown
| 用途 | サイズ（px） | アスペクト比 | 形式 | 備考 |
|------|-------------|-------------|------|------|
| ロゴ | 200×60 | - | SVG/PNG | 透過背景 |
| メインビジュアル | 1920×1080 | 16:9 | WebP/JPG | 高画質 |
| サービスカード画像 | 400×300 | 4:3 | WebP/JPG | - |
| アイコン | 80×80 | 1:1 | SVG | カラーは可変 |
| OGP画像 | 1200×630 | - | JPG/PNG | SNS共有用 |
```

### ファイル命名規則
```
logo.svg                      - メインロゴ
logo-white.svg                - 白抜きロゴ（フッター用）
hero-bg.jpg                   - メインビジュアル背景
service-research.jpg          - 研究支援事業の画像
service-recruitment.jpg       - 人材紹介事業の画像
icon-research.svg             - 研究支援アイコン
icon-recruitment.svg          - 人材紹介アイコン
```

---

## アニメーション仕様

### スクロールアニメーション（Intersection Observer）

```javascript
// ========================================
// Scroll Animation
// ========================================
(function() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if (!animateElements.length) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-animated');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );
  
  animateElements.forEach((el) => {
    observer.observe(el);
  });
})();
```

### CSS
```css
/* Scroll Animation */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.is-animated {
  opacity: 1;
  transform: translateY(0);
}

/* 遅延アニメーション */
.animate-on-scroll:nth-child(1) { transition-delay: 0s; }
.animate-on-scroll:nth-child(2) { transition-delay: 0.1s; }
.animate-on-scroll:nth-child(3) { transition-delay: 0.2s; }
```

### HTML適用例
```html
<div class="services__grid">
  <article class="service-card animate-on-scroll">
    <!-- カード内容 -->
  </article>
  <article class="service-card animate-on-scroll">
    <!-- カード内容 -->
  </article>
</div>
```

---

## スムーススクロール

### JavaScript実装

```javascript
// ========================================
// Smooth Scroll
// ========================================
(function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // # のみの場合は処理しない
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})();
```

---

## ページトップボタン（任意）

### HTML
```html
<button class="pagetop" id="pagetop" aria-label="ページトップへ戻る">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 15 L12 9 L6 15"/>
  </svg>
</button>
```

### CSS
```css
/* ========================================
   Page Top Button
======================================== */
.pagetop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 56px;
  height: 56px;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s;
  z-index: 900;
}

.pagetop.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.pagetop:hover {
  background: var(--primary-hover);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 102, 204, 0.4);
}

@media (max-width: 767px) {
  .pagetop {
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
  }
}
```

### JavaScript
```javascript
// ========================================
// Page Top Button
// ========================================
(function() {
  const pagetop = document.getElementById('pagetop');
  
  if (!pagetop) return;
  
  // スクロール時の表示/非表示
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      pagetop.classList.add('show');
    } else {
      pagetop.classList.remove('show');
    }
  });
  
  // クリックでトップへ
  pagetop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();
```

---

## ローディングアニメーション（任意）

### HTML
```html
<div class="loading" id="loading">
  <div class="loading__spinner"></div>
</div>
```

### CSS
```css
/* ========================================
   Loading
======================================== */
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.3s, visibility 0.3s;
}

.loading.hide {
  opacity: 0;
  visibility: hidden;
}

.loading__spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--primary-light);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

### JavaScript
```javascript
// ========================================
// Loading
// ========================================
(function() {
  const loading = document.getElementById('loading');
  
  if (!loading) return;
  
  window.addEventListener('load', function() {
    loading.classList.add('hide');
    
    // アニメーション終了後に要素を削除
    setTimeout(() => {
      loading.remove();
    }, 300);
  });
})();
```

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
