/**
 * Synalis Group - Hamburger Menu JavaScript
 * ハンバーガーメニュー・サイドメニュー機能
 */

document.addEventListener('DOMContentLoaded', function() {
  initHamburgerMenu();
});

/**
 * Hamburger menu functionality
 */
function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const sideMenu = document.getElementById('sideMenu');
  const sideMenuClose = document.getElementById('sideMenuClose');
  const sideMenuOverlay = document.getElementById('sideMenuOverlay');
  const toggleButtons = document.querySelectorAll('.side-menu__toggle');

  if (!hamburger || !sideMenu) return;

  // Open menu
  function openMenu() {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    sideMenu.classList.add('active');
    sideMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  // Close menu
  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    sideMenu.classList.remove('active');
    sideMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  // Hamburger button click
  hamburger.addEventListener('click', function() {
    if (sideMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close button click
  if (sideMenuClose) {
    sideMenuClose.addEventListener('click', closeMenu);
  }

  // Overlay click
  if (sideMenuOverlay) {
    sideMenuOverlay.addEventListener('click', closeMenu);
  }

  // Menu links click (close menu)
  const menuLinks = sideMenu.querySelectorAll('a[href]');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // Accordion toggle
  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const parent = this.closest('.side-menu__item');
      const isActive = parent.classList.contains('active');

      // Close other accordions
      document.querySelectorAll('.side-menu__item.active').forEach(function(item) {
        if (item !== parent) {
          item.classList.remove('active');
          const toggle = item.querySelector('.side-menu__toggle');
          if (toggle) {
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Toggle current
      parent.classList.toggle('active');
      this.classList.toggle('active');
      this.setAttribute('aria-expanded', !isActive);
    });
  });

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}
