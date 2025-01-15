let walker;

function setup() {
  createCanvas(800,1000);
  background(255);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();
}

function acceptrejectValue() {
  while (true) {
    let r1 = random(1);
    let probability = r1;
    let r2 = random(1);
    if (r2 < probability) {
      return r1;
    }
  }
}

function acceptrejectValueSquared() {
  while (true) {
    let r1 = random(1);
    let probability = r1 * r1;
    let r2 = random(1);
    if (r2 < probability) {
      return r1
    }
  }
}

class Walker {
  constructor() {
    this.x = width/2;
    this.y  = height/2;
  }
  
  step() {
    let step = 10;
    let customStep = step * acceptrejectValueSquared();
    // any-directional movement within a circle of 1 unit
    // Gaussian random walk
    //let xstep = randomGaussian(0,1);
    //let xstepLeanRight = xstep < 0 ? xstep + random(0,0.2) : xstep;
    //let ystep = randomGaussian(0,1);
    //let ystepLeanRight = ystep > 0 ? ystep + random(0,0.2) : ystep;
    let stepx = random(-customStep, customStep);
    let stepy = random(-customStep, customStep);

    this.x += stepx;
    this.y += stepy;
  }

  show() {
    stroke('orange');
    strokeWeight(1);
    fill(127);
    //point(this.x, this.y);
    ellipse(this.x, this.y, 10)
  }
}