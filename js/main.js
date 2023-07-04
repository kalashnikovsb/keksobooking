'use strict';

const getRandomFloating = (min, max, digits) => {
  if (min < 0 || max < 0 || digits == 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max , min];
  }
  return (Math.random() * (max - min) + min).toFixed(digits);
};
