var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
weight=random(30,52)
thickness=random(22,82)

  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80)

}

function draw() {
  background("black");


  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
 var  deformation=0.5*weight *speed *speed/22500;
if(deformation>180){
bullet.shapeColor=color(255,0,0)
wall.shapeColor=color("white")
}

   else if(deformation<180&& deformation>100)
{
  bullet.shapeColor=color(230,230,0)
  wall.shapeColor=color("white")
}
    else if(deformation<100)
{

  wall.shapeColor=color("white")
  bullet.shapeColor=color(0,255,0)
}
  }

  drawSprites();
}

function hasCollided(){




}




