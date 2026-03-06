// Project Title: Animal Forest Shooter
// Your Name(s): savannah roslan & amber hamid
// Date: 02/23/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let forest; //forest background
let isAlive = true;
let isAlive2 = true;
let isAlive3 = true;
let isAlive4 = true;
let isAlive5 = true;
// up variable 
let up;
let up2;
let up3;
let up4;
let up5;
//animal count
let dove;
let doveX = 100;
let doveY = 100;

let humming;
let humX = 300;
let humY = 300;
// eagle variable
let eagle;
let eagleX = 500;
let eagleY = 200;
// crow variable
let crow;
let crowX = 150;
let crowY = 150;


//pigeon variables
let pigeon;
let pigeonX = 200;
let pigeonY = 250;
//lives and score
//let Lives = 3;
let score = 0;

let lives = [3, 3, 3, 3];
let DOVE = 0;



function setup() {
  //This function get run once at the start of the program
  createCanvas(600, 400);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);


  //Set the number of frames per second
  frameRate(15);

}

function mousePressed() {
  // when the mouse is hovered to the bird
  // the dove dies 
  if (mouseX > doveX - 50 && mouseX < doveX + 50) {
    if (mouseY > doveY - 50 && mouseY < doveY + 50) {

      background("black");
      isAlive = false
      score += 1;
    }
  }
  // if the mouse missed the shot 
  // you lose a point
  else {
    lives[0] -= 1;
  }


  //humming bird shooting
  if (mouseX > humX - 50 && mouseX < humX + 50) {
    if (mouseY > humY - 50 && mouseY < humY + 50) {

      background("black");
      isAlive2 = false
      score += 1;
    }
  }
  // if the mouse missed the shot 
  // you lose a point
  else {
    lives[1] -= 1;
  }


  //eagle shooting
  if (mouseX > eagleX - 50 && mouseX < eagleX + 50) {
    if (mouseY > eagleY - 50 && mouseY < eagleY + 50) {

      background("black");
      isAlive3 = false
      score += 1;
    }
  }
  // if the mouse missed the shot 
  //you lose a point
  else {
    lives[2] -= 1;
  }


  //crow shooting
  if (mouseX > crowX - 50 && mouseX < crowX + 50) {
    if (mouseY > crowY - 50 && mouseY < crowY + 50) {

      background("black");
      isAlive4 = false
      score += 1;
    }
  }
  //if the mouse missed the shot
  // you lose a point
  else {
    lives[3] -= 1;
  }
  if (mouseX > pigeonX - 50 && mouseX < pigeonX + 50) {
    if (mouseY > pigeonY - 50 && mouseY < pigeonY + 50) {

      background("black");
      isAlive5 = false
      score += 1;
    }
  }
  // if the mouse missed the shot 
  // you lose a point
  else {
    lives[0] -= 1;
  }

}


function draw() {
  image(forest, width / 2, height / 2);
  image(dove, doveX, doveY, 100, 100);
  image(humming, humX, humY, 100, 100);
  image(eagle, eagleX, eagleY, 100, 100);
  image(crow, crowX, crowY, 100, 100);
  image(pigeon, pigeonX, pigeonY, 100, 100);
  // background('black');
  if (lives <= 0) {
    background('red');
    // draw black game over text 
    fill('black');
    textSize(30);
    text("GAME OVER", 170, 30);
    text("press 'R' to play again", 30, 250);
    // RESET CODE
    if (keyIsDown(82)) { // r keyCode is 82
      lives = 3;
      score = 0;
      doveX = 1;
      doveY = 1;
      humX = 1;
      humY = 1;
      eagleX = 1
      eagleY = 1
      crowX = 1
      crowY = 1


      // X = 200;
    }
  }
  else {

  }
  if (keyIsDown(82)) { // r key is 82
    score = 0;
    lives = 3;

  }
  textSize(30);
  fill(random(255, 0, 255,255));
  text("score:" + score, 30, 20, 50);
  // text("lives:" + lives, 40, 50, 50);
  // text(mouseX + "," + mouseY, 300, 100)



  // the arrow or shooter
  fill(0, 0, 0, 0);
  ellipse(mouseX, mouseY, 30, 30);
  line(mouseX - 20, mouseY, mouseX + 20, mouseY)
  line(mouseX, mouseY + 20, mouseX, mouseY - 20)

  //dove movment
  if (isAlive) {
    doveX += 5;
    doveY -= 7;
  }
  else {
    doveY += 5;
    up = 0;
  }
  // if the dove goes off the screen it respawns back
  if (doveX >= 600 || doveY >= 400) {
    doveY = 400;
    doveX = random(0, 600);
    isAlive = true;

  }


  //humming bird movement
  if (isAlive2) {
    humX -= 5;
    humY -= 7;
  }
  else {
    humY += 7
    up2 = 2;
  }
  // if the huming 
  if (humX < 0 || humY > 450) {
    humY = 400;
    humX = random(0, 400);
    isAlive2 = true;
  }


  //eagle movement
  if (isAlive3) {
    eagleX -= 5;
    eagleY -= 2;
  }
  else {
    eagleY += 3;
    up3 = 2;
  }

  if (eagleX < 0 || eagleY > 450) {
    eagleY = random(0, 400);
    eagleX = random(0, 600);
    isAlive3 = true;
  }
  fill('white');
  // text(eagleX + " " + eagleY + " " + isAlive3, 100, 200);

  //crow movement
  if (isAlive4) {
    crowX -= 5;
    crowY -= 10;
  }
  else {
    crowY += 3;
    up4 = 10;
  }

  if (crowX < 0 || crowY > 450) {
    crowX = random(0, 400);
    crowY = random(0, 600);
    isAlive4 = true;
  }

  if (isAlive5) {
    pigeonX += 5;
    pigeonY -= 10;
  }
  else {
    pigeonY += 3;
    up5 = 10;
  }

  if (pigeonX >= 600 || pigeonY >= 400) {
    pigeonX = random(0, 400);
    pigeonY = random(0, 600);
    isAlive5 = true;
  }
}


// the images of the animals 
function preload() {
  forest = loadImage('forest.png');
  dove = loadImage('dove.webp');
  humming = loadImage('humming.png');
  eagle = loadImage('eagle.png');
  crow = loadImage('crow.png');
  pigeon = loadImage('pigeon.png');
}
