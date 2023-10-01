/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   offers: () => (/* binding */ offers),\n/* harmony export */   sendData: () => (/* binding */ sendData)\n/* harmony export */ });\nlet offers = [];\n\nconst getData = (onSuccess, onError) => {\n  fetch('https://23.javascript.pages.academy/keksobooking/data')\n    .then((response) => {\n      if (response.ok) {\n        return response.json();\n      } else {\n        throw Error(response.status);\n      }\n    })\n    .then((response) => {\n      offers = response.slice();\n      onSuccess(response);\n    })\n    .catch((message) => {\n      onError(`Ошибка загрузки данных. ${message}`);\n    });\n};\n\nconst sendData = (onSuccess, onError, body) => {\n  fetch('https://23.javascript.pages.academy/keksobooking',\n    {\n      method: 'POST',\n      body,\n    })\n    .then((response) => {\n      if (response.ok) {\n        onSuccess();\n      } else {\n        throw Error();\n      }\n    })\n    .catch(() => {\n      onError();\n    });\n};\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/api.js?");

/***/ }),

/***/ "./js/filterForm.js":
/*!**************************!*\
  !*** ./js/filterForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetFilterForm: () => (/* binding */ resetFilterForm)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ \"./js/map.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n\n\n\n\nconst filterForm = document.querySelector('.map__filters');\n\nconst LOW_PRICE = 10000;\nconst HIGH_PRICE = 50000;\n\nconst resetFilterForm = () => {\n  filterForm.reset();\n};\n\nconst filterByType = (offer, value) => {\n  const {type} = offer.offer;\n  if (value === 'any') {\n    return true;\n  } else {\n    return type === currentFilter.type;\n  }\n};\n\nconst filterByPrice = (offer, value) => {\n  const {price} = offer.offer;\n  switch(value) {\n    case 'any':\n      return true;\n    case 'low':\n      return price < LOW_PRICE ? true : false;\n    case 'high':\n      return price > HIGH_PRICE ? true : false;\n    default:\n      return price >= LOW_PRICE && price <= HIGH_PRICE ? true : false;\n  }\n};\n\nconst filterByRooms = (offer, value) => {\n  const {rooms} = offer.offer;\n  if (value === 'any') {\n    return true;\n  } else {\n    return rooms === +value;\n  }\n};\n\nconst filterByGuests = (offer, value) => {\n  const {guests} = offer.offer;\n  return (value === 'any' || guests === +value) ? true : false;\n};\n\nconst filterByFeatures = (offer, isNecessary, feature) => {\n  const {features} = offer.offer;\n  if (!features && isNecessary) {\n    return false;\n  }\n  if (isNecessary) {\n    return features.indexOf(feature) !== -1;\n  }\n  return true;\n};\n\nconst currentFilter = {\n  type: 'any',\n  price: 'any',\n  rooms: 'any',\n  guests: 'any',\n  wifi: false,\n  dishwasher: false,\n  parking: false,\n  washer: false,\n  elevator: false,\n  conditioner: false,\n};\n\nconst filters = {\n  type: filterByType,\n  price: filterByPrice,\n  rooms: filterByRooms,\n  guests: filterByGuests,\n  wifi: filterByFeatures,\n  dishwasher: filterByFeatures,\n  parking: filterByFeatures,\n  washer: filterByFeatures,\n  elevator: filterByFeatures,\n  conditioner: filterByFeatures,\n};\n\nconst getFilteredOffers = () => {\n  const tempOffers =  _api_js__WEBPACK_IMPORTED_MODULE_0__.offers.slice().filter((offer) => {\n    for (let key in currentFilter) {\n      if (!filters[key](offer, currentFilter[key], key)) {\n        return false\n      }\n    }\n    return true;\n  });\n  return tempOffers;\n};\n\nfilterForm.addEventListener('change', (evt) => {\n  const tagName = evt.target.tagName;\n  if (tagName === 'SELECT') {\n    const key = evt.target.name.split('-')[1];\n    currentFilter[key] = evt.target.value;\n  } else if (tagName === 'INPUT') {\n    const key = evt.target.value;\n    currentFilter[key] = evt.target.checked ? true : false;\n  }\n  const tempOffers = getFilteredOffers();\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.debounce)(_map_js__WEBPACK_IMPORTED_MODULE_1__.refreshMarkers, tempOffers);\n});\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/filterForm.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./js/map.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.js */ \"./js/page.js\");\n/* harmony import */ var _mainForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainForm.js */ \"./js/mainForm.js\");\n/* harmony import */ var _popups_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popups.js */ \"./js/popups.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/main.js?");

/***/ }),

/***/ "./js/mainForm.js":
/*!************************!*\
  !*** ./js/mainForm.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resetMainForm: () => (/* binding */ resetMainForm),\n/* harmony export */   setAddress: () => (/* binding */ setAddress)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.js */ \"./js/page.js\");\n/* harmony import */ var _popups_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popups.js */ \"./js/popups.js\");\n\n\n\n\nconst mainForm = document.querySelector('.ad-form');\nconst formReset = document.querySelector('.ad-form__reset');\nconst housingTitle = mainForm.querySelector('#title');\nconst housingPrice = mainForm.querySelector('#price');\nconst housingType = mainForm.querySelector('#type');\nconst housingTimeIn = mainForm.querySelector('#timein');\nconst housingTimeOut = mainForm.querySelector('#timeout');\nconst housingAddress = mainForm.querySelector('#address');\nconst housingRoomNumber = mainForm.querySelector('#room_number');\nconst housingCapacity = mainForm.querySelector('#capacity');\nconst avatarInput = mainForm.querySelector('#avatar');\nconst avatarImage = mainForm.querySelector('.ad-form-header__preview > img');\nconst housingInput = mainForm.querySelector('#images');\nconst housingImages = mainForm.querySelector('.ad-form__photo');\n\nconst FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];\nconst MIN_LENGTH_TITLE = 30;\nconst MAX_LENGTH_TITLE = 1000;\nconst MIN_PRICE = 0;\nconst MAX_PRICE = 1000000;\n\n\nconst MinPricesOfTypes = {\n  'bungalow': 0,\n  'flat': 1000,\n  'hotel': 3000,\n  'house': 5000,\n  'palace': 10000,\n};\n\nconst adjustTitle = () => {\n  const valueLength = housingTitle.value.length;\n  if (valueLength < MIN_LENGTH_TITLE) {\n    housingTitle.setCustomValidity(`Заголовок объявления должен содержать минимум ${MIN_LENGTH_TITLE} символов. Добавьте ${MIN_LENGTH_TITLE - housingTitle.value.length} символов`);\n  } else if (valueLength > MAX_LENGTH_TITLE) {\n    housingTitle.setCustomValidity(`Заголовок объявления должен содержать максимум ${MAX_LENGTH_TITLE} символов. Удалите ${housingTitle.value.length - MAX_LENGTH_TITLE} символов`);\n  } else {\n    housingTitle.setCustomValidity('');\n  }\n  housingTitle.reportValidity();\n};\n\nconst adjustPrice = () => {\n  const minValue = MinPricesOfTypes[housingType.value];\n  const currentValue = housingPrice.value;\n  housingPrice.placeholder = minValue;\n  housingPrice.min = minValue;\n  if (currentValue < minValue || currentValue < MIN_PRICE) {\n    housingPrice.setCustomValidity(`Цена не может быть ниже ${minValue}`);\n  } else if (currentValue > MAX_PRICE) {\n    housingPrice.setCustomValidity(`Цена не может быть выше ${MAX_PRICE}`);\n  } else {\n    housingPrice.setCustomValidity('');\n  }\n  housingPrice.reportValidity();\n};\n\nconst adjustTime = (evt) => {\n  const targetSelectElement = (evt.target.id === 'timein') ? housingTimeOut : housingTimeIn;\n  targetSelectElement.value = evt.target.value;\n};\n\nconst adjustCapacity = () => {\n  const rooms = +housingRoomNumber.value;\n  const capacity = +housingCapacity.value;\n\n  if (rooms === 100 && capacity === 0) {\n    housingCapacity.setCustomValidity('');\n  } else if (rooms >= capacity && rooms !== 100 && capacity !== 0) {\n    housingCapacity.setCustomValidity('');\n  } else {\n    switch (rooms) {\n      case 1:\n        housingCapacity.setCustomValidity('Количество комнат подходит только 1 гостю');\n        break;\n      case 2:\n        housingCapacity.setCustomValidity('Количество комнат подходит 1 или 2 гостям');\n        break;\n      case 3:\n        housingCapacity.setCustomValidity('Количество комнат подходит для 1, 2 или 3 гостей');\n        break;\n      case 100:\n        housingCapacity.setCustomValidity('Такое количество комнат не подходит для гостей');\n    }\n  }\n  housingCapacity.reportValidity();\n};\n\nconst setAddress = (value) => {\n  housingAddress.value = `${value.lat}, ${value.lng}`;\n};\n\nconst resetMainForm = () => {\n  mainForm.reset();\n  adjustPrice();\n};\n\nhousingTitle.addEventListener('input', adjustTitle);\nhousingType.addEventListener('change', adjustPrice);\nhousingPrice.addEventListener('input', adjustPrice);\nhousingTimeIn.addEventListener('change', adjustTime);\nhousingTimeOut.addEventListener('change', adjustTime);\nhousingRoomNumber.addEventListener('change', adjustCapacity);\nhousingCapacity.addEventListener('change', adjustCapacity);\n\nmainForm.addEventListener('submit', (evt) => {\n  evt.preventDefault();\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.sendData)(\n    () => {\n      (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.setPageToDefault)();\n      (0,_popups_js__WEBPACK_IMPORTED_MODULE_2__.showSuccessPopup)();\n    },\n    _popups_js__WEBPACK_IMPORTED_MODULE_2__.showErrorPopup,\n    new FormData(evt.target),\n  );\n});\n\nformReset.addEventListener('click', (evt) => {\n  evt.preventDefault();\n  (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.setPageToDefault)();\n});\n\navatarInput.addEventListener('change', () => {\n  const file = avatarInput.files[0];\n  const fileName = file.name.toLowerCase();\n  const matches = FILE_TYPES.some((fileType) => {\n    return fileName.endsWith(fileType);\n  });\n\n  if(matches) {\n    const reader = new FileReader();\n    reader.addEventListener('load', () => {\n      avatarImage.src = reader.result;\n    });\n    reader.readAsDataURL(file);\n  }\n});\n\nhousingInput.addEventListener('change', () => {\n  const file = housingInput.files[0];\n  const fileName = file.name.toLowerCase();\n  const matches = FILE_TYPES.some((fileType) => {\n    return fileName.endsWith(fileType);\n  });\n\n  if(matches) {\n    const reader = new FileReader();\n    reader.addEventListener('load', () => {\n      const housingImage = document.createElement('img');\n      housingImage.src = reader.result;\n      housingImage.width = 70;\n      housingImage.height = 70;\n      housingImage.alt = 'Фотография жилья';\n      housingImages.appendChild(housingImage);\n    });\n    reader.readAsDataURL(file);\n  }\n});\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/mainForm.js?");

/***/ }),

/***/ "./js/map.js":
/*!*******************!*\
  !*** ./js/map.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   refreshMarkers: () => (/* binding */ refreshMarkers),\n/* harmony export */   resetMainMarker: () => (/* binding */ resetMainMarker)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./js/utils.js\");\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.js */ \"./js/page.js\");\n/* harmony import */ var _mainForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainForm.js */ \"./js/mainForm.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _offer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offer.js */ \"./js/offer.js\");\n\n\n\n\n\n\nconst mapElement = document.querySelector('#map-canvas');\n\nconst renderedMarkers = [];\n\nconst CITY_CENTER = {\n  lat: 35.68555,\n  lng: 139.75555,\n};\n\nconst mainPinIcon = window.L.icon({\n  iconUrl: '../img/main-pin.svg',\n  iconSize: [52, 52],\n  iconAnchor: [26, 52],\n});\n\nconst pinIcon = window.L.icon({\n  iconUrl: '../img/pin.svg',\n  iconSize: [40, 40],\n  iconAnchor: [20, 40],\n});\n\nconst refreshMarkers = (offers) => {\n  const tempOffers = offers.slice(0, 10);\n  if (renderedMarkers.length !== 0) {\n    renderedMarkers.forEach((marker) => {\n      marker.remove();\n    });\n  }\n  tempOffers.forEach((offer) => {\n    const marker = window.L.marker(\n      {\n        lat: offer.location.lat,\n        lng: offer.location.lng,\n      },\n      {\n        icon: pinIcon,\n      },\n    );\n    marker\n      .addTo(map)\n      .bindPopup((0,_offer_js__WEBPACK_IMPORTED_MODULE_4__.getOfferElement)(offer));\n    renderedMarkers.push(marker);\n  });\n};\n\nconst resetMainMarker = () => {\n  mainMarker.setLatLng(CITY_CENTER);\n  (0,_mainForm_js__WEBPACK_IMPORTED_MODULE_2__.setAddress)(CITY_CENTER);\n};\n\nconst map = window.L.map(mapElement)\n  .on('load', () => {\n    (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.activateMainForm)();\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getData)(\n      (offers) => {\n        refreshMarkers(offers);\n        (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.activateFilterForm)();\n      },\n      (message) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.showAlert)(message),\n    );\n  })\n  .setView(CITY_CENTER, 13);\n\nwindow.L.tileLayer(\n  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',\n  {\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n  },\n).addTo(map);\n\nconst mainMarker = window.L.marker(\n  CITY_CENTER,\n  {\n    draggable: true,\n    icon: mainPinIcon,\n  },\n);\nmainMarker.addTo(map);\nresetMainMarker();\n\nmainMarker.on('move', () => {\n  const lat = mainMarker.getLatLng().lat.toFixed(5);\n  const lng = mainMarker.getLatLng().lng.toFixed(5);\n  (0,_mainForm_js__WEBPACK_IMPORTED_MODULE_2__.setAddress)({lat, lng});\n});\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/map.js?");

/***/ }),

/***/ "./js/offer.js":
/*!*********************!*\
  !*** ./js/offer.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getOfferElement: () => (/* binding */ getOfferElement)\n/* harmony export */ });\nconst offerTemplate = document.querySelector('#card').content.querySelector('.popup');\n\nconst RussianTypes = {\n  'flat': 'Квартира',\n  'bungalow': 'Бунгало',\n  'house': 'Дом',\n  'palace': 'Дворец',\n  'hotel': 'Отель',\n};\n\nconst getOfferPhotos = (offerPhotos, data) => {\n  if (!data) {\n    offerPhotos.remove();\n    return;\n  }\n  offerPhotos.innerHTML = '';\n  data.forEach((photoSrc) => {\n    const imgCopy = document.createElement('img');\n    imgCopy.src = photoSrc;\n    imgCopy.width = '45';\n    imgCopy.height = '40';\n    imgCopy.alt = 'Фотография жилья';\n    offerPhotos.appendChild(imgCopy);\n  });\n};\n\nconst getOfferFeatures = (offerFeatures, data) => {\n  if (!data) {\n    offerFeatures.remove();\n    return;\n  }\n  offerFeatures.innerHTML = '';\n  data.forEach((item) => {\n    const feature = document.createElement('li');\n    feature.classList.add('popup__feature', `popup__feature--${item}`);\n    offerFeatures.appendChild(feature);\n  });\n};\n\nconst getOfferElement = (data) => {\n  const offerElement = offerTemplate.cloneNode(true);\n\n  const offerTitle = offerElement.querySelector('.popup__title');\n  const offerAddress = offerElement.querySelector('.popup__text--address');\n  const offerPrice = offerElement.querySelector('.popup__text--price');\n  const offerType = offerElement.querySelector('.popup__type');\n  const offerCapacity = offerElement.querySelector('.popup__text--capacity');\n  const offerTime = offerElement.querySelector('.popup__text--time');\n  const offerFeatures = offerElement.querySelector('.popup__features');\n  const offerDescription = offerElement.querySelector('.popup__description');\n  const offerPhotos = offerElement.querySelector('.popup__photos');\n  const offerAvatar = offerElement.querySelector('.popup__avatar');\n\n  offerTitle.textContent = data.offer.title;\n  offerAddress.textContent = data.offer.address;\n  offerPrice.innerHTML = `${data.offer.price} <span>₽/ночь</span>`;\n  offerType.textContent = RussianTypes[data.offer.type];\n  offerCapacity.textContent = `${data.offer.rooms} комнат для ${data.offer.guests} гостей`;\n  offerTime.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;\n  getOfferFeatures(offerFeatures, data.offer.features);\n  offerDescription.textContent = data.offer.description;\n  getOfferPhotos(offerPhotos, data.offer.photos);\n  offerAvatar.src = data.author.avatar ? data.author.avatar : '../img/avatars/default.png';\n  return offerElement;\n};\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/offer.js?");

/***/ }),

/***/ "./js/page.js":
/*!********************!*\
  !*** ./js/page.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activateFilterForm: () => (/* binding */ activateFilterForm),\n/* harmony export */   activateMainForm: () => (/* binding */ activateMainForm),\n/* harmony export */   deactivateFilterForm: () => (/* binding */ deactivateFilterForm),\n/* harmony export */   deactivateMainForm: () => (/* binding */ deactivateMainForm),\n/* harmony export */   setPageToDefault: () => (/* binding */ setPageToDefault)\n/* harmony export */ });\n/* harmony import */ var _mainForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainForm.js */ \"./js/mainForm.js\");\n/* harmony import */ var _filterForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterForm.js */ \"./js/filterForm.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.js */ \"./js/map.js\");\n\n\n\n\nconst mainForm = document.querySelector('.ad-form');\nconst filterForm = document.querySelector('.map__filters');\n\nconst PAGE_DISABLED_CLASS = 'ad-form--disabled';\n\nconst deactivateMainForm = () => {\n  mainForm.classList.add(PAGE_DISABLED_CLASS);\n  Array.from(mainForm.children).forEach((element) => {\n    element.setAttribute('disabled', '');\n  });\n};\n\nconst activateMainForm = () => {\n  mainForm.classList.remove(PAGE_DISABLED_CLASS);\n  Array.from(mainForm.children).forEach((element) => {\n    element.removeAttribute('disabled', '');\n  });\n};\n\nconst deactivateFilterForm = () => {\n  filterForm.classList.add(PAGE_DISABLED_CLASS);\n  Array.from(filterForm.children).forEach((element) => {\n    element.setAttribute('disabled', '');\n  });\n};\n\nconst activateFilterForm = () => {\n  filterForm.classList.remove(PAGE_DISABLED_CLASS);\n  Array.from(filterForm.children).forEach((element) => {\n    element.removeAttribute('disabled', '');\n  });\n};\n\nconst setPageToDefault = () => {\n  (0,_mainForm_js__WEBPACK_IMPORTED_MODULE_0__.resetMainForm)();\n  (0,_filterForm_js__WEBPACK_IMPORTED_MODULE_1__.resetFilterForm)();\n  (0,_map_js__WEBPACK_IMPORTED_MODULE_2__.resetMainMarker)();\n};\n\ndeactivateMainForm();\ndeactivateFilterForm();\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/page.js?");

/***/ }),

/***/ "./js/popups.js":
/*!**********************!*\
  !*** ./js/popups.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showErrorPopup: () => (/* binding */ showErrorPopup),\n/* harmony export */   showSuccessPopup: () => (/* binding */ showSuccessPopup)\n/* harmony export */ });\nconst successPopup = document.querySelector('#success').content.querySelector('.success');\nconst errorPopup = document.querySelector('#error').content.querySelector('.error');\n\nconst bodyElement = document.querySelector('body');\n\nconst showSuccessPopup = () => {\n  bodyElement.appendChild(successPopup);\n};\n\nconst showErrorPopup = () => {\n  bodyElement.appendChild(errorPopup);\n};\n\nconst removePopups = () => {\n  successPopup.remove();\n  errorPopup.remove();\n};\n\nwindow.addEventListener('keydown', (evt) => {\n  if (evt.code === 'Escape') {\n    removePopups();\n  }\n});\n\nwindow.addEventListener('click', () => {\n  removePopups();\n});\n\nsuccessPopup.style.zIndex = 1000;\nerrorPopup.style.zIndex = 1000;\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/popups.js?");

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce),\n/* harmony export */   getRandomArrayElement: () => (/* binding */ getRandomArrayElement),\n/* harmony export */   getRandomFloating: () => (/* binding */ getRandomFloating),\n/* harmony export */   getRandomInteger: () => (/* binding */ getRandomInteger),\n/* harmony export */   getRandomSubArray: () => (/* binding */ getRandomSubArray),\n/* harmony export */   showAlert: () => (/* binding */ showAlert)\n/* harmony export */ });\n// от min до max включительно\nconst getRandomInteger = (min, max) => {\n  if (min > max) {\n    [min, max] = [max , min];\n  }\n  let rand = min + Math.random() * (max + 1 - min);\n  return Math.floor(rand);\n};\n\n// от min до max включительно\nconst getRandomFloating = (min, max, digits) => {\n  if (min < 0 || max < 0 || digits == 0) {\n    return -1;\n  }\n  if (min > max) {\n    [min, max] = [max , min];\n  }\n  return (Math.random() * (max - min) + min).toFixed(digits);\n};\n\nconst getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];\n\n// Случайный подмассив. Значения не повторяются\nconst getRandomSubArray = (array) => {\n  const randomSubArray = array.slice();\n  const randomLength = getRandomInteger(0 , randomSubArray.length);\n  const difference = randomSubArray.length - randomLength;\n  for (let i = 0; i < difference; i++) {\n    randomSubArray.splice(getRandomInteger(0, randomSubArray.length - 1), 1);\n  }\n  return randomSubArray;\n};\n\n// Предупреждение при проблемах с загрузкой данных\nconst showAlert = (message) => {\n  const alert = document.createElement('DIV');\n  alert.textContent = message;\n  alert.style.position = 'fixed';\n  alert.style.zIndex = 1000;\n  alert.style.top = 0;\n  alert.style.left = 0;\n  alert.style.right = 0;\n  alert.style.padding = '5px';\n  alert.style.background = '#f00';\n  alert.style.fontSize = '16px';\n  alert.style.color = '#fff';\n  alert.style.textAlign = 'center';\n  document.body.appendChild(alert);\n  setTimeout(() => {\n    document.body.removeChild(alert);\n  }, 5000);\n};\n\nconst debounce = (func, data) => {\n  const milliseconds = 500;\n  if (window.lastTimeout) {\n    window.clearTimeout(window.lastTimeout);\n  }\n  window.lastTimeout = window.setTimeout(() => {\n    func(data);\n  }, milliseconds);\n};\n\n\n\n\n//# sourceURL=webpack://keksobooking/./js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;