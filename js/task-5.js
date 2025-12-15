function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body")
const widget = document.querySelector(".widget");
const backgroundColor = widget.querySelector(".color");
const changeButton = widget.querySelector(".change-color");

changeButton.addEventListener("click", () => {
   const color = getRandomHexColor();
   document.body.style.backgroundColor= color,
   backgroundColor.textContent = color;

})