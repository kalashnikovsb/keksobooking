import {offers} from './api.js';
import {refreshMarkers} from './map.js';
import {debounce} from './utils.js';

const filterForm = document.querySelector('.map__filters');

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const resetFilterForm = () => {
  filterForm.reset();
};

const filterByType = (offer, value) => {
  const {type} = offer.offer;
  if (value === 'any') {
    return true;
  } else {
    return type === currentFilter.type;
  }
};

const filterByPrice = (offer, value) => {
  const {price} = offer.offer;
  switch(value) {
    case 'any':
      return true;
    case 'low':
      return price < LOW_PRICE ? true : false;
    case 'high':
      return price > HIGH_PRICE ? true : false;
    default:
      return price >= LOW_PRICE && price <= HIGH_PRICE ? true : false;
  }
};

const filterByRooms = (offer, value) => {
  const {rooms} = offer.offer;
  if (value === 'any') {
    return true;
  } else {
    return rooms === +value;
  }
};

const filterByGuests = (offer, value) => {
  const {guests} = offer.offer;
  return (value === 'any' || guests === +value) ? true : false;
};

const filterByFeatures = (offer, isNecessary, feature) => {
  const {features} = offer.offer;
  if (!features && isNecessary) {
    return false;
  }
  if (isNecessary) {
    return features.indexOf(feature) !== -1;
  }
  return true;
};

const currentFilter = {
  type: 'any',
  price: 'any',
  rooms: 'any',
  guests: 'any',
  wifi: false,
  dishwasher: false,
  parking: false,
  washer: false,
  elevator: false,
  conditioner: false,
};

const filters = {
  type: filterByType,
  price: filterByPrice,
  rooms: filterByRooms,
  guests: filterByGuests,
  wifi: filterByFeatures,
  dishwasher: filterByFeatures,
  parking: filterByFeatures,
  washer: filterByFeatures,
  elevator: filterByFeatures,
  conditioner: filterByFeatures,
};

const getFilteredOffers = () => {
  const tempOffers =  offers.slice().filter((offer) => {
    for (let key in currentFilter) {
      if (!filters[key](offer, currentFilter[key], key)) {
        return false
      }
    }
    return true;
  });
  return tempOffers;
};

filterForm.addEventListener('change', (evt) => {
  const tagName = evt.target.tagName;
  if (tagName === 'SELECT') {
    const key = evt.target.name.split('-')[1];
    currentFilter[key] = evt.target.value;
  } else if (tagName === 'INPUT') {
    const key = evt.target.value;
    currentFilter[key] = evt.target.checked ? true : false;
  }
  const tempOffers = getFilteredOffers();
  debounce(refreshMarkers, tempOffers);
});

export {resetFilterForm};
