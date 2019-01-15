
const getGameState = () => {
  return {
    snake: JSON.parse(sessionStorage.getItem('snake')),
    food: JSON.parse(sessionStorage.getItem('food')),
    size: JSON.parse(sessionStorage.getItem('size')),
    score: JSON.parse(sessionStorage.getItem('score')),
    snakeDirection: JSON.parse(sessionStorage.getItem('keyPressed'))
  }
}

export default getGameState;