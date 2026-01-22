# Synalis Group WEBサイト - コーディング実装仕様書
## 06: メインビジュアルの完全実装

---

## TOPページ - メインビジュアル

### 要件

**必須要素**
- 背景
  - オプションA: グラデーション（白→薄い青）
  - オプションB: 画像（1/27提出予定）+ オーバーレイ
- キャッチコピー
  - フォントサイズ: 56px（PC）/ 36px（SP）
  - フォントウェイト: 700
  - 例: 「研究と人材をつなぐ、未来への架け橋」
- サブコピー
  - フォントサイズ: 20px（PC）/ 16px（SP）
  - 例: 「Synalis Groupは、研究支援と人材紹介で企業の成長を支援します」
- CTAボタン × 2
  - 「研究支援事業について」（青系）
  - 「人材紹介について」（白背景・青文字）
- スクロール誘導アイコン

---

## HTML構造

```html
<section class="hero" id="hero">
  <div class="hero__content">
    <div class="hero__text">
      <h1 class="hero__title">
        <span class="hero__title-main">研究と人材をつなぐ、</span>
        <span class="hero__title-main">未来への架け橋</span>
      </h1>
      <p class="hero__subtitle">
        Synalis Groupは、研究支援と人材紹介で<br>
        企業の成長を支援します
      </p>
      <div class="hero__cta">
        <a href="/research/" class="btn btn--primary btn--large">研究支援事業について</a>
        <a href="/recruitment/" class="btn btn--secondary btn--large">人材紹介について</a>
      </div>
    </div>
  </div>
  
  <!-- スクロール誘導 -->
  <div class="hero__scroll">
    <span class="hero__scroll-text">SCROLL</span>
    <span class="hero__scroll-line"></span>
  </div>
</section>
```

---

## CSS詳細

```css
/* ========================================
   Hero Section
======================================== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FFFFFF 0%, #E6F2FF 100%);
  padding: 120px 40px 80px;
  overflow: hidden;
}

/* 装飾要素（任意） */
.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 102, 204, 0.05) 0%, transparent 70%);
  border-radius: 50%;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 160, 233, 0.03) 0%, transparent 70%);
  border-radius: 50%;
}

.hero__content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero__title {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: 32px;
  animation: fadeInUp 0.8s ease-out;
}

.hero__title-main {
  display: block;
}

.hero__subtitle {
  font-size: 20px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 48px;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.hero__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

/* Scroll Indicator */
.hero__scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  animation: fadeIn 1s ease-out 1s backwards;
}

.hero__scroll-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: var(--text-secondary);
  animation: scrollLine 1.5s ease-in-out infinite;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scrollLine {
  0% {
    height: 20px;
    opacity: 0.3;
  }
  50% {
    height: 40px;
    opacity: 1;
  }
  100% {
    height: 20px;
    opacity: 0.3;
  }
}

/* Responsive */
@media (max-width: 767px) {
  .hero {
    min-height: calc(100vh - 70px);
    padding: 100px 20px 60px;
  }
  
  .hero__title {
    font-size: 36px;
    margin-bottom: 24px;
  }
  
  .hero__subtitle {
    font-size: 16px;
    margin-bottom: 36px;
  }
  
  .hero__cta {
    flex-direction: column;
    width: 100%;
  }
  
  .hero__cta .btn {
    width: 100%;
  }
  
  .hero__scroll {
    bottom: 30px;
  }
}
```

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
