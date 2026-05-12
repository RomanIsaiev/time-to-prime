document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.study-format .format-item');

  if (!items.length) return;

  function updateBeforeOpenClass() {
    items.forEach(item => item.classList.remove('is-before-open'));

    const openedItem = document.querySelector(
      '.study-format .format-item.is-open'
    );

    const prevItem = openedItem?.previousElementSibling;

    if (prevItem && prevItem.classList.contains('format-item')) {
      prevItem.classList.add('is-before-open');
    }
  }

  function closeItem(item) {
    const content = item.querySelector('.format-show-box');

    if (!item.classList.contains('is-open') || !content) return;

    item.classList.remove('is-open');

    content.style.maxHeight = `${content.scrollHeight}px`;

    requestAnimationFrame(() => {
      content.style.maxHeight = '0px';
    });
  }

  function openItem(item) {
    const content = item.querySelector('.format-show-box');

    if (item.classList.contains('is-open') || !content) return;

    item.classList.add('is-open');

    content.style.maxHeight = '0px';

    requestAnimationFrame(() => {
      content.style.maxHeight = `${content.scrollHeight}px`;
    });
  }

  items.forEach((item, index) => {
    const trigger = item.querySelector('.format-name-box');
    const content = item.querySelector('.format-show-box');

    if (!trigger || !content) return;

    content.style.overflow = 'hidden';
    content.style.maxHeight = '0px';

    if (index === 0) {
      item.classList.add('is-open');
      content.style.maxHeight = `${content.scrollHeight}px`;
    }

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach(currentItem => {
        if (currentItem !== item) {
          closeItem(currentItem);
        }
      });

      if (isOpen) {
        closeItem(item);
      } else {
        openItem(item);
      }

      updateBeforeOpenClass();
    });
  });

  updateBeforeOpenClass();

  window.addEventListener('resize', () => {
    const openedItem = document.querySelector(
      '.study-format .format-item.is-open'
    );

    const openedContent = openedItem?.querySelector('.format-show-box');

    if (openedContent) {
      openedContent.style.maxHeight = `${openedContent.scrollHeight}px`;
    }
  });
});
