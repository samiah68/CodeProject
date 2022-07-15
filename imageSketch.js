
let ballX = 600
let ballY = 700
let ballDia = 50

let kitten

function preload(){
  kitten = loadImage('babykitten.jpg')
//  baby = loadImage('dancingbaby2.gif')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
   background(200, 100, 100)
   print(windowWidth)
   imageMode(CENTER);
}

function draw() {
noCursor()
  if(mouseX > windowWidth/2) {
    background(200, 20, 100)
  }else if(mouseY > windowHeight/2){
    background(50, 120, 200)
  }else{
    background(200, 180, 100)
  }

  ellipse(ballX, ballY, ballDia, ballDia)

  image(furby, mouseX, mouseY, 50, 50)

  if(mouseIsPressed == true){
    ballX = windowWidth/2
    ballY = windowHeight/2
    ballDia = 200
    rect(200, 500, 400, 150)
  }else{
    ballX = 600
    ballY = 700
    ballDia = 50
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
