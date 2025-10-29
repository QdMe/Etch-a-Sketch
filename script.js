const container = document.getElementById("container");

// Setting a default number of boxes
let numberOfBoxs = 16;

// A flag set to false so that the default numberOfBoxes is not set
let buttonWasClicked = false;

// Btn for entring a custemized grid size
const btn = document.querySelector("button");
btn.addEventListener("click", getUserInput);

// Getting the user input and calling the draw function
function getUserInput() {
  let input = prompt("");
  numberOfBoxs = input;
  buttonWasClicked = true;
  draw();
}

// Checking if the customize button was not clicked
if (!buttonWasClicked) {
  draw();
}

function draw() {
  console.log(numberOfBoxs);
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
