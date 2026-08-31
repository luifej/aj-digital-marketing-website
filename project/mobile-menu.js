(function () {
  var toggle = document.getElementById('mobile-menu-toggle');
  var closeBtn = document.getElementById('mobile-menu-close');
  var panel = document.getElementById('mobile-menu-panel');
  if (!toggle || !panel) return;
  function openMenu() {
    panel.style.display = 'block';
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    panel.style.display = 'none';
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();
