var wall1, wall2, wall3, wall4, innerwall1, innerwall2, innerwall3, innerwall4, striker, coin, edges
function setup() {
  wall1 = createSprite(200, 50, 250, 10);
  wall2 = createSprite(200, 350, 250, 10);
  wall3 = createSprite(350, 200, 10, 250);
  wall4 = createSprite(50, 200, 10, 250);

  innerwall1 = createSprite(200, 65, 250, 3);
  innerwall2 = createSprite(200, 335, 250, 3);
  innerwall3 = createSprite(335, 200, 3, 250);
  innerwall4 = createSprite(65, 200, 3, 250);

  
  coin = createSprite(200, 200, 10, 10);
  striker = createSprite(200, 300, 20, 20);
  edges =  createEdgeSprites();
}

function draw() {
  background(220);
      if (keyDown("UP_ARROW")) {
      striker.velocityX = 0;
      striker.velocityY = -5;
    }
    if (keyDown("DOWN_ARROW")) {
      striker.velocityX = 0;
      striker.velocityY = 5;
    }
    if (keyDown("LEFT_ARROW")) {
      striker.velocityX = -5;
      striker.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      striker.velocityX = 5;
      striker.velocityY = 0;
    }
    
    coin.bounceOff(wall1);
    coin.bounceOff(wall2);
    coin.bounceOff(wall3);
    coin.bounceOff(wall4);
    
    striker.bounceOff(wall1);
    striker.bounceOff(wall2);
    striker.bounceOff(wall3);
    striker.bounceOff(wall4);
    
    striker.bounce(coin);
    
    
    if ((coin.x < 70 && coin.y < 70) || (coin.x > 332 && coin.y < 68) || 
        (coin.x < 69 && coin.y > 328) || (coin.x > 327 && coin.y > 330) ){
          text("YOU WIN!!!",162,200)
    }
    
   
    if(striker.bounce(edges)){
      striker.x = 200;
      striker.y = 334;
    }
    drawSprites();

}