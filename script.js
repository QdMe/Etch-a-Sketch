// Setting a default number of boxes
let numberOfBoxs = 16;

// A flag set to false so that the default numberOfBoxes is not set
let buttonWasClicked = false;

// Btn for entring a custemized grid size
const btn = document.querySelector("button");
btn.addEventListener("click", getUserInput);

// Getting the user input and calling the draw function if button is clicked
function getUserInput() {
  let input = prompt(
    "Enter the number (between 1 and 100) of squares per side"
  );
  while (input > 100 || input < 1) {
    input = prompt("Please enter a valid number");
  }
  numberOfBoxs = input;
  buttonWasClicked = true;
  draw();
}

// Checking if the customize button was not clicked to create a default 16*16 canvas
if (!buttonWasClicked) {
  draw();
}

function draw() {
  // If btn was clicked, remove the default 16*16 sized canvas, and create a new one with the customized user input grid size
  // Else, just create a canvas with the default 16*16 canvas size
  if (buttonWasClicked) {
    container.remove();
    createBoxes();
  } else {
    createBoxes();
  }
}
function createBoxes() {
  createContainer();
  for (let i = 0; i < numberOfBoxs * numberOfBoxs; i++) {
    let box = document.createElement("div");
    box.style.width = (600 / numberOfBoxs).toString() + "px";
    box.style.height = (600 / numberOfBoxs).toString() + "px";
    box.addEventListener("mouseenter", changeColor);
    container.appendChild(box);
  }
}
function changeColor(e) {
  e.target.style.background = "coral";
}

// Creating the canvas
function createContainer() {
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);
}
