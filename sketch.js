
const Engine = Matter.Engine;
const World = matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject, groundObject, options
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj=new dustbinObj(1200,650);
	paperObject=new paperObject(200,450,40);
	groundObject=new groundObject(width/2,670,width,20)
	
  
	var render = Render.create({
	element: document.body,
	engine: engine
	options: {
		width: 1200,
		height: 700,
		wireframes: false
	}
	});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinObj.display();
  paperObject.dsiplay();
  groundObject.display();

  
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})};


}

