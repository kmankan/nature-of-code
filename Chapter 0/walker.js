let walker;

function setup() {
  createCanvas(640,1040);
  walker = new Walker();
  background(135, 206, 23);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width/2;
    this.y  = height/2;
  }

  // Objects have methods.
  show() {
    stroke(0);
    point(this.x, this.y);
  }
  
  step() {
    const choice = floor(random(4));
    // move the walker forward, backward or either side depending on random roll
    switch (choice) {
      case 0:
        this.x++;
        break;
      case 1:
        this.x--;
        break;
      case 2:
        this.y++;
        break;
      case 3:
        this.y--;
        break;
    }
  }
}