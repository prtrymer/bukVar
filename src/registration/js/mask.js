document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  Inputmask("+38(999)999-99-99").mask(phoneInput);
});
