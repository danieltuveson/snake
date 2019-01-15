import updateFoodPosition from './updateFoodPosition.js';

// contains initial values for game state
const initialGameState = {
  sizeInit: 30, // length and height of board
  snakeInit: [[5, 10], [6, 10], [7, 10]], // row & col pairs identify position of segments
  foodInit: updateFoodPosition([[5, 10], [6, 10], [7, 10]], 30),
  scoreInit: 0
}

export default initialGameState;