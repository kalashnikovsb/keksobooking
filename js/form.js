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

const adjustTime = (evt, element) => {
  for (let item of element.children) {
    if (item.value === evt.target.value) {
      item.setAttribute('selected', '');
    } else {
      item.removeAttribute('selected');
    }
  }
};

adjustPrice();
housingType.addEventListener('change', adjustPrice);
housingTimeIn.addEventListener(('change'), (evt) => adjustTime(evt, housingTimeOut));
housingTimeOut.addEventListener(('change'), (evt) => adjustTime(evt, housingTimeIn));



