// Run this code
// Click on the canvas to get the circle to move
// Click again to get it to stop

// Challenge 1: change the size of the canvas
// by modifying numbers assigned to canvasWidth and canvasHeight

canvasWidth = 400;
canvasHeight = 400;

function setup() {
  // Create the canvas
  createCanvas(canvasWidth, canvasHeight);

  // No animation to start
  noLoop();
}

let x = 25;
let y = canvasHeight/2;

function draw() {
  // Clear the background
  background(0);

  // Draw a circle, with color determined by x-position
  // Challenge 2: come up with a different formula to
  // dynamically change circle color
  fill(50, x/3, x/3);
  circle(x, y, 50);

  // Increase the x variable by 5
  // Challenge 3: the circle only moves horizontally, because only
  // x-coordinate gets updated. Modify the code to also update the
  // y-coordinate. When you do this, you will see the circle move
  // through the bottom part of the canvas and disappear.
  x += 5;

  // Reset the circle position after it moves off the right side
  // Challenge 4: modify the code such that if the circle moves off
  // the bottom part of the screen, it comes back into the canvas
  // at the top of the screen.
  if (x > width + 25) {
    x = -25;
  }
  
  // Challenge 5: learn how to define a square
  // from this reference: https://p5js.org/reference/p5/square/
  // Experiment with defining squares with sharp and rouneded corners.
  // Experiment with various colors for your square.
  // Make your square follow the circle, as the circle 
  // moves through the screen.
  
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}
