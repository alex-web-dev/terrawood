import Swiper from "swiper";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

Swiper.use([Pagination, Autoplay, Navigation]);

const $slider = document.querySelector(".banner-slider__main");
const $pagination = document.querySelector(".banner-slider__pagination");
const $btnLeft = document.querySelector(".banner-slider__navigation-left");
const $btnRight = document.querySelector(".banner-slider__navigation-right");

new Swiper($slider, {
  slidesPerView: 1,
  speed: 600,
  autoplay: {
    delay: 3000
  },
  loop: true,
  pagination: {
    el: $pagination,
    clickable: true,
  },
  navigation: {
    prevEl: $btnLeft,
    nextEl: $btnRight,
  },
});
