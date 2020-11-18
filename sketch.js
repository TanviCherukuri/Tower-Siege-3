const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand,engine,world,polygon,slingshot,polygon_img,gameState,score;

function preload() {
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  score = 0;

  polygon = new Polygon(50,200,25,25);

  slingShot = new SlingShot(polygon.body,{x:100,y:200});

  stand = new Ground(400,275,400,10);

  gameState = "OnSling";

  block1 = new Box(330,250,30,40);
  block2 = new Box(360,250,30,40);
  block3 = new Box(390,250,30,40);
  block4 = new Box(420,250,30,40);
  block5 = new Box(450,250,30,40);

  block6 = new Box(360,210,30,40);
  block7 = new Box(390,210,30,40);
  block8 = new Box(420,210,30,40);

  block9 = new Box(390,170,30,40)
}

function keyPressed() {
  if(keyCode === 32) {
    slingShot.attach(polygon.body);
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  text("SCORE :"+score,750,40);

  stand.display();

  polygon.display();

  slingShot.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  console.log(gameState);

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  
}

function mouseDragged() {
  if(gameState == "OnSling") {
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
  }
}

function mouseReleased() {
slingShot.fly();
gameState = "launched";
}
