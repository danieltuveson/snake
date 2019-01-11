// Processes and stores keypresses 
const handleKeyPress = () => {
  document.onkeydown = (e) => {
    sessionStorage.setItem('keyPressed', e.code);
  }
}

export default handleKeyPress;