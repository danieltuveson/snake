import getFoodPosition from './getFoodPosition.js';
import render from './render.js';

const Game = () => {
  const game = document.getElementById('game');
  window.onkeydown = (e) => console.log(e.code);

  const size = 30; // length and height of board
  let snake = [[5, 10], [6, 10], [7, 10]]; // row & col pairs identify position of segments
  const food = getFoodPosition(snake, size);

  // setInterval()
  render(game, snake, food, size);
  
}

export default Game;
