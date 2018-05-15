//grabbing elements for document
var canvas = document.querySelector(".game");
var gridCanvas = document.querySelector(".grid");
var colorPicker = document.querySelector(".color-picker");

//size of player and grid spacing
const UNIT = 25;
const SIZE = 400;
//setting the size for both canvases
gridCanvas.width = SIZE;
gridCanvas.height = SIZE;
canvas.width  = SIZE;
canvas.height = SIZE;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName === "ArrowUp") {
        player.setDirection("UP");
    } else if(keyName === "ArrowDown") {
        player.setDirection("DOWN");
    } else if(keyName === "ArrowRight") {
        player.setDirection("RIGHT");
    } else if(keyName === "ArrowLeft") {
        player.setDirection("LEFT");
    }
  });

  //holds info for each cell of grid.
  var cells = [];

  var cell = {n: 1, position: [0,0], color: "#777"};
  cells.push(cell);



class Grid {
    constructor(cells) {
        this.cells = cells;
      }

    drawBoard() {
        var ctx = gridCanvas.getContext("2d");
        
        for(var i = 0; i <= gridCanvas.width; i += UNIT) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, gridCanvas.height);
        }
        for(var i = 0; i <= gridCanvas.height; i += UNIT) {
            ctx.moveTo(0, i);
            ctx.lineTo(gridCanvas.width, i);
    
        }
      
        ctx.strokeStyle = "#777";
        ctx.lineWidth = .5;
        ctx.stroke();
    }

    colorBoard() {
        console.log(this.cells);
    }

}

var grid = new Grid(cells);
grid.drawBoard();
grid.colorBoard();


class Player {
    constructor(x=0, y=0, color="#777") {
      this.x = x;
      this.y = y;
      this.color = color;
      this.direction = null; // UP,DOWN,LEFT,RIGHT
    }

    drawPlayer() {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,UNIT,UNIT);
        ctx.beginPath();
        ctx.rect(this.x,this.y,UNIT,UNIT);
        ctx.lineWidth="2";
        ctx.strokeStyle="black";
        ctx.stroke();
    }

    setColor() {
        this.color = colorPicker.value;
    }

    setDirection(direction) {
        this.direction = direction; // UP,DOWN,LEFT,RIGHT
        console.log("Set this direction:", this.direction);
        this.updatePosition();
    }

    updatePosition() {
        if(this.direction === "UP") {
            if(this.y - UNIT >= 0) {
                this.y -= UNIT;
            }
            
        } else if(this.direction === "DOWN") {
            if(this.y + UNIT < canvas.height) {
                this.y += UNIT;
            }
            
        } else if(this.direction === "RIGHT") {
            if(this.x + UNIT < canvas.width) {
                this.x += UNIT;
            }
            
        } else if(this.direction === "LEFT") {
            if(this.x - UNIT >= 0) {
                this.x -= UNIT;
            }
            
        }
        this.drawPlayer();
    }
  }

var player = new Player();

//when a new color is selected
function getColor() {
    player.setColor();
    player.drawPlayer();
}

