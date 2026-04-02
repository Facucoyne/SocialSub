const apiKey = "124b92a8dd9ec01ffb0dbf64bc44af3c";

const city = "Buenos Aires";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("desc").innerText = data.weather[0].description;
  });


  document.getElementById("temp").innerText = data.main.temp + "°C";
document.getElementById("city").innerText = data.name;
document.getElementById("desc").innerText = data.weather[0].description;

const clima = data.weather[0].main;

let icono = "☀️";

if (clima === "Clouds") icono = "☁️";
if (clima === "Rain") icono = "🌧";
if (clima === "Thunderstorm") icono = "⛈";
if (clima === "Snow") icono = "❄️";

document.getElementById("icon").innerText = icono;