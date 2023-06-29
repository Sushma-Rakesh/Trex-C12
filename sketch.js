var ground;
var trex ,trex_running;
var invisibleGround
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1=loadAnimation("ground2.png");
}

function setup(){
  createCanvas(2000,200)
  
  //create a trex sprite
  trex=createSprite(50,170,20,0);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

 ground=createSprite(200,180,2000,20);
 ground.addAnimation("ground",ground1);
 ground.x=ground.width/2
 
  invisibleGround=createSprite(200,195,2000,20)
  invisibleGround.visible=false
}

function draw(){
  background("white")

ground.velocityX=-5
console.log(ground.x)
if(ground.x<75){
  ground.x=ground.width/2
}

if(keyDown("SPACE") && trex.y>=160){
  trex.velocityY=-10;
}
trex.velocityY+=0.5;
trex.collide(invisibleGround);

drawSprites();
}
