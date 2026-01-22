# Synalis Group WEBサイト - コーディング実装仕様書
## 08: 共通コンポーネント（ボタン・セクションヘッダー・お問い合わせ）

---

## 共通セクションヘッダー

### HTML構造
```html
<div class="section__header">
  <h2 class="section__title">セクションタイトル</h2>
  <p class="section__subtitle">サブタイトル・説明文</p>
</div>
```

### CSS詳細
```css
/* ========================================
   Section Header
======================================== */
.section__header {
  text-align: center;
  margin-bottom: 60px;
}

.section__title {
  font-size: 40px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
}

/* アンダーライン装飾（任意） */
.section__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--primary-color);
  margin: 16px auto 0;
  border-radius: 2px;
}

.section__subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 767px) {
  .section__header {
    margin-bottom: 40px;
  }
  
  .section__title {
    font-size: 28px;
    margin-bottom: 12px;
  }
  
  .section__subtitle {
    font-size: 14px;
  }
}
```

---

## ボタンコンポーネント

### HTML
```html
<!-- Primary Button -->
<a href="#" class="btn btn--primary">ボタンテキスト</a>

<!-- Secondary Button -->
<a href="#" class="btn btn--secondary">ボタンテキスト</a>

<!-- Large Button -->
<a href="#" class="btn btn--primary btn--large">ボタンテキスト</a>

<!-- Block Button (全幅) -->
<a href="#" class="btn btn--primary btn--block">ボタンテキスト</a>
```

### CSS詳細
```css
/* ========================================
   Buttons
======================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  line-height: 1.5;
}

/* Primary */
.btn--primary {
  background: var(--primary-color);
  color: var(--white);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
}

.btn--primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 102, 204, 0.3);
}

.btn--primary:active {
  transform: translateY(0);
}

/* Secondary */
.btn--secondary {
  background: var(--white);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.btn--secondary:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Large */
.btn--large {
  padding: 18px 40px;
  font-size: 17px;
}

/* Block */
.btn--block {
  width: 100%;
  display: flex;
}

/* Responsive */
@media (max-width: 767px) {
  .btn {
    padding: 14px 28px;
    font-size: 15px;
  }
  
  .btn--large {
    padding: 16px 32px;
    font-size: 16px;
  }
}
```

---

## お問い合わせセクション

### HTML構造
```html
<section class="contact section" id="contact">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">お問い合わせ</h2>
      <p class="section__subtitle">
        サービスに関するご質問やご相談など、<br>
        お気軽にお問い合わせください
      </p>
    </div>
    
    <div class="contact__form-wrapper">
      <!-- WordPressプラグイン（Contact Form 7）のフォームがここに入る -->
      <div id="contact-form">
        <!-- ショートコード: [contact-form-7 id="xxx"] -->
      </div>
    </div>
  </div>
</section>
```

### CSS詳細
```css
/* ========================================
   Contact Section
======================================== */
.contact {
  background: var(--primary-light);
}

.contact__form-wrapper {
  max-width: 640px;
  margin: 0 auto;
  padding: 48px;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

/* Contact Form 7のスタイリング */
.wpcf7 {
  /* 基本スタイル */
}

.wpcf7-form p {
  margin-bottom: 24px;
}

.wpcf7-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 15px;
}

.wpcf7-form-control-wrap {
  display: block;
}

.wpcf7-text,
.wpcf7-email,
.wpcf7-tel,
.wpcf7-textarea,
.wpcf7-select {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.3s, box-shadow 0.3s;
  background: var(--white);
}

.wpcf7-text:focus,
.wpcf7-email:focus,
.wpcf7-tel:focus,
.wpcf7-textarea:focus,
.wpcf7-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.wpcf7-textarea {
  min-height: 160px;
  resize: vertical;
}

.wpcf7-submit {
  width: 100%;
  padding: 16px 32px;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
}

.wpcf7-submit:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 102, 204, 0.3);
}

/* 必須マーク */
.wpcf7-form .required {
  color: #e74c3c;
  margin-left: 4px;
}

/* バリデーションメッセージ */
.wpcf7-not-valid-tip {
  color: #e74c3c;
  font-size: 13px;
  margin-top: 6px;
  display: block;
}

/* 送信完了・エラーメッセージ */
.wpcf7-response-output {
  margin: 24px 0 0;
  padding: 16px;
  border-radius: 4px;
  font-size: 15px;
}

.wpcf7-mail-sent-ok {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.wpcf7-validation-errors,
.wpcf7-mail-sent-ng {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

/* Responsive */
@media (max-width: 767px) {
  .contact__form-wrapper {
    padding: 32px 24px;
  }
  
  .wpcf7-text,
  .wpcf7-email,
  .wpcf7-tel,
  .wpcf7-textarea,
  .wpcf7-select {
    font-size: 16px; /* iOS zoom防止 */
  }
}
```

---

**作成日**: 2026年1月22日  
**参考サイト**: https://c-morinosato.com/
