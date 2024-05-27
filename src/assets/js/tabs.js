let delay = 550;
let animated = false;

const $tabsBtnsBoxes = document.querySelectorAll(".tabs-btns");
$tabsBtnsBoxes.forEach(($tabsBtnsBox) => {
  const $btns = $tabsBtnsBox.querySelectorAll(".tabs-btns__btn");
  $btns.forEach(($btn, index) => {
    $btn.addEventListener("click", () => {
      if ($btn.classList.contains('tabs-btns__btn--active')) {
        return;
      }
      
      changeTab($tabsBtnsBox.dataset.tabsName, index);
    });
  });
});

function changeTab(name, index) {
  if (animated) {
    return;
  }

  animated = true;

  const $oldActiveBtn = document.querySelector(`.tabs-btns[data-tabs-name="${name}"] > .tabs-btns__btn--active`);
  const $oldActiveTab = document.querySelector(`.tabs-list[data-tabs-name="${name}"] > .tabs-list__item--active`);
  const $newActiveBtn = document.querySelectorAll(`.tabs-btns[data-tabs-name="${name}"] > .tabs-btns__btn`)[index];
  const $newActiveTab = document.querySelectorAll(`.tabs-list[data-tabs-name="${name}"] > .tabs-list__item`)[index];

  $oldActiveBtn.classList.remove("tabs-btns__btn--active");
  $newActiveBtn.classList.add("tabs-btns__btn--active");

  $oldActiveTab.style.height = `${$oldActiveTab.scrollHeight}px`;
  $oldActiveTab.classList.add("tabs-list__item--activating");

  $newActiveTab.classList.add('tabs-list__item--activating');

  setTimeout(() => {
    $oldActiveTab.classList.remove("tabs-list__item--active");
    $oldActiveTab.style.height = "0px";

    $newActiveTab.style.height = `${$newActiveTab.scrollHeight}px`;
  });

  setTimeout(() => {
    animated = false;
    $oldActiveTab.classList.remove("tabs-list__item--activating");

    $newActiveTab.classList.add('tabs-list__item--active');
    $newActiveTab.classList.remove('tabs-list__item--activating');
    $newActiveTab.style.height = "";
  }, delay);
}