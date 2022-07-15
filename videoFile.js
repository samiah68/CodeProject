
let canvas

let playButton

let playing = false

let t1000

function setup(){
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.style('z-index', '-1')

  background(0)
  t1000 = createVideo(['T1000Reforming.mp4'])
  t1000.position(200, 300)

  playButton = createButton('Play')
  playButton.position(10, 35)
  playButton.mousePressed(toggleVid)
}

function toggleVid(){
  if(playing){
    t1000.pause()
    playButton.html('play')
  }else{
    t1000.loop()
    playButton('pause')
  }
  playing = !playing

}


function draw(){

//triggers every three seconds because frameCount is 60
//60 gos into 180 3 times
  if(frameCount % 180 == 0){
  t1000.time(random(t1000.duration()))
}
  print(t1000.duration())
}
