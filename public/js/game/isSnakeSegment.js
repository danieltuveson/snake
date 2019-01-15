// Checks to see if given row-column pair are in snake
const isSnakeSegment = (snake, row, col) => {
  const reducer = (acc, val) => acc || (val[0] === row && val[1] === col);
  return snake.reduce(reducer, false);
}

export default isSnakeSegment;