var mr,fr;

function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 50, 50);
 mr= createSprite(300,100,20,70);
}

function draw() {
  background(255,255,255);  
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  if (mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<fr.width/2+mr.width/2&&mr.y-fr.y<mr.height/2+fr.height/2&&fr.y-mr.y<mr.height/2+fr.height/2){
    fr.shapeColor="red";
    mr.shapeColor="red";
  }
  else{
    fr.shapeColor="green";
    mr.shapeColor="green";
  }
  drawSprites();
}