document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["form"];
  const button = form.elements["submit-btn"];

  const inputArr = Array.from(form);
  const validInputArr = [];
  console.log(inputArr);
  inputArr.forEach((el) => {
    if (el.hasAttribute("pattern")) {
      el.setAttribute("is-valid", "0");
      validInputArr.push(el);
    }
  });

  form.addEventListener("input", inputHandler);
  button.addEventListener("click", btnHandler);

  function inputHandler({ target }) {
    if (target.hasAttribute("pattern")) {
      inputCheck(target);
    } else if (target.id === "birthdate") {
      ageCheck(target);
    }
  }

  function inputCheck(el) {
    const inputVal = el.value;
    const inputReg = el.getAttribute("pattern");
    const reg = new RegExp(inputReg);
    var errorMessage = el.nextElementSibling;

    if (!reg.test(inputVal)) {
      errorMessage.style.display = "block";
      el.setAttribute("is-valid", "0");
    } else {
      errorMessage.style.display = "none";
      el.setAttribute("is-valid", "1");
    }
  }

  function ageCheck(el) {
    const inputDate = el.value;
    const errorMessage = el.nextElementSibling;
    const birthdate = new Date(inputDate);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (age >= 18) {
      errorMessage.style.display = "none";
      el.setAttribute("is-valid", "1");
    } else {
      errorMessage.style.display = "block";
      el.setAttribute("is-valid", "0");
    }
  }

  function btnHandler(e) {
    const allValid = [];
    validInputArr.forEach((el) => {
      allValid.push(el.getAttribute("is-valid"));
    });

    const isAllValid = allValid.reduce((acc, current) => {
      return acc && current;
    });

    if (!Boolean(Number(isAllValid))) {
      e.preventDefault();
    }
  }
});
