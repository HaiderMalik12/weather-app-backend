import { validationResult } from 'express-validator';
import fetch from 'node-fetch';
import { destructureForecast, extractDate, extractTime } from '../utils/utils';

export const getWeather = async (req, res) => {
  // TODO: validation on location
  const results = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}&aqi=no&days=2`
  );

  const weather = await results.json();
  const [currentDay, nextDay] = weather.forecast.forecastday;

  const forecastView = [
    destructureForecast(currentDay),
    destructureForecast(nextDay),
  ];

  return res.json({
    city: weather.location.name,
    date: extractDate(weather.location.localtime),
    time: extractTime(weather.location.localtime),
    temprature: weather.current.temp_c,
    humidity: weather.current.humidity,
    wind: weather.current.wind_degree,
    icon: weather.current.condition.icon,
    forecast: forecastView,
  });
};
