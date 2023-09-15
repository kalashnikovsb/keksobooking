const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      onError();
    })
    .then((response) => {
      onSuccess(response);
    })
};

export {getData};
