document.addEventListener('DOMContentLoaded', () => {
  const programItems = document.querySelectorAll('.program-item');

  function closeItem(item) {
    const content = item.querySelector('.item-show-box');

    item.classList.remove('is-open');
    content.style.maxHeight = '0px';
  }

  function openItem(item) {
    const content = item.querySelector('.item-show-box');

    item.classList.add('is-open');
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  programItems.forEach((item, index) => {
    const title = item.querySelector('.item-title-box');

    if (index === 1) {
      openItem(item);
    } else {
      closeItem(item);
    }

    title.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      programItems.forEach(closeItem);

      if (!isOpen) {
        openItem(item);
      }
    });
  });

  window.addEventListener('resize', () => {
    programItems.forEach(item => {
      if (item.classList.contains('is-open')) {
        const content = item.querySelector('.item-show-box');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
