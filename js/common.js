/**
 * Synalis Group - Common JavaScript
 * 共通機能（ヘッダー、スムーススクロール）
 */

document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  initSmoothScroll();
});

/**
 * Header scroll effect
 * - Hidden by default at page top
 * - Shows when scrolled down past threshold
 */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const showThreshold = 100; // px to scroll before showing header
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > showThreshold) {
      header.classList.add('is-visible');
    } else {
      header.classList.remove('is-visible');
    }

    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateHeader();
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.getElementById('header');
  const headerHeight = header ? header.offsetHeight : 0;

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

