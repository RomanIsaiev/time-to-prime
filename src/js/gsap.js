document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') {
    console.warn('GSAP is not loaded');
    return;
  }

  if (typeof ScrollTrigger === 'undefined') {
    console.warn('ScrollTrigger is not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  const CONFIG = {
    start: 'top 88%',
    y: 30,
    duration: 0.75,
    ease: 'power2.out',
  };

  // -------------------------
  // HELPERS
  // -------------------------

  function fadeIn(selector, options = {}) {
    const config = {
      ...CONFIG,
      ...options,
    };

    gsap.utils.toArray(selector).forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: config.start,
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: config.y,
        duration: config.duration,
        ease: config.ease,
      });
    });
  }

  function fadeInGroup(selector, options = {}) {
    const elements = gsap.utils.toArray(selector);

    if (!elements.length) return;

    const config = {
      ...CONFIG,
      stagger: 0.08,
      ...options,
    };

    gsap.from(elements, {
      scrollTrigger: {
        trigger: elements[0],
        start: config.start,
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: config.y,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
    });
  }

  // -------------------------
  // HERO
  // -------------------------

  function animateHero() {
    const startWrap = document.querySelector('.hero-start-wrap');
    const shortDesc = document.querySelector('.hero-short-desc');

    const elements = [startWrap, shortDesc].filter(Boolean);

    if (!elements.length) return;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.65,
        ease: 'power2.out',
      },
    });

    tl.set(elements, {
      visibility: 'visible',
      opacity: 0,
    });

    if (startWrap) {
      tl.to(startWrap, {
        opacity: 1,
      });
    }

    if (shortDesc) {
      tl.to(
        shortDesc,
        {
          opacity: 1,
        },
        '-=0.35'
      );
    }
  }

  // -------------------------
  // STUDY FOR YOU
  // -------------------------

  function animateStudyForYou() {
    fadeIn('.study-for-you .title-wrap');

    fadeIn('.study-for-you .study-item', {
      y: 28,
      duration: 0.7,
    });
  }

  // -------------------------
  // PROGRAM
  // -------------------------

  function animateProgram() {
    fadeIn('.program .program-title-wrap');

    fadeIn('.program .program-decor-img', {
      y: 20,
      duration: 0.65,
    });

    fadeIn('.program .program-week', {
      y: 28,
      duration: 0.7,
    });

    fadeIn('.program .want-btn', {
      y: 20,
      duration: 0.65,
      start: 'top 90%',
    });
  }

  // -------------------------
  // STUDY FORMAT
  // -------------------------

  function animateStudyFormat() {
    fadeIn('.study-format .format-title-wrap');

    fadeIn('.study-format .format-item', {
      y: 26,
      duration: 0.7,
    });

    fadeIn('.study-format .new-format-item', {
      y: 26,
      duration: 0.7,
    });
  }

  // -------------------------
  // RESULT
  // -------------------------

  function animateResult() {
    fadeIn('.result .result-title-wrap');

    fadeIn('.result .result-text-box', {
      y: 24,
    });

    fadeIn('.result .result-prime-letters', {
      y: 20,
    });

    fadeIn('.result .result-item', {
      y: 28,
      duration: 0.7,
    });

    fadeIn('.result .want-btn', {
      y: 20,
      start: 'top 90%',
    });
  }

  // -------------------------
  // ABOUT AUTHOR
  // -------------------------

  function animateAboutAuthor() {
    fadeIn('.about-author .author-title-wrap');

    fadeIn('.about-author .author-name', {
      y: 24,
    });

    fadeIn('.about-author .author-item', {
      y: 22,
      duration: 0.65,
    });

    fadeIn('.about-author .author-stories', {
      y: 26,
    });

    fadeIn('.about-author .author-stars-wrap', {
      y: 26,
    });

    fadeIn('.about-author .author-brands-wrap', {
      y: 26,
    });
  }

  // -------------------------
  // LECTORS
  // -------------------------

  function animateLectors() {
    fadeIn('.lectors .lectors-title-wrap');

    fadeIn('.lectors .swiper-slide', {
      y: 28,
      duration: 0.7,
    });

    fadeIn('.lectors .swiper-btns-box', {
      y: 18,
      duration: 0.6,
      start: 'top 92%',
    });
  }

  // -------------------------
  // TARIFFS
  // -------------------------

  function animateTariffs() {
    fadeIn('.tariffs .tariff-title-wrap');

    fadeIn('.tariffs .tariff-desc-box', {
      y: 24,
    });

    fadeIn('.tariffs .tariff-control-box', {
      y: 20,
    });

    fadeIn('.tariffs .tariff-item', {
      y: 28,
      duration: 0.7,
    });
  }

  // -------------------------
  // BONUSES
  // -------------------------

  function animateBonuses() {
    fadeIn('.bonuses .bonuses-title-wrap');

    fadeIn('.bonuses .bonus-item', {
      y: 28,
      duration: 0.7,
    });

    fadeIn('.bonuses .bonus-btn-wrap', {
      y: 20,
      start: 'top 90%',
    });
  }

  // -------------------------
  // REVIEWS
  // -------------------------

  function animateReviews() {
    fadeIn('.reviews .reviews-title-wrap');

    fadeIn('.reviews .swiper-slide', {
      y: 28,
      duration: 0.7,
    });

    fadeIn('.reviews .swiper-btns-box', {
      y: 18,
      duration: 0.6,
      start: 'top 92%',
    });
  }

  // -------------------------
  // FAQ
  // -------------------------

  function animateFaq() {
    fadeIn('.faq .faq-title-wrap');

    fadeIn('.faq .faq-desc', {
      y: 24,
    });

    fadeIn('.faq .faq-item', {
      y: 24,
      duration: 0.65,
    });
  }

  // -------------------------
  // FOOTER
  // -------------------------

  function animateFooter() {
    fadeIn('.footer .support-letter-box');

    fadeIn('.footer .support-link', {
      y: 18,
      duration: 0.6,
    });

    fadeIn('.footer .footer-wrapper', {
      y: 26,
    });

    fadeIn('.footer .disign-creator', {
      y: 18,
      duration: 0.6,
    });

    fadeIn('.footer .footer-logo', {
      y: 22,
      duration: 0.65,
    });
  }

  // -------------------------
  // INIT
  // -------------------------

  function initAnimations() {
    animateHero();
    animateStudyForYou();
    animateProgram();
    animateStudyFormat();
    animateResult();
    animateAboutAuthor();
    animateLectors();
    animateTariffs();
    animateBonuses();
    animateReviews();
    animateFaq();
    animateFooter();
  }

  initAnimations();

  window.addEventListener(
    'load',
    () => {
      ScrollTrigger.refresh();
    },
    { once: true }
  );
});
