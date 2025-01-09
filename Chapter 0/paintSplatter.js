// Consider a simulation of paint splatter drawn as a collection of colored dots. 
// Most of the paint clusters around a central position, but some dots splatter out toward the edges. 
// Can you use a normal distribution of random numbers to generate the positions of the dots? Can you also use a normal distribution of random numbers to generate a color palette? Try creating a slider to adjust the standard deviation.
let slider;

function setup() {
  createCanvas(1000,770);
  background(240);
  slider = createSlider(30, 120, 60)
  slider.position(width/2 - 50, (height - 50))
}

function draw() {
  let spread = slider.value();
  let x = randomGaussian(width/2, spread)
  let y = randomGaussian(height/2, spread)
  noStroke();
  fill(255,0, 0, 80);
  circle(x, y, 16);

  // clear the area behind the text
  fill(240)
  rect(width/2, height - 25, 50, 20);

  // draw the text
  fill(0);    // Black color for text
  textSize(16);
  text(slider.value(), width/2, height - 10);
}

