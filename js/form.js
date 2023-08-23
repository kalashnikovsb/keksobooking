const mainForm = document.querySelector('.ad-form');
const housingType = mainForm.querySelector('#type');
const housingPrice = mainForm.querySelector('#price');
const housingTimeIn = mainForm.querySelector('#timein');
const housingTimeOut = mainForm.querySelector('#timeout');

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

adjustPrice();
housingType.addEventListener('change', adjustPrice);
housingTimeIn.addEventListener('change', adjustTime);
housingTimeOut.addEventListener('change', adjustTime);
