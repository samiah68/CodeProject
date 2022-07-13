let bg;
let circleX = []
let circleY = []

let startGameBool = true
let winScreenBool = false

let score = 0;

function preload(){
  bg = loadImage('20477459.jpg')
}


function setup(){
  createCanvas(windowWidth, windowHeight)

  for(let i = 0; i < 100; i++){
    circleY.push(random(height));
    circleX.push(random(width));


  }



  textAlign(CENTER)
}

function draw(){
  background(bg)

  for(let i = 0; i < circleY.length; i++){
     let circleX = width * i / circleY.length;
     circle(circleX, circleY[i], 25);

     circleY[i]++;

    ellipse(circleX[i], circleY[i],25,25 )

}

if(startGameBool == true){
  startGame()
}

if(winScreenBool == true){
  winScreen()
}

}

function startGame(){
  fill(255)
  textSize(40)
  text("Your score is " + score, windowWidth/2, 50)

}


function winScreen(){
  background(200, 30, 100)
  fill(255)
  textSize(40)
  text("You Won!!! ", windowWidth/2, 50)
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
