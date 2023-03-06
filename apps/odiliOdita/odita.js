function setup() {
  n = 6;
  offset = 100;
  jitterX = 25;
  jitterY = 75;
  createCanvas(offset*n, offset*n);
  background = [[color(255,197,12,255), color(245,207,18,255), color(248,210,11,255),
                 color(253,184,21,255), color(255,191,16,255), color(247,208,17,255)],
                [color(255,217,0,255), color(255,192,13,255), color(255,197,12,255),
                 color(251,212,7,255), color(255,219,1,255), color(254,193,14,255)],
                [color(255,218,0,255), color(255,196,14,255), color(255,200,9,255),
                 color(255,216,0,255), color(255,219,1,255), color(255,200,11,255)],
                [color(255,200,11,255), color(255,219,1,255), color(255,216,1,255),
                 color(255,199,8,255), color(255,196,14,255), color(255,216,0,255)],
                [color(255,192,16,255), color(255,217,0,255), color(251,212,7,255),
                 color(255,194,15,255), color(253,188,17,255), color(254,215,0,255)],
                [color(239,199,23,255), color(255,188,21,255), color(251,175,27,255),
                 color(245,205,19,255), color(240,198,24,255), color(253,184,18,255)]];
  let pink = color(246,167,190,255);
  let red = color(202,33,40,255);
  let beige = color(248,194,122,255);
  let darkYellow = color(250,167,25,255);
  let black = color(25,15,24,255);
  let orange = color(244,121,53,255);
  let green = color(1,160,80,255);
  let blue = color(0,84,144,255);
  colors = [[pink, red, beige, darkYellow, black, orange],
            [black, orange, green, blue, pink, red],
            [darkYellow, beige, pink, black, green, blue],
            [blue, green, red, orange, beige, darkYellow],
            [red, pink, blue, green, pink, red],
            [orange, black, darkYellow, beige, black, orange]];
}

function draw() {
  noStroke();

  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      fill(background[j][i])
      rect(offset*i, offset*j, offset, offset)
      fill(colors[j][i]);
      if (j % 2 == 0){
        // Odd row
        if (i % 2 == 0){
          // Odd col
          firstPoint = [offset*i, offset*j];
          secondPoint = [offset*i + jitterX, offset*j + jitterY];
          thirdPoint = [offset*i + offset, offset*j + offset];
          fourthPoint = [offset*i + offset, offset*j];
        }
        else {
          // Even col
          firstPoint = [offset*i + jitterX, offset*j + (offset - jitterY)];
          secondPoint = [offset*i, offset*j + offset];
          thirdPoint = [offset*i + offset, offset*j + offset];
          fourthPoint = [offset*i + offset, offset*j];
        }
      }
      else {
        // Even row
        if (i % 2 == 0){
          // Odd col
          firstPoint = [offset*i, offset*j];
          secondPoint = [offset*i, offset*j + offset];
          thirdPoint = [offset*i + (offset - jitterX), offset*j + jitterY];
          fourthPoint = [offset*i + offset, offset*j];
        }
        else {
          // Even col
          firstPoint = [offset*i, offset*j];
          secondPoint = [offset*i, offset*j + offset];
          thirdPoint = [offset*i + offset, offset*j + offset];
          fourthPoint = [offset*i + (offset - jitterX), offset*j + (offset - jitterY)];
        }
      }

      beginShape();
      vertex(firstPoint[0], firstPoint[1]);
      vertex(secondPoint[0], secondPoint[1]);
      vertex(thirdPoint[0], thirdPoint[1]);
      vertex(fourthPoint[0], fourthPoint[1]);
      endShape(CLOSE);
    }
  }
}
