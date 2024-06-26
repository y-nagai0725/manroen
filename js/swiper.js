//mvのスライダー設定
const mvSwiper = new Swiper('.mv .swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 2000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
});

//picture-sliderのスライダー設定
const pictureSwiper = new Swiper('.picture-slider .swiper', {
  spaceBetween: 0,
  slidesPerView: 1,
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },
  centeredSlides: true,
  loop: true,
  speed: 9000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});