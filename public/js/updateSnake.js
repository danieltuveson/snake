// Updates snake array based on user input 
const updateSnake = (snake, snakeDirectionString, didSnakeGetFood) => {
  const snakeHead = snake[0];
  const snakeNeck = snake[1];
  const currentDirection = [snakeHead[0] - snakeNeck[0], snakeHead[1] - snakeNeck[1]];
  
  // converts string direction to array representing 
  const snakeDirection = (() => {
    switch (snakeDirectionString) {
      case 'ArrowUp': return [-1, 0];
      case 'ArrowDown': return [1, 0];
      case 'ArrowLeft': return [0, -1];
      case 'ArrowRight': return [0, 1];
      default: return [snakeHead[0] - snakeNeck[0], snakeHead[1] - snakeNeck[1]];
    }
  })();

  // checks to see if snakeDirection will make the snake go backwards
  if (snakeDirection[0] === -1 * currentDirection[0] 
    || snakeDirection[1] === -1 * currentDirection[1]) {
    snake.unshift([snakeHead[0] + currentDirection[0], snakeHead[1] + currentDirection[1]]);
  } else {
    snake.unshift([snakeHead[0] + snakeDirection[0], snakeHead[1] + snakeDirection[1]]);
  }
  
  if (!didSnakeGetFood) snake.pop();
  
  return snake;
}

export default updateSnake;