

function preload(){
  seaImg = loadImage("sea.png");
  ship1 = loadAnimation("ship-1.png", "ship-1.png","ship-2.png", "ship-1.png");
}


function setup(){
  createCanvas(400, 400);
  sea = createSprite(200, 200);
  sea.addImage(seaImg);
  sea.scale = 0.3
ship = createSprite(130, 160, 30, 30);
  ship.addAnimation("ship1", ship1);
  ship.scale = 0.25
}

function draw() {
  sea.velocityX = -3
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  drawSprites();
}