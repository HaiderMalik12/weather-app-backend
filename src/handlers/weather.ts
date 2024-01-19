import { validationResult } from 'express-validator';
import fetch from 'node-fetch';

export const getWeather = async (req, res) => {
  console.log(req.params.location);

  //make the api calls to weather api
  //   console.log(process.env.WEATHER_API_KEY);

  // fetch weather details
  const results = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1ae613db94d24e42819185935241901&q=${req.params.location}&aqi=no`
  );

  //   //fetch the next forecast view for the day
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
