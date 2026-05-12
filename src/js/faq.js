document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  if (!faqItems.length) return;

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

    showBox.style.overflow = 'hidden';
    showBox.style.height = item.classList.contains('is-active')
      ? 'auto'
      : '0px';

    showBox.addEventListener('transitionend', event => {
      if (event.propertyName !== 'height') return;

      if (item.classList.contains('is-active')) {
        showBox.style.height = 'auto';
      }
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
    });
  });
});
