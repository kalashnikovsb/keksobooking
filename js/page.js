import {resetMainForm} from './form.js';
import {resetMainMarker} from './map.js';

const mainForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const mainFormFieldsetElements = document.querySelectorAll('fieldset');

const PAGE_DISABLED_CLASS = 'ad-form--disabled';

const deactivatePage = () => {
  mainForm.classList.add(PAGE_DISABLED_CLASS);
  filterForm.classList.add(PAGE_DISABLED_CLASS);
  mainFormFieldsetElements.forEach((fieldset) => {
    fieldset.setAttribute('disabled', '');
  });
  Array.from(filterForm.children).forEach((element) => {
    element.setAttribute('disabled', '');
  });
};

const activatePage = () => {
  mainForm.classList.remove(PAGE_DISABLED_CLASS);
  filterForm.classList.remove(PAGE_DISABLED_CLASS);
  mainFormFieldsetElements.forEach((fieldset) => {
    fieldset.removeAttribute('disabled', '');
  });
  Array.from(filterForm.children).forEach((element) => {
    element.removeAttribute('disabled', '');
  });
};

const setPageToDefault = () => {
  resetMainForm();
  resetMainMarker();
};

deactivatePage();

export {deactivatePage, activatePage, setPageToDefault};
