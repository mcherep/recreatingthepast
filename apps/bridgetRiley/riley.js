function setup() {
  rows = 40;
  cols = 10;
  xOffset = 80;
  yOffset = 20;
  createCanvas(xOffset*cols, yOffset*rows);
}

function getThirdPoint(i, j){
  // Piecewise function
  firstLine = 8;
  secondLine = firstLine + 4 + 3*i;
  if (j <= (firstLine + i)){
    amt = ((firstLine + i) - j) / (firstLine + i);
  }
  else if (j <= secondLine){
    amt = 1 - (secondLine - j) / (secondLine - firstLine);
  }
  else {
    amt = (rows - (j+1)) / (rows - (secondLine + 1));
  }
  // The last triangle doesn't follow the pattern in the original piece
  // but I like it more when it does, so I'm not fixing it.
  return [xOffset*i + lerp(0, xOffset, amt), yOffset*j + yOffset];
}

function draw() {
  background(244,241,235);

  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      fill(244,241,235);
      rect(xOffset*i, yOffset*j, xOffset, yOffset);
      fill(0);
      firstPoint = [xOffset*i, yOffset*j];
      secondPoint = [xOffset*i + xOffset, yOffset*j];
      thirdPoint = getThirdPoint(i, j);
      triangle(firstPoint[0], firstPoint[1], secondPoint[0], secondPoint[1], thirdPoint[0], thirdPoint[1]);
    }
  }
}
