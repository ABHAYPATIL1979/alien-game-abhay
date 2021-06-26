var PLAY=1;
var END=0;
var gameState=1;
var fruitGroup;
var enemyGroup;
var score;

function preload(){
 swordImage = loadImage("sword.png")
  fruit1=loadImage("fruit1.png")
   fruit2=loadImage("fruit2.png")
   fruit3=loadImage("fruit3.png")
   fruit4=loadImage("fruit4.png")
  monsterImage=loadAnimation("alien1.png","alien2.png")
  gameoverImage=loadImage("gameover.png")
  slashSound=loadSound("knifeSwooshSound.mp3")
gameoverSound=loadSound("gameover.mp3")
}

function setup(){
createCanvas(windowWidth,windowHeight)
  
 fruitGroup = createGroup();
enemyGroup = createGroup(); 

   
  
  sword=createSprite(230,200,20,20)
sword.addImage(swordImage)
sword.scale=0.7

}



score =0;
function draw(){
background("lightblue");
  

  if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  score=score+2;
 slashSound.play();
  }
  
 
   if(enemyGroup.isTouching(sword)){
     gameoverSound.play();
     gameState=END;
   
   }
  
  if(gameState===PLAY){
   sword.y=World.mouseY
   sword.x=World.mouseX  
   fruits(); 
   enemy(); 
  }
  
 if(gameState===END){
   fruitGroup.destroyEach();
   enemyGroup.destroyEach();
   fruitGroup.setVelocityEach();
   enemyGroup.setVelocityEach();
   sword.addImage(gameoverImage)
   sword.scale=1
   sword.x = width/2;
   sword.y = height/2;
 }
 

 
if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  
}  
  
  
  
  
  
  

 text("score:"+score,width-20,height-20)   
drawSprites();
 
}

function fruits(){
  if(frameCount%40===0){
   fruit=createSprite(400,200,20,20) 
    fruit.scale=0.2
   r=Math.round(random(1,4))
    if(r===1){
      fruit.addImage(fruit1)
    }else if(r===2){
      fruit.addImage(fruit2)
    }else if(r===3){
      fruit.addImage(fruit3)
    }else if(r===4){
      fruit.addImage(fruit4)
    }
    fruit.y=Math.round(random(length,width));
    fruit.velocityX=-(7+(score/10));
    fruitGroup.add(fruit)
  }
  }

function enemy(){
  if(frameCount%100===0){
    monster=createSprite(400,200,20,20)
    monster.addAnimation("moving",monsterImage)
    monster.y=Math.round(random(length,width));
    monster.velocityX=-(8+(score/10));
    monster.lifetime=50
    enemyGroup.add(monster);   
  
  }
}


