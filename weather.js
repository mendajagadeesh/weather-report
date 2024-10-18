const apikey = "6f2b983036afe1294b1ce9944c8cb3b5";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    if (city === "") {
        alert("please enter a city name");
        return;
    }
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/weather-app-img/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/weather-app-img/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/weather-app-img/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/weather-app-img/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/weather-app-img/images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
//checkweather(city);