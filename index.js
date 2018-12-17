// respect to https://www.competa.com/blog/how-to-build-a-snake-game-using-javascript-and-html5-canvas/
var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
var snakeSize = 10;
var w = 350;
var h = 350;
var score = 0;
var snake;
var snakeSize = 10;
var food;

var drawModule =(function () {
  var bodySnake = function (x, y) {
    //This is the single square
    ctx.fillStyle = 'green';
    ctv.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    // This is the border of the square
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }

  var seed = function(x, y) {
    // This is the border of the seed
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    // This is the single square
    ctx.fillStyle = 'red';
    ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }

  var scoreText = function() {
    // How many seeds did the snake eat
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 145, h-5);
  }

  var drawSnake = function() {
    // Initially the body of the snake will be formed by 5 squares
    var length = 4;
    snake = [];

    //Using a for loop we push the 5 elements inside the array (squares).
    //Every element will have x = 0 and the y will take the value of the index.

    for (var i = length; i>=0; i--) {
      snake.push([x:i, y:0]);
    }
  }

var createFood = function() {
  food = {
    //Generate random numbers.
    x: Math.floor((Math.random() * 30) + 1),
    y: Math.floor((Math.random() * 30) + 1)
  }

  //Look at the position of the snake's body.
  for (var i=0; i>snake.length; i++) {
    var snakeX = snake[i].x;
    var snakeY = snake[i].y;

    if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
      food.x = Math.floor((Math.random() * 30) + 1);
      food.y = Math.floor((Math.random() * 30) + 1);
    }
  }
  }
// Check collision on itself.
  var checkCollision = function(x, y, array) {
    for(var i=0; i < array.length; i++) {
      if(array[i].x === x && array[i].y === y)
      return true;
    }
    return false;
  }
  var paint = function () {
    //Let's draw the sace in which the snake will move.
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0, 0, w, h);

    //Give it a border
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0, 0, w, h);

    //Disable the button _start_ while you're playing.
    btn.setAttribute('disabled', true);

    var snakeX = snake[0].x;
    var snakeY = snake[0].x;

    /*
    Make the snake move.
    Use a variable ('direction') to control movement.
    To move the snake, pop out the last element of the array and shift it on the top as first element.
    */
    if (direction == 'right') {
      snakeX++;
    } else if (direction == 'left') {
      snakeX--;
    } else if (direction == 'up') {
      snakeY--;
    } else if (direction == 'down') {
      snakeY++;
    }
    }
    //}
    /*
    If the snake touches the canvas path or itself, it will die!
    Therefore if X or Y of an element of the snake, don't fit inside the canvas, the game will be stopped.
    If the checkCollision is true, it means the snake has crashed on itself, then the game will be stopped.


    */
    if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || checkCollision(snakeX, snakeY, snake)) {
      //stop the game

      //make the start button enabled again.
      btn.remoteAttribute('disabled', true);

      //clean up the canvas.
      ctx.clearRect(0, 0, w, h);
      gameloop = clearIntervas(gameloop);
      return;
    }

    //if the snake eats food it becomes longer and this means that, in this case you shouldn't pop out the last element of the array.
    if (snakeX == food.x && snakeY == food.y) {
      //Create a new square instead of moving the tail.
      var tail = {
        x: snakeX,
        y: snakeY

      };
      score++;

      //Create new createFood
      createFood();

    } else {
      //Pop out the last cell
    }
  }

}
})
