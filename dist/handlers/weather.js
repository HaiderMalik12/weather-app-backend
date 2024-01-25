"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForecast = exports.getWeather = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const utils_1 = require("../utils/utils");
const getWeather = async (req, res, next) => {
    try {
        // TODO: validation on location
        const results = await (0, node_fetch_1.default)(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}&aqi=no`);
        if (!results.ok) {
            // If the response is not successful, throw an error
            throw new Error(`Weather API error: ${results.statusText}`);
        }
        const weather = await results.json();
        // const [currentDay, nextDay] = weather.forecast.forecastday;
        // const forecastView = [
        //   destructureForecast(currentDay),
        //   destructureForecast(nextDay),
        // ];
        return res.json({
            city: weather.location.name,
            date: (0, utils_1.extractDate)(weather.location.localtime),
            time: (0, utils_1.extractTime)(weather.location.localtime),
            temprature: weather.current.temp_c,
            humidity: weather.current.humidity,
            wind: weather.current.wind_degree,
            icon: weather.current.condition.icon,
            // forecast: forecastView,
        });
    }
    catch (error) {
        // Pass the error to the error handling middleware
        next(error);
    }
};
exports.getWeather = getWeather;
const getForecast = async (req, res, next) => {
    try {
        // TODO: validation on location
        const results = await (0, node_fetch_1.default)(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${req.params.location}&aqi=no&days=1`);
        if (!results.ok) {
            // If the response is not successful, throw an error
            throw new Error(`Weather API error: ${results.statusText}`);
        }
        const weather = await results.json();
        const forecastView = (0, utils_1.destructureForecast)(weather.forecast.forecastday[0]);
        const response = {
            city: weather.location.name,
            date: (0, utils_1.extractDate)(weather.location.localtime),
            time: (0, utils_1.extractTime)(weather.location.localtime),
            temprature: weather.current.temp_c,
            humidity: weather.current.humidity,
            wind: weather.current.wind_degree,
            icon: weather.current.condition.icon,
            forecast: forecastView,
        };
        return res.json(response);
    }
    catch (error) {
        // Pass the error to the error handling middleware
        next(error);
    }
};
exports.getForecast = getForecast;
//# sourceMappingURL=weather.js.map