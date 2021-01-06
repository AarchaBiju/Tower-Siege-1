const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box,box2,box3,stone;
var slingshot;

function setup(){
   createCanvas(500,500);
   engine = Engine.create();
   world = engine.world;

 ground = new Ground(350,250,100,10);
 box = new Box(350,220,20,20);
 box2 = new Box(330,230,20,20);
 box3 = new Box(310,240,20,20);
 stone = new Box(210,200,30,30);
 slingshot = new SlingShot(stone.body,{x:200,y:230});
 

}

function draw(){
  background("yellow");
  Engine.update(engine);
ground.display();
box.display();
box2.display();
box3.display();
stone.display();
slingshot.display();
}

function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();

}