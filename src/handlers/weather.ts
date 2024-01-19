import { validationResult } from 'express-validator';

export const getWeather = async (req, res) => {
  console.log(req.params.location);

  //make the api calls to weather api

  // fetch weather details

  //fetch the next forecast view for the day

  return res.json({
    city: 'Faisalabad',
    date: '01/19/24',
    temprature: '40',
    humidity: 'Humidity',
    wind: 'wind',
    icon: '9dk',
  });
};
