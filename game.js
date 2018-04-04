window.onload = init;
var game, canvas, context;

function init(){
  canvas = document.getElementById("cnv");
  canvas.width = 1000;
  canvas.height = 500;
  context = canvas.getContext("2d");
  game = new Game();
  player = new Player();
  startButton = new Button(document.createElement("button"), "Start");
  startButton.onclick("You are in...");
  animate();
}

function Button(button, text){
  this.button = button;
  this.id = "button";
  this.t = document.createTextNode(text);
  this.button.appendChild(this.t);
  document.body.appendChild(this.button);
  this.button.onclick = function(message){
    console.log(message);
  }
}

function animate(){
  requestAnimationFrame(animate);
  game.update();
  player.update();
}

function Game(){
  this.map = [];
  this.tileSize = 10;

  this.init = function(){
    for(var i = 0; i < 10; i++){
      this.map.push([]);
      for(var j = 0; j < 10; j++){
        this.map[i].push(new Tile(new JSVector(i, j)));
      }
    }
  }

  this.update = function(){

  }

}

function Player(){
  this.location = "null";
  this.position = 0;

  this.update = function(){

  }
}

window.addEventListener("keypress", function(event){
  if (event.defaultPrevented) {
    return;
  }
  switch(event.key){
    case "ArrowDown":
      player.position = (-1);
      break;
    case "ArrowUp":
      player.position = (1);
      break;
    default:
      player.position = (0);
      return;
  }
  event.preventDefault();
}, true);
