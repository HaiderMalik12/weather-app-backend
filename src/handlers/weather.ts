import { validationResult } from 'express-validator';
import fetch from 'node-fetch';
import { destructureForecast } from '../utils/utils';

export const getWeather = async (req, res) => {
  // TODO: validation on location
  const results = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}&aqi=no&days=2`
  );

  const weather = await results.json();

  //create dummy forecast array
  // const forecast = {
  //   day: 'Sunday',
  //   hours: [
  //     {
  //       temprature: '44',
  //       time: '12 AM',
  //       icon: '',
  //     },
  //     {
  //       temprature: '46',
  //       time: '1 AM',
  //       icon: '',
  //     },
  //     {
  //       temprature: '39',
  //       time: '2 AM',
  //       icon: '',
  //     },
  //   ],
  // };

  const [currentDay, nextDay] = weather.forecast.forecastday;
  // console.log(currentDay);

  // const _currentDay = {
  //   date: '',
  //   day: {
  //     avgtemp_f: '',
  //     condition: {
  //       icon: '',
  //     },
  //   },
  //   hours: [{ time: '', humidity: 0, temprature: '', icon: '' }],
  // };
  // _currentDay.date = currentDay.date;
  // _currentDay.day.avgtemp_f = currentDay.day.avgtemp_f;
  // _currentDay.day.condition = currentDay.day.condition.icon;
  // _currentDay.hours = currentDay.hour.map((hour) => {
  //   return {
  //     time: hour.time,
  //     humidity: hour.humidity,
  //     temprature: hour.temp_f,
  //     icon: hour.condition.icon,
  //   };
  // });

  // console.log(_currentDay);

  const forecastView = [
    destructureForecast(currentDay),
    destructureForecast(nextDay),
  ];

  // the object structure would be day, icon, time, and temprature
  // console.log(weather.forecast.forecastday[0].date);
  // console.log(weather.forecast.forecastday[0].day.avgtemp_f);
  // console.log(weather.forecast.forecastday[1].date);
  // console.log(weather.forecast.forecastday[0].hour[0]);

  // iterate all the forecast day list items

  // list over the hours for each day

  // extract temp, icon, and the time

  // weather.forecast.forecastday.forEach((day) => {
  //   data.currentDay.date = day.date;
  // });

  // for (let i = 0; i < weather.forecast.forecastday.length; i++) {
  //   data[i].date = weather.forecast.forecastday[i].date;
  // }

  // for (let i = 0; i < weather.forecast.forecastday.length; i++) {
  //   // data.push(weather.forecast.forecastday[i].date);
  //   data[i] = weather.forecast.forecastday[i].date;
  //   data[i]= weather.forecast.forecast[i];
  // }

  // console.log(data);

  return res.json({
    city: weather.location.name,
    date: weather.location.localtime,
    time: new Date().getTime().toString(),
    temprature: weather.current.temp_f,
    humidity: weather.current.humidity,
    wind: weather.current.wind_degree,
    icon: weather.current.condition.icon,
    forecast: forecastView,
  });
};
