var ball1;
var ball2;
function setup() {
  createCanvas(400,400);
  ball1=createSprite(200,200,40,40);
  ball2=createSprite(250,200,40,40);
}

function draw() 
{
  background(30);
  ball1.velocityX=-3;
  if(keyDown(LEFT_ARROW)){
    ball2.x=ball2.x-3;
  }
drawSprites()
}




