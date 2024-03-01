document.addEventListener('DOMContentLoaded', function() {
    const apiKey = "eeae1bba7c22e2354e31541e065d8639";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    const errorDiv = document.querySelector(".error");
    const weatherDiv = document.querySelector(".weather");

    searchBox.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            checkWeather(searchBox.value);
        }
    });

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        if (response.status === 404) {
            errorDiv.style.display = "block";
            weatherDiv.style.display = "none";
            return;
        } else {
            errorDiv.style.display = "none";
            weatherDiv.style.display = "block";
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
        
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/Drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
     }
});
