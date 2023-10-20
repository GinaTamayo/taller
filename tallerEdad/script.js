
const inputDate = document.getElementById('date');
const date2023 = new Date();
let old = document.getElementById('yearsOld');

const input = inputDate.value
const yearDate = inputDate.slice(0,4)

if (yearDate - date2023 >= 18) {
    old.textContent = 'es mayor de edad'
}

