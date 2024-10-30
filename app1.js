const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const getWeatherButton = document.getElementById('get-weather');
const weatherResult = document.getElementById('weather-result');

getWeatherButton.addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            weatherResult.innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${temp} °C</p>
                <p>Condition: ${description}</p>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        });
}