import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {showAlert} from './utils.js';
import {activateMainForm, activateFilterForm} from './page.js';
import {setAddress} from './mainForm.js';
import {getData} from './api.js';
import {getOfferElement} from './offer.js';

const mapElement = document.querySelector('#map-canvas');

const renderedMarkers = [];

const CITY_CENTER = {
  lat: 35.68555,
  lng: 139.75555,
};

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const refreshMarkers = (offers) => {
  const tempOffers = offers.slice(0, 10);
  if (renderedMarkers.length !== 0) {
    renderedMarkers.forEach((marker) => {
      marker.remove();
    });
  }
  tempOffers.forEach((offer) => {
    const marker = L.marker(
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
    renderedMarkers.push(marker);
  });
};

const resetMainMarker = () => {
  mainMarker.setLatLng(CITY_CENTER);
  setAddress(CITY_CENTER);
};

const map = L.map(mapElement)
  .on('load', () => {
    activateMainForm();
    getData(
      (offers) => {
        refreshMarkers(offers);
        activateFilterForm();
      },
      (message) => showAlert(message),
    );
  })
  .setView(CITY_CENTER, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarker = L.marker(
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

export {resetMainMarker, refreshMarkers};
