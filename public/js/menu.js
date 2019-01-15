import game from './game/game.js';
import onGameOver from './onGameOver.js';
import renderScores from './game/renderScores.js';
import renderMenu from './renderMenu.js';

// Renders menu for game
const menu = () => {
  renderScores(0);
  renderMenu();
  document.onkeydown = (e) => { 
    if (e.code === 'Space') {
      game(onGameOver);
    }
  }
}

export default menu;