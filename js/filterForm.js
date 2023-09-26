import {offers} from './api.js';
import {refreshMarkers} from './map.js';

const filterForm = document.querySelector('.map__filters');

const resetFilterForm = () => {
  filterForm.reset();
};

const filterByType = (offer, value) => {
  if (value === 'any') {
    return true;
  } else {
    return offer.offer.type === currentFilter.type;
  }
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
//   price: filterByPrice,
//   rooms: filterByRooms,
//   guests: filterByGuests,
//   wifi: filterByFeatures,
//   dishwasher: filterByFeatures,
//   parking: filterByFeatures,
//   washer: filterByFeatures,
//   elevator: filterByFeatures,
//   conditioner: filterByFeatures,
};

const getFilteredOffers = () => {
  const tempOffers = offers.slice();
  return tempOffers.filter((offer) => {
    for(let key in currentFilter) {
      return (filters[key](offer, currentFilter[key])) ? true : false;
    }
  });
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
  refreshMarkers(tempOffers);
});

export {resetFilterForm};
