import AirDatepicker from "air-datepicker";

window.addEventListener("load", () => {
  const $dateInputs = document.querySelectorAll(".js-input-date");
  $dateInputs.forEach(($input) => {
    new AirDatepicker($input, {
      autoClose: true,
    });
  });
});
