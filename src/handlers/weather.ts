import { validationResult } from 'express-validator';

export const getWeather = async (req, res) => {
  console.log(req.params.location);
  return res.json({
    city: 'Faisalabad',
    date: '01/19/24',
    temprature: '40',
    humidity: 'Humidity',
    wind: 'wind',
    icon: '9dk',
  });
};
