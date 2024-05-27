import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";

Swiper.use([Navigation, EffectFade]);

const $slider = document.querySelector(".calculate-form__slider");

const swiper = new Swiper($slider, {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 500,
  effect: "fade",
  allowTouchMove: false,
});

const $btns = document.querySelectorAll(".calculate-form__btn");
$btns.forEach(($btn) => {
  if ($btn.classList.contains("calculate-form__btn--prev")) {
    $btn.addEventListener("click", () => {
      swiper.slidePrev(500);
    });
  } else if ($btn.classList.contains("calculate-form__btn--next")) {
    $btn.addEventListener("click", () => {
      swiper.slideNext(500);
    });
  }
});

const $form = document.querySelector(".calculate-form");
if ($form) {
  document.addEventListener('formSuccess', (e) => {
    const $successForm = e.detail.form;

    if ($form === $successForm) {
      swiper.slideTo(0);

      const $checkboxesGroups = $form.querySelectorAll(".calculate-form__checkboxes");
      $checkboxesGroups.forEach(($checkboxesGroup) => {
        const $activeCheckboxInput = $checkboxesGroup.querySelector(".checkbox__input:checked");
        $activeCheckboxInput.checked = false;

        const $firstCheckbox = $checkboxesGroup.querySelector(".calculate-form__checkbox");
        const $firstCheckboxInput = $firstCheckbox.querySelector(".checkbox__input");
        $firstCheckboxInput.checked = true;
      });
    }
  });

  updateStepsInput($form);

  const $checkboxes = $form.querySelectorAll(".calculate-form__checkbox");
  $checkboxes.forEach(($checkbox) => {
    $checkbox.addEventListener("change", () => {
      const $box = $checkbox.closest(".calculate-form__checkboxes");
      const $boxCheckboxes = $box.querySelectorAll(".calculate-form__checkbox");
      $boxCheckboxes.forEach(($boxCheckbox) => {
        if ($boxCheckbox !== $checkbox) {
          const $input = $boxCheckbox.querySelector(".checkbox__input");
          $input.checked = false;
        }
      });

      updateStepsInput($form);
    });
  });
}

function updateStepsInput($form) {
  const $stepsInput = $form.querySelector('input[name="steps"]');

  const $checkedInputs = $form.querySelectorAll(".checkbox__input:checked");
  let stepsData = {};
  $checkedInputs.forEach(($input, index) => {
    stepsData[index + 1] = $input.value;
  });

  $stepsInput.value = JSON.stringify(stepsData);
}