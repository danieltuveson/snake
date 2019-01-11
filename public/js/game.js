import getFoodPosition from './getFoodPosition.js';
import render from './render.js';
import updateSnake from './updateSnake.js';
import isGameOver from './isGameOver.js';
import handleKeyPress from './handleKeyPress.js'
import disableScroll from './disableScroll.js';
import storeItems from './storeItems.js';

const Game = () => {
  const gameContainer = document.getElementById('game-container');
  const size = 30; // length and height of board
  const snakeInit = [[5, 10], [6, 10], [7, 10]]; // row & col pairs identify position of segments
  const foodInit = getFoodPosition(snakeInit, size, false);

  storeItems(snakeInit, foodInit, size);
  handleKeyPress();
  gameContainer.appendChild(render(snakeInit, foodInit, size)); // initialization

  // updates game state
  const intervalId = setInterval(() => {
    let snake = JSON.parse(sessionStorage.getItem('snake'));
    let food = JSON.parse(sessionStorage.getItem('food'));
    const size = JSON.parse(sessionStorage.getItem('size'));
    const snakeDirection = sessionStorage.getItem('keyPressed');

    const didSnakeGetFood = snake[0][0] === food[0] && snake[0][1] === food[1];

    // Update snake and food values 
    if (didSnakeGetFood) food = getFoodPosition(snake, size);
    snake = updateSnake(snake, snakeDirection, didSnakeGetFood);
    storeItems(snake, food);

    // Checks for game over condition 
    if (isGameOver(snake, size)) {
      alert('GAME OVER');
      clearInterval(intervalId);
    }

    // Updates game element 
    const oldGame = document.getElementById('game');
    gameContainer.replaceChild(render(snake, food, size), oldGame);

    // Clear old items and store new ones
    sessionStorage.clear();
    storeItems(snake, food, size);
  }, 200);
  
  
}

export default Game;
