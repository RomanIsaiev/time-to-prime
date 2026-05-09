document.addEventListener('DOMContentLoaded', () => {
  const stories = document.querySelector('.author-stories');

  if (!stories) return;

  const items = Array.from(stories.querySelectorAll('.sotries-item'));

  if (items.length < 3) return;

  let activeIndex = 1;

  function getLoopIndex(index) {
    return (index + items.length) % items.length;
  }

  function updateStories() {
    const farLeftIndex = getLoopIndex(activeIndex - 2);
    const leftIndex = getLoopIndex(activeIndex - 1);
    const centerIndex = getLoopIndex(activeIndex);
    const rightIndex = getLoopIndex(activeIndex + 1);
    const farRightIndex = getLoopIndex(activeIndex + 2);

    items.forEach((item, index) => {
      item.classList.remove(
        'is-far-left',
        'is-left',
        'is-center',
        'is-right',
        'is-far-right',
        'is-hidden'
      );

      if (index === farLeftIndex) {
        item.classList.add('is-far-left');
      } else if (index === leftIndex) {
        item.classList.add('is-left');
      } else if (index === centerIndex) {
        item.classList.add('is-center');
      } else if (index === rightIndex) {
        item.classList.add('is-right');
      } else if (index === farRightIndex) {
        item.classList.add('is-far-right');
      } else {
        item.classList.add('is-hidden');
      }
    });
  }

  updateStories();

  setInterval(() => {
    activeIndex = getLoopIndex(activeIndex + 1);
    updateStories();
  }, 2500);
});
