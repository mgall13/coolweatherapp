var apiKey = "5099d8d692ae44c13e96573330db8ca4"

var resultEl = document.getElementById('result');
var renderCityEl = document.getElementById('city-form');
var renderInputEl = document.getElementById('cityname');
var searchBtn = document.getElementById('searchBtn');

function getWeatherInfo (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q" + city + "&units=imperial&appid=" + apiKey;

    fetch(apiUrl).then(function(city) {
        if (city.ok) {
            city.json().then(function(data) {
                console.log(data);
                displayWeather(data, city);
            });
        } else {
            alert('Error city was not found!')
        }
    })
    .catch(function(err) {
        alert("API route not found.")
    })
};

function displayWeather(data) {
    var {name} = data;
    var {icon} = data.weather[0];
    var {temp, humidity} = data.main;
    var {speed} = data.wind;
    console.log(name, icon, temp, humidity, speed)
}