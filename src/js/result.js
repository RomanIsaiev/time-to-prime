document.addEventListener('DOMContentLoaded', () => {
  const resultItems = document.querySelectorAll('.result-item');
  const primeLetters = document.querySelectorAll('.result-prime-letter');

  if (!resultItems.length) return;

  function closeItem(item) {
    const showBox = item.querySelector('.result-show-box');

    if (!showBox || !item.classList.contains('is-active')) return;

    showBox.style.height = `${showBox.scrollHeight}px`;

    requestAnimationFrame(() => {
      item.classList.remove('is-active');
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

  function updatePrimeLetters(activeIndex = null) {
    primeLetters.forEach((letter, index) => {
      letter.classList.toggle(
        'is-active',
        activeIndex !== null && index === activeIndex
      );
    });
  }

  function toggleItem(index) {
    const item = resultItems[index];

    if (!item) return;

    const isActive = item.classList.contains('is-active');

    if (isActive) {
      closeItem(item);
      updatePrimeLetters(null);
      return;
    }

    resultItems.forEach((currentItem, currentIndex) => {
      if (currentIndex !== index) {
        closeItem(currentItem);
      }
    });

    openItem(item);
    updatePrimeLetters(index);
  }

  resultItems.forEach((item, index) => {
    const showBox = item.querySelector('.result-show-box');
    const nameBox = item.querySelector('.result-name-box');

    if (!showBox || !nameBox) return;

    showBox.style.overflow = 'hidden';
    showBox.style.height = '0px';
    item.classList.remove('is-active');

    showBox.addEventListener('transitionend', event => {
      if (event.propertyName !== 'height') return;

      if (item.classList.contains('is-active')) {
        showBox.style.height = 'auto';
      }
    });

    nameBox.addEventListener('click', () => {
      toggleItem(index);
    });
  });

  primeLetters.forEach((letter, index) => {
    letter.addEventListener('click', () => {
      toggleItem(index);
    });
  });

  openItem(resultItems[0]);
  updatePrimeLetters(0);
});
