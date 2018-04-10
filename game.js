window.onload = init;
var game, linebreak;

function init(){
  game = new Game();
  player = new Player();
  animate();
}

function pageScroll() {
  window.scrollBy(0, 1);
  scrolldelay = setTimeout(pageScroll, 10);
}

function displayOutput(output){
  document.getElementById("story").appendChild(document.createTextNode(output));
  document.getElementById("story").appendChild(document.createElement("br"));
}

function checkInput(){
  var input = document.getElementById("bar").value;
  displayOutput(input);
}

function animate(){
  requestAnimationFrame(animate);
  pageScroll();
}

function Game(){
  this.map = [];
  this.tileSize = 10;

  this.init = function(){
    for(var i = 0; i < 10; i++){
      this.map.push([]);
      for(var j = 0; j < 10; j++){
        this.map[i].push(j);
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
  switch(event.keyCode){
    case 13:
      checkInput();
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);
