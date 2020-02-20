var aantalLagen = 100;
var breedte;
var hoogte;

function setup() {
  var myCanvas = createCanvas(900,450);
  breedte = width/aantalLagen;
  hoogte = breedte/2
  background('silver');
  fill('lightslategray');
  stroke('darkslategray');  
  myCanvas.parent('processing');
  noLoop();
}

function draw() {
  translate(0,height - hoogte);
  tekenPiramide(aantalLagen);
}

function tekenPiramide(n) {
  if (n>0) {
    for (var nr = 0;nr < n;nr++) {
      rect(nr*breedte,0,breedte,hoogte);
    }
    translate(breedte / 2,-hoogte);
    n--;
    tekenPiramide(n);
  }
}
