function setup() {
  createCanvas(1024,768);
}

function draw() {
  background(22);
  noFill();

  let t = millis()/1000;
  let diffusion = t*40;
  let alpha = 0.9;

  //blendMode(ADD);
  //noStroke();
  //fill(0,255,150, 2);

  strokeWeight(2);
  stroke(0,255,150, alpha*255/(2*t));

  // Draw the first "1"
    for (let i = 0; i < 400; i++){
        circle(350 - i/12, 250 + i/2, 5 + i/30 + diffusion);
    }
    for (let i = 0; i < 150; i++){
        circle(350 - i/3, 250 + i/2, 5 + diffusion);
    }

    // Draw the "9"
    // Draw an ellipse
    let xorig = 450;
    let yorig = 300;
    let a = 40;
    let b = 60;
    let theta = 10;
    for (let i = 0; i < 300; i++){
            let angle = map(i, 0, 300, 1, 300);
            let x = xorig + a * cos(theta) * cos(angle) - b * sin(theta) * sin(angle);
            let y = yorig + a * sin(theta) * cos(angle) + b * cos(theta) * sin(angle);
            circle(x, y, 10 + diffusion);
    }

    for (let i = 0; i < 150; i++){
        let x = 490 - i/3;
        let y = 310 + i;
        circle(x, y, 10 + diffusion);
    }

    stroke(0,200,255,alpha*255/(2*t));
    // Draw the "6"
    xorig = 550;
    yorig = 420;
    a = 40;
    b = 60;
    theta = 10;
    for (let i = 0; i < 300; i++){
            angle = map(i, 0, 300, 1, 300);
            x = xorig + a * cos(theta) * cos(angle) - b * sin(theta) * sin(angle);
            y = yorig + a * sin(theta) * cos(angle) + b * cos(theta) * sin(angle);
            circle(x, y, 10 + diffusion);
    }

    for (let i = 0; i < 150; i++){
        x = 510 + i/3;
        y = 410 - i;
        circle(x, y, 10 + diffusion);
    }

    // Draw the second "1"
    for (let i = 0; i < 400; i++){
        circle(700 - i/12, 250 + i/2, 5 + i/30 + diffusion);
    }
    for (let i = 0; i < 150; i++){
        circle(700 - i/3, 250 + i/2, 5 + diffusion);
    }
}
