function setup() {
  createCanvas(800, 800);

  loadPixels();
  let xoff = 0.0;
  for (let x = 0; x < width; x++) { // the first loop for the x-axis
    let yoff = 0.0;
    for (let y = 0; y < height; y++) { // the second loop for the y-axis
      let index = (x + y * width) * 4; // the index of the pixel, accounting for 4 pixels per pixel
      // A random brightness!
      const bright = map(noise(xoff, yoff), 0, 1, 0, 255); // use xoff and yoff for noise().
      // Set the red, green, and blue values.
      set(x, y, floor(bright));

      yoff += 0.01;
    }
    xoff += 0.01;
  }
  updatePixels();
}

function draw() {}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// function setup() {
//   createCanvas(640, 800);

//   // Tell p5 we will work with pixels
//   loadPixels();
//   for (let x = 0; x < width; x++) {
//     for (let y = 0; y < height; y++) {
//       let index = (x + y * width) * 4;
//       // A random brightness!
//       let bright = random(255);
//       // Set the red, green, and blue values.
//       pixels[index] = bright;
//       pixels[index + 1] = bright;
//       pixels[index + 2] = bright;
//       // Set the alpha value to 255 (no transparency).
//       pixels[index + 3] = 255;
//     }
//   }
//   updatePixels();
// }

// function draw() {}
