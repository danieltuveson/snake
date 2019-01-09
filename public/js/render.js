import isSnakeSegment from './isSnakeSegment.js';

const render = (game, snake, food, size) => {
  for (let rowIndex = 0; rowIndex < size; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let colIndex = 0; colIndex < size; colIndex++) {
      const pixel = document.createElement('div');
      if (isSnakeSegment(snake, rowIndex, colIndex)) {
        pixel.className = 'pixel snake';
      } else if (food[0] === rowIndex && food[1] === colIndex) {
        pixel.className = 'pixel food';
      } else {
        pixel.className = 'pixel background';
      }
      row.appendChild(pixel);
    }
    game.appendChild(row);
  }
}

export default render;