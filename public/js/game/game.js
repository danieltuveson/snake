import getGameState from './getGameState.js';
import initialGameState from './initialGameState.js';

import renderGame from './renderGame.js';
import renderScores from './renderScores.js';

import isGameOver from './isGameOver.js';

import updateSnake from './updateSnake.js';
import updateSnakeDirection from './updateSnakeDirection.js';
import updateFoodPosition from './updateFoodPosition.js';
import updateGameState from './updateGameState.js';

// Runs the game. Accepts a callback to be run when game ends. 
const game = (onGameOver) => {
  // Defines initial game state
  let { sizeInit, snakeInit, foodInit, scoreInit } = initialGameState;
  updateGameState(snakeInit, foodInit, sizeInit, scoreInit); 
  
  // Renders initial game state
  renderGame(snakeInit, foodInit, sizeInit);

  // Updates snake direction if arrow key is pressed
  document.onkeydown = (e) => { updateSnakeDirection(e.code); } 
  

  // Updates game state and renders game until game ends
  const intervalId = setInterval(() => {
    const oldGame = document.getElementById('game');
    let { snake, food, size, score, snakeDirection } = getGameState();
    const didSnakeGetFood = snake[0][0] === food[0] && snake[0][1] === food[1];


    // Update snake, food, and score values 
    if (didSnakeGetFood) {
      food = updateFoodPosition(snake, size);
      score += 100;
    }
    snake = updateSnake(snake, snakeDirection, didSnakeGetFood);


    
    
    // Clear old items and store new ones
    sessionStorage.clear();
    updateGameState(snake, food, size, score);

    // Renders game if game isn't over
    renderScores(score);
    if (isGameOver(snake, size)) { 
      clearInterval(intervalId);
      sessionStorage.clear();
      onGameOver();
    } else {
      renderGame(snake, food, size);
    }
  }, 200);
  
  
}

export default game;
