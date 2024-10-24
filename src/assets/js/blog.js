import { isMobileDevice } from "./helpers";

const $cards = document.querySelectorAll(".blog-card");
$cards.forEach(($card) => {
  const $imgBox = $card.querySelector(".blog-card__img-box");

  $imgBox.addEventListener("mouseenter", () => {
    if (!isMobileDevice()) {
      activateCardHandler($card);
    }
  });

  $card.addEventListener("mouseleave", () => {
    if (!isMobileDevice()) {
      $card.classList.remove("blog-card--active");
    }
  });

  $imgBox.addEventListener("click", (e) => {
    if (isMobileDevice()) {
      e.stopPropagation();
      activateCardHandler($card);
    }
  });
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".blog-card")) { // Проверяем, клик ли на карточку
    const $activeCard = document.querySelector(".blog-card--active");
    $activeCard?.classList.remove("blog-card--active");
  }
});

function activateCardHandler($card) {
  const $prevActiveCard = document.querySelector(".blog-card--active");
  $prevActiveCard?.classList.remove("blog-card--active");

  $card.classList.add("blog-card--active");
}
