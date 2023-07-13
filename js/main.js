'use strict';

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

const NAMES = ['Вася', 'Машуша', 'Алёна', 'Жуля', 'Игорёк', 'Петрушка', 'Ярополк', 'Мономах', 'Валентин', 'Натали'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const DESCRIPTIONS = [
  'Donec ac ligula vitae purus eleifend congue in id enim.',
  'Mauris molestie bibendum elit.',
  'Mauris molestie urna ut pellentesque auctor.',
  'In rhoncus feugiat augue eu semper.',
  'Praesent in hendrerit libero.',
  'Sed tempus sollicitudin lorem in dapibus.',
  'In hac habitasse platea dictumst.',
  'Nullam pellentesque elit eget augue maximus.',
  'Sed tempus et dolor et tempor.',
  'Morbi consectetur scelerisque turpis.',
];

const getObjectOffer = () => {
  const locationX = getRandomFloating(35.65, 35.7, 5);
  const locationY = getRandomFloating(139.7, 139.8, 5);

  return {
    author: {
      avatar: `img/avatars/user${getRandomInteger(1, 10)}.png`,
    },
    offer: {
      title: getRandomArrayElement(DESCRIPTIONS),
      address: `${locationX}, ${locationY}`,
      price: getRandomInteger(0, 5000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomSubArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomSubArray(PHOTOS),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  };
};

const objectOffers = new Array(10).fill('').map(() => getObjectOffer());

console.log(objectOffers);
