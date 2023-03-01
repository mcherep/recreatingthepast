function setup() {
  createCanvas(2480/4, 3508/4);
  startTime = millis();
  textToDraw = "BAUHAUS";
  animationTime = 100; // milliseconds
  animation = true;
  totalTime = animationTime*textToDraw.length*3 + 200; // milliseconds
  yAnimationRed = 10;
  yAnimationYellow = 5;
}

function draw() {
  clear();
  background(243,236,220,255);
  let alpha = 0.8;
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
    text(textToDraw, 0, 0);
  }

  // Red
  translate(22, 0);
  fill(192,54,105,alpha*255);
  if (animation){
    let chars = textToDraw.substring(0,
                                     Math.max(0,
                                              n_chars-textToDraw.length));
    let yPos = 150;
    if (elapsedTime > totalTime){
      text(chars,0,Math.max(0,yPos-(elapsedTime-totalTime)/yAnimationRed));
    }
    else {
      text(chars, 0, yPos);
    }
  }
  else {
    text(textToDraw, 0, 0);
  }

  // Yellow
  translate(22, 0);
  fill(245,219,63,alpha*255);
  if (animation){
    let chars = textToDraw.substring(0,
                                     Math.max(0,
                                              n_chars-2*textToDraw.length));
    let yPos = 300;
    if (elapsedTime > totalTime){
      text(chars,0,Math.max(0,yPos-(elapsedTime-totalTime)/yAnimationYellow));
    }
    else {
      text(chars, 0, yPos);
    }
  }
  else {
    text(textToDraw, 0, 0);
  }

  blendMode(DARKEST);

}
