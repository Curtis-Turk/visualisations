const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#7FDBFF", "#B10DC9"];

// get the width and height of the browser window
const width = window.innerWidth;
const height = window.innerHeight;

// create a canvas element that fills the entire window
const canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
document.body.appendChild(canvas);

// get the 2D context of the canvas
const context = canvas.getContext("2d");

// create a gradient that spans the entire width of the canvas
const gradient = context.createLinearGradient(0, 0, width, 0);

// add the colors to the gradient
for (let i = 0; i < colors.length; i++) {
  gradient.addColorStop(i / (colors.length - 1), colors[i]);
}

// fill the canvas with the gradient
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

// move the gradient across the page every 100 milliseconds
let position = 0;
setInterval(() => {
  position += 1;
  context.translate(1, 0);
  context.fillRect(0, 0, width, height);
}, 100);
