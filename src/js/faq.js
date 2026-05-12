document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  if (!faqItems.length) return;

  let refreshTimer;

  function refreshScrollTriggers(delay = 80) {
    if (typeof ScrollTrigger === 'undefined') return;

    clearTimeout(refreshTimer);

    refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, delay);
  }

  function closeItem(item) {
    const showBox = item.querySelector('.faq-show-box');

    if (!showBox || !item.classList.contains('is-active')) return;

    item.classList.remove('is-active');

    showBox.style.height = `${showBox.scrollHeight}px`;

    requestAnimationFrame(() => {
      showBox.style.height = '0px';
    });
  }

  function openItem(item) {
    const showBox = item.querySelector('.faq-show-box');

    if (!showBox || item.classList.contains('is-active')) return;

    item.classList.add('is-active');

    showBox.style.height = '0px';

    requestAnimationFrame(() => {
      showBox.style.height = `${showBox.scrollHeight}px`;
    });
  }

  faqItems.forEach(item => {
    const showBox = item.querySelector('.faq-show-box');
    const questionBox = item.querySelector('.faq-question-box');

    if (!showBox || !questionBox) return;

    showBox.style.height = item.classList.contains('is-active')
      ? 'auto'
      : '0px';

    showBox.addEventListener('transitionend', event => {
      if (event.propertyName !== 'height') return;

      if (item.classList.contains('is-active')) {
        showBox.style.height = 'auto';
      }

      refreshScrollTriggers();
    });

    questionBox.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');

      faqItems.forEach(currentItem => {
        if (currentItem !== item) {
          closeItem(currentItem);
        }
      });

      if (isActive) {
        closeItem(item);
      } else {
        openItem(item);
      }

      refreshScrollTriggers(450);
    });
  });
});
