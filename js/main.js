const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchTxt = document.querySelector(".searchTxt");
const searchBtn = document.querySelector(".searchBtn");
const weatherIcon = document.querySelector(".weather-icon");
let icon_source = "img/clear.png"; 
async function checkWeather(city="Brampton") {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'm/s';
    switch (data.weather[0].main.toLowerCase()) {
        case "thunderstorm":
            icon_source = "img/thunderstorm.png";
            break;
        case "drizzle":
            icon_source = "img/drizzle.png";
            break;
        case "rain":
            icon_source = "img/rain.png";
            break;
        case "snow":
            icon_source = "img/snow.png";
            break;
        case "mist":
            icon_source = "img/mist.png";
            break;
        case "clouds":
            icon_source = "img/clouds.png";
            break;
        default:
            icon_source = "img/clear.png";
    }
    weatherIcon.src = icon_source;
}
searchBtn.addEventListener("click", () => checkWeather(searchTxt.value));

