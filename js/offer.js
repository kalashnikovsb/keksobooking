const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const RussianTypes = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
};

const getOfferAvatar = (data) => data.author.avatar ? data.author.avatar : `../img/avatars/default.png`;

const getOfferType = (data) => RussianTypes[data.offer.type];

const getOfferPhotos = (data) => {
  console.log(data.offer.photos);

  const photoList = document.createDocumentFragment();

  data.offer.photos.forEach((photoSrc) => {
    const photoElement = document.createElement('img');
    photoElement.src = photoSrc;
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    photoList.appendChild(photoElement);
  });

};

const offer = offerTemplate.cloneNode(true);
const offerAvatar = offer.querySelector('.popup__avatar');
const offerTitle = offer.querySelector('.popup__title');
const offerAddress = offer.querySelector('.popup__text--address');
const offerPrice = offer.querySelector('.popup__text--price');
const offerType = offer.querySelector('.popup__type');
const offerCapacity = offer.querySelector('.popup__text--capacity');
const offerTime = offer.querySelector('.popup__text--time');
const offerDescription = offer.querySelector('.popup__description');
const offerFeatures = offer.querySelector('.popup__features');
const offerPhotos = offer.querySelector('.popup__photos');

const getOfferElement = (data) => {
  offerAvatar.src = getOfferAvatar(data);
  offerTitle.textContent = data.offer.title;
  offerAddress.textContent = data.offer.address;
  offerPrice.innerHTML = `${data.offer.price} <span>₽/ночь</span>`;
  offerType.textContent = getOfferType(data);
  offerCapacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  offerTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  offerDescription.textContent = data.offer.description;
  offerPhotos.innerHTML = '';
  offerPhotos.appendChild(getOfferPhotos(data));
  return offer;
};

export {getOfferElement};
