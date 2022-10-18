function randomizeColour() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function changeColours(el) {
    el.style.color = randomizeColour();
    el.style.background = randomizeColour();
}

function changeColour_1() {
    const toChange = document.getElementById("changeColour_first");
    changeColours(toChange);
}

function changeColour_2() {
    const toChange = document.querySelector(".changeColour_second");
    changeColours(toChange);
}

const addImage = document.getElementById('add');
const increaseImage = document.getElementById('increase');
const reduceImage = document.getElementById('reduce');
const removeImage = document.getElementById('remove');
const picture = document.getElementById("picture");

function add() {
    picture.src = "https://lviv.travel/image/news/ca/48/ca488962b7ba4aced73d0b10b8a7b7afb68efc70_1584955392.jpeg?crop=937%2C627%2C2%2C0"
    picture.style.display = ""

    addImage.disabled = true;
    increaseImage.disabled = false;
    reduceImage.disabled = false;
    removeImage.disabled = false;
}

let size = 600;

function increase() {
    if (size < 800) {
        size += 20
        picture.style.width = size + "px";
        reduceImage.disabled = false;
    } else {
        increaseImage.disabled = true;
        alert("Більше не можна збільшувати")
    }
}

function reduce() {
    if (size > 400) {
        size -= 20
        picture.style.width = size + "px"
        increaseImage.disabled = false;
    } else {
        reduceImage.disabled = true;
        alert("Більше не можна зменшувати")
    }
}

function remove() {
    picture.style.display = "none"

    addImage.disabled = false;
    increaseImage.disabled = true;
    reduceImage.disabled = true;
    removeImage.disabled = true;
}