gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');

    if (!href || href === '#') return;

    const target = document.querySelector(href);

    if (!target) return;

    e.preventDefault();

    gsap.to(window, {
      duration: 1.2,
      scrollTo: target,
      ease: 'power2.inOut',
    });
  });
});
