import {getOfferElement} from './offer.js';

const getOfferElements = (offers) => {
  const result = [];
  offers.forEach((offer) => {
    result.push(getOfferElement(offer));
  });
  return result;
};

export {getOfferElements};
