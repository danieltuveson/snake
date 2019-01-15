// Updates high score
const updateHighScore = (score) => {
  const highScore = localStorage.getItem('high-score');
  if (highScore === undefined || highScore <= score) {
    localStorage.clear();
    localStorage.setItem('high-score', score);
  }
}

export default updateHighScore;