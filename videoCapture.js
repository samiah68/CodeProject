
let capture
let x = 0

let w
let h

function setup(){
  createCanvas(800, 240)

  capture = createCapture(VIDEO)
  capture.size(320, 240)
  //capture.hide()

}

function draw(){
w = capture.width
h = capture.height

copy(capture, w/2, 0, 1, h, x, 0, 1, h)
x++
if(x >= width){
  x = 0
}
  //image(capture, 0, 0)

}
