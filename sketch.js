var mouth1, mouth2, mouth3, mouth4;
var eyes1, eyes2, eyes3, eyes4;

var eyesOffsetWidth;

var show = 0;
var mouthChoice, eyeChoice;

var heartbeat
var playTime, loadTime;
var amp, level;



function preload() {
  mouth1 = loadImage("/SCARY EYES/mouth1.png");
  mouth2 = loadImage("/SCARY EYES/mouth2.png");
  mouth3 = loadImage("/SCARY EYES/mouth3.png");
  mouth4 = loadImage("/SCARY EYES/mouth4.png");

  eyes1 = loadImage("/SCARY EYES/1.jpeg");
  eyes2 = loadImage("/SCARY EYES/2.jpeg");
  eyes3 = loadImage("/SCARY EYES/3.jpeg");
  eyes4 = loadImage("/SCARY EYES/4.jpg");

  heartbeat = loadSound("heartbeatloop.wav");
}

function mouseReleased() {
  mouthChoice = int(random(4));
  eyeChoice = int(random(4));
  show = 1;

  if (heartbeat.isLoaded()) {
    loadTime = millis();
    print (loadTime);
    heartbeat.play();
}
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
  eyesOffsetWidth = (width / 2);

}

function draw() {
  background(0);

  if (show == 1) {
    creature(100, 50, mouthChoice, eyeChoice);
  }

}





function creature(size, head, mouth, eye) {
  print(mouth);


  noStroke();
  circle(width / 2, height / 2, size);
  circle(width / 2, (height / 2) - 50, head);



  if (eye == 0) {
    image(eyes1, eyesOffsetWidth, (height / 2) - 150);
  }

  if (eye == 1) {
    image(eyes2, eyesOffsetWidth, (height / 2) - 150);
  }

  if (eye == 2) {
    image(eyes3, eyesOffsetWidth, (height / 2) - 150);
  }

  if (eye == 3) {
    image(eyes4, eyesOffsetWidth, (height / 2) - 150);
  }


  if (mouth == 0) {
    image(mouth1, (width / 2), (height / 2) + 20);
  }

  if (mouth == 1) {
    image(mouth2, (width / 2), (height / 2) + 20);
  }

  if (mouth == 2) {
    image(mouth3, (width / 2), (height / 2) + 20);
  }

  if (mouth == 3) {
    image(mouth4, (width / 2), (height / 2) + 20);
  }

}