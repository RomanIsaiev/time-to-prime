document.addEventListener('DOMContentLoaded', () => {
  const tariffBtns = document.querySelectorAll('.tariff-control-btn');
  const tariffItems = document.querySelectorAll('.tariff-item');

  if (!tariffBtns.length || !tariffItems.length) return;

  const defaultActiveIndex = 2; // Headliner

  function activateTariff(index) {
    tariffBtns.forEach((btn, btnIndex) => {
      btn.classList.toggle('is-active', btnIndex === index);
    });

    tariffItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
    });
  }

  activateTariff(defaultActiveIndex);

  tariffBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      activateTariff(index);
    });
  });
});
