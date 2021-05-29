
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	leftSide = new Distbin(550, 620, 20, 100);
	middle = new Distbin(610,660,100,20);
	rightSide = new Distbin(670,620,20,100);

	ground = new Ground(100,680,1500,20);

	paper = new Paper(150,660,10,10)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  leftSide.display();
  middle.display();
  rightSide.display();
  ground.display();
  paper.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15} )
	 
	}
 
}