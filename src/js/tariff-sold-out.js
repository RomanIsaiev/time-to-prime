document.addEventListener('DOMContentLoaded', () => {
  // Змінюй значення статусу тарифів:
  // true — показується Sold Out, кнопки недоступні
  // false — тариф активний і доступний для вибору

  const soldOutStatus = {
    solo: false,
    hollywood: false,
    prime: false,
  };

  const tariffItems = document.querySelectorAll('.tariff-item');

  const tariffKeys = ['solo', 'hollywood', 'prime'];

  tariffItems.forEach((item, index) => {
    const tariffName = tariffKeys[index];
    const isSoldOut = soldOutStatus[tariffName];

    item.classList.toggle('is-sold-out', isSoldOut);

    const buttons = item.querySelectorAll('.tariff-btn');

    buttons.forEach(button => {
      if (isSoldOut) {
        button.setAttribute('aria-disabled', 'true');
        button.setAttribute('tabindex', '-1');

        button.addEventListener('click', event => {
          event.preventDefault();
        });
      } else {
        button.removeAttribute('aria-disabled');
        button.removeAttribute('tabindex');
      }
    });
  });
});
