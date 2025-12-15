function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsContainer = document.querySelector("#controls");
const inputField = controlsContainer.querySelector("input");
const createBtn = controlsContainer.querySelector("[data-create]");
const destroyBtn = controlsContainer.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", ()=> {
    const amount = inputField.value;
    if (amount > 0 && amount <= 100) {
        boxesContainer.innerHTML = "";
        boxesContainer.append(...createBoxes(amount))
        inputField.value = ""; 
    }
    
}) 

function createBoxes(amount) {
    const boxes = [];
    let boxSize = 30;

    for (let i = 0; i < amount; i += 1){
        const box = document.createElement("div");
        box.classList.add("box")
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
        boxSize += 10;
    }
return boxes;

} 

destroyBtn.addEventListener("click", () => {
    boxesContainer.innerHTML = "";
    inputField.value = "";
})

