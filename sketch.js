var iss, spacecraft;
var hasDocked = false
var bgImg, issImg;
var spacecraftImg1, spacecraftImg2, spacecraftImg3, spacecraftImg4;

function preload(){
 bgImg = loadImage("images/spacebg.jpg");

 issImg = loadImage("images/iss.png");

 spacecraftImg1 = loadImage("images/spacecraft1.png");
 spacecraftImg2 = loadImage("images/spacecraft2.png");
 spacecraftImg3 = loadImage("images/spacecraft3.png");
 spacecraftImg4 = loadImage("images/spacecraft4.png");
}
function setup() {
  createCanvas(800,400);

 iss = createSprite(330, 130);
 iss.addImage(issImg);
 iss.scale = 0.5;

 spacecraft = createSprite(285, 240);
 spacecraft.addImage(spacecraftImg1);
 spacecraft.scale = 0.15;
}
function draw() {
  background(bgImg); 
  
  if(!hasDocked){
    spacecraft.addImage(spacecraftImg1);
    spacecraft.x = spacecraft.x + Math.random(-1, +1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftImg4);
      spacecraft.x = spacecraft.x + 2;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftImg3)
      spacecraft.x = spacecraft.x - 2;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftImg2)
    }
  }

  if(spacecraft.y <= (iss.y+30) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }

  drawSprites();
}