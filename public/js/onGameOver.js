import game from './game/game.js';
import renderGameOver from './renderGameOver.js';

// Renders game over screen. If spacebar is pressed it runs the game. 
const onGameOver = () => {
  renderGameOver();
  document.onkeydown = (e) => { 
    if (e.code === 'Space') {
      game(onGameOver);
    }
  }
}

export default onGameOver;