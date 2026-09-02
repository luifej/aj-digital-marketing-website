(function () {
  var btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  function toggle() {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  }
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  toggle();
})();
