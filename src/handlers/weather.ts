import { validationResult } from 'express-validator';
import fetch from 'node-fetch';

export const getWeather = async (req, res) => {
  // TODO: validation on location
  const results = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}&aqi=no&days=7`
  );

  const weather = await results.json();

  //create dummy forecast array
  const forecast = {
    day: 'Sunday',
    hours: [
      {
        temprature: '44',
        time: '12 AM',
      },
      {
        temprature: '46',
        time: '1 AM',
      },
      {
        temprature: '39',
        time: '2 AM',
      },
    ],
  };
  // console.log(weather);

  // the object structure would be day, icon, time, and temprature
  console.log(weather.forecast.forecastday[0].day);
  console.log(weather.forecast.forecastday[0].hour[0]);
  return res.json({
    city: weather.location.name,
    date: weather.location.localtime,
    time: new Date().getTime().toString(),
    temprature: weather.current.temp_f,
    humidity: weather.current.humidity,
    wind: weather.current.wind_degree,
    icon: weather.current.condition.icon,
    forecast,
  });
};
