document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.study-format .format-item');

  if (!items.length) return;

  function closeItem(item) {
    const content = item.querySelector('.format-show-box');
    const arrow = item.querySelector('.format-arrow');

    item.classList.remove('is-open');
    item.classList.remove('is-before-open');

    if (content) {
      content.style.maxHeight = '0px';
    }

    if (arrow) {
      arrow.style.transform = 'rotate(0deg)';
    }
  }

  function openItem(item) {
    const content = item.querySelector('.format-show-box');
    const arrow = item.querySelector('.format-arrow');
    const prevItem = item.previousElementSibling;

    item.classList.add('is-open');

    if (prevItem && prevItem.classList.contains('format-item')) {
      prevItem.classList.add('is-before-open');
    }

    if (content) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    if (arrow) {
      arrow.style.transform = 'rotate(90deg)';
    }
  }

  items.forEach((item, index) => {
    const trigger = item.querySelector('.format-name-box');
    const content = item.querySelector('.format-show-box');

    if (!trigger || !content) return;

    content.style.maxHeight = '0px';
    content.style.overflow = 'hidden';

    if (index === 0) {
      openItem(item);
    }

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach(closeItem);

      if (!isOpen) {
        openItem(item);
      }
    });
  });

  window.addEventListener('resize', () => {
    const openedItem = document.querySelector(
      '.study-format .format-item.is-open'
    );
    const openedContent = openedItem?.querySelector('.format-show-box');

    if (openedContent) {
      openedContent.style.maxHeight = openedContent.scrollHeight + 'px';
    }
  });
});
