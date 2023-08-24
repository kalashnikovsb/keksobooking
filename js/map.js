import {getOfferObjects} from './data.js';
import {getOfferElements} from './offers.js';

const mapElement = document.querySelector('#map-canvas');

const offers = getOfferObjects();
const offerElements = getOfferElements(offers);

L.map(mapElement)
  .setView({
    lat: 35.68,
    lng: 139.7,
  }, 10)
