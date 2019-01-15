import game from './game/game.js';
import onGameOver from './onGameOver.js';
import renderMenu from './renderMenu.js';

// Renders menu for game
const menu = () => {
  renderMenu();
  document.onkeydown = (e) => { 
    if (e.code === 'Space') {
      game(onGameOver);
    }
  }
}

export default menu;