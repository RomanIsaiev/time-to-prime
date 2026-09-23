document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn('GSAP or ScrollTrigger is not loaded');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    ignoreMobileResize: true,
    limitCallbacks: true,
  });

  const DEFAULTS = {
    start: 'top 88%',
    y: 24,
    duration: 0.65,
    ease: 'power2.out',
  };

  // ---------------------------------
  // SINGLE ELEMENT / INDIVIDUAL ITEMS
  // ---------------------------------

  function reveal(selector, options = {}) {
    const config = {
      ...DEFAULTS,
      ...options,
    };

    gsap.utils.toArray(selector).forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: config.y,
        duration: config.duration,
        ease: config.ease,
        clearProps: 'transform',

        scrollTrigger: {
          trigger: el,
          start: config.start,
          once: true,
        },
      });
    });
  }

  // ---------------------------------
  // GROUP
  // Один ScrollTrigger на всю группу
  // ---------------------------------

  function revealGroup(selector, options = {}) {
    const elements = gsap.utils.toArray(selector);

    if (!elements.length) return;

    const config = {
      ...DEFAULTS,
      stagger: 0.07,
      ...options,
    };

    gsap.from(elements, {
      opacity: 0,
      y: config.y,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      clearProps: 'transform',

      scrollTrigger: {
        trigger: elements[0],
        start: config.start,
        once: true,
      },
    });
  }

  // ---------------------------------
  // HERO
  // Без ScrollTrigger вообще
  // ---------------------------------

  function animateHero() {
    const elements = [
      document.querySelector('.hero-start-wrap'),
      document.querySelector('.hero-short-desc'),
    ].filter(Boolean);

    if (!elements.length) return;

    gsap.set(elements, {
      visibility: 'visible',
      opacity: 0,
    });

    gsap.to(elements, {
      opacity: 1,
      duration: 0.65,
      stagger: 0.15,
      ease: 'power2.out',
    });
  }

  // ---------------------------------
  // STUDY FOR YOU
  // ---------------------------------

  function animateStudyForYou() {
    reveal('.study-for-you .title-wrap');

    revealGroup('.study-for-you .study-item', {
      y: 28,
      duration: 0.7,
    });
  }

  // ---------------------------------
  // PROGRAM
  // ---------------------------------

  function animateProgram() {
    reveal('.program .program-title-wrap');

    reveal('.program .program-decor-img', {
      y: 20,
    });

    // Оставляем недели отдельно,
    // потому что секция очень длинная.
    reveal('.program .program-week', {
      y: 28,
      duration: 0.7,
    });

    reveal('.program .want-btn', {
      y: 20,
      start: 'top 90%',
    });
  }

  // ---------------------------------
  // STUDY FORMAT
  // ---------------------------------

  function animateStudyFormat() {
    reveal('.study-format .format-title-wrap');

    revealGroup('.study-format .format-item', {
      y: 26,
      duration: 0.7,
    });

    revealGroup('.study-format .new-format-item', {
      y: 26,
      duration: 0.7,
    });
  }

  // ---------------------------------
  // RESULT
  // ---------------------------------

  function animateResult() {
    reveal('.result .result-title-wrap');

    reveal('.result .result-text-box');
    reveal('.result .result-prime-letters', {
      y: 20,
    });

    revealGroup('.result .result-item', {
      y: 28,
      duration: 0.7,
    });

    reveal('.result .want-btn', {
      y: 20,
      start: 'top 90%',
    });
  }

  // ---------------------------------
  // ABOUT AUTHOR
  // ---------------------------------

  function animateAboutAuthor() {
    reveal('.about-author .author-title-wrap');
    reveal('.about-author .author-name');

    revealGroup('.about-author .author-item', {
      y: 22,
    });

    reveal('.about-author .author-stories');
    reveal('.about-author .author-stars-wrap');
    reveal('.about-author .author-brands-wrap');
  }

  // ---------------------------------
  // LECTORS
  // ---------------------------------

  function animateLectors() {
    reveal('.lectors .lectors-title-wrap');

    revealGroup('.lectors .swiper-slide', {
      y: 28,
      duration: 0.7,
    });

    reveal('.lectors .swiper-btns-box', {
      y: 18,
      start: 'top 92%',
    });
  }

  // ---------------------------------
  // TARIFFS
  // ВАЖНО: tariff-item НЕ АНИМИРУЕМ
  // ---------------------------------

  function animateTariffs() {
    reveal('.tariffs .tariff-title-wrap');
    reveal('.tariffs .tariff-desc-box');
    reveal('.tariffs .tariff-control-box', {
      y: 20,
    });

    /*
      НЕ ДЕЛАЕМ:
      reveal('.tariffs .tariff-item')

      Потому что карточки тарифов переключаются через JS/display.
      GSAP вообще не должен вмешиваться в их состояние.
    */
  }

  // ---------------------------------
  // BONUSES
  // ---------------------------------

  function animateBonuses() {
    reveal('.bonuses .bonuses-title-wrap');

    revealGroup('.bonuses .bonus-item', {
      y: 28,
      duration: 0.7,
    });

    reveal('.bonuses .bonus-btn-wrap', {
      y: 20,
      start: 'top 90%',
    });
  }

  // ---------------------------------
  // REVIEWS
  // ---------------------------------

  function animateReviews() {
    reveal('.reviews .reviews-title-wrap');

    revealGroup('.reviews .swiper-slide', {
      y: 28,
      duration: 0.7,
    });

    reveal('.reviews .swiper-btns-box', {
      y: 18,
      start: 'top 92%',
    });
  }

  // ---------------------------------
  // FAQ
  // ВАЖНО: faq-item НЕ АНИМИРУЕМ
  // ---------------------------------

  function animateFaq() {
    reveal('.faq .faq-title-wrap');
    reveal('.faq .faq-desc');

    /*
      НЕ ДЕЛАЕМ:
      reveal('.faq .faq-item')

      FAQ меняет высоту.
      Пусть accordion.js занимается только accordion,
      а GSAP сюда не лезет.
    */
  }

  // ---------------------------------
  // FOOTER
  // ---------------------------------

  function animateFooter() {
    reveal('.footer .support-letter-box');

    reveal('.footer .support-link', {
      y: 18,
    });

    reveal('.footer .footer-wrapper');

    reveal('.footer .disign-creator', {
      y: 18,
    });

    reveal('.footer .footer-logo', {
      y: 22,
    });
  }

  // ---------------------------------
  // INIT
  // ---------------------------------

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
});
