let t = 0;
let walker;

function setup() {
  createCanvas(1000, 1000);
  background(250);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    // map x and y position from noise
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    // move forward through time
    this.tx += 0.007;
    this.ty += 0.007;
  }

  show() {
    strokeWeight(3);
    //fill(127);
    stroke('orange');
    //point(this.x, this.y);
    circle(this.x, this.y, 48);
  }
}

function drawCircle() {
  let n = noise(t);
  let x = map(n, 0, 1, 0, width);
  //Use map() to customize the range of Perlin noise.
  ellipse(x, height/2, 16, 16);
  t += 0.01;
}

function drawGraph() {
  background(250)
  let n = noise(t);
  //print(n);
  let xoff = t;
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < width; i++) {
    let y = noise(xoff) * height;
    xoff += 0.005;
    vertex(i, y);
  }
  endShape();
  t += 0.1;
}
