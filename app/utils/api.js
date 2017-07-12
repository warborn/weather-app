import axios from 'axios';

const API_KEY = '2222cd92352e48a7b49e8acfeb8d3b5d';

function handleError(message, error) {
  console.warn(message, error);
}

export async function getForecastDetails(zipcode) {
  const forecastDetailsURL = 
    window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode}&type=accurate&APPID=${API_KEY}`);
  const response = await axios.get(forecastDetailsURL);
  return response.data;
}

export async function getForecast(zipcode) {
  const forecastsURL = 
    window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${zipcode}&type=accurate&APPID=${API_KEY}&cnt=5`);
  try {
    const response = await axios.get(forecastsURL);
    return response.data;
  } catch(error) {
    handleError('Error in getForecasts:', error);
  }
}