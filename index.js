//grabbing elements for document
var canvas = document.querySelector(".game");
var grid = document.querySelector(".grid");
var colorPicker = document.querySelector(".color-picker");

//size of player and grid spacing
const UNIT = 25;
const SIZE = 400;
//setting the size for both canvases
grid.width = SIZE;
grid.height = SIZE;
canvas.width  = SIZE;
canvas.height = SIZE;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(keyName);
  });

//draws the grid on the grid-canvas
drawBoard();


class Player {
    constructor(x=0, y=0, color="#777") {
      this.x = x;
      this.y = y;
      this.color = color;
    }

    drawPlayer() {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,25,25);
    }

    setColor() {
        this.color = colorPicker.value;
    }

    updatePosition() {

    }
  }

var player = new Player();

//when a new color is selected
function getColor() {
    player.setColor();
    player.drawPlayer();
}

//draws the grid on the grid canvas
function drawBoard() {
    var ctx = grid.getContext("2d");
    
    for(var i = 0; i <= grid.width; i += UNIT) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, grid.height);
    }
    for(var i = 0; i <= grid.height; i += UNIT) {
        ctx.moveTo(0, i);
        ctx.lineTo(grid.width, i);

    }
  
    ctx.strokeStyle = "#777";
    ctx.lineWidth = .5;
    ctx.stroke();
}

