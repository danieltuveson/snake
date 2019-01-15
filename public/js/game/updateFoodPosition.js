import isSnakeSegment from './isSnakeSegment.js';

// Takes in snake body positions and size of gameboard, returns position of food
const updateFoodPositions = (snake, size) => {
  let positions = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      positions.push([i, j]);
    }
  }
  const posibleFoodPositions = positions.filter((pos) => !isSnakeSegment(snake, pos[0], pos[1]));
  const food = posibleFoodPositions[Math.floor(posibleFoodPositions.length * Math.random())];
  return food;
}

export default updateFoodPositions;