var diameter = 300;
var x1 = 0;
var x2 = 450;

function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);
  fill(255,0,0,0.5);
  ellipse(width / 2,height / 2,diameter);
  fill(0,255,0,0.5);
  ellipse(width / 2,x1,diameter);
  fill(0,0,255,0.5);
  ellipse(width / 2,x2,diameter);
  x2-=1;
  x1+=1;
}