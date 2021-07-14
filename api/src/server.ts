import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';

import AppError from './errors/AppError';

import routes from './routes';

import './database';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server started at port 3333.');
});
