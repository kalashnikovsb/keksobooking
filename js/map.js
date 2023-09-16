import {showAlert} from './utils.js';
import {activatePage} from './page.js';
import {setAddress} from './form.js';
import {getData} from './api.js';
import {getOfferElement} from './offer.js';

const mapElement = document.querySelector('#map-canvas');

const CITY_CENTER = {
  lat: 35.68555,
  lng: 139.75555,
};

const mainPinIcon = window.L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = window.L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderMarkers = (offers) => {
  offers.forEach((offer) => {
    const marker = window.L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon: pinIcon,
      },
    );
    marker
      .addTo(map)
      .bindPopup(getOfferElement(offer));
  });
};

const resetMainMarker = () => {
  mainMarker.setLatLng(CITY_CENTER);
  setAddress(CITY_CENTER);
};

const map = window.L.map(mapElement)
  .on('load', () => {
    activatePage();
    getData(
      (offers) => {renderMarkers(offers)},
      (message) => showAlert(message),
    );
  })
  .setView(CITY_CENTER, 13);

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
    icon: mainPinIcon,
  },
);
mainMarker.addTo(map);
resetMainMarker();

mainMarker.on('move', () => {
  const lat = mainMarker.getLatLng().lat.toFixed(5);
  const lng = mainMarker.getLatLng().lng.toFixed(5);
  setAddress({lat, lng});
});

export {resetMainMarker};
