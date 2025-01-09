// encapsulation of data and functions that operate on the data
// this is the template that defined what it means to be a bubble
class Bubble {
  // this is the object setup
  // what does it mean for the bubble to be formed?
  constructor(x,y,r, colour='white') {
    this.x = x;
    this.y = y;
    this.r = r
    this.colour = colour
  }

  move() {
    this.x = this.x + random(-5, 5)
    this.y = this.y + random(-5, 5)
  }

  show() {
    stroke(0);
    strokeWeight(4);
    fill(this.colour);
    ellipse(this.x, this.y, this.r * 2)
  }
}

// this is an instance of the bubble
// we construct an object
const bubble1 = new Bubble(100,150, 20, 'red');
const bubble2 = new Bubble(200,250, 30, 'yellow');

function setup() {
  createCanvas(700, 1200);
}

// draw executes the lines of code inside its curly brackets 60 times per second 
//until the program is stopped or the noLoop() function is called
function draw() {
  background(135, 206, 235);
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
  //white circles drawn at mouse position

}
