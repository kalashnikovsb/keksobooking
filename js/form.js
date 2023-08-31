const mainForm = document.querySelector('.ad-form');
const housingTitle = mainForm.querySelector('#title');
const housingPrice = mainForm.querySelector('#price');
const housingType = mainForm.querySelector('#type');
const housingTimeIn = mainForm.querySelector('#timein');
const housingTimeOut = mainForm.querySelector('#timeout');
const housingAddress = mainForm.querySelector('#address');
const housingRoomNumber = mainForm.querySelector('#room_number');
const housingCapacity = mainForm.querySelector('#capacity');

const MIN_LENGTH_TITLE = 30;
const MAX_LENGTH_TITLE = 1000;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;

const MinPricesOfTypes = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const adjustTitle = () => {
  const valueLength = housingTitle.value.length;
  if (valueLength < MIN_LENGTH_TITLE) {
    housingTitle.setCustomValidity(`Заголовок объявления должен содержать минимум ${MIN_LENGTH_TITLE} символов. Добавьте ${MIN_LENGTH_TITLE - housingTitle.value.length} символов`);
  } else if (valueLength > MAX_LENGTH_TITLE) {
    housingTitle.setCustomValidity(`Заголовок объявления должен содержать максимум ${MAX_LENGTH_TITLE} символов. Удалите ${housingTitle.value.length - MAX_LENGTH_TITLE} символов`);
  } else {
    housingTitle.setCustomValidity('');
  }
  housingTitle.reportValidity();
};

const adjustPrice = () => {
  const minValue = MinPricesOfTypes[housingType.value];
  const currentValue = housingPrice.value;
  housingPrice.placeholder = minValue;
  housingPrice.min = minValue;
  if (currentValue < minValue || currentValue < MIN_PRICE) {
    housingPrice.setCustomValidity(`Цена не может быть ниже ${minValue}`);
  } else if (currentValue > MAX_PRICE) {
    housingPrice.setCustomValidity(`Цена не может быть выше ${MAX_PRICE}`);
  } else {
    housingPrice.setCustomValidity('');
  }
  housingPrice.reportValidity();
};

const adjustTime = (evt) => {
  const targetSelectElement = (evt.target.id === 'timein') ? housingTimeOut : housingTimeIn;
  targetSelectElement.value = evt.target.value;
};

const setAddress = (value) => {
  housingAddress.value = `${value.lat}, ${value.lng}`;
};

housingTitle.addEventListener('input', adjustTitle);
housingType.addEventListener('change', adjustPrice);
housingPrice.addEventListener('input', adjustPrice);
housingTimeIn.addEventListener('change', adjustTime);
housingTimeOut.addEventListener('change', adjustTime);

export {setAddress};
