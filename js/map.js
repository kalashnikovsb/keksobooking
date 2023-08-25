import {activatePage} from './page.js';
import {changeAddress} from './form.js';
// import {getOfferObjects} from './data.js';
// import {getOfferElements} from './offers.js';

const CITY_CENTER = {
  lat: 35.685,
  lng: 139.755,
};

const mapElement = document.querySelector('#map-canvas');

// const offers = getOfferObjects();
// const offerElements = getOfferElements(offers);


const map = window.L.map(mapElement)
  .on('load', activatePage)
  .setView(CITY_CENTER, 12);

window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mainMarker = window.L.marker(
  CITY_CENTER,
  {
    draggable: true,
  },
);
mainMarker.addTo(map);


mainMarker.on('move', () => {
  const lat = mainMarker.getLatLng().lat.toFixed(5);
  const lng = mainMarker.getLatLng().lng.toFixed(5);
  const coords = `${lat}, ${lng}`;
  changeAddress(coords);
});
