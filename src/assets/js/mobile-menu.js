const $menu = document.querySelector(".mobile-menu");
const delay = 600;
let animate = false;
if ($menu) {
  const $menuToggle = document.querySelector(".menu-toggle");
  $menuToggle.addEventListener("click", () => {
    if (animate) {
      return;
    }

    $menu.classList.toggle("mobile-menu--active");
    $menuToggle.classList.toggle("menu-toggle--active");
    document.body.classList.toggle("body--lock");
    animate = true;

    if ($menu.classList.contains('mobile-menu--show')) {
      $menu.classList.remove("mobile-menu--show");
    } else {
      setTimeout(() => {
        $menu.classList.add("mobile-menu--show");
      }, delay);
    }

    setTimeout(() => {
      animate = false;
    }, delay);
  });

  const $links = $menu.querySelectorAll('.mobile-menu__link');

  $links.forEach($link => {
    $link.addEventListener('click', () => {
      if ($link.classList.contains('mobile-menu__link--static')) {
        return;
      }
      
      $menu.classList.remove("mobile-menu--active");
      $menuToggle.classList.remove("menu-toggle--active");
      document.body.classList.remove("body--lock");
    });
  });
}
