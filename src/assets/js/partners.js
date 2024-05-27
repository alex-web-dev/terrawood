import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

Swiper.use([Pagination, Autoplay]);

const $sections = document.querySelectorAll(".partners");
$sections.forEach(($section) => {
  const $slider = $section.querySelector(".partners__slider");
  const $pagination = $section.querySelector(".partners__pagination");

  new Swiper($slider, {
    slidesPerView: 1,
    spaceBetween: 12,
    speed: 600,
    loop: true,
    pagination: {
      el: $pagination,
      clickable: true,
    },
    breakpoints: {
      1260.01: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      860.01: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      480.01: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },
  });
});
