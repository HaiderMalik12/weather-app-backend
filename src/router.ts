import { Router } from 'express';
import { body } from 'express-validator';
import { getForecast, getWeather } from './handlers/weather';

const router = Router();

/**
 * Weather API Routes
 */

router.get('/weather/:location', getWeather);
router.get('/forecast/:location', getForecast);

export default router;
