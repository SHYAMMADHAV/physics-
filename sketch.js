const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var box1
var ground1
function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world
box1=new box(254,50,10,20)
ground1=new ground(400,360,800,20)
}
function draw() {
  background(255,255,255);
  Engine.update(engine)
  box1.display()
  ground1.display()
  drawSprites();
}