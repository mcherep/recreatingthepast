function setup() {
  createCanvas(2480/4, 3508/4);
}

function draw() {
  background(243,236,220,255);
  let alpha = 0.03;
  angleMode(DEGREES);

  textSize(185);
  textFont('Helvetica');
  textStyle(BOLD);
  select('canvas').elt.style.letterSpacing = "-11px";

  translate(160, 850);
  rotate(-90);
  fill(59,150,204,alpha*255);
  text("BAUHAUS", 0, 0);

  translate(22, 0);
  fill(192,54,105,alpha*255);
  text("BAUHAUS", 0, 0);

  translate(22, 0);
  fill(245,219,63,alpha*255);
  text("BAUHAUS", 0, 0);

  blendMode(DARKEST);

}
