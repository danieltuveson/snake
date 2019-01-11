// Stores items in session storage
const storeItems = (snake, food, size) => {
  const setStorage = (string, elt, size) => sessionStorage.setItem(string, JSON.stringify(elt));
  setStorage('snake', snake);
  setStorage('food', food);
  setStorage('size', size);
}

export default storeItems;