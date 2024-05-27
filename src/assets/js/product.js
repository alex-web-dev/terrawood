import Swiper from "swiper";
import { Thumbs, Navigation } from "swiper/modules";

Swiper.use([Thumbs, Navigation]);

const $product = document.querySelector(".product");
if ($product) {
  const $btnRight = $product.querySelector(".product__other-next");

  const otherSlider = new Swiper(".product__other-slider", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    direction: 'horizontal',
    breakpoints: {
      1261: {
        spaceBetween: 24,
        direction: 'vertical',
        slidesPerView: 'auto',
      },
      992: {
        slidesPerView: 3,
        direction: 'vertical',
      },
      768: {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 16,
      }
    }
  });

  new Swiper(".product__main-slider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    thumbs: {
      swiper: otherSlider,
    },
    navigation: {
      nextEl: $btnRight,
    },
    mousewheel: {
      sensitivity: 1.4,
    },
  });
}