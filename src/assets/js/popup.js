import { lockBody, unlockBody } from "./helpers.js";

const $openBtns = document.querySelectorAll(".js-open-popup");
$openBtns.forEach(($btn) => {
  $btn.addEventListener("click", () => {
    const name = $btn.dataset.popupName;
    const $popup = document.querySelector(`.popup[data-name="${name}"`);
    if (!name || !$popup) {
      return;
    }

    $popup.classList.add("popup--active");
    lockBody();
  });
});

const $popups = document.querySelectorAll(".popup");
$popups.forEach(($popup) => {
  $popup.classList.add("popup--show");

  const $closeBtn = $popup.querySelector(".popup__close");
  $closeBtn?.addEventListener("click", () => {
    $popup.classList.remove("popup--active");
    $popup.addEventListener("transitionend", () => unlockBody(), { once: true });
  });

  $popup.addEventListener("click", (e) => {
    if ($popup === e.target || e.target.classList.contains("popup__dialog")) {
      $popup.classList.remove("popup--active");
      $popup.addEventListener("transitionend", () => unlockBody(), { once: true });
    }
  });
});
