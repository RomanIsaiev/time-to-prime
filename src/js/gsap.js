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

  // --- Scroll state ---
  let refreshTimer;
  let scrollTimer;
  let isScrolling = false;
  let pendingRefresh = false;

  function scheduleRefresh(delay) {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(() => {
      if (typeof ScrollTrigger === 'undefined') return;
      ScrollTrigger.refresh();
      pendingRefresh = false;
    }, delay);
  }

  function refreshScrollTriggers(delay = 350) {
    if (typeof ScrollTrigger === 'undefined') return;

    pendingRefresh = true;

    if (!isScrolling) {
      scheduleRefresh(delay);
    }
  }

  function watchScrollState() {
    window.addEventListener(
      'scroll',
      () => {
        isScrolling = true;
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
          isScrolling = false;

          if (pendingRefresh) {
            scheduleRefresh(100);
          }
        }, 150);
      },
      { passive: true }
    );
  }

  // --- Helpers ---
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

  // --- Dynamic sections (accordions) ---
  function watchDynamicSections() {
    const dynamicSections = document.querySelectorAll(
      '.program, .study-format, .result, .tariffs, .faq'
    );

    const relevantProps = new Set([
      'height',
      'max-height',
      'padding',
      'opacity',
    ]);

    dynamicSections.forEach(section => {
      section.addEventListener(
        'transitionend',
        event => {
          if (relevantProps.has(event.propertyName)) {
            refreshScrollTriggers(200);
          }
        },
        true
      );
    });
  }

  // --- Sections ---
  function animateHeroSection() {
    const section = document.querySelector('.hero');

    if (!section) return;

    const startWrap = section.querySelector('.hero-start-wrap');
    const shortDesc = section.querySelector('.hero-short-desc');

    const items = [startWrap, shortDesc].filter(Boolean);

    if (!items.length) return;

    gsap
      .timeline({
        defaults: {
          duration: 0.75,
          ease: 'power3.out',
        },
      })
      .set(items, {
        visibility: 'visible',
        opacity: 0,
        y: 18,
      })
      .to(startWrap, {
        opacity: 1,
        y: 0,
      })
      .to(
        shortDesc,
        {
          opacity: 1,
          y: 0,
        },
        '-=0.42'
      );
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

    const section = document.querySelector('.bonuses');

    if (!section) return;

    const icons = section.querySelectorAll('.bonus-item .item-icon-box');

    if (!icons.length) return;

    gsap.set(icons, { opacity: 0 });

    gsap.to(icons, {
      opacity: 1,
      duration: 0.6,
      stagger: 0.3,
      ease: ANIM_CONFIG.ease,
      clearProps: 'opacity',
      scrollTrigger: {
        trigger: section,
        start: ANIM_CONFIG.scrollStart,
        once: ANIM_CONFIG.once,
      },
    });
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

  // --- Init ---
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

    watchScrollState();
    watchDynamicSections();

    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  initAnimations();
});
