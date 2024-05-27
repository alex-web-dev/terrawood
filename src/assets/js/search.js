/* Search */
const $searchForms = document.querySelectorAll(".search-form");
$searchForms.forEach(($searchForm) => {
  const $closeBtn = $searchForm.querySelector(".search-form__close");
  const $input = $searchForm.querySelector(".search-form__input");

  $searchForm.addEventListener("click", () => {
    if ($input.value !== "") {
      $searchForm.classList.add("search-form--fill");
    }
  });

  $closeBtn?.addEventListener("click", () => {
    $input.value = "";
    $searchForm.classList.remove("search-form--fill");
  });

  $input.addEventListener("input", () => {
    if ($input.value === "") {
      $searchForm?.classList.remove("search-form--fill");
    } else {
      $searchForm?.classList.add("search-form--fill");
    }
  });
});