var gameState = play;
var gameState = end;
var play = 1;
var end = 0;
function preload(){
  treasureImage = loadImage("treasure_chest_PNG31.png");
  laserImage = loadImage("laser 2.png");
  laser2Image = loadImage("laser.png");
  youImage = loadImage("you.png");
  onImage = loadImage("on.png");
  offImage = loadImage("off.png");
  bulbImage = loadImage("bulb.png");
  bulb2Image = loadImage("bulboff.png");
  taponImage = loadImage("tapon.png");
  tapoffImage = loadImage("tapoff.png");
  treeImage = loadImage("tree.png");
  groundImage = loadImage("ground.png");
  bucketImage = loadImage("bucket.png");
  waterbucketImage = loadImage("water bucket.png");
  carImage = loadImage("car.png");
  cycleImage = loadImage("cycle.png");
  restartImage = loadImage("restart.png");
  clickImage = loadImage("starttext.png");
  textImage = loadImage("text10.png");
  wasdImage = loadImage("wasd.png");
  plasticImage = loadImage("plasticbag.png");
  frameImage = loadImage("frame.png");
  juteBagImage = loadImage("jutebag.png");
  gbBinsImage = loadImage("gbBins.png");
  backImage = loadImage("background.png");
  binImage = loadImage("bin.png");
  bellSound = loadSound("bell.mp3");
  switchSound = loadSound("switch.mp3");
  faucetSound = loadSound("faucet.mp3");
  waterSound = loadSound("watersound.mp3");
  winSound = loadSound("win.mp3");
}

function setup() {
  createCanvas(900,600);

  back = createSprite(450,300);
  back.addImage(backImage);
  
  wall1 = createSprite(230,90,350,10);
  wall2 = createSprite(391,40,10,100);
  wall3 = createSprite(124,258,10,150);
  wall4 = createSprite(201,328,150,10);
  wall5 = createSprite(271,268,10,120);
  wall6 = createSprite(100,450,200,10);
  wall7 = createSprite(200,450,10,150);
  wall8 = createSprite(381,522,10,600);
  wall9 = createSprite(450,425,140,10);
  wall10 = createSprite(57,371,10,80);
  wall11 = createSprite(11,371,80,10);
  wall12 = createSprite(477,227,200,10);
  wall13 = createSprite(803,301,200,10);
  wall14 = createSprite(699,231,10,150);
  wall15 = createSprite(682,90,450,10);

  laser1 = createSprite(750,560);
  laser1.addImage(laserImage);
  laser1.scale = 0.3
  
  laser2 = createSprite(720,560);
  laser2.addImage(laserImage);
  laser2.scale = 0.3

  laser3 = createSprite(689,560);
  laser3.addImage(laserImage);
  laser3.scale = 0.3

  laser4 = createSprite(660,560);
  laser4.addImage(laserImage);
  laser4.scale = 0.3

  laser5 = createSprite(635,560);
  laser5.addImage(laserImage);
  laser5.scale = 0.3

  laser6 = createSprite(782,560);
  laser6.addImage(laserImage);
  laser6.scale = 0.3


  wallLast = createSprite(829,485,440,10);
  
  treasure = createSprite(840,550);
  treasure.addImage(treasureImage);
  treasure.scale = 0.03
  

  bulb = createSprite(356,19);
  bulb.addImage(bulbImage);
  bulb.scale = 0.2
  bulboff = createSprite(356,19);
  bulboff.addImage(bulb2Image);
  bulboff.scale = 0.2

  tapon = createSprite(235,250);
  tapon.addImage(taponImage);
  tapon.scale = 0.2
  tapoff = createSprite(235,250);
  tapoff.addImage(tapoffImage);
  tapoff.scale = 0.2

  plastic = createSprite(484,398);
  plastic.addImage(plasticImage);
  plastic.scale = 0.1;

  bag = createSprite(484,398);
  bag.addImage(juteBagImage);
  bag.scale = 0.2;

  bin = createSprite(70,552);
  bin.addImage(binImage);
  bin.scale = 0.07;

  bgBins = createSprite(70,552);
  bgBins.addImage(gbBinsImage);
  bgBins. scale = 0.2;


  off = createSprite(300,19);
  off.addImage(offImage);
  off.scale = 0.03
  on = createSprite(300,19);
  on.addImage(onImage);
  on.scale = 0.03

  off2 = createSprite(150,297);
  off2.addImage(offImage);
  off2.scale = 0.03
  on2 = createSprite(150,297);
  on2.addImage(onImage);
  on2.scale = 0.03

  off3 = createSprite(740,214);
  off3.addImage(offImage);
  off3.scale = 0.03
  on3 = createSprite(740,214);
  on3.addImage(onImage);
  on3.scale = 0.03
  
  off4 = createSprite(611,44);
  off4.addImage(offImage);
  off4.scale = 0.03
  on4 = createSprite(611,44);
  on4.addImage(onImage);
  on4.scale = 0.03

  off5 = createSprite(410,380);
  off5.addImage(offImage);
  off5.scale = 0.03
  on5 = createSprite(410,380);
  on5.addImage(onImage);
  on5.scale = 0.03

  off6 = createSprite(317,540);
  off6.addImage(offImage);
  off6.scale = 0.03
  on6= createSprite(317,540);
  on6.addImage(onImage);
  on6.scale = 0.03

  frame = createSprite(450,300);
  frame.addImage(frameImage);
  frame.sclae = 1;

  ground = createSprite(802,275);
  ground.addImage(groundImage);
  ground.scale = 0.2;

  tree = createSprite(802,275);
  tree.addImage(treeImage);
  tree.scale = 0.2;

  bucket = createSprite(848,214);
  bucket.addImage(bucketImage);
  bucket.scale = 0.2;
  waterbucket = createSprite(848,214);
  waterbucket.addImage(waterbucketImage);
  waterbucket.scale = 0.2;
  waterbucket.visible = false;
  tree.visible = false;

  car = createSprite(711,44);
  car.addImage(carImage);
  car.scale = 0.06;
 
  cycle = createSprite(711,44);
  cycle.addImage(cycleImage);
  cycle.scale = 0.3;
  cycle.visible = false;

  you = createSprite(27,48);
  you.addImage(youImage);
  you.scale = 0.4

  text1 = createSprite(450,300);
  text1.addImage(textImage);
  text1.scale= 1;
  text1.visible = false;

  wasd = createSprite(450,300);
  wasd.addImage(wasdImage);
  wasd.scale= 1;
  wasd.visible = true;
  

  restart = createSprite(180,289);
  restart.addImage(restartImage);
  restart.scale = 0.5;

  click = createSprite(200,200);
  click.addImage(clickImage);
  click.scale = 0.8;
  
  you.setCollider("rectangle",0,0,30,130);
 // you.debug = true;

  bag.visible = false;
  bgBins.visible = false
}


function draw() {
  background("pink");
  text(mouseY,50,10);
  text(mouseX,10,10);

  wasd.visible = true;
  text1.visible = false;
  click.visible = false;

  if(keyDown("space")){
    wasd.visible = false;
    gameState = play;
  }else if(keyDown("space")||gameState == end){
    text1.visible = true;
  }


if (gameState === play){
  click.visible = false;
  text1.visible = false;
  wasd.visible = false;

  if(keyDown("d")||keyDown(RIGHT_ARROW)){
    you.x = you.x+4;
  }
  if(keyDown("a")||keyDown(LEFT_ARROW)){
    you.x = you.x-4;
  }
  if(keyDown("w")||keyDown(UP_ARROW)){
    you.y = you.y-4;
  }
  if(keyDown("s")||keyDown(DOWN_ARROW)){
    you.y = you.y+4;
  }
  if(keyDown)

  if(on.visible == false){
    fill("black");
    text("YOU SHOULD TURN OFF LIGHTS NOT IN USE",125,64);
  }
  if(on2.visible == false){
    fill("black");
    text("TURN OFF TAPS NOT IN USE",122,172);
  }
  if(on3.visible == false){
    fill("black");
    text("GROW PLANTS AND TREES",698,140);
  }
  if(on4.visible == false){
    fill("black");
    text("USE A CYCLE FOR SHORT DISTANCES",456,78);
  }
  if(on5.visible == false){
    fill("black");
    text("USE A JUTE BAG INSTEAD OF PLASTIC",390,274);
  }
  if(on6.visible == false){
    fill("black");
    text("USE DIFFERENT COLOURED BINS FOR DIFFERENT TYPES OF WASTE",14,474);
  }
  if(you.collide(off)){
    on.visible = false;
    laser5.velocityY = 20;
    bulb.visible = false;
    switchSound.play();
    off.visible =true;
  }
   
  if(you.collide(off2)){
    on2.visible = false;
    laser4.velocityY = 20;
    tapon.visible = false;
    switchSound.play();
    faucetSound.play();
    off2.visible = true;
  }
   
  if(you.collide(off3)){
    on3.visible = false;
    laser3.velocityY = 20;
    waterbucket.visible = true;
    bucket.visible = false;
    tree.visible = true;
    off3.visible = true;
    switchSound.play();
    waterSound.play();
  }
   
  if(you.collide(off4)){
    on4.visible = false;
    laser2.velocityY = 20;
    cycle.visible = true;
    car.visible = false;
    switchSound.play();
    bellSound.play();
    off4.visible = true;
  }


  if(you.collide(off5)){
    plastic.visible = false;
    bag.visible = true;
    laser1.velocityY = 20;
    switchSound.play();
    on5.visible = false;
  }

  if(you.collide(off6)){
    bin.visible = false;
    bgBins.visible = true;
    laser6.velocityY = 20;
    switchSound.play();
    on6.visible = false;
  }

  if(you.collide(treasure)){
  text1.visible = true;
  gameState = end;
  wasd,visible = false;
  winSound.play();
  you.x = 19;
  
  }
}

if (gameState == end){
    text1.visible = true;
    wasd.visible = false;
    you.x = 19;
  }
if(gameState == end && keyDown("r")) {
    reset();
}

restart.visible = false;

if (you.x < 1){
 you.x = 1;
}
if (you.x > 899){
  you.x = 899;
 }
 if (you.y < 1){
  you.y = 1;
 }
 if (you.y > 599){
  you.y = 599;
 }

  
  you.visible = true;
 // you.collide(wall4);
  you.collide(wallLast);
  you.collide(wall1);
  you.collide(wall2);
  you.collide(wall3);
  you.collide(wall4);
  you.collide(wall5);
  you.collide(wall6);
  you.collide(wall7);
  you.collide(wall8);
  you.collide(wall9);
  you.collide(wall10);
  you.collide(wall11);
  you.collide(wall12);
  you.collide(wall13);
  you.collide(wall14);
  you.collide(wall15);
  you.collide(laser2);
  you.collide(laser3);
  you.collide(laser4);
  you.collide(laser1);
  you.collide(laser5);

  drawSprites();
}
function reset(){
  gameState = play;
  laser1.velocityY = 0;
  laser2.velocityY = 0;
  laser3.velocityY = 0;
  laser4.velocityY = 0;
  laser5.velocityY = 0;
  laser6.velocityY = 0; 
  on3.visible = true;
  on4.visible = true;
  on2.visible = true;
  on.visible = true;
  on5.visible = true;
  plastic.visible = true;
  car.visible = true;
  bag.visible = false;
  bucket.visible = true;
  waterbucket.visible = false;
  on6.visible = true;
  tree.visible = false;
  tapon.visible = true;
  text1.visible = false;
  bulb.visible = true;
  cycle.visible = false;
  you.x = 27;
  you.y = 48;
  laser1.x = 750;
  laser1.y = 560;
  laser2.x = 720;
  laser2.y = 560;
  laser3.x = 689;
  laser3.y = 560;
  laser4.x = 660;
  laser4.y = 560;
  laser5.x = 635;
  laser5.y = 560;
  laser6.x = 782;
  laser6.y = 560;
}