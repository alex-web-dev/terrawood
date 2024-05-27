const $catalogMenu = document.querySelector(".catalog-menu");
const $openBtns = document.querySelectorAll(".js-open-catalog-menu");
const delay = 600;

$catalogMenu.style.transition = `
  opacity ${delay / 1000}s,
  height ${delay / 1000}s,
  box-shadow ${delay / 1000}s
`;

let animated = false;

$openBtns.forEach(($btn) => {
  $btn.addEventListener("click", () => {
    if (animated) {
      return;
    }

    if ($catalogMenu.classList.contains('catalog-menu--active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("js-open-catalog-menu")) {
    return;
  }

  const isInner = e.target.closest(".catalog-menu") && !e.target.classList.contains("catalog-menu");
  const isActive = $catalogMenu.classList.contains("catalog-menu--show");
  if (!isActive || isInner) {
    return;
  }

  closeMenu();
});

function openMenu() {
  $catalogMenu.classList.add('catalog-menu--active');

  $catalogMenu.style.height = `${$catalogMenu.scrollHeight}px`;

  setTimeout(() => {
    $catalogMenu.classList.add("catalog-menu--show");
  });

  $openBtns.forEach(($btn) => $btn.classList.add("js-catalog-menu-opened"));
}

function closeMenu() {
  $catalogMenu.classList.remove("catalog-menu--show");
  $catalogMenu.style.height = "0px";

  animated = true;

  $openBtns.forEach(($btn) => $btn.classList.remove("js-catalog-menu-opened"));

  setTimeout(() => {
    $catalogMenu.classList.remove('catalog-menu--active');

    animated = false;
  }, delay);
}
