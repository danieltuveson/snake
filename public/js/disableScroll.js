// Disables scrolling using keys
const disableScroll = () => {
  window.addEventListener('keydown', (e) => {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);
}

export default disableScroll;