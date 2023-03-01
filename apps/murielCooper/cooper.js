function setup() {
  createCanvas(2480/4, 3508/4);
  startTime = millis();
  textToDraw = "BAUHAUS";
  animationTime = 500; // 1/2 seconds
  animation = true;
}

function draw() {
  background(243,236,220,255);
  let alpha = 0.03;
  angleMode(DEGREES);
  let elapsedTime = millis() - startTime;

  textSize(185);
  textFont('Helvetica');
  textStyle(BOLD);
  select('canvas').elt.style.letterSpacing = "-11px";

  let n_chars = Math.floor(elapsedTime / animationTime);

  // Blue
  translate(160, 850);
  rotate(-90);
  fill(59,150,204,alpha*255);
  if (animation){
    let chars = textToDraw.substring(0, n_chars);
    text(chars, 0, 0);
  }
  else {
    text("BAUHAUS", 0, 0);
  }

  // Red
  translate(22, 0);
  fill(192,54,105,alpha*255);
  if (animation){
    let chars = textToDraw.substring(0,
                                     Math.max(0,
                                              n_chars-textToDraw.length));
    text(chars, 0, 0);
  }
  else {
    text("BAUHAUS", 0, 0);
  }

  // Yellow
  translate(22, 0);
  fill(245,219,63,alpha*255);
  if (animation){
    let chars = textToDraw.substring(0,
                                     Math.max(0,
                                              n_chars-2*textToDraw.length));
    text(chars, 0, 0);
  }
  else {
    text("BAUHAUS", 0, 0);
  }

  blendMode(DARKEST);

}
