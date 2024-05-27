import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination]);

const $sections = document.querySelectorAll(".works");
$sections.forEach(($section) => {
  const $slider = $section.querySelector(".works__slider-main");
  const $pagination = document.querySelector(".works__pagination");
  const $btnLeft = document.querySelector(".works__navigation-left");
  const $btnRight = document.querySelector(".works__navigation-right");

  new Swiper($slider, {
    slidesPerView: 1,
    spaceBetween: 12,
    speed: 500,
    pagination: {
      el: $pagination,
      clickable: true,
    },
    navigation: {
      prevEl: $btnLeft,
      nextEl: $btnRight,
    },
    breakpoints: {
      1260.01: {
        spaceBetween: 32,
        slidesPerView: 3,
      },
      991.01: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      640.01: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      460.01: {
        spaceBetween: 20,
        slidesPerView: 1.5,
      }
    },
  });
});
