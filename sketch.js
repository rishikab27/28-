
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, ground
var mango1, mango2, mango3, mango4, mango5, mango6

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,400,500,500);
	ground= new Ground(400,600,800,50)
	mango1= new Mango(600,400,10,10)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
 
 mango1.display();
 
}



