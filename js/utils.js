// min max включительно
const getRandomInteger = (min, max) => {
  if (min > max) {
    [min, max] = [max , min];
  }
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// min max включительно
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

// Значения не повторяются
const getRandomSubArray = (array) => {
  const randomSubArray = array.slice();
  const randomLength = getRandomInteger(0 , randomSubArray.length);
  const difference = randomSubArray.length - randomLength;
  for (let i = 0; i < difference; i++) {
    randomSubArray.splice(getRandomInteger(0, randomSubArray.length - 1), 1);
  }
  return randomSubArray;
};

export {getRandomInteger, getRandomFloating, getRandomArrayElement, getRandomSubArray};
