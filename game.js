window.onload = init;
var game;

function init(){
  game = new Game();
}

function Game(){
  this.canvas = document.getElementById("cnv");
  this.canvas.width = 1000;
  this.canvas.height = 400;
  this.context = this.canvas.getContext("2d");
  this.canvas.addEventListener("keypress", );
}

function Player(){

}

game.canvas.addEventListener("keypress", function(event){
  if (event.defaultPrevented) {
    return;
  }
  switch(event.key){
    case "ArrowDown":
      snake.direction(0, snake.radius);
      break;
    case "ArrowUp":
      snake.direction(0, -snake.radius);
      break;
    case "ArrowLeft":
      snake.direction(-snake.radius, 0);
      break;
    case "ArrowRight":
      snake.direction(snake.radius, 0);
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);

}
