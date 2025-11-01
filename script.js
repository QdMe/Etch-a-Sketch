// Setting a default number of boxes
let numberOfBoxs = 16;
const CONTAINER_SIZE = 550;
const MAX_GRID_SIZE = 100;
// A flag set to false so that the default numberOfBoxes is not set
let buttonWasClicked = false;

// Btn for entring a custemized grid size
const btn = document.querySelector("button");
btn.addEventListener("click", getUserInput);

// Getting the user input and calling the draw function if button is clicked
function getUserInput() {
  let input = parseInt(prompt("Enter a Number between 1 and 100:"));
  while (input > MAX_GRID_SIZE || input < 1) {
    input = parseInt(prompt("Please enter a valid number"));
  }
  setClicked();
  numberOfBoxs = input;
  draw();
}
function setClicked() {
  buttonWasClicked = true;
}
// Checking if the customize button was not clicked to create a default 16*16 canvas

function draw() {
  // If btn was clicked, remove the default 16*16 sized canvas, and create a new one with the customized user input grid size
  // Else, just create a canvas with the default 16*16 canvas size
  if (buttonWasClicked) {
    container.remove();
    createContainer();
    createBoxes();
  } else {
    createContainer();
    createBoxes();
  }
  displayGridSize();
}

function createBoxes() {
  for (let i = 0; i < numberOfBoxs * numberOfBoxs; i++) {
    let box = document.createElement("div");
    box.style.width = (CONTAINER_SIZE / numberOfBoxs).toString() + "px";
    box.style.height = (CONTAINER_SIZE / numberOfBoxs).toString() + "px";
    box.classList.add("box");
    box.addEventListener("mouseenter", randomizeColor);
    box.style.opacity = 0.1;
    box.addEventListener("mouseenter", darken);
    container.appendChild(box);
  }
}
function changeColor(e) {
  e.target.style.background = "coral";
}
function randomizeColor(e) {
  e.target.style.background = `rgb(${generateRandColor()},${generateRandColor()},${generateRandColor()})`;
}
function generateRandColor() {
  return Math.floor(Math.random() * 256);
}
function darken(e) {
  let opacity = +e.target.style.opacity; // the (+) converts the current oppacity of the element to become an integer instead of the default string
  opacity += 0.1;
  e.target.style.opacity = opacity;
}
// Creating the canvas
function createContainer() {
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
}

function displayGridSize() {
  const girdSize = document.getElementById("grid-size");
  girdSize.textContent = `${numberOfBoxs} X ${numberOfBoxs}`;
}

draw();
