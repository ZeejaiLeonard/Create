window.onload = init;
var game = new Game();
var player = new Player();
var rooms = ["hall", "dungeon", "waterfall", "kitchen", "dining area", "primitive bathroom"];
var objects = ["shiny sword", "rusty dagger", "mysterious potion", "broken crystal", "flashlight", "key", "battery-operated lantern"];
var features = ["trap door", "window", "refrigerator", "portal", "rickety staircase"];





function init() {
  displayOutput("You are in a room.");
  game.init();
  player.init();
  animate();
}





function checkInput(){
  var input = document.getElementById("bar").value;
  displayOutput(">>>" + input);
  if (input === "inventory") {
    player.inventory.forEach(function(element){
      displayOutput(element);
    });
    if (!player.inventory.length) {
      displayOutput("You don't have any material possessions.");
    }
  } else if (input === "help") {
    displayOutput("*disappointed sigh*");
    displayOutput("Seriously? I hope you know life doesn't work like this.");
    displayOutput("HELP");
    displayOutput("   north, south, east, west, up, down: directions");
    displayOutput("   inventory: list of items in inventory");
    displayOutput("   drop _: removes specified item from inventory");
    displayOutput("   keep _: adds specified item to inventory");
    displayOutput("   look: see what is around you");
    displayOutput("   move _: moves specified item");
    displayOutput("   open _: opens specified item");
  } else {
    displayOutput("*exasperated sigh*");
    displayOutput("Speak UP, child.");
  }
  displayOutput(" ");
  document.getElementById("bar").value = "";
}

//KEEP: check player inventory capacity


function animate() {
  requestAnimationFrame(animate);
  pageScroll();
}


//Game
function Game() {
  this.init = function() {
    this.map = [];
    for (var i = 0; i < 4; i++) {
      this.map.push([]);
      for (var j = 0; j < 3; j++) {
        //this.map[i].push(new Room(rooms[generateRandomInt(rooms.length)]));
        this.map[i].push([]);
        for(var k = 0; k < 2; k++) {
          var room = new Room();
          room.init(rooms[generateRandomInt(rooms.length)]);
          var object = new Object();
          object.init(objects[generateRandomInt(objects.length)]);
          room.contents.push(object);
          this.map[i][j].push(room);
        }
      }
    }
    //organize
  }
}



//Room
function Room() {
  this.init = function(name) {
    this.name = name;
    this.contents = [];
    this.scene = "";
  }
}





//Object
function Object() {
  this.init = function(name) {
    this.name = name;
    this.weapon = false;
    this.light = false;
    this.open = false;
    this.magic = false;
    //"shiny sword", "rusty dagger", "mysterious potion", "broken crystal", "flashlight", "key"
    if ( (name === "shiny sword") || (name === "rusty dagger") ) {
      this.weapon = true;
    } else if ( name === "key" ) {
      this.open = true;
    } else if ( (name === "flashlight") || (name === "battery-operated lantern") ) {
      this.light = true;
    } else if ( (name === "mysterious potion") || (name === "broken crystal") ) {
      this.magic = true;
    }
  }
}




//Player
function Player() {
  this.init = function() {
    this.position = new JSVector(0, 0, 0);
    this.inventory = [];
  }
  this.update = function(x, y, z) {
    this.position = new JSVector(x, y, z);
  }
  // this.checkInventory(){
  //   if(this.inventory.length === 4){
  //
  //   }
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
