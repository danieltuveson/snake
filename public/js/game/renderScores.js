// Renders current score and high score
const renderScores = (score) => {
  const currentScore = document.getElementById('current-score');
  const highScore = document.getElementById('high-score');
  currentScore.innerHTML = score;
  highScore.innerHTML = localStorage.getItem('high-score');
}

export default renderScores;