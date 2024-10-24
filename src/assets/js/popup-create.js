import { createElem, lockBody, unlockBody } from "./helpers";

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
  });

  $popup.addEventListener("click", (e) => {
    if ($popup === e.target) {
      $popup.classList.remove("popup--active");
    }
  });
});

function createPopup($content, className = "") {
  const $closeBtn = createElem("button", "popup__close");

  const $popupContent = createElem("div", "popup__content", {
    innerHTML: $content,
  });
  $popupContent.appendChild($closeBtn);

  const $popup = createElem("div", `popup ${className}`);
  $popup.appendChild($popupContent);

  $popup.addEventListener("click", (e) => {
    if ($popup === e.target) {
      closePopup($popup);
    }
  });
  $closeBtn.addEventListener("click", () => closePopup($popup), { once: true });

  return {
    el: $popup,
    close: () => closePopup($popup),
    show: () => showPopup($popup),
  };
}

function closePopup($popup) {
  $popup.classList.remove("popup--active");
  setTimeout(() => $popup.remove(), 1000);
}

function showPopup($popup) {
  document.body.append($popup);
  $popup.classList.add("popup--show");
  setTimeout(() => $popup.classList.add("popup--active"), 50);
}

export function createSuccessPopup(content) {
  const $popup = createPopup(
    `
    <div class="popup__icon popup__icon--success">
      <img src="assets/img/icons/check-white.svg">
    </div>
    ${content}
  `,
    "popup--message"
  );

  return $popup;
}

export function createErrorPopup(content) {
  const $popup = createPopup(
    `
    <div class="popup__icon popup__icon--error">
      <img src="assets/img/icons/close-white.svg">
    </div>
    ${content}
  `,
    "popup--message"
  );

  return $popup;
}

export default {
  createSuccess: createSuccessPopup,
  createError: createErrorPopup,
};
