const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,dustbin_side1,dustbin_side2,dustbin_side3,paper1

function preload()
{
	dustbinimage = loadImage('dustbin.png');
}

function setup() {
	
	
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	dustbin_side1 = new DustBin(1100,495,150,15);
	dustbin_side2 = new DustBin(1185,420,15,170);
	dustbin_side3 = new DustBin(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	
	ground1.display();
	dustbin_side3.display();
	dustbin_side2.display();
	dustbin_side1.display();
	image(dustbinimage,1000,330,200,200);
	paper1.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



