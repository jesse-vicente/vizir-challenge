import { Router } from 'express';

import callsRouter from './calls.routes';

const routes = Router();

routes.use('/call-rate', callsRouter);

export default routes;
