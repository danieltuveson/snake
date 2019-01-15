import updateHighScore from './updateHighScore.js';

// Stores game state in session storage (high score stored in localStorage)
const updateGameState = (snake, food, size, score) => {
  const setStorage = (string, elt) => sessionStorage.setItem(string, JSON.stringify(elt));
  setStorage('snake', snake);
  setStorage('food', food);
  setStorage('size', size);
  setStorage('score', score);
  updateHighScore(score);
}

export default updateGameState;