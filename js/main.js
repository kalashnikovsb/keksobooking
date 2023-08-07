import {getOfferObject} from './data.js';
import {getOfferElements} from './offers.js';

const mapElement = document.querySelector('#map-canvas');

const offers = new Array(10).fill('').map(() => getOfferObject());
const offerElements = getOfferElements(offers);
mapElement.appendChild(offerElements[0]);
