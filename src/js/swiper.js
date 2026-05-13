const swiper = new Swiper('.lectors-swiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.lectors-button-next',
    prevEl: '.lectors-button-prev',
  },
});

const reviewsSwiper = new Swiper('.reviews-swiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.review-button-next',
    prevEl: '.review-button-prev',
  },
});
