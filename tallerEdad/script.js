const inputDate = document.getElementById('date');
const date2023 = new Date();
const old = document.getElementById('yearsOld');
const validate = document.getElementById('validate');

validate.addEventListener('click', validationYearsOld);

function validationYearsOld() {
    const input = inputDate.value;
    const dateBorn = new Date(input);
    const yearActual = date2023.getFullYear();
    const yearBorn = parseInt(input.slice(0, 4));

    if (yearActual - yearBorn >= 18) {
        old.textContent = 'Es mayor de edad en Colombia';
    } else if (yearActual - yearBorn < 18) {
        old.textContent = 'Es menor de edad en Colombia';
    }
}






