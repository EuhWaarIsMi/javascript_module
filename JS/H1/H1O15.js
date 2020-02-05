var xJOS = 75;
var yJOS = 75;
var schaal = 1;

function setup() {
  var myCanvas = createCanvas(450,450);
  myCanvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  frameRate(20);
  fill('black');
}

function draw() {
xJOS = constrain(xJOS,75,425);
  background('lavender');
  text("x = " + round(xJOS),10,20);
  tekenJos(xJOS,yJOS,schaal);
  translate(0,160);
 tekenJos(xJOS,yJOS,schaal);
translate(0,160);
 tekenJos(xJOS,yJOS,schaal);
 xJOS+=3;

}

function tekenJos(x,y,schaal) {
  push();
  translate(x,y);
  scale(schaal); 
  noStroke();
  fill('indianred');
  ellipse(0,0,50);
  fill('slategray');
  ellipse(-7,-10,17);
  ellipse(7,-10,17);
  fill('white');
  ellipse(-7,-8,7,13);
  ellipse(7,-8,7,13);
  fill('orange');
  ellipse(0,3,17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}