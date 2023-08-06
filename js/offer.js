const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const getOfferElement = (offerObject) => {
  console.log(offerObject);
  const offer = offerTemplate.cloneNode(true);
  offer.querySelector('.popup__avatar').src = offerObject.author.avatar;
  offer.querySelector('.popup__title').textContent = offerObject.offer.title;
  offer.querySelector('.popup__text--address').textcontent = offerObject.offer.address;
  offer.querySelector('.popup__text--price').textcontent = `${offerObject.offer.price} <span>₽/ночь</span>`;
  offer.querySelector('.popup__type').textContent = offerObject.offer.type;
  offer.querySelector('.popup__text--capacity').textContent = `${offerObject.offer.rooms} комнаты для ${offerObject.offer.guests} гостей`;
  offer.querySelector('.popup__text--time').textContent = `Заезд после ${offerObject.offer.checkin}, выезд до ${offerObject.offer.checkout}`;
  offer.querySelector('.popup__description').textContent = offerObject.offer.description;
  // const offerFeatures = offerTemplate.querySelector('.popup__features')
  // const offerPhotosList = offerTemplate.querySelector('.popup__photos');

  return offer;
};

export {getOfferElement};
