var apiKey = '83985d498abbfbdf1098ff4f10700ec0'

var cityHistory = [];

var resultEl = document.getElementById('result');
var renderCityEl = document.getElementById('city-form');
var renderInputEl = document.getElementById('cityname');
var searchBtn = document.getElementById('searchBtn');

var nameEl = document.createElement('h3');
nameEl.setAttribute('class', 'city-name');
var tempEl = document.createElement('p');
var humidityEl = document.createElement('p');
var windEl = document.createElement('p');
var iconEl = document.createElement('img');
iconEl.setAttribute('src', '');

resultEl.append(nameEl, iconEl, tempEl, humidityEl, windEl);


function getWeatherInfo(city, data) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

   fetch(apiUrl).then(function(response) {
       if (response.ok) {
           response.json().then(function(data) {
               displayWeather(data, city)
           })
       }
   })
};

function findCity(event) {
    event.preventDefault();

    var cityName = renderInputEl.value.trim();

    if(cityName) {
        getWeatherInfo(cityName);
        renderInputEl.value="";
    } else {
        alert('City not found!')
    }

    cityHistory.push(cityName);
};

function displayWeather(data) {
    var {name} = data;
    var {icon} = data.weather[0];
    var {temp, humidity} = data.main;
    console.log(name, icon, temp, humidity)

    nameEl.innerText = 'Current weather in ' + name;
    iconEl.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    tempEl.innerText = "Temp: " + temp + "°F";
    humidityEl.innerText = "Humidity: " + humidity;
};

getWeatherInfo(cityHistory[0]);
searchBtn.onclick(findCity);