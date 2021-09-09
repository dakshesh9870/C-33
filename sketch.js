const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine , world ;

var bg ;
var snow = [] ;
var snow2 , snowwimg ; 

function preload(){
  bg = loadImage("snow3.jpg");
  snowwimg= loadImage("snow4.webp");
}

function setup() {
  createCanvas(1400,750);
 
  engine = Engine.create()
  world = engine.world
  
  //snow= new snow1(200,200,40);
}

function draw() {
  background(bg);
  if(frameCount%60 === 0){
  snow.push(new snow1(random(0,800),10,10))
  }
  
  for (var i= 0; i<snow.length; i=i+1){
    snow[i].display()
  }
  //snow.display();
  drawSprites();
  fall();
} 

function fall (){
 if(frameCount%14 === 0 ){
  snow2= createSprite(400,10,40,40);
  snow2.addImage(snowwimg)
  snow2.scale= 0.2;
  snow2.x = Math.round(random(100,1400));
  snow2.velocityY= 3;
 }          
}