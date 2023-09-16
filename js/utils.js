// от min до max включительно
const getRandomInteger = (min, max) => {
  if (min > max) {
    [min, max] = [max , min];
  }
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// от min до max включительно
const getRandomFloating = (min, max, digits) => {
  if (min < 0 || max < 0 || digits == 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max , min];
  }
  return (Math.random() * (max - min) + min).toFixed(digits);
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Случайный подмассив. Значения не повторяются
const getRandomSubArray = (array) => {
  const randomSubArray = array.slice();
  const randomLength = getRandomInteger(0 , randomSubArray.length);
  const difference = randomSubArray.length - randomLength;
  for (let i = 0; i < difference; i++) {
    randomSubArray.splice(getRandomInteger(0, randomSubArray.length - 1), 1);
  }
  return randomSubArray;
};

// Предупреждение при проблемах с загрузкой данных
const showAlert = (message) => {
  const alert = document.createElement('DIV');
  alert.textContent = message;
  alert.style.position = 'fixed';
  alert.style.zIndex = 1000;
  alert.style.top = 0;
  alert.style.left = 0;
  alert.style.right = 0;
  alert.style.padding = '5px';
  alert.style.background = '#f00';
  alert.style.fontSize = '16px';
  alert.style.color = '#fff';
  alert.style.textAlign = 'center';
  document.body.appendChild(alert);
  setTimeout(() => {
    document.body.removeChild(alert);
  }, 5000);
};

export {getRandomInteger, getRandomFloating, getRandomArrayElement, getRandomSubArray, showAlert};
