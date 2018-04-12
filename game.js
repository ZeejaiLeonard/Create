window.onload = init;
var game = new Game();
var player = new Player();
var rooms = ["hall", "dungeon", "waterfall"];
var objects = ["shiny sword", "rusty dagger", "mysterious potion", "broken crystal", "flashlight"];


function init(){
  displayOutput("You are in a room.");
  game.init();
  player.init();
  animate();
}

function checkInput(){
  var input = document.getElementById("bar").value;
  displayOutput(">>>" + input);
  if (input === "inventory") {
    displayOutput(player.inventory[0]);
  } else if (input === "help"){
    displayOutput("HELP");
    displayOutput("   north, south, east, west, up, down: directions");
    displayOutput("   inventory: list of items in inventory");
    displayOutput("   drop _: removes specified item from inventory");
    displayOutput("   keep _: adds specified item to inventory");
    displayOutput("   look: see what is around you");
    displayOutput("   move _: moves specified item");
    displayOutput("   open _: opens specified item");
  } else {
    displayOutput("*huffs*");
    displayOutput("Speak up, child.");
  }
  displayOutput(" ");
  document.getElementById("bar").value = "";
}

function animate(){
  requestAnimationFrame(animate);
  pageScroll();
}

//Game
function Game(){
  this.init = function(){
    this.map = [];
    for (var i = 0; i < 4; i++) {
      this.map.push([]);
      for (var j = 0; j < 3; j++) {
        this.map[i].push(new Room(rooms[generateRandomInt(rooms.length)]));
        //this.map[i].push([]);
        // for(var k = 0; k < 2; k++){
        //   this.map[i][j].push(new Room(rooms[generateRandomInt(rooms.length)]));
        // }
      }
    }
    //organize
  }
}

//Room
function Room(name){
  this.name = name;
  this.contents = [];
  this.scene = "";
}

//Object
function Object(){
  this.name = "";
  this.health = 0;
}

//Player
function Player(){
  this.init = function(){
    this.position = new JSVector(0, 0);
    this.inventory = [];
  }
  this.update = function(locationVector){
    this.position = locationVector;
  }
}

//Functionality

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
