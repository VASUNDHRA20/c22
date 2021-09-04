const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic: true,
    
  }
  ground=Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground);
 // console.log(ground);
 var ball_options={
  restitution:1
 }
  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  var pos=ground.position;
  Engine.update(engine);
  background(0); 
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20) ;
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}