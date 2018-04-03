window.onload = init;
var game, canvas, context;

function init(){
  canvas = document.getElementById("cnv");
  canvas.width = 1000;
  canvas.height = 500;
  context = canvas.getContext("2d");
  game = new Game();
  player = new Player();
  animate();
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
    this.render();
  }

  this.render = function(){

  }
}

function Player(){
  this.location = new JSVector(0, 490);
  this.colour = "rgba(0, 255, 0, 1)";
  this.radius = 10;
  this.position = 0;

  this.update = function(){

    this.render();
  }

  this.render = function(){
    context.fillStyle = this.colour;
    context.fillRect(this.location.x, this.location.y, this.radius, this.radius);
  }
}

function Tile(location){
  this.cellLocation = location;
  this.init = function(){
    this.location = new JSVector(this.cellLocation.x * game.tileSize, this.cellLocation.y * game.cellLocation);
    this.tileType = "grass";
    this.seen = false;

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
