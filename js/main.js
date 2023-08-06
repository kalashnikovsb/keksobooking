import {getObjectOffer} from './data.js';
import {getOfferElement} from './offer.js';
const mapElement = document.querySelector('#map-canvas');

const offers = new Array(10).fill('').map(() => getObjectOffer());

mapElement.appendChild(getOfferElement(offers[0]));
