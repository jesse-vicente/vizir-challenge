import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calls')
class Call {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column()
  rate: number;
}

export default Call;

