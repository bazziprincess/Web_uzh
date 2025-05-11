// Use ESC
document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape' && e.keyCode !== 27) return;

  var openMenus = document.querySelectorAll('.dropdown-menu.show');
  if (!openMenus.length) return;

  openMenus.forEach(function (menu) {
    var dropdown = menu.closest('.dropdown');                // <li class="dropdown show">
    var toggle   = dropdown && dropdown.querySelector('.dropdown-toggle');

    menu.classList.remove('show');
    dropdown && dropdown.classList.remove('show');

    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
});

// Use Space
document.addEventListener('keydown', function (e) {
  if (e.key !== ' ' && e.key !== 'Spacebar' && e.keyCode !== 32) return;

  var el = e.target;
  var isNavLink   = el.classList.contains('nav-link');
  var isDropItem  = el.classList.contains('dropdown-item');

  if (!isNavLink && !isDropItem) return;   // Not a menu element, exits

  e.preventDefault();
  el.click();
});

// Drop-down menu that automatically collapses defocus
document.addEventListener('focusin', function (e) {
  var openDropdowns = document.querySelectorAll('.dropdown.show');

  openDropdowns.forEach(function (dropdown) {
    if (!dropdown.contains(e.target)) {
      var toggler = dropdown.querySelector('.dropdown-toggle');
      var menu    = dropdown.querySelector('.dropdown-menu.show');

      if (menu)   menu.classList.remove('show');
      dropdown.classList.remove('show');

      if (toggler) {
        toggler.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Font size scaling functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the buttons
  const increaseButton = document.getElementById('font-increase-button');
  const decreaseButton = document.getElementById('font-decrease-button');

  // Set default font size (in px) if not already set
  if (!document.documentElement.style.fontSize) {
    document.documentElement.style.fontSize = '16px';
  }

  // Get current font size
  function getCurrentFontSize() {
    const currentSize = window.getComputedStyle(document.documentElement).fontSize;
    return parseFloat(currentSize);
  }

  // Increase font size
  increaseButton.addEventListener('click', function() {
    const currentSize = getCurrentFontSize();
    const newSize = currentSize * 1.1; // Increase by 10%
    document.documentElement.style.fontSize = `${newSize}px`;
  });

  // Decrease font size
  decreaseButton.addEventListener('click', function() {
    const currentSize = getCurrentFontSize();
    const newSize = currentSize * 0.9; // Decrease by 10%
    document.documentElement.style.fontSize = `${newSize}px`;
  });

  // Optional: Add keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Plus to increase font size
    if ((e.ctrlKey || e.metaKey) && e.key === '+') {
      e.preventDefault();
      increaseButton.click();
    }

    // Ctrl/Cmd + Minus to decrease font size
    if ((e.ctrlKey || e.metaKey) && e.key === '-') {
      e.preventDefault();
      decreaseButton.click();
    }
  });
});


