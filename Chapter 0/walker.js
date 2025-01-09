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

function mouseClicked() {
  console.log('mouseX', mouseX)
  console.log('mouseY', mouseY)
}

class Walker {
  constructor() {
    this.x = width/2;
    this.y  = height/2;
  }

  // Objects have methods.
  show() {
    stroke(0);
    strokeWeight(1)
    point(this.x, this.y);
  }
  
  step() {
    const choice = floor(random(4));
    // move the walker forward, backward or either side depending on random roll
    // switch (choice) {
    //   case 0:
    //     this.x++;
    //     break;
    //   case 1:
    //     this.x--;
    //     break;
    //   case 2:
    //     this.y++;
    //     break;
    //   case 3:
    //     this.y--;
    //     break;
    // }

    // grid-based 9-option movement
    // let xstep = floor(random(3)) - 1;
    // let ystep = floor(random(3)) - 1;

    // any-directional movement within a circle of 1 unit
    
    let xstep = random(-1,1.1);
    //let xstepLeanRight = xstep < 0 ? xstep + random(0,0.2) : xstep;
    let ystep = random(-1,1.1);
    //let ystepLeanRight = ystep > 0 ? ystep + random(0,0.2) : ystep;

    const r = random(1);

    if (r < 0.5) {
      const dx = mouseX > this.x ? random(0,1) : random(-1,0)
      const dy = mouseY > this.y ? random(0,1) : random(-1,0)
      this.x += dx;
      this.y += dy;
    } else {
      const xstep = random(-1,1);
      const ystep = random(-1,1);
      this.x += xstep;
      this.y += ystep;
    }
  }
}