let tileCount = 20;
let actStrokeCap = 'ROUND'; // Use strings instead of constants

function setup() {
  createCanvas(windowWidth, windowHeight); // Make canvas fill entire window
  noFill();
}

function draw() {
  background(255, 255, 255, 10); // Transparent white background with slight fade effect

  strokeCap(actStrokeCap); // Set stroke cap based on the current value

  // Loop through grid to draw lines
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = width / tileCount * gridX;
      let posY = height / tileCount * gridY;
      let toggle = int(random(0, 2)); // Random toggle to decide line direction

      if (toggle == 0) {
        strokeWeight(mouseX / 20);
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      } else {
        strokeWeight(mouseY / 20);
        line(posX, posY + width / tileCount, posX + height / tileCount, posY);
      }
    }
  }
}

// Handle key press events to change stroke cap style
function keyReleased() {
  if (key == '1') {
    actStrokeCap = 'ROUND';
    console.log('Stroke Cap: ROUND');
  }
  if (key == '2') {
    actStrokeCap = 'SQUARE';
    console.log('Stroke Cap: SQUARE');
  }
  if (key == '3') {
    actStrokeCap = 'PROJECT';
    console.log('Stroke Cap: PROJECT');
  }
}
