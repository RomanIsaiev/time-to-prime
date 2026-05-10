document.addEventListener(
  'DOMContentLoaded',
  () => {
    const faqItems =
      document.querySelectorAll(
        '.faq-item'
      );

    if (!faqItems.length) return;

    function closeItem(item) {
      const showBox =
        item.querySelector(
          '.faq-show-box'
        );

      item.classList.remove(
        'is-active'
      );

      if (showBox) {
        showBox.style.height =
          showBox.scrollHeight + 'px';

        requestAnimationFrame(() => {
          showBox.style.height = '0px';
        });
      }
    }

    function openItem(item) {
      const showBox =
        item.querySelector(
          '.faq-show-box'
        );

      item.classList.add('is-active');

      if (showBox) {
        showBox.style.height =
          showBox.scrollHeight + 'px';

        showBox.addEventListener(
          'transitionend',
          () => {
            if (
              item.classList.contains(
                'is-active'
              )
            ) {
              showBox.style.height =
                'auto';
            }
          },
          { once: true }
        );
      }
    }

    faqItems.forEach(item => {
      const questionBox =
        item.querySelector(
          '.faq-question-box'
        );

      if (!questionBox) return;

      questionBox.addEventListener(
        'click',
        () => {
          const isActive =
            item.classList.contains(
              'is-active'
            );

          faqItems.forEach(
            currentItem => {
              if (
                currentItem !== item
              ) {
                closeItem(currentItem);
              }
            }
          );

          if (isActive) {
            closeItem(item);
          } else {
            openItem(item);
          }
        }
      );
    });
  }
);
