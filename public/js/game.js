import getFoodPosition from './getFoodPosition.js';
import render from './render.js';
import updateSnake from './updateSnake.js';
import isGameOver from './isGameOver.js';

const Game = () => {
  const gameContainer = document.getElementById('game-container');
  
  const size = 30; // length and height of board
  let snake = [[5, 10], [6, 10], [7, 10]]; // row & col pairs identify position of segments
  const food = getFoodPosition(snake, size);
  gameContainer.appendChild(render(snake, food, size)); // initialization

  setInterval(() => {
    const oldSnake = snake;
    snake = updateSnake(snake, null);
    if (isGameOver(snake, oldSnake)) {
      console.log('GAME OVER');
      return;
    }
    const oldGame = document.getElementById('game');
    gameContainer.replaceChild(render(snake, food, size), oldGame);
  }, 1000);
  
  
}

export default Game;
