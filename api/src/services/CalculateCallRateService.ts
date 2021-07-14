import AppError from '../errors/AppError';

import CallsRepository from '../repositories/CallsRepository';

interface Response {
  total: number;
  total_plan: number;
}

interface Request {
  origin: string;
  destination: string;
  duration: number;
  plan_minutes: number;
}

export default class CalculateCallRateService {
  constructor(
    private callsRepository: CallsRepository,
  ) { }

  public async execute({ origin, destination, duration, plan_minutes }: Request): Promise<Response | undefined> {
    const rate = await this.callsRepository.rate(origin, destination);

    if (!rate) {
      throw new AppError('It was not possible to calculate the call rate.');
    };

    const total = duration * rate;

    if (plan_minutes > duration) {
      return { total, total_plan: 0 };
    }

    // Minutos excedentes
    const exceedingMinutes = duration - plan_minutes;

    return {
      total,
      total_plan: rate * exceedingMinutes * 1.1,
    }
  }
}
