$(document).ready(function () {
    $('#email').on('input', function () {
        var emailInput = $(this);
        var errorMessage = emailInput.next('.error-message');

        if (emailInput[0].checkValidity()) {
            errorMessage.hide();
        } else {
            errorMessage.show();
        }
    });
});

var passwordInput = document.getElementById('password');
var errorMessage = passwordInput.nextElementSibling;

passwordInput.addEventListener('input', function () {
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/.test(passwordInput.value)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});

var surnameInput = document.getElementById('surname');
var surnameErrorMessage = surnameInput.nextElementSibling;

surnameInput.addEventListener('input', function () {
    if (surnameInput.checkValidity()) {
        surnameErrorMessage.style.display = 'none';
    } else {
        surnameErrorMessage.style.display = 'block';
    }
});

var nameInput = document.getElementById('name');
var nameErrorMessage = nameInput.nextElementSibling;

nameInput.addEventListener('input', function () {
    if (nameInput.checkValidity()) {
        nameErrorMessage.style.display = 'none';
    } else {
        nameErrorMessage.style.display = 'block';
    }
});

var patronymicInput = document.getElementById('patronymic');
var patronymicErrorMessage = patronymicInput.nextElementSibling;

patronymicInput.addEventListener('input', function () {
    if (patronymicInput.checkValidity()) {
        patronymicErrorMessage.style.display = 'none';
    } else {
        patronymicErrorMessage.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let birthdateInput = document.getElementById("birthdate");

    let today = new Date();
    today.setDate(today.getDate() - 1);

    let maxDate = today.toISOString().split('T')[0];

    birthdateInput.setAttribute("max", maxDate);
});

