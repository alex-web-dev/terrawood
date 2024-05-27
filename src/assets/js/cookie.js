const $cookie = document.querySelector(".cookie");
if ($cookie) {
  const isAccept = JSON.parse(localStorage.getItem("cookie"));
  if (!isAccept) {
    setTimeout(() => {
      $cookie.classList.add("cookie--show");
      setTimeout(() => $cookie.classList.add("cookie--active"), 500);
    }, 500);
  }

  const $acceptBtn = $cookie.querySelector(".cookie__btn");
  $acceptBtn.addEventListener("click", accept);

  window.addEventListener("click", (e) => {
    const isInner = e.target.closest(".cookie") && !e.target.classList.contains("cookie");
    if (isInner) {
      return;
    }

    accept();
  });
}

function accept() {
  localStorage.setItem("cookie", JSON.stringify(true));
  $cookie.classList.remove("cookie--active");
  setTimeout(() => $cookie.classList.remove("cookie--show"), 500);
}
