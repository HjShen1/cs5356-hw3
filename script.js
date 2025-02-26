document.addEventListener("DOMContentLoaded", function () {
    const weatherElement = document.getElementById("weather");

    //Weather API in NYC
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true")
        .then(response => response.json()) 
        .then(data => {
            const weather = data.current_weather;
            weatherElement.innerHTML = `Weather in NYC:
             🌡️ Temperature: ${weather.temperature}°C | 💨 Wind: ${weather.windspeed} km/h`;
        })
        .catch(error => {
            weatherElement.innerHTML = "Failed to load weather.";
            console.error("Error fetching weather:", error);
        });
});