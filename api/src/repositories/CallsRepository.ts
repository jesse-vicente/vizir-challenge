import { Repository, getRepository, EntityRepository, getConnection } from 'typeorm';

import Call from '../models/Call';

import ICallsRepository from './interfaces/ICallsRepository';

class CallsRepository implements ICallsRepository {
  private ormRepository: Repository<Call>;

  constructor() {
    this.ormRepository = getRepository(Call);
  }

  public async rate(origin: string, destination: string): Promise<number | undefined> {
    const call = await this.ormRepository.findOne({
      where: { origin, destination }
    });

    return call && call.rate;
  }
}

export default CallsRepository
