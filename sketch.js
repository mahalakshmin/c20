var movingRect,fixedRect;

function setup() {
  createCanvas(1200,600);
  movingRect= createSprite(400, 200, 50, 100);
  fixedRect= createSprite(200, 200, 100, 50);
  movingRect.shapeColor="green";
 fixedRect.shapeColor="green";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.y)
  //console.log(movingRect.x-fixedRect.x);
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
  movingRect.shapeColor="red";
 fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
  drawSprites();
}