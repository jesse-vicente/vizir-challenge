import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CallsController from '../controllers/CallsController';

const callsRouter = Router();

const callsController = new CallsController();

callsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      origin: Joi.string().required(),
      destination: Joi.string().required(),
      duration: Joi.number().greater(0).required(),
      plan_minutes: Joi.number().greater(0).required(),
    },
  }),
  callsController.show
);

export default callsRouter;
