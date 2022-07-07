function preload() {

}

function setup() {
  createCanvas(800, 800);
   background(0, 251, 255);
}


function draw() {
  smooth();
  stroke(10, 143, 245);

  line(0, 0, 800, 800)

  fill(174, 0, 255)
  ellipse(mouseX, mouseY, 100, 150)

  fill(255, 0, 170)
  rect(400, 400, 200, 50)

  fill(51, 255, 0)
  triangle(200, 600, 300, 65)

  fill(255,255, 0)
  square(240, 240, 105)
}
