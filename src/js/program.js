document.addEventListener('DOMContentLoaded', () => {
  const programItems = document.querySelectorAll('.program-item');

  if (!programItems.length) return;

  let refreshTimer;

  function refreshScrollTriggers(delay = 100) {
    if (typeof ScrollTrigger === 'undefined') return;

    clearTimeout(refreshTimer);

    refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, delay);
  }

  function closeItem(item) {
    const content = item.querySelector('.item-show-box');

    if (!content || !item.classList.contains('is-open')) return;

    item.classList.remove('is-open');

    content.style.maxHeight = `${content.scrollHeight}px`;

    requestAnimationFrame(() => {
      content.style.maxHeight = '0px';
    });
  }

  function openItem(item) {
    const content = item.querySelector('.item-show-box');

    if (!content || item.classList.contains('is-open')) return;

    item.classList.add('is-open');

    content.style.maxHeight = '0px';

    requestAnimationFrame(() => {
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  }

  programItems.forEach((item, index) => {
    const title = item.querySelector('.item-title-box');
    const content = item.querySelector('.item-show-box');

    if (!title || !content) return;

    content.style.maxHeight = '0px';
    content.style.overflow = 'hidden';

    content.addEventListener('transitionend', event => {
      if (event.propertyName !== 'max-height') return;

      if (item.classList.contains('is-open')) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }

      refreshScrollTriggers();
    });

    if (index === 1) {
      openItem(item);
    }

    title.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      programItems.forEach(currentItem => {
        if (currentItem !== item) {
          closeItem(currentItem);
        }
      });

      if (isOpen) {
        closeItem(item);
      } else {
        openItem(item);
      }

      refreshScrollTriggers(500);
    });
  });

  window.addEventListener('resize', () => {
    programItems.forEach(item => {
      if (!item.classList.contains('is-open')) return;

      const content = item.querySelector('.item-show-box');

      if (content) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    });

    refreshScrollTriggers();
  });
});
