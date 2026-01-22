# Synalis Group WEBサイト - コーディング実装仕様書
## 05: フッターの完全実装

---

## フッター（共通パーツ）

### 要件

**レイアウト構成（PC）**
```
[会社情報]          [サイトマップ]        [お問い合わせ]
Synalis Group       研究支援事業           お問い合わせフォームへ
所在地              人材紹介事業
TEL: xxx-xxxx-xxxx  会社概要
Mail: info@synalis-group.com
────────────────────────────────────
Copyright © 2026 Synalis Group. All Rights Reserved.
```

---

## HTML構造

```html
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__top">
      <!-- 会社情報 -->
      <div class="footer__info">
        <div class="footer__logo">
          <img src="/images/logo-white.svg" alt="Synalis Group" width="180" height="54">
        </div>
        <div class="footer__business">
          <p>研究支援 | 人材紹介</p>
        </div>
        <address class="footer__address">
          <p>〒000-0000</p>
          <p>所在地（1/27提出予定）</p>
          <p>TEL: <a href="tel:000-0000-0000">000-0000-0000</a></p>
          <p>Email: <a href="mailto:info@synalis-group.com">info@synalis-group.com</a></p>
        </address>
      </div>
      
      <!-- サイトマップ -->
      <nav class="footer__nav">
        <div class="footer__nav-col">
          <h3 class="footer__nav-title">研究支援事業</h3>
          <ul class="footer__nav-list">
            <li><a href="/research/">研究支援事業TOP</a></li>
            <li><a href="/research/service/">サービス内容・費用</a></li>
            <li><a href="/research/case/">事例紹介</a></li>
          </ul>
        </div>
        
        <div class="footer__nav-col">
          <h3 class="footer__nav-title">人材紹介事業</h3>
          <ul class="footer__nav-list">
            <li><a href="/recruitment/">人材紹介事業TOP</a></li>
            <li><a href="/recruitment/service/">サービス内容</a></li>
            <li><a href="/recruitment/jobs/">求人検索</a></li>
            <li><a href="/recruitment/news/">トピックス</a></li>
          </ul>
        </div>
        
        <div class="footer__nav-col">
          <h3 class="footer__nav-title">その他</h3>
          <ul class="footer__nav-list">
            <li><a href="/about/">会社概要</a></li>
            <li><a href="/privacy/">プライバシーポリシー</a></li>
            <li><a href="#contact">お問い合わせ</a></li>
          </ul>
        </div>
      </nav>
    </div>
    
    <!-- コピーライト -->
    <div class="footer__bottom">
      <p class="footer__copyright">
        © 2026 Synalis Group. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>
```

---

## CSS詳細

```css
/* ========================================
   Footer
======================================== */
.footer {
  background: var(--bg-dark);
  color: var(--text-white);
  padding: 60px 0 30px;
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.footer__top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Info */
.footer__logo {
  margin-bottom: 16px;
}

.footer__logo img {
  height: 45px;
  width: auto;
}

.footer__business {
  margin-bottom: 24px;
  font-size: 14px;
  opacity: 0.8;
}

.footer__address {
  font-style: normal;
  font-size: 14px;
  line-height: 1.8;
  opacity: 0.8;
}

.footer__address a {
  color: var(--text-white);
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer__address a:hover {
  opacity: 1;
  text-decoration: underline;
}

/* Navigation */
.footer__nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer__nav-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-white);
}

.footer__nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__nav-list li {
  margin-bottom: 12px;
}

.footer__nav-list a {
  color: var(--text-white);
  text-decoration: none;
  font-size: 14px;
  opacity: 0.7;
  transition: opacity 0.3s;
  display: inline-block;
}

.footer__nav-list a:hover {
  opacity: 1;
  color: var(--primary-light);
}

/* Bottom */
.footer__bottom {
  padding-top: 30px;
  text-align: center;
}

.footer__copyright {
  font-size: 13px;
  opacity: 0.6;
  margin: 0;
}

/* Responsive */
@media (max-width: 767px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer__inner {
    padding: 0 20px;
  }
  
  .footer__top {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-bottom: 30px;
  }
  
  .footer__nav {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer__bottom {
    padding-top: 20px;
  }
}
```

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
