document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.study-format .format-item');

  if (!items.length) return;

  let refreshTimer;

  function refreshScrollTriggers(delay = 100) {
    if (typeof ScrollTrigger === 'undefined') return;

    clearTimeout(refreshTimer);

    refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, delay);
  }

  function closeItem(item) {
    const content = item.querySelector('.format-show-box');
    const arrow = item.querySelector('.format-arrow');

    if (!item.classList.contains('is-open')) return;

    item.classList.remove('is-open');
    item.classList.remove('is-before-open');

    if (content) {
      content.style.maxHeight = `${content.scrollHeight}px`;

      requestAnimationFrame(() => {
        content.style.maxHeight = '0px';
      });
    }

    if (arrow) {
      arrow.style.transform = 'rotate(0deg)';
    }
  }

  function openItem(item) {
    const content = item.querySelector('.format-show-box');
    const arrow = item.querySelector('.format-arrow');
    const prevItem = item.previousElementSibling;

    if (item.classList.contains('is-open')) return;

    item.classList.add('is-open');

    if (prevItem && prevItem.classList.contains('format-item')) {
      prevItem.classList.add('is-before-open');
    }

    if (content) {
      content.style.maxHeight = '0px';

      requestAnimationFrame(() => {
        content.style.maxHeight = `${content.scrollHeight}px`;
      });
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

    content.addEventListener('transitionend', event => {
      if (event.propertyName !== 'max-height') return;

      if (item.classList.contains('is-open')) {
        content.style.maxHeight = `${content.scrollHeight}px`;
      }

      refreshScrollTriggers();
    });

    if (index === 0) {
      openItem(item);
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

      refreshScrollTriggers(450);
    });
  });

  window.addEventListener('resize', () => {
    const openedItem = document.querySelector(
      '.study-format .format-item.is-open'
    );
    const openedContent = openedItem?.querySelector('.format-show-box');

    if (openedContent) {
      openedContent.style.maxHeight = `${openedContent.scrollHeight}px`;
      refreshScrollTriggers();
    }
  });
});
