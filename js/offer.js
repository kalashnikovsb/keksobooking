const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const RussianTypes = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
};

const getOfferPhotos = (offerPhotos, data) => {
  if (!data) {
    offerPhotos.remove();
    return;
  }
  offerPhotos.innerHTML = '';
  data.forEach((photoSrc) => {
    const imgCopy = document.createElement('img');
    imgCopy.src = photoSrc;
    imgCopy.width = '45';
    imgCopy.height = '40';
    imgCopy.alt = 'Фотография жилья';
    offerPhotos.appendChild(imgCopy);
  });
};

const getOfferFeatures = (offerFeatures, data) => {
  if (!data) {
    offerFeatures.remove();
    return;
  }
  offerFeatures.innerHTML = '';
  data.forEach((item) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature', `popup__feature--${item}`);
    offerFeatures.appendChild(feature);
  });
};

const getOfferElement = (data) => {
  const offerElement = offerTemplate.cloneNode(true);

  const offerTitle = offerElement.querySelector('.popup__title');
  const offerAddress = offerElement.querySelector('.popup__text--address');
  const offerPrice = offerElement.querySelector('.popup__text--price');
  const offerType = offerElement.querySelector('.popup__type');
  const offerCapacity = offerElement.querySelector('.popup__text--capacity');
  const offerTime = offerElement.querySelector('.popup__text--time');
  const offerFeatures = offerElement.querySelector('.popup__features');
  const offerDescription = offerElement.querySelector('.popup__description');
  const offerPhotos = offerElement.querySelector('.popup__photos');
  const offerAvatar = offerElement.querySelector('.popup__avatar');

  offerTitle.textContent = data.offer.title;
  offerAddress.textContent = data.offer.address;
  offerPrice.innerHTML = `${data.offer.price} <span>₽/ночь</span>`;
  offerType.textContent = RussianTypes[data.offer.type];
  offerCapacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  offerTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  getOfferFeatures(offerFeatures, data.offer.features);
  offerDescription.textContent = data.offer.description;
  getOfferPhotos(offerPhotos, data.offer.photos);
  offerAvatar.src = data.author.avatar ? data.author.avatar : '../img/avatars/default.png';
  return offerElement;
};

export {getOfferElement};
