import {getObjectOffer} from './data.js';

const objectOffers = new Array(10).fill('').map(() => getObjectOffer());
console.log(objectOffers);
