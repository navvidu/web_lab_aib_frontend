
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');
const squareColor = document.getElementById('square');
const addButton = document.getElementById("button");
const block = document.getElementById("block");
let colorGeneration;
let count = 0;
let max = 15;

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
    let addBlock = document.createElement("div");
    addBlock.className = "addBlock";
    addBlock.id = count.toString();
    addBlock.style.padding = '10%';
    addBlock.style.backgroundColor = colorGeneration;
    block.appendChild(addBlock);
    count++;
});
