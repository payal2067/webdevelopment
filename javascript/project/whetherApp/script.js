const API_KEY = "111576c73dde30dcfee49f3a4d55f4b8";
// const API_KEY = "your API_KEY";
async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  const { Latitude, Longitude } = await getGeoLocation(cityName);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);

  const data = await response.json();

  const Temperature = data.main.temp - 273.15;

  const Wind = data.wind.speed - 0.62;

  const Pressure = data.main.pressure - 1015;

  const Clouds = data.clouds.all - 100;

  document.getElementById("Temperature").innerText = Temperature.toFixed(2);

  document.getElementById("Wind").innerText = Wind.toFixed(2);

  document.getElementById("Pressure").innerText = Pressure.toFixed(2);

  document.getElementById("Clouds").innerText = Clouds.toFixed(2);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);

  const data = await response.json();

  const Latitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Latitude, Longitude };
}
