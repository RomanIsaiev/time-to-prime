document.addEventListener('DOMContentLoaded', () => {
  const resultItems = document.querySelectorAll('.result-item');
  const primeLetters = document.querySelectorAll('.result-prime-letter');

  if (!resultItems.length) return;

  let refreshTimer;

  function refreshScrollTriggers(delay = 100) {
    if (typeof ScrollTrigger === 'undefined') return;

    clearTimeout(refreshTimer);

    refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, delay);
  }

  function closeItem(item) {
    const showBox = item.querySelector('.result-show-box');

    if (!showBox || !item.classList.contains('is-active')) return;

    item.classList.remove('is-active');

    showBox.style.height = `${showBox.scrollHeight}px`;

    requestAnimationFrame(() => {
      showBox.style.height = '0px';
    });
  }

  function openItem(item) {
    const showBox = item.querySelector('.result-show-box');

    if (!showBox || item.classList.contains('is-active')) return;

    item.classList.add('is-active');

    showBox.style.height = '0px';

    requestAnimationFrame(() => {
      showBox.style.height = `${showBox.scrollHeight}px`;
    });
  }

  function updatePrimeLetters(activeIndex) {
    primeLetters.forEach((letter, index) => {
      letter.classList.toggle('is-active', index === activeIndex);
    });
  }

  resultItems.forEach((item, index) => {
    const showBox = item.querySelector('.result-show-box');
    const nameBox = item.querySelector('.result-name-box');

    if (!showBox || !nameBox) return;

    showBox.style.height = '0px';
    showBox.style.overflow = 'hidden';

    showBox.addEventListener('transitionend', event => {
      if (event.propertyName !== 'height') return;

      if (item.classList.contains('is-active')) {
        showBox.style.height = 'auto';
      }

      refreshScrollTriggers();
    });

    nameBox.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');

      if (isActive) return;

      resultItems.forEach(currentItem => {
        if (currentItem !== item) {
          closeItem(currentItem);
        }
      });

      openItem(item);
      updatePrimeLetters(index);

      refreshScrollTriggers(450);
    });
  });

  openItem(resultItems[0]);
  updatePrimeLetters(0);
  refreshScrollTriggers(450);
});
