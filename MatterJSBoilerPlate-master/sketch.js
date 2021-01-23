
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

	


	dustbinPosition=width/2-100
 	dustbinY=609;
	
	dustbinLeft=createSprite(dustbinPosition, dustbinY, 20,100)
	dustbinLeft.shapeColor=color(255,0,0);

	dustbinLeftBody = Bodies.rectangle(dustbinPosition+20, dustbinY, 20,100 , {isStatic:true} );
	 World.add(world, dustbinLeftBody);

	 dustbinBase=createSprite(dustbinPosition+100, dustbinY+40, 200,20)
	 dustbinBase.shapeColor=color(255,0,0);

	 dustbinBottomBody = Bodies.rectangle(dustbinPosition+100, dustbinY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, dustbinBottomBody);

	 dustbinRight=createSprite(dustbinPosition+200 , dustbinY, 20,100);
	 dustbinRight.shapeColor=color(255,0,0);

	 dustbinRightBody = Bodies.rectangle(dustbinPosition+200-20 , dustbinY, 20,100 , {isStatic:true} );
 	World.add(world, dustbinRightBody);

	 groundSprite=createSprite(width/2, height-35, width,10);
	 groundSprite.shapeColor=color(255)
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

     


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



