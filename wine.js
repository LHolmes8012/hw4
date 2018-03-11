////////////////////////////////////////////////////////////
// Function to update user's weather
////////////////////////////////////////////////////////////

let updateUserWidget = function(data) {

  console.log("Got weather data: ", data)
  $(".card-text-user").html(Math.round(data.main.temp) + " degrees")
  $(".img-user").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
  $(".card-title-user").html(data.name)
}

let getUserWeather = function(info) {
  console.log(info)
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = 'c12fc648d09e3dd15d018e0aacdd05b1';

  let weatherServiceURLUser = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURLUser += 'lat=' + latitude
  weatherServiceURLUser += '&lon=' + longitude
  weatherServiceURLUser +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURLUser).then(convertToJSON).then(updateUserWidget).catch(displayError);
}

let updateUserWeather = function(event) {
  console.log("Starting updateUserWeather...")
  navigator.geolocation.getCurrentPosition(getUserWeather)
  console.log("updateUserWeather complete")
}

$( window ).on( "load", updateUserWeather );



////////////////////////////////////////////////////////////
// Function to update Napa weather
////////////////////////////////////////////////////////////
let updateNapaWidget = function(data) {

  console.log("Got weather data: ", data)
  $(".card-text-wine").html(Math.round(data.main.temp) + " degrees")
  $(".img-wine").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
  $(".card-title-wine").html(data.name)
}

let getNapaWeather = function(info) {
  console.log(info)
  let latitude = 38.2975;
  let longitude = -122.2869;
  let apiKey = 'c12fc648d09e3dd15d018e0aacdd05b1';

  let weatherServiceURLNapa = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURLNapa += 'lat=' + latitude
  weatherServiceURLNapa += '&lon=' + longitude
  weatherServiceURLNapa +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURLNapa).then(convertToJSON).then(updateNapaWidget).catch(displayError);
}

let linkNapa = jQuery("#get_napaforecast")
linkNapa.on("click", getNapaWeather);

////////////////////////////////////////////////////////////
// Function to update Sonoma weather
////////////////////////////////////////////////////////////
let updateSonomaWidget = function(data) {

  console.log("Got weather data: ", data)
  $(".card-text-wine").html(Math.round(data.main.temp) + " degrees")
  $(".img-wine").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
  $(".card-title-wine").html(data.name)
}

let getSonomaWeather = function(info) {
  console.log(info)
  let latitude = 38.2919;
  let longitude = -122.4580;
  let apiKey = 'c12fc648d09e3dd15d018e0aacdd05b1';

  let weatherServiceURLSonoma = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURLSonoma += 'lat=' + latitude
  weatherServiceURLSonoma += '&lon=' + longitude
  weatherServiceURLSonoma +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURLSonoma).then(convertToJSON).then(updateSonomaWidget).catch(displayError);
}

let linkSonoma = jQuery("#get_sonomaforecast")
linkSonoma.on("click", getSonomaWeather);

////////////////////////////////////////////////////////////
// Function to update Bordeaux weather
////////////////////////////////////////////////////////////
let updateBordeauxWidget = function(data) {

  console.log("Got weather data: ", data)
  $(".card-text-wine").html(Math.round(data.main.temp) + " degrees")
  $(".img-wine").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
  $(".card-title-wine").html(data.name)
}

let getBordeauxWeather = function(info) {
  console.log(info)
  let latitude = 44.8378;
  let longitude = -0.5792;
  let apiKey = 'c12fc648d09e3dd15d018e0aacdd05b1';

  let weatherServiceURLBordeaux = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURLBordeaux += 'lat=' + latitude
  weatherServiceURLBordeaux += '&lon=' + longitude
  weatherServiceURLBordeaux +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURLBordeaux).then(convertToJSON).then(updateBordeauxWidget).catch(displayError);
}

let linkBordeaux = jQuery("#get_bordeauxforecast")
linkBordeaux.on("click", getBordeauxWeather);

////////////////////////////////////////////////////////////
// Function to update Tuscany weather
////////////////////////////////////////////////////////////
let updateTuscanyWidget = function(data) {

  console.log("Got weather data: ", data)
  $(".card-text-wine").html(Math.round(data.main.temp) + " degrees")
  $(".img-wine").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
  $(".card-title-wine").html(data.name)
}

let getTuscanyWeather = function(info) {
  console.log(info)
  let latitude = 43.7711;
  let longitude = 11.2486;
  let apiKey = 'c12fc648d09e3dd15d018e0aacdd05b1';

  let weatherServiceURLTuscany = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURLTuscany += 'lat=' + latitude
  weatherServiceURLTuscany += '&lon=' + longitude
  weatherServiceURLTuscany +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURLTuscany).then(convertToJSON).then(updateTuscanyWidget).catch(displayError);
}

let linkTuscany = jQuery("#get_tuscanyforecast")
linkTuscany.on("click", getTuscanyWeather);

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
