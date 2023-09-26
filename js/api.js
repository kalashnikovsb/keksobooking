let offers = [];

const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }
    })
    .then((response) => {
      offers = response.slice();
      onSuccess(response);
    })
    .catch((message) => {
      onError(`Ошибка загрузки данных. ${message}`);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw Error();
      }
    })
    .catch(() => {
      onError();
    });
};

export {getData, sendData, offers};
