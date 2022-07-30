var player1

function setup()
{
  createCanvas(2000,1000);
  player1 = createSprite(100,100,10,10);
  
}

  
function draw() 
{
  background(30);
  

 drawSprites()
}

function movimiento(){
  if(keyIsDown(UP_ARROW) || keyIsDown('w')){
    player1.positionY -=5;
  }
  if(keyIsDown(DOWN_ARROW) || keyIsDown('s')){
    player1.positionY +=5;
  }
  if(keyIsDown(RIGHT_ARROW) || keyIsDown('d')){
    player1.positionY +=5;
  }
  if(keyIsDown(LEFT_ARROW) || keyIsDown('a')){
    player1.positionY -=5;
  }
}