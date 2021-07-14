import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Call from '../../models/Call';

export default class SeedsCallsTable1626137453514 implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Call)
      .values([
        {
          origin: '011',
          destination: '016',
          rate: 1.90,
        },
        {
          origin: '016',
          destination: '011',
          rate: 2.90,
        },
        {
          origin: '011',
          destination: '017',
          rate: 1.70,
        },
        {
          origin: '017',
          destination: '011',
          rate: 2.70,
        },
        {
          origin: '011',
          destination: '018',
          rate: 0.90,
        },
        {
          origin: '018',
          destination: '011',
          rate: 1.90,
        },
      ])
      .execute()
  }
}
