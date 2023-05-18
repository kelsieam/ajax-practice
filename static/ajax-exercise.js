'use strict';

// fetch('/some-url')
//   .then((response) => response.json())
//   .then((responseData) => {
//     document.querySelector('#my-div').innerText = responseData;
//   });

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
  .then((response) => response.text())
  .then((responseData) => {
    document.querySelector('#fortune-text').innerHTML = responseData
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

// const button = document.querySelector('#update-status');

// button.addEventListener('click', () => {
//   const queryString = new URLSearchParams({ order: 123 }).toString();
//   // you could also hard code url to '/status?order=123'
//   const url = `/status?${queryString}`;

//   fetch(url)
//     .then((response) => response.text())
//     .then((status) => {
//       document.querySelector('#order-status').innerHTML = status;
//     });
// });

// for saving a json file:
// import json



//    data_file = open("data.json", "w")
//    json.dump(data, data_file)
//    data_file.close()


function showWeather(evt) {
  evt.preventDefault();

  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.json?zipcode=${zipcode}`;

  fetch(url)
    .then((response) => response.json())
    .then((responsejson) => document.querySelector('#weather-form').innerHTML = responsejson['forecast'])


  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
