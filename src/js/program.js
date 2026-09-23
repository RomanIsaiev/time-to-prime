document.addEventListener('DOMContentLoaded', () => {
  const programItems = document.querySelectorAll('.program-item');

  if (!programItems.length) return;

  function closeItem(item) {
    const content = item.querySelector('.item-show-box');

    if (!content || !item.classList.contains('is-open')) return;

    content.style.maxHeight = `${content.scrollHeight}px`;

    requestAnimationFrame(() => {
      item.classList.remove('is-open');
      content.style.maxHeight = '0px';
    });
  }

  function openItem(item) {
    const content = item.querySelector('.item-show-box');

    if (!content || item.classList.contains('is-open')) return;

    item.classList.add('is-open');

    requestAnimationFrame(() => {
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  }

  programItems.forEach(item => {
    const title = item.querySelector('.item-title-box');
    const content = item.querySelector('.item-show-box');

    if (!title || !content) return;

    content.style.maxHeight = '0px';

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
