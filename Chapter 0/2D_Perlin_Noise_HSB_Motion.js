let zoff = 0;

function setup() {
  createCanvas(600, 600);
  //createCanvas(1200, 800);
  // Set pixel density to 1 for high quality rendering
  pixelDensity(1);
  // Set color mode to HSB
  colorMode(HSB);
}
  // Split canvas into 3 sections to compare
  // drawNoiseSection(8, 0.6);
  
  function draw() {
    noiseDetail(7, 0.5);
    loadPixels();
    let xoff = 0.1;
    
    for (let x = 0; x < width; x++) {
      let yoff = 0.1;
      for (let y = 0; y < height; y++) {
        // Calculating brightness value for noise
        const bright = map(noise(xoff, yoff,zoff), 0, 1, 0, 255);
        //Calculating hue value for noise
        const hu = map(noise(xoff, yoff, zoff), 0,1,0,360);
        const col = color(hu, 100, bright);
        set(x, y, col);
        yoff += 0.01;
      }
      xoff += 0.01;
    }
    zoff += 0.04
    updatePixels();
  }

// Notes
// 1. noiseDetail(lod, falloff) - lod: number of octaves, falloff: how much detail is lost
// lod - each additional octave adds another layer of detail (computationally expensive)
// falloff - how much each smaller layer matters (the amplitude/strength of each successive layer)
// Simplified example of how layers combine with falloff = 0.5
  // Layer 1 amplitude: 1.0      // Base layer, always full strength
  // Layer 2 amplitude: 0.5      // (1.0 * 0.5)
  // Layer 3 amplitude: 0.25     // (0.5 * 0.5)
  // Layer 4 amplitude: 0.125    // (0.25 * 0.5)

  // // With falloff = 0.9
  // Layer 1 amplitude: 1.0      // Base layer
  // Layer 2 amplitude: 0.9      // (1.0 * 0.9)
  // Layer 3 amplitude: 0.81     // (0.9 * 0.9)
  // Layer 4 amplitude: 0.729    // (0.81 * 0.9)
  
  // each layer is 90% as strong as the previous layer, yet they all have to add up to 1.0; so they end up clamping towards 1. i.e. after mapping more pixels end up closer to white.

// lod = 8, falloff = 0.6 is a nice effect
// 