
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');
const colorSquare = document.getElementById('square');
const addButton = document.getElementById("button");
const block = document.getElementById("block");
let colorGeneration;
let count = 0;
let max = 15;

function colorUpdate() {
    let red = inputRed.value;
    let green = inputGreen.value;
    let blue = inputBlue.value;
    colorGeneration = `rgb(${red}, ${green}, ${blue})`;
    colorSquare.style.backgroundColor = colorGeneration;
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

    addBlock.onClick = ()=>{
        colorGeneration = document.getElementById(addBlock.id).style.backgroundColor;
        console.log(colorGeneration);
    }

    addBlock.style.backgroundColor = colorGeneration;
    console.log(colorGeneration);
    block.appendChild(addBlock);
    count++;
});
