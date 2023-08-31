const mainForm = document.querySelector('.ad-form');
const housingType = mainForm.querySelector('#type');
const housingPrice = mainForm.querySelector('#price');
const housingTimeIn = mainForm.querySelector('#timein');
const housingTimeOut = mainForm.querySelector('#timeout');
const housingAddress = mainForm.querySelector('#address');
const housingTitle = mainForm.querySelector('#title');

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

const adjustPrice = () => {
  const minValue = MinPricesOfTypes[housingType.value];
  housingPrice.placeholder = minValue;
  housingPrice.min = minValue;
};

const adjustTime = (evt) => {
  const targetSelectElement = (evt.target.id === 'timein') ? housingTimeOut : housingTimeIn;
  targetSelectElement.value = evt.target.value;
};

const setAddress = (value) => {
  housingAddress.value = `${value.lat}, ${value.lng}`;
};

adjustPrice();
housingType.addEventListener('change', adjustPrice);
housingTimeIn.addEventListener('change', adjustTime);
housingTimeOut.addEventListener('change', adjustTime);


housingPrice.addEventListener('input', (evt) => {
  const minValue = MinPricesOfTypes[housingType.value];
  const currentValue = evt.target.value;

  if (currentValue < minValue || currentValue < MIN_PRICE) {
    housingPrice.setCustomValidity(`Цена не может быть ниже ${minValue}`);
  } else if (currentValue > MAX_PRICE) {
    housingPrice.setCustomValidity(`Цена не может быть выше ${MAX_PRICE}`);
  } else {
    housingPrice.setCustomValidity('');
  }

  housingPrice.reportValidity();
});


housingTitle.addEventListener('input', () => {
  const valueLength = housingTitle.value.length;

  if (valueLength < MIN_LENGTH_TITLE) {
    housingTitle.setCustomValidity(`Заголовок объявления должен содержать минимум ${MIN_LENGTH_TITLE} символов. Добавьте ${MIN_LENGTH_TITLE - housingTitle.value.length} символов`);
  } else if (valueLength > MAX_LENGTH_TITLE) {
    housingTitle.setCustomValidity(`Заголовок объявления должен содержать максимум ${MAX_LENGTH_TITLE} символов. Удалите ${housingTitle.value.length - MAX_LENGTH_TITLE} символов`);
  } else {
    housingTitle.setCustomValidity('');
  }

  housingTitle.reportValidity();
});


export {setAddress};
