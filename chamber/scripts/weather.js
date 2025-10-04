const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');
const forecastGrid = document.querySelector('#forecast-grid');

const lat = 40.76;
const lon = -111.89;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=abfddc022d7c8b7375ef0f818e58cf7a`;

async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayCurrentWeather(data);
        displayForecast(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
    console.log(error);
    }
}

function displayCurrentWeather(data) {
    const forecast = data.list[0]; 

    currentTemp.innerHTML = `${forecast.main.temp.toFixed(1)}&deg;F`;

    const iconCode = forecast.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const desc = forecast.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc} (Forecast for ${forecast.dt_txt})`;
}

function displayForecast(data) {
    forecastGrid.innerHTML = "";

    const dayIndexes = [0, 8, 16];
    dayIndexes.forEach(i => {
    const forecast = data.list[i];
    const iconCode = forecast.weather[0].icon;
    const iconsrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const desc = forecast.weather[0].description;
    const temp = forecast.main.temp.toFixed(1);
    const date = new Date(forecast.dt * 1000);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const dateStr = date.toLocaleDateString(undefined, options);

    const card = document.createElement('div');
    card.classList.add('weather-card');
    card.innerHTML = `
        <h3>${dateStr}</h3>
        <img src="${iconsrc}" alt="${desc}">
        <p>${temp}°F</p>
        <p>${desc}</p>
    `;

    forecastGrid.appendChild(card);
    });
}

apiFetch();