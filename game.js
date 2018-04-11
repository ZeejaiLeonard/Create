window.onload = init;
var game;
var rooms = ["hall", "dungeon", "waterfall"];


function init(){
  game = new Game();
  player = new Player();
  animate();
}

function checkInput(){
  var input = document.getElementById("bar").value;
  if (input === "inventory") {
    displayOutput(player.inventory[0]);
  } else {
    displayOutput(input);
  }
}

function animate(){
  requestAnimationFrame(animate);
  pageScroll();
}

function Game(){
  this.map = [];
  this.tileSize = 10;
  //this.playerPosition = new JSVector(0, 0);

  this.init = function(){
    for (var i = 0; i < 10; i++) {
      this.map.push([]);
      for (var j = 0; j < 10; j++) {
        this.map[i].push(new Room(rooms[generateRandomInt(rooms.length)]));
      }
    }
    //organize
  }
}

function Room(name){
  this.name = name;
  this.contents = [];
  this.scene = "";
}

function Object(){
  this.health = 0;
}

function Player(){
  this.position = new JSVector(0, 0);
  this.inventory = [];

  this.update = function(locationVector){
    this.position = locationVector;
  }
}

function generateRandomInt(max){
  return Math.floor(Math.random() * max);
}

function pageScroll() {
  window.scrollBy(0, 1);
  scrolldelay = setTimeout(pageScroll, 10);
}

function displayOutput(output){
  document.getElementById("story").appendChild(document.createTextNode(output));
  document.getElementById("story").appendChild(document.createElement("br"));
}

window.addEventListener("keypress", function(event){
  switch(event.keyCode){
    case 13:
      checkInput();
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);
