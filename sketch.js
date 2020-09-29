
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  bob1 = new Bob (300,400,20);
  bob2 = new Bob (300,420,20);
  bob3 = new Bob (300,440,20);
  bob4 = new Bob (300,460,20);
  bob5 = new Bob (300,480,20);

  roof = new Roof(350,100,150,20);

  rope1 = new Rope(bob1.bodyA,roof.bodyB,bobRadius*2,0);
  rope2 = new Rope(bob2.bodyA,roof.bodyB,bobRadius*2,0);
  rope3 = new Rope(bob3.bodyA,roof.bodyB,bobRadius*2,0);
  rope4 = new Rope(bob4.bodyA,roof.bodyB,bobRadius*2,0);
  rope5 = new Rope(bob5.bodyA,roof.bodyB,bobRadius*2,0);


	
}


function draw() {
  rectMode(CENTER);
  background(180);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

 
}



