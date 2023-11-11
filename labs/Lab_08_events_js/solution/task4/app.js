
let inputRed = document.getElementById('red');
let inputGreen = document.getElementById('green');
let inputBlue = document.getElementById('blue');
let squareColor = document.getElementById('square');
let colorGeneration;
let count = 0;
let addButton = document.getElementById("button");
let max = 15;

let block = document.getElementById("block");

function colorUpdate() {
    let redValue = inputRed.value;
    let greenValue = inputGreen.value;
    let blueValue = inputBlue.value;
    colorGeneration = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    squareColor.style.backgroundColor = colorGeneration;
}

inputRed.addEventListener('input', colorUpdate);
inputGreen.addEventListener('input', colorUpdate);
inputBlue.addEventListener('input', colorUpdate);

addButton.addEventListener("click", ()=>{
    if(count >= max){
        document.getElementById((count-max).toString()).style.backgroundColor = colorGeneration;
        count++;
        return;
    }
    let newBlock = document.createElement("div");
    newBlock.className = "newBlock";
    newBlock.id = count.toString();
    newBlock.style.padding = '10%';

    newBlock.onClick = ()=>{
        colorGeneration = document.getElementById(newBlock.id).style.backgroundColor;
        console.log(colorGeneration);
    }

    newBlock.style.backgroundColor = colorGeneration;
    console.log(colorGeneration);
    block.appendChild(newBlock);
    count++;
});