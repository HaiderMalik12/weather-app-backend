import { validationResult } from 'express-validator';
import fetch from 'node-fetch';

export const getWeather = async (req, res) => {
  // TODO: validation on location
  const results = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}&aqi=no`
  );

  const weather = await results.json();

  return res.json({
    city: weather.location.name,
    date: weather.location.localtime,
    time: new Date().getTime().toString(),
    temprature: weather.current.temp_f,
    humidity: weather.current.humidity,
    wind: weather.current.wind_degree,
    icon: weather.current.condition.icon,
  });
};
