
let inputRed = document.getElementById('red');
let inputGreen = document.getElementById('green');
let inputBlue = document.getElementById('blue');
let colorSquare = document.getElementById('square');

function colorUpdate() {
    let red = inputRed.value;
    let green = inputGreen.value;
    let blue = inputBlue.value;
    colorSquare.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

inputRed.addEventListener('input', colorUpdate);
inputGreen.addEventListener('input', colorUpdate);
inputBlue.addEventListener('input', colorUpdate);
