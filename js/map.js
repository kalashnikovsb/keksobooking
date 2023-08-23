import {getOfferObjects} from './data.js';
import {getOfferElements} from './offers.js';

const mapElement = document.querySelector('#map-canvas');

const offers = getOfferObjects();
const offerElements = getOfferElements(offers);
