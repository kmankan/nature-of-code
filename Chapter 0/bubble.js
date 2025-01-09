// encapsulation of data and functions that operate on the data
// this is the template that defined what it means to be a bubble
class Bubble {
  // this is the object setup
  // what does it mean for the bubble to be formed?
  constructor() {
    this.x = 100;
    this.y = 100;
  }
}

// this is an instance of the bubble
// we construct an object
const bubble = new Bubble();
print(bubble.x)
