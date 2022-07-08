let lineBrushBool = false
let squareBrushBool = false

function setup() {
  createCanvas(800, 800);

rectMode(CENTER)

  background(0, 255, 238);

}

function draw() {

  fill(255, 255, 0);
  ellipse(350, 255, 300, 300);

  fill(0)
  ellipse(290, 200, 40, 40)

  fill(0)
  ellipse(400, 200, 40, 40)

  fill(0)
  arc(340, 300, 80, 80, 0, PI + QUARTER_PI, OPEN)

  if(lineBrushBool == true){
    lineBrush()
  }

  if(squareBrushBool == true){
    squareBrush()
  }
}


//custom line brush function
function lineBrush(){
  if(mouseIsPressed){
    strokeWeight(5)
    stroke(random(255), random(255), random(255))
    //fill(random(255), random(255), random(255))
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
}

//custom square brush
function squareBrush(){
  if(mouseIsPressed){
    stroke(random(255), random(255), random(255))
    fill(random(255), random(255), random(255))
    rect(mouseX, mouseY, 50, 50)
  }
}



function keyTyped(){
  if(key === 'q'){
    lineBrushBool = true;
    squareBrushBool = false;
  }
  if(key === 'a'){
    lineBrushBool = false;
    squareBrushBool = true;
  }
  if(key === 's') {
    save('drawing.jpg')
  }
}
