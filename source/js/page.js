import {resetMainForm} from './mainForm.js';
import {resetFilterForm} from './filterForm.js';
import {resetMainMarker} from './map.js';

const mainForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');

const PAGE_DISABLED_CLASS = 'ad-form--disabled';

const deactivateMainForm = () => {
  mainForm.classList.add(PAGE_DISABLED_CLASS);
  Array.from(mainForm.children).forEach((element) => {
    element.setAttribute('disabled', '');
  });
};

const activateMainForm = () => {
  mainForm.classList.remove(PAGE_DISABLED_CLASS);
  Array.from(mainForm.children).forEach((element) => {
    element.removeAttribute('disabled', '');
  });
};

const deactivateFilterForm = () => {
  filterForm.classList.add(PAGE_DISABLED_CLASS);
  Array.from(filterForm.children).forEach((element) => {
    element.setAttribute('disabled', '');
  });
};

const activateFilterForm = () => {
  filterForm.classList.remove(PAGE_DISABLED_CLASS);
  Array.from(filterForm.children).forEach((element) => {
    element.removeAttribute('disabled', '');
  });
};

const setPageToDefault = () => {
  resetMainForm();
  resetFilterForm();
  resetMainMarker();
};

deactivateMainForm();
deactivateFilterForm();

export {deactivateMainForm, activateMainForm, deactivateFilterForm, activateFilterForm, setPageToDefault};
