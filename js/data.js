import {getRandomInteger, getRandomFloating, getRandomArrayElement, getRandomSubArray} from './utils.js';

const QTY_OF_OFFERS = 10;
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

const getOfferObject = () => {
  const locationX = getRandomFloating(35.65, 35.7, 5);
  const locationY = getRandomFloating(139.7, 139.8, 5);

  return {
    author: {
      avatar: `../img/avatars/user0${getRandomInteger(1, 8)}.png`,
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

const getOfferObjects = () => new Array(QTY_OF_OFFERS).fill('').map(() => getOfferObject());

export {getOfferObjects};
