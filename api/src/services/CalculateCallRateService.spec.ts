import { createConnections, getConnection } from 'typeorm';

import CallsRepository from '../repositories/CallsRepository';
import CalculateCallRateService from './CalculateCallRateService';

describe('CalculateCallRate', () => {
  beforeAll(async () => {
    await createConnections();
  });

  afterAll(async () => {
    const defaultConnection = getConnection('default')
    await defaultConnection.close();
  });

  it('should be able to calculate the call rate', async () => {
    const callsRepository = new CallsRepository();
    const calculateCallRate = new CalculateCallRateService(callsRepository);

    const response = await calculateCallRate.execute({
      origin: '011',
      destination: '016',
      duration: 20,
      plan_minutes: 30,
    });

    await expect(response?.total).toBe(38);
    await expect(response?.total_plan).toBe(0);
  });
});
