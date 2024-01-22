import express from 'express';
import morgan from 'morgan';
import errorhandler from 'error-handler';
import router from './router';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
dotenv.config();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
}

export default app;
