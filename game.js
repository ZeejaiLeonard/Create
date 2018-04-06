window.onload = init;
var game, canvas, context, linebreak;

function init(){
  canvas = document.getElementById("cnv");
  canvas.width = 0;
  canvas.height = 0;
  context = canvas.getContext("2d");
  game = new Game();
  player = new Player();
  var test = document.createElement("input");
  //startButton.onclick("You are in...");
  animate();
}

function checkInput(){
  var input = document.getElementById("bar").value;
  document.getElementById("wrapperDiv").insertBefore(document.createTextNode(input), document.getElementById("wrapperDiv").lastChild);
  document.getElementById("wrapperDiv").insertBefore(document.createElement("br"), document.getElementById("wrapperDiv").lastChild); //line break
  document.getElementById("wrapperDiv").insertAdjacentElement("beforeend", document.getElementById("bar"));
  document.getElementById("wrapperDiv").insertAdjacentElement("beforeend", document.getElementById("enter"));
  //document.getElementById("wrapperDiv").appendChild(document.createTextNode(input));
  //console.log();
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
