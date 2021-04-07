const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball,rope,ground,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;

var bg,hero,monster
var b11;

function preload(){
bg = loadImage("bg.png")
hero = loadImage("hero.png")
monster = loadImage("monster.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (100,600,2000,20)
  b1 = new Building(900,100,90,90)
  b2 = new Building(900,100,90,90)
  b3 = new Building(900,100,90,90)
  b4 = new Building(900,100,90,90)
  b5 = new Building(900,100,90,90)
  b6 = new Building(700,100,90,90)
  b7 = new Building(700,100,90,90)
  b8 = new Building(700,100,90,90)
  b9 = new Building(700,100,90,90)
  b10 = new Building(700,100,90,90)
  b11 = new Building(1000,100,90,90)
 //b11.addImage(monster)
 

ball = new Ball(200,200,80,80)

//rope = new Rope(ball.body,{x:500,y:50})
}

function draw() {
  background(bg);
  Engine.update(engine);
  
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
b11.display();

  ball.display();
 // rope.display();
}


function mouseDragged() {
 Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY})
}


