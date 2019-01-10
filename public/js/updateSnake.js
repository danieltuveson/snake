
const updateSnake = (snake, snakeDirection) => {
  const snakeHead = snake[0];
  const snakeNeck = snake[1];
  const diff = [snakeHead[0] - snakeNeck[0], snakeHead[1] - snakeNeck[1]];


  if (snakeDirection === null) {
    snake.unshift([snakeHead[0] + diff[0], snakeHead[1] + diff[1]]);
    snake.pop();
  }
  return snake;
}

export default updateSnake;