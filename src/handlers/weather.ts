import { validationResult } from 'express-validator';
import fetch from 'node-fetch';

export const getWeather = async (req, res) => {
  // TODO: validation on location
  const results = await fetch(
    // https://api.weatherapi.com/v1/forecast.json?q=Faisalabad&days=7&key=1ae613db94d24e42819185935241901
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}&aqi=no&days=7`
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
