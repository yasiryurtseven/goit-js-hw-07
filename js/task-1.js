const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
// const headers = categories.querySelectorAll("h2")

console.log(`Number of categories: ${items.length}`)

items.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`)

});