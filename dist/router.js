"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_1 = require("./handlers/weather");
const router = (0, express_1.Router)();
/**
 * Weather API Routes
 */
router.get('/weather/:location', weather_1.getWeather);
router.get('/forecast/:location', weather_1.getForecast);
exports.default = router;
//# sourceMappingURL=router.js.map