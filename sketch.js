var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
speed=random(223,321)
weight=random(30,52)
thickness = random(22,83)

bullet=createSprite(50, 200, 20, 10);
bullet.velocityX = speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background("black");  

if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed* speed/thickness*thickness*thickness;
  
  
  if(deformation>10) {
  wall.shapeColor=color("red"); 
}
  
if(deformation<10) {
  wall.shapeColor=color("green"); 
}

  }
  drawSprites();
}





// function hasCollided()
// {
//   bullet.rightEdge = bullet.x + bullet.width;
//   wall.leftEdge = wall.x;
//   if(bullet.rightEdge>=)
// }