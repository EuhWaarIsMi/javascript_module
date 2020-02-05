var p = 100;

function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  frameRate(50);

}

function draw() {
  background('snow');
  tekenRechthoek(p);  
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  fill(255,0,0,1);
  strokeWeight(1);
  stroke('green');
  beginShape();
  vertex(p, 0);
  vertex(width,height-p);
  vertex(width-p, height);
  vertex(0, p);
  endShape(CLOSE);
  pop();
}

function tekenVierkant(p) {
  push();
  fill(255,0,0,1);
  strokeWeight(1);
  stroke('red');
  beginShape();
  vertex(p, 0);
  vertex(width,p);
  vertex(width-p, height);
  vertex(0, height-p);
  endShape(CLOSE);
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0,p,width,p);
  line(0,height - p,width,height - p);
  pop();
}