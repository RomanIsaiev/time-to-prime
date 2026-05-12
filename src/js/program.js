document.addEventListener('DOMContentLoaded', () => {
  const programItems = document.querySelectorAll('.program-item');

  if (!programItems.length) return;

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

    content.style.overflow = 'hidden';
    content.style.maxHeight = '0px';

    if (index === 1) {
      item.classList.add('is-open');
      content.style.maxHeight = `${content.scrollHeight}px`;
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
  });
});
