// Returns true if game is lost, false otherwise
const isGameOver = (snake, oldSnake) => {
  const didSnakeToucheSelf = oldSnake.length > snake.length;
  const didSnakeTouchWall = snake.reduce(((acc, val) => acc || val[0] < 0 || val[1] < 0), false);
  return didSnakeTouchWall || didSnakeToucheSelf;
}

export default isGameOver;