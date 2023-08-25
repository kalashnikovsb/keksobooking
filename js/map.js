import {activatePage} from './page.js';
// import {getOfferObjects} from './data.js';
// import {getOfferElements} from './offers.js';

const mapElement = document.querySelector('#map-canvas');

// const offers = getOfferObjects();
// const offerElements = getOfferElements(offers);




const map = window.L.map(mapElement)
  .on('load', activatePage)
  .setView({
    lat: 35.685,
    lng: 139.755,
  }, 12);

window.L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);





const mainMarker = window.L.marker(
  {
    lat: 35.685,
    lng: 139.755,
  },
  {
    draggable: true,
  },
);
mainMarker.addTo(map);

mainMarker.on('move', () => {
  console.log(mainMarker.getLatLng());
});
