// Stores items in session storage
const updateStorage = (snake, food, size, score) => {
  const setStorage = (string, elt) => sessionStorage.setItem(string, JSON.stringify(elt));
  setStorage('snake', snake);
  setStorage('food', food);
  setStorage('size', size);
  setStorage('score', score);
}

export default updateStorage;