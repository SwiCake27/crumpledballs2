
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dropS1,trash,street;

function preload(){
trash=loadImage("paper.jpg")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dropS1=new Trashcan(800,400,200,100);

	
ball=new Trash(200,300,30)
street=new Ground(400,450,1300,20)
	Engine.run(engine);
  
}



function draw() {

  background("blue");
ball.display();
 street.display();

  dropS1.display();


}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-75})
		} 
}

