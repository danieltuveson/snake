// Renders game over component
const renderGameOver = () => {
  const gameContainer = document.getElementById('game-container');
  const oldGame = document.getElementById('game');
  const gameOver = document.createElement('div');
  gameOver.id = 'menu';
  gameOver.innerHTML = 'GAME OVER';

  const restart = document.createElement('div');
  restart.id = 'start';
  restart.innerHTML = 'press [ space ] to play again';
  gameOver.appendChild(restart);

  gameContainer.replaceChild(gameOver, oldGame);
}

export default renderGameOver;