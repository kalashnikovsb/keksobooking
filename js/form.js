const mainForm = document.querySelector('.ad-form');
const housingType = mainForm.querySelector('#type');
const housingPrice = mainForm.querySelector('#price');

const MinPricesOfTypes = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const adjustPrice = () => {
  const minValue = MinPricesOfTypes[housingType.value];
  housingPrice.placeholder = MinPricesOfTypes[housingType.value];

  if (housingPrice.value < minValue && housingPrice.value) {
    housingPrice.value = minValue;
  }
};

housingType.addEventListener('change', adjustPrice);
housingPrice.addEventListener('change', adjustPrice);