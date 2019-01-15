// Renders menu component
const renderMenu = () => {
  const gameContainer = document.getElementById('game-container');
  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.innerHTML = 'SNAKE';

  const start = document.createElement('div');
  start.id = 'start';
  start.innerHTML = 'press [ space ] to begin';
  menu.appendChild(start);

  gameContainer.appendChild(menu);
}

export default renderMenu;