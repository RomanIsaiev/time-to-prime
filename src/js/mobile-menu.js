document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const openBtn = document.getElementById('mobile-open');
  const closeBtn = document.getElementById('mobile-close');

  if (!mobileMenu || !openBtn || !closeBtn) return;

  const menuLinks = mobileMenu.querySelectorAll(
    '.mobile-navigation a, .mobile-btn'
  );

  function openMenu() {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
});
