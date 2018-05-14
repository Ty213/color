var canvas = document.querySelector(".canvas");
var colorPicker = document.querySelector(".color-picker");
canvas.width  = 400;
canvas.height = 400;

//size of player and grid spacing
const UNIT = 25;
//draws the grid on the canvas
drawBoard();

class Player {
    constructor(x, y, color="#777") {
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

var player = new Player(0,0);

function getColor() {
    player.setColor();
    player.drawPlayer();
}

function drawBoard() {
    var ctx = canvas.getContext("2d");
    
    for(var i = 0; i <= canvas.width; i += UNIT) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }
    for(var i = 0; i <= canvas.height; i += UNIT) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);

    }
  
    ctx.strokeStyle = "#777";
    ctx.lineWidth = .5;
    ctx.stroke();
}

