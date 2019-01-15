import isSnakeSegment from './isSnakeSegment.js';
// Returns true if game is lost, false otherwise
const isGameOver = (snake, size) => {
  const reducer = (acc, val) => acc || val[0] < 0 || val[1] < 0 || val[0] >= size || val[1] >= size;
  const didSnakeTouchWall = snake.reduce(reducer, false);
  
  const fakeSnake = snake.slice();
  const head = fakeSnake.shift();
  const didSnakeToucheSelf = isSnakeSegment(fakeSnake, head[0], head[1]);
  
  return didSnakeTouchWall || didSnakeToucheSelf;
}

export default isGameOver;