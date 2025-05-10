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

