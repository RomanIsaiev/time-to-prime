document.addEventListener('DOMContentLoaded', () => {
  const resultItems = document.querySelectorAll('.result-item');
  const primeLetters = document.querySelectorAll('.result-prime-letter');

  if (!resultItems.length) return;

  function closeItem(item) {
    const showBox = item.querySelector('.result-show-box');

    item.classList.remove('is-active');

    if (showBox) {
      showBox.style.height = showBox.scrollHeight + 'px';

      requestAnimationFrame(() => {
        showBox.style.height = '0px';
      });
    }
  }

  function openItem(item) {
    const showBox = item.querySelector('.result-show-box');

    item.classList.add('is-active');

    if (showBox) {
      showBox.style.height = showBox.scrollHeight + 'px';

      showBox.addEventListener(
        'transitionend',
        () => {
          if (item.classList.contains('is-active')) {
            showBox.style.height = 'auto';
          }
        },
        { once: true }
      );
    }
  }

  function updatePrimeLetters(activeIndex) {
    primeLetters.forEach((letter, index) => {
      letter.classList.toggle('is-active', index === activeIndex);
    });
  }

  resultItems.forEach((item, index) => {
    const showBox = item.querySelector('.result-show-box');
    const nameBox = item.querySelector('.result-name-box');

    if (showBox) {
      showBox.style.height = '0px';
    }

    if (!nameBox) return;

    nameBox.addEventListener('click', () => {
      const isAlreadyActive = item.classList.contains('is-active');

      resultItems.forEach(currentItem => {
        if (currentItem !== item) {
          closeItem(currentItem);
        }
      });

      if (!isAlreadyActive) {
        openItem(item);
        updatePrimeLetters(index);
      }
    });
  });

  openItem(resultItems[0]);
  updatePrimeLetters(0);
});
