
let inputRed = document.getElementById('red');
let inputGreen = document.getElementById('green');
let inputBlue = document.getElementById('blue');
let squareColor = document.getElementById('square');

function colorUpdate() {
    let redValue = inputRed.value;
    let greenValue = inputGreen.value;
    let blueValue = inputBlue.value;
    squareColor.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

inputRed.addEventListener('input', colorUpdate);
inputGreen.addEventListener('input', colorUpdate);
inputBlue.addEventListener('input', colorUpdate);