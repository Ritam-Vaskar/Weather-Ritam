function getWeather() {
    var cityInput = document.getElementById("cityInput");
    var weatherInfo = document.getElementById("weatherInfo");

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    var apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    var city = cityInput.value;

    if (city.trim() !== "") {
        var url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
            });
    } else {
        weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
    }
}

function displayWeather(data) {
    var weatherInfo = document.getElementById("weatherInfo");

    var cityName = data.name;
    var temperature = data.main.temp;
    var description = data.weather[0].description;

    var html = `<p>City: ${cityName}</p>`;
    html += `<p>Temperature: ${temperature}°C</p>`;
    html += `<p>Description: ${description}</p>`;

    weatherInfo.innerHTML = html;
}
