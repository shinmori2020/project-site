/**
 * Synalis Group - TOP Page JavaScript
 * TOPページ固有の機能
 */

document.addEventListener('DOMContentLoaded', function() {
  initTopPage();
});

/**
 * TOP page specific functionality
 */
function initTopPage() {
  // スクロールアニメーションの初期化（将来的な拡張用）
  initScrollAnimations();
}

/**
 * Scroll-triggered animations
 * IntersectionObserver を使用したスクロールアニメーション
 */
function initScrollAnimations() {
  // アニメーション対象の要素
  const animatedElements = document.querySelectorAll('.service-card, .contact__info-item');

  if (!animatedElements.length) return;

  // IntersectionObserver のオプション
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  // アニメーション用のクラスを追加
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 各要素を監視
  animatedElements.forEach(function(element) {
    observer.observe(element);
  });
}
