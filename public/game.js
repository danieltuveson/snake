const game = document.getElementById('game');

for (let i = 0; i < 40; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  for (let j = 0; j < 40; j++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    row.appendChild(pixel);
  }
  game.appendChild(row);
}



// setInterval(() => {

// }, 500);