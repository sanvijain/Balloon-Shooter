//Creating the variable
var redballoon,arrow,greenballoon,blueballoon,pinkballoon,background0,bow;
var balloonred,arrowImage,balloongreen,balloonblue,balloonpink,background1,bowSprite;
var redGroup,blueGroup,greenGroup,pinkGroup,arrowGroup;
var score

function preload(){
 //Loading image 
  background0=loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
 redballoon=loadImage("red_balloon0.png") ;
 greenballoon=loadImage("green_balloon0.png");
 blueballoon=loadImage("blue_balloon0.png");
 pinkballoon=loadImage("pink_balloon0.png");
 bow=loadImage("bow0.png");
}

function setup() {
 //creating canvas 
  createCanvas(windowWidth, windowHeight);
  
  //creatig background
  background1=createSprite(0,0,600,600);
  background1.addImage("background0",background0);
  background1.scale=2.5;
  background1.x=background1.width/2;
  //creating bow
    bowSprite=createSprite(500,200,25,25);
  bowSprite.addImage("bow0",bow);
  bowSprite.scale=1;
  
  redGroup=new Group();
  blueGroup=new Group();
  greenGroup=new Group();
  pinkGroup=new Group();
  arrowGroup=new Group();
  
score=0;
}
function draw() {
  //Giving velocity to background
  background1.velocityX=-3;
  //To show the continuous motion
  if(background1.x<0){
    background1.x=background1.width/2;
  }
  //To move the bow to its y position
  bowSprite.y=World.mouseY 
  //Move the arrow
  if (keyDown("space")) {
  createArrow();
  }
  
  var select_balloon=Math.round(random(1,4));
  console.log(select_balloon)
  
  if(World.frameCount % 80===0){
    if(select_balloon==1){
      BalloonR();
    }
    else if(select_balloon==2){
      BalloonG();
    }
    else if(select_balloon==3){
      BalloonB();
    }
    else{
      BalloonP();
    }
    }
  
  if (arrowGroup.isTouching(redGroup)) {
  redGroup.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}

if (arrowGroup.isTouching(greenGroup)) {
  greenGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}

if (arrowGroup.isTouching(blueGroup)) {
  blueGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}

if (arrowGroup.isTouching(pinkGroup)) {
  pinkGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+4;
}

  
  //Display
  drawSprites();
  
  textSize(20);
  fill("black");
  text("Score: "+score,500,50);
}

function BalloonR() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redballoon);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
  redGroup.add(red);
}
function BalloonG(){
  var green=createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(greenballoon);
  green.velocityX=3;
  green.lifetime=150;
  green.scale=0.1;
  greenGroup.add(green);
}
function BalloonB(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blueballoon);
  blue.velocityX=3;
  blue.lifetime=150;
  blue.scale=0.1;
  blueGroup.add(blue);
}
function BalloonP(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pinkballoon);
  pink.velocityX=3;
  pink.lifetime=150;
  pink.scale=1;
  pinkGroup.add(pink);
}
function createArrow(){
   arrow= createSprite(360, 200, 5, 10);
  arrow.addImage(arrowImage);
  arrow.y=bowSprite.y;  
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime=100;
  arrowGroup.add(arrow);
  return arrow;
}



