import { Request, Response } from 'express';

import CallsRepository from '../repositories/CallsRepository';
import CalculateCallRateService from '../services/CalculateCallRateService';

export default class SessionsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { origin, destination, duration, plan_minutes } = request.body;

    const callsRepository = new CallsRepository();
    const calculateCallRate = new CalculateCallRateService(callsRepository);

    const rate = await calculateCallRate.execute({
      origin,
      destination,
      duration,
      plan_minutes
    });

    return response.status(201).json(rate);
  }
}
