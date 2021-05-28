var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1image,car2image,car3image,car4image;
var trackimage;
var Xvelocity, Yvelocity;

var cars, car1, car2, car3, car4;
function preload(){
  car1image = loadImage("images/car1.png");
  car2image = loadImage("images/car2.png");
  car3image = loadImage("images/car3.png");
  car4image = loadImage("images/car4.png");
  trackimage = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  Xvelocity = 0;
  Yvelocity = 0;
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
     game.end();
  }
}
