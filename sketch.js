const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 385, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = new Ground(400,395,800,10);
}

function draw() {
    background("lightblue");
    rectMode(CENTER);
	ground.display();	
	dustbin.display();
    paper.display();

  }


function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 16,
      y: -15
    });
  }
}
