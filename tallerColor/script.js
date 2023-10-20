
const inputColor = document.getElementById('color');
const card = document.getElementById('card');



inputColor.addEventListener('input', color)

function color() {
    let valueColor = inputColor.value
    card.style.backgroundColor = valueColor
}



