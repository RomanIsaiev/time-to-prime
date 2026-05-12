window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP is not loaded');
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const ANIM_CONFIG = {
    scrollStart: 'top 65%',
    y: 22,
    duration: 0.8,
    stagger: 0.14,
    ease: 'power3.out',
    once: true,
  };

  function getItems(section, selectors) {
    return selectors
      .map(selector => section.querySelector(selector))
      .filter(Boolean);
  }

  function animateBlocks(sectionSelector, selectors, options = {}) {
    const section = document.querySelector(sectionSelector);

    if (!section) return;

    const items = getItems(section, selectors);

    if (!items.length) return;

    const config = {
      ...ANIM_CONFIG,
      ...options,
    };

    gsap.set(items, {
      opacity: 0,
      y: config.y,
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: section,
        start: config.scrollStart,
        once: config.once,
      },
    });
  }

  function animateHeroSection() {
    const section = document.querySelector('.hero');

    if (!section) return;

    const items = getItems(section, [
      '.hero-start-wrap',
      '.hero-short-desc',
      '.hero-title-img-box',
      '.hero-desc',
      '.star-ticket-btn',
    ]);

    if (!items.length) return;

    gsap.set(items, {
      autoAlpha: 0,
      y: 18,
    });

    gsap.to(items, {
      autoAlpha: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility',
    });
  }

  function animateStudyForYouSection() {
    animateBlocks('.study-for-you', ['.title-wrap', '.study-list']);
  }

  function animateProgramSection() {
    animateBlocks('.program', [
      '.program-title-wrap',
      '.program-decor-img',
      '.program-list',
      '.want-btn',
    ]);
  }

  function animateStudyFormatSection() {
    animateBlocks('.study-format', ['.format-title-wrap', '.format-wrapper']);
  }

  function animateResultSection() {
    animateBlocks('.result', [
      '.result-title-wrap',
      '.result-text-box',
      '.result-wrapper',
      '.want-btn',
    ]);
  }

  function animateAboutAuthorSection() {
    animateBlocks('.about-author', [
      '.author-title-wrap',
      '.author-wrapper',
      '.author-stars-wrap',
      '.author-brands-wrap',
    ]);
  }

  function animateLectorsSection() {
    animateBlocks('.lectors', ['.lectors-title-wrap', '.swiper-box']);
  }

  function animateTariffsSection() {
    animateBlocks('.tariffs', [
      '.tariff-title-wrap',
      '.tariff-desc-box',
      '.tariff-wrapper',
    ]);
  }

  function animateBonusesSection() {
    animateBlocks('.bonuses', [
      '.bonuses-title-wrap',
      '.bonus-list',
      '.bonus-btn-wrap',
    ]);
  }

  function animateReviewsSection() {
    animateBlocks('.reviews', ['.reviews-title-wrap', '.swiper-box']);
  }

  function animateFaqSection() {
    animateBlocks('.faq', ['.faq-title-wrap', '.faq-desc', '.faq-list']);
  }

  function animateFooterSection() {
    animateBlocks('.footer', [
      '.support-letter-box',
      '.support-link',
      '.footer-wrapper',
      '.disign-creator',
      '.footer-logo',
    ]);
  }

  function initAnimations() {
    animateHeroSection();
    animateStudyForYouSection();
    animateProgramSection();
    animateStudyFormatSection();
    animateResultSection();
    animateAboutAuthorSection();
    animateLectorsSection();
    animateTariffsSection();
    animateBonusesSection();
    animateReviewsSection();
    animateFaqSection();
    animateFooterSection();

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  initAnimations();
});
