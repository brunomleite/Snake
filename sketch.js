var scl = 20;
var gState = 1;
var vel = 0;
var reverser = false;
var ajuda = true;
var snake;
var food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  food = new Food();
  food.location();
}

function draw() {
  background(100);
  frameRate(10 + vel);
  
  if (gState === 1) {
  	snake.update();
    snake.wall();
  	snake.death();
  	snake.show();

  	if (snake.eat(food)) {
      if ((0 < food.type) && (food.type <= 10)) {
        snake.mult *= 2;
      } else if ((10 < food.type) && (food.type <= 20)) {
        vel++;
      } else if ((20 < food.type) && (food.type <= 30)) {
        if (reverser === false) {
        	reverser = true;  
        } else if (reverser === true) {
          reverser = false;
        }
      } else if (food.type === 0) {
        vel = 0;
        reverser = false;
        snake.mult *= 5;
      }
	  	food.location();
  	}
    food.show();
    
    ajuda = true;
  } else if (gState === 2) {
  	textSize(100);
		fill(255, 0, 0);
		text('Game Over', 40, 190);
		textSize(30);
    fill(0);
  	text('Highscore : ' + snake.score, 20, 500);
    text('Press Enter to Try Again', 20, 550);
  }
}

function resetGame() {
    console.clear();
    direction = "RIGHT_ARROW";
    food.location();
    vel = 0;
    reverser = false;
    snake.total = 0;
    snake.score = 0;
    snake.mult = 10;
    snake.tail = [];
    snake.x = 0;
    snake.y = 0;
    snake.dir(1, 0);
    gState = 1;
}

var direction = "";
function keyPressed(){
  if (reverser === false) {
		if ((keyCode === UP_ARROW) && (direction != "DOWN_ARROW") && (ajuda = true)){
  		snake.dir(0, -1);
    	direction = "UP_ARROW";
      ajuda = false;
  	}else if ((keyCode === DOWN_ARROW) && (direction != "UP_ARROW") && (ajuda = true)){
  		snake.dir(0, 1);
    	direction = "DOWN_ARROW";
      ajuda = false;
  	}else if ((keyCode === LEFT_ARROW) && (direction != "RIGHT_ARROW") && (ajuda = true)){
  		snake.dir(-1, 0);
  	  direction = "LEFT_ARROW";
      ajuda = false;
  	}else if ((keyCode === RIGHT_ARROW) && (direction != "LEFT_ARROW") && (ajuda = true)){
  		snake.dir(1, 0);
    	direction = "RIGHT_ARROW";
      ajuda = false;
  	}
  } else if (reverser === true){
    if ((keyCode === UP_ARROW) && (direction != "UP_ARROW") && (ajuda = true)){
  		snake.dir(0, 1);
    	direction = "DOWN_ARROW";
      ajuda = false;
  	}else if ((keyCode === DOWN_ARROW) && (direction != "DOWN_ARROW") && (ajuda = true)){
  		snake.dir(0, -1);
    	direction = "UP_ARROW";
      ajuda = false;
  	}else if ((keyCode === LEFT_ARROW) && (direction != "LEFT_ARROW") && (ajuda = true)){
  		snake.dir(1, 0);
  	  direction = "RIGHT_ARROW";
      ajuda = false;
  	}else if ((keyCode === RIGHT_ARROW) && (direction != "RIGHT_ARROW") && (ajuda = true)){
  		snake.dir(-1, 0);
    	direction = "LEFT_ARROW";
      ajuda = false;
  	}
  }

  if ((keyCode === ENTER) && (gState === 2)) {
  	resetGame();  
  }
}