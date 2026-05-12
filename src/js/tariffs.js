document.addEventListener('DOMContentLoaded', () => {
  const tariffBtns = document.querySelectorAll('.tariff-control-btn');
  const tariffItems = document.querySelectorAll('.tariff-item');

  if (!tariffBtns.length || !tariffItems.length) return;

  const defaultActiveIndex = 2;
  let refreshTimer;

  function refreshScrollTriggers(delay = 120) {
    if (typeof ScrollTrigger === 'undefined') return;

    clearTimeout(refreshTimer);

    refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, delay);
  }

  function activateTariff(index) {
    tariffBtns.forEach((btn, btnIndex) => {
      btn.classList.toggle('is-active', btnIndex === index);
    });

    tariffItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
    });

    refreshScrollTriggers(250);
  }

  activateTariff(defaultActiveIndex);

  tariffBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      activateTariff(index);
    });
  });

  window.addEventListener('resize', () => {
    refreshScrollTriggers(250);
  });
});
