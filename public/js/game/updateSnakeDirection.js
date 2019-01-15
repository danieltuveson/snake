// Updates snake direction if the code is for an arrow key press event
const updateSnakeDirection = (code) => {
  const isSnakeDirection = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(code);
  if (isSnakeDirection) {
    sessionStorage.setItem('keyPressed', JSON.stringify(code)); 
  }
}

export default updateSnakeDirection;