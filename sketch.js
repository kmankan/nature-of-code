function setup() {
  createCanvas(600, 400);
}

// draw executes the lines of code inside its curly brackets 60 times per second 
//until the program is stopped or the noLoop() function is called
function draw() {
  background(135, 206, 235);
  if (mouseIsPressed === true) {
    fill('red');
  } else {
    fill(255);
  }
  //white circles drawn at mouse position
  circle(mouseX, mouseY, 100);
}
