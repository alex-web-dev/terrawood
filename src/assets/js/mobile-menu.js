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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

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
  console.log($links);

  $links.forEach($link => {
    $link.addEventListener('click', () => {
      $menu.classList.remove("mobile-menu--active");
      $menuToggle.classList.remove("menu-toggle--active");
      document.body.classList.remove("body--lock");
    });
  });
}
