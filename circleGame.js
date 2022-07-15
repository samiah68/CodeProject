let bg;

let bloop
let customFont;

let redCircleX = []
let redCircleY = []
let redSpeedX = []
let redSpeedY = []

let greenCircleX = []
let greenCircleY = []
let greenSpeedX = []
let greenSpeedY = []


let blueCircleX = []
let blueCircleY = []
let blueSpeedX = []
let blueSpeedY = []

let startGameBool = true
let winScreenBool = false
let lostScreenBool = false
let score = 0;



function preload(){
  bg = loadImage('20477459.jpg')
  bloop = loadSound('Bloop.mp3')
  customFont = loadFont('slkscr.ttf')
}


function setup(){
  createCanvas(windowWidth, windowHeight)
textFont(customFont)
  for(let i = 0; i < 6; i++){
    redCircleY.push(random(height));
    redCircleX.push(random(width));
     redSpeedX.push(random(2,4))
     redSpeedY.push( random(1,8))
  }

  for(let i = 0; i < 20; i++){
    greenCircleY.push(random(height));
    greenCircleX.push(random(width));
     greenSpeedX.push(random(1,6))
     greenSpeedY.push( random(1,3))
  }

  for(let i = 0; i < 30; i++){
    blueCircleY.push(random(height));
    blueCircleX.push(random(width));
     blueSpeedX.push(random(1,3))
     blueSpeedY.push( random(1,3))
  }


  textAlign(CENTER)
}

function draw(){


if(startGameBool == true){
  startGame()
}

if(winScreenBool == true){
  winScreen()
}
if(lostScreenBool == true){
  lostScreen()
}

}

function startGame(){
    background(bg)
  fill(0)
  textSize(40)
  text("Score = " + score, windowWidth/2, 50)


  for(let i = 0; i < redCircleY.length; i++){
  //  let circleX = width * i / circleY.length;
  fill(255, 0, 0)
    circle(redCircleX[i], redCircleY[i], 25);

    redCircleY[i] = redCircleY[i] + redSpeedY[i];
    redCircleX[i] = redCircleX[i] + redSpeedX[i];

   //ellipse(circleX[i], circleY[i],25,25 )

   if(redCircleX[i] >= windowWidth - 15 || redCircleX[i] <= 0){
     redSpeedX[i] = redSpeedX[i] * -1;
   }

   if(redCircleY[i] >= windowHeight - 15 || redCircleY[i] <= 0){
     redSpeedY[i] = redSpeedY[i] * -1;
   }
   if(dist(mouseX, mouseY, redCircleX[i], redCircleY[i])<12){
     lostScreenBool = true
     startGameBool = false
     bloop.play()
   }
}

for(let i = 0; i < greenCircleY.length; i++){
// let circleX = width * i / circleY.length
fill(3, 252, 44)
  circle(greenCircleX[i], greenCircleY[i], 25);

  greenCircleY[i] = greenCircleY[i] + greenSpeedY[i];
  greenCircleX[i] = greenCircleX[i] + greenSpeedX[i];

  //ellipse(circleX[i], circleY[i],25,25 )

 if(greenCircleX[i] >= windowWidth - 15 || greenCircleX[i] <= 0){
   greenSpeedX[i] = greenSpeedX[i] * -1;
 }

 if(greenCircleY[i] >= windowHeight - 15 || greenCircleY[i] <= 0){
   greenSpeedY[i] = greenSpeedY[i] * -1;
 }
 if(dist(mouseX, mouseY, greenCircleX[i], greenCircleY[i])<12){
   greenCircleX.splice(i,1)
    greenCircleY.splice(i,1)
    greenSpeedX.splice(i,1)
    greenSpeedY.splice(i,1)
    score++
    bloop.play()
 }

}

for(let i = 0; i < blueCircleY.length; i++){
// let circleX = width * i / circleY.length
fill(0, 47, 255)
  circle(blueCircleX[i], blueCircleY[i], 25);

  blueCircleY[i] = blueCircleY[i] + blueSpeedY[i];
  blueCircleX[i] = blueCircleX[i] + blueSpeedX[i];

  //ellipse(circleX[i], circleY[i],25,25 )

 if(blueCircleX[i] >= windowWidth - 15 || blueCircleX[i] <= 0){
   blueSpeedX[i] = blueSpeedX[i] * -1;
 }

 if(blueCircleY[i] >= windowHeight - 15 || blueCircleY[i] <= 0){
   blueSpeedY[i] = blueSpeedY[i] * -1;
 }
 if(dist(mouseX, mouseY, blueCircleX[i], blueCircleY[i])<12){
   blueCircleX.splice(i,1)
    blueCircleY.splice(i,1)
    blueSpeedX.splice(i,1)
    blueSpeedY.splice(i,1)
    score++
    bloop.play()
 }
}
if(score == 100){
  winScreenBool = true
  startGameBool = false
}
}


function winScreen(){
  background(bg)
  fill(0)
  textSize(40)
  text("You Won!!! ", windowWidth/2, 50)
}

function lostScreen(){
  background(bg)
  fill(0)
  textSize(40)
  text("GAME OVER!", windowWidth/2, 50)
  text("Refresh to play again!", windowWidth/2, 100)

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
