//variables for the position and speed of game project
let xPos;
let yPos;


let xSpeed = 2;
let ySpeed = 2;

//game project
let kitten

//bloop sound
let bloop

//game state booleans
let startGameBool = true
let winScreenBool = false
//calculate mouse distance from babykitten
let mouseDist

//score variable
let score = 0

let rotation = 0

function preload(){
  kitten = loadImage('babykitten.jpg')
  bloop = loadSound('Bloop.mp3')
}
function setup(){
  createCanvas(windowWidth, windowHeight)


  xPos = random(15, windowWidth - 15)
  yPos = random(15, windowHeight - 15)

  textAlign(CENTER)
  imageMode(CENTER)

}

function draw(){
  if(startGameBool == true){
    startGame()
  }

  if(winScreenBool == true){
    winScreen()
  }
}

//game screens
function startGame(){
  background(0)

  //score text
  fill(255)
  textSize(40)
  text("Your score is " + score, windowWidth/2, 50)

  //calculate the distance between the mouse and kitten
  mouseDist = dist(mouseX, mouseY, xPos, yPos)

  print(mouseDist)

  image(kitten, xPos, yPos, 30, 30);
  xPos = xPos + xSpeed
  yPos = yPos + ySpeed

  if(xPos >= windowWidth - 15 || xPos <= 0){
    xSpeed = xSpeed * -1;
  }

  if(yPos >= windowHeight - 15 || yPos <= 0){
    ySpeed = ySpeed * -1;
  }

  if(mouseDist <= 15){
    xPos = random(15, windowWidth - 15)
    yPos = random(15, windowHeight - 15)
    score++
    xSpeed = xSpeed * 1.2
    ySpeed = ySpeed * 1.2
    bloop.play()
  }

  if(score >= 5){
    startGameBool = false
    winScreenBool = true
  }
}

function winScreen(){
  background(200, 30, 100)
  fill(255)
  textSize(40)
  text("You Won!!! ", windowWidth/2, 50)
  rotation++

  push()
  translate(windowWidth/2, windowHeight/2)
  rotate(radians(rotation++))
  image(kitten, 0, 0)
  pop()
}

//check to see if the window size was changed
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
