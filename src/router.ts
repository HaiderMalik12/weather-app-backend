import { Router } from 'express';
import { body } from 'express-validator';
import { getWeather } from './handlers/weather';

const router = Router();

/**
 * Weather API Routes
 */

router.get('/weather/:location', getWeather);

export default router;
