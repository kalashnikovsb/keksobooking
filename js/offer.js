const offerTemplate = document.querySelector('#card').content;


const getOfferElement = (offerObject) => {
  const offer = offerTemplate.cloneNode();
  offerTemplate.querySelector('.popup__avatar').src = offerObject.author.avatar;
  offerTemplate.querySelector('.popup__title').textContent = offerObject.offer.title;
  offerTemplate.querySelector('.popup__text--address').textcontent = offerObject.offer.address;
  offerTemplate.querySelector('.popup__text--price').textcontent = `${offerObject.offer.price} <span>₽/ночь</span>`;
  offerTemplate.querySelector('.popup__type').textContent = offerObject.offer.type;
  offerTemplate.querySelector('.popup__text--capacity').textContent = `${offerObject.offer.rooms} комнаты для ${offerObject.offer.guests} гостей`;
  offerTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${offerObject.offer.checkin}, выезд до ${offerObject.offer.checkout}`;
  offerTemplate.querySelector('.popup__description').textContent = offerObject.offer.description;
  // const offerFeatures = offerTemplate.querySelector('.popup__features')
  // const offerPhotosList = offerTemplate.querySelector('.popup__photos');

  return offer;
};

export {getOfferElement};
