const successPopup = document.querySelector('#success').content.querySelector('.success');
const errorPopup = document.querySelector('#error').content.querySelector('.error');

const bodyElement = document.querySelector('body');

const showSuccessPopup = () => {
  bodyElement.appendChild(successPopup);
};

const showErrorPopup = () => {
  bodyElement.appendChild(errorPopup);
};

const removePopups = () => {
  successPopup.remove();
  errorPopup.remove();
};

window.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    removePopups();
  }
});

window.addEventListener('click', () => {
  removePopups();
});

successPopup.style.zIndex = 1000;
errorPopup.style.zIndex = 1000;

export {showSuccessPopup, showErrorPopup};
