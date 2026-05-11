document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const blackSections = document.querySelectorAll('.is-black');

  if (!header || !blackSections.length) return;

  function updateHeaderColor() {
    const headerRect = header.getBoundingClientRect();

    // Берём точку примерно по центру хедера
    const headerPoint = headerRect.top + headerRect.height / 2;

    let isOnBlack = false;

    blackSections.forEach(section => {
      const sectionRect = section.getBoundingClientRect();

      const isHeaderInsideSection =
        headerPoint >= sectionRect.top && headerPoint <= sectionRect.bottom;

      if (isHeaderInsideSection) {
        isOnBlack = true;
      }
    });

    header.classList.toggle('is-on-black', isOnBlack);
  }

  updateHeaderColor();

  window.addEventListener('scroll', updateHeaderColor);
  window.addEventListener('resize', updateHeaderColor);
});
