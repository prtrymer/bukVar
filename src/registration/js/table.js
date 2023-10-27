document.addEventListener("DOMContentLoaded", function () {
    let birthdateInput = document.getElementById("birthdate");

    let today = new Date();
    today.setDate(today.getDate() - 1);

    let maxDate = today.toISOString().split('T')[0];

    birthdateInput.setAttribute("max", maxDate);
});
$(document).ready(function () {
    $("#signup-form").on("submit", function (event) {
        event.preventDefault();
        const formData = $(this).serializeArray();
        const dataRow = {};
        formData.forEach(item => {
            dataRow[item.name] = item.value;
        });

        const tableRow = $("<tr></tr>");
        tableRow.append("<td><input type='checkbox'></td>");
        tableRow.append(`<td>${dataRow.name}</td>`);
        tableRow.append(`<td>${dataRow.surname}</td>`);
        tableRow.append(`<td>${dataRow.patronymic}</td>`);
        tableRow.append(`<td>${dataRow.email}</td>`);
        tableRow.append(`<td>${dataRow.gender}</td>`);
        tableRow.append(`<td>${dataRow.phone}</td>`);
        tableRow.append(`<td>${dataRow.birthdate}</td>`);
        tableRow.append(`<td>${dataRow.role}</td>`);
        $("#data-table tbody").append(tableRow);

        $("#signup-form")[0].reset();
    });

    $("#delete-selected").on("click", function () {
        $("#data-table input[type='checkbox']:checked").closest("tr").remove();
    });

    $("#duplicate-selected").on("click", function () {
        $("#data-table input[type='checkbox']:checked").each(function () {
            const rowToDuplicate = $(this).closest("tr");
            const newRow = rowToDuplicate.clone();
            newRow.find("input[type='checkbox']").prop("checked", true);
            $("#data-table tbody").append(newRow);
        });
    });
});