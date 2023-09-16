import {sendData} from './api.js'
import {setPageToDefault} from './page.js'
import {showSuccessPopup, showErrorPopup} from './popups.js';

const mainForm = document.querySelector('.ad-form');
const formReset = document.querySelector('.ad-form__reset');
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

const adjustCapacity = () => {
  const rooms = +housingRoomNumber.value;
  const capacity = +housingCapacity.value;

  if (rooms === 100 && capacity === 0) {
    housingCapacity.setCustomValidity('');
  } else if (rooms >= capacity && rooms !== 100 && capacity !== 0) {
    housingCapacity.setCustomValidity('');
  } else {
    switch (rooms) {
      case 1:
        housingCapacity.setCustomValidity('Количество комнат подходит только 1 гостю');
        break;
      case 2:
        housingCapacity.setCustomValidity('Количество комнат подходит 1 или 2 гостям');
        break;
      case 3:
        housingCapacity.setCustomValidity('Количество комнат подходит для 1, 2 или 3 гостей');
        break;
      case 100:
        housingCapacity.setCustomValidity('Такое количество комнат не подходит для гостей');
    }
  }
  housingCapacity.reportValidity();
};

const setAddress = (value) => {
  housingAddress.value = `${value.lat}, ${value.lng}`;
};

const resetMainForm = () => {
  mainForm.reset();
  adjustPrice();
};

housingTitle.addEventListener('input', adjustTitle);
housingType.addEventListener('change', adjustPrice);
housingPrice.addEventListener('input', adjustPrice);
housingTimeIn.addEventListener('change', adjustTime);
housingTimeOut.addEventListener('change', adjustTime);
housingRoomNumber.addEventListener('change', adjustCapacity);
housingCapacity.addEventListener('change', adjustCapacity);

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(
    () => {
      setPageToDefault();
      showSuccessPopup();
    },
    showErrorPopup,
    new FormData(evt.target),
  );
});

formReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  setPageToDefault();
});

export {setAddress, resetMainForm};
