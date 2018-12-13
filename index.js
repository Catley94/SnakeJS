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

  //  if (food.x===snakeX || food.y === snakeY || food.y === snakeY )
  }
  }
}
})
