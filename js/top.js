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
  // ヒーロースライダーの初期化
  initHeroSlider();
  // スクロールアニメーションの初期化（将来的な拡張用）
  initScrollAnimations();
}

/**
 * Hero Slider
 * メインビジュアルのスライダー機能
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-v2__slide');

  if (slides.length <= 1) return;

  let currentSlide = 0;
  const slideInterval = 5000; // 5秒ごとに切り替え

  function nextSlide() {
    slides[currentSlide].classList.remove('hero-v2__slide--active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('hero-v2__slide--active');
  }

  // 自動スライド開始
  setInterval(nextSlide, slideInterval);
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
