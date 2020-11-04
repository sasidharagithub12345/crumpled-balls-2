
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper
var dustbin,dustbin2,dustbin3
var ground

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
paper = new Paper(100,400,40)
dustbin = new Dustbin(500,650,160,10)
dustbin2 = new Dustbin(420,630,10,80,PI/2)
dustbin3 = new Dustbin(580,630,10,80,PI/2)
ground = new Ground(width/2,height - 10,width,10)


	


	Engine.run(engine);
  
}


function draw() {
 background("white");
 //engine.update(Engine)
 paper.display()
  dustbin.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){

Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})


}
}
