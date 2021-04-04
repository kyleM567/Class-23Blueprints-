const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  ground =  new Ground(200,390,400,20);
box1 = new Box(220,100,70,100);
box2 = new Box(200,150,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
  ground.display() ;
  box1.display();
  box2.display();
}