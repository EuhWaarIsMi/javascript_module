var aantal = 29;
var Nbloemen = 6;

function setup() {
  var myCanvas = createCanvas(1000,200);
  myCanvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = " + aantal,10,20);    
  translate(100,height/2);

  for (var n = 0; n < Nbloemen; n++) {
      tekenBloem(0.4, aantal)
      translate(160, 0);
  }

  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }   
}

function tekenBloem(s, aantal) {
  push();
    scale(s);
  
    //rode bladeren
  fill(178, 34, 34,0.7);

  for (var n = 0;n < aantal;n++) {
    ellipse(0,0,400,50);
    rotate(360 / aantal);
  }

  //gele kleur
  fill(255, 195, 0,0.5);

  for (var n = 0;n < aantal;n++) {
    rect(0,0,75,75)
    rotate(360 / aantal);
  }
  pop();
}

