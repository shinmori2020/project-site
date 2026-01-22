# Synalis Group WEBサイト - コーディング実装仕様書
## 07: 事業紹介セクションの完全実装

---

## TOPページ - 事業紹介セクション

### 要件

**レイアウト**
```
[セクションタイトル: 私たちの事業]
[サブタイトル: Synalis Groupが提供する2つのサービス]

[研究支援事業カード]    [人材紹介事業カード]
```

**カード構成**
```
[アイコン/画像]
────────
事業名（h3）
────────
説明文（3〜4行）
────────
[詳しく見る →]
```

---

## HTML構造

```html
<section class="services section" id="services">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">私たちの事業</h2>
      <p class="section__subtitle">Synalis Groupが提供する2つのサービス</p>
    </div>
    
    <div class="services__grid">
      <!-- 研究支援事業カード -->
      <article class="service-card">
        <div class="service-card__icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <!-- アイコンSVG（研究・実験のイメージ） -->
            <circle cx="40" cy="40" r="36" stroke="currentColor" stroke-width="2"/>
            <path d="M30 35 L40 25 L50 35 M40 25 V55" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="service-card__title">研究支援事業</h3>
        <p class="service-card__text">
          研究開発に必要な専門的なサポートを提供します。プロジェクトの企画から実行まで、幅広い分野の研究活動を支援し、イノベーションの創出をお手伝いします。
        </p>
        <a href="/research/" class="service-card__link">
          詳しく見る
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 4 L10 8 L6 12"/>
          </svg>
        </a>
      </article>
      
      <!-- 人材紹介事業カード -->
      <article class="service-card">
        <div class="service-card__icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <!-- アイコンSVG（人材・ネットワークのイメージ） -->
            <circle cx="40" cy="35" r="8" stroke="currentColor" stroke-width="2"/>
            <path d="M28 55 C28 48 33 43 40 43 C47 43 52 48 52 55" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="service-card__title">人材紹介事業</h3>
        <p class="service-card__text">
          企業と求職者をつなぎ、最適なマッチングを実現します。豊富な求人情報と丁寧なサポートで、キャリアの可能性を広げるお手伝いをいたします。
        </p>
        <a href="/recruitment/" class="service-card__link">
          詳しく見る
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 4 L10 8 L6 12"/>
          </svg>
        </a>
      </article>
    </div>
  </div>
</section>
```

---

## CSS詳細

```css
/* ========================================
   Services Section
======================================== */
.services {
  background: var(--white);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Service Card */
.service-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 48px 40px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-color);
}

.service-card__icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 32px;
  color: var(--primary-color);
}

.service-card__title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.service-card__text {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: gap 0.3s;
}

.service-card__link:hover {
  gap: 12px;
}

.service-card__link svg {
  transition: transform 0.3s;
}

.service-card__link:hover svg {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 767px) {
  .services__grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .service-card {
    padding: 40px 30px;
  }
  
  .service-card__icon {
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
  }
  
  .service-card__title {
    font-size: 20px;
    margin-bottom: 16px;
  }
  
  .service-card__text {
    font-size: 15px;
    margin-bottom: 24px;
  }
}
```

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
