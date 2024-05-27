import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const $forms = document.querySelectorAll(".js-form");
$forms.forEach(($form) => {
  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isError = false;
    const $inputs = $form.querySelectorAll(".input");
    $inputs.forEach(($input) => {
      if (
        !validateItem({
          $item: $input,
          itemErrorClass: "input--error",
          fieldClass: "input__field",
          errorLabelClass: "input__error",
        })
      ) {
        isError = true;
      }
    });

    const $selects = $form.querySelectorAll(".select");
    $selects.forEach(($select) => {
      if (
        !validateItem({
          $item: $select,
          itemErrorClass: "select--error",
          fieldClass: "select__field",
          errorLabelClass: "select__error",
        })
      ) {
        isError = true;
      }
    });

    if (isError) {
      Swal.fire({
        text: "В одном или нескольких полях есть ошибка. Пожалуйста, проверьте и попробуйте снова.",
        icon: "error",
        showConfirmButton: false,
        showCloseButton: true,
      });
    } else {
      // const formData = new FormData($form);

      Swal.fire({
        text: "Спасибо! Ваша заявка успешно отправлена!",
        icon: "success",
        showConfirmButton: false,
        showCloseButton: true,
      });

      $inputs.forEach(($input) => {
        const $field = $input.querySelector(".input__field");
        $field.value = "";
      });

      $selects.forEach(($select) => {
        const $field = $select.querySelector(".select__field");
        $field.selectedIndex = 0;

        const $simpleSelectField = $select.querySelector(".simple-select__field");
        const $firstItem = $select.querySelector('.simple-select__item[data-select-index="0"');
        $simpleSelectField.innerText = $firstItem.innerText;
        if ($field.options[0].value === "") {
          $simpleSelectField.classList.add("simple-select__field--placeholder");
        }

        const $hoverItem = $select.querySelector(".simple-select__item--hover");
        $hoverItem?.classList.remove("simple-select__item--hover");
      });

      const $submit = $form.querySelector(".js-form-submit");
      if ($submit.dataset.disableEmpty !== undefined) {
        $submit.disabled = true;
      }

      const successFormEvent = new CustomEvent("formSuccess", {
        detail: {
          form: $form,
        },
      });
      document.dispatchEvent(successFormEvent);
    }
  });

  const $inputs = $form.querySelectorAll(".input");
  $inputs.forEach(($input) => {
    const $field = $input.querySelector(".input__field");
    $field.addEventListener("focus", () => {
      $input.classList.remove("input--error");
    });

    const $submit = $form.querySelector(".js-form-submit");
    if ($submit?.dataset.disableEmpty !== undefined) {
      $field.addEventListener("input", () => submitDisableHandler($form));
    }
  });

  const $simpleSelects = $form.querySelectorAll(".simple-select");
  $simpleSelects.forEach(($simpleSelect) => {
    const $select = $simpleSelect.closest(".select");
    const $field = $simpleSelect.querySelector(".simple-select__field");
    $field.addEventListener("click", () => {
      $select.classList.remove("select--error");
    });
  });
});

function validateItem({ $item, itemErrorClass, fieldClass, errorLabelClass }) {
  const $field = $item.querySelector(`.${fieldClass}`);
  const $error = $item.querySelector(`.${errorLabelClass}`);
  const label = $field.dataset.label;
  const validateType = $field.dataset.validate;

  if (validateType !== undefined && !validateEmpty($field)) {
    $item.classList.add(itemErrorClass);
    $error.innerText = `Поле ${label ? label + " " : ""}не может быть пустым`;
    return false;
  }

  if (validateType === "phone" && !validatePhone($field)) {
    $item.classList.add(itemErrorClass);
    $error.innerText = `Некорректный номер телефона`;
    return false;
  }

  return true;
}

function validateEmpty($field) {
  if ($field.value.length < 1) {
    return false;
  }

  return true;
}

function validatePhone($field) {
  if (!/(?:\+|\d)[\d\-\(\) ]{14,}\d/g.test($field.value)) {
    return false;
  }

  return true;
}

function submitDisableHandler($form) {
  const $submit = $form.querySelector(".js-form-submit");
  let fieldsFilled = true;

  const $inputs = $form.querySelectorAll(".input__field[data-validate]");
  $inputs.forEach(($input) => {
    if ($input.value === "+7") {
      $input.value = "";
    }

    if ($input.value === "") {
      fieldsFilled = false;
    }
  });

  $submit.disabled = !fieldsFilled;
}
