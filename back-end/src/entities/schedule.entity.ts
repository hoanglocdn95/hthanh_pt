import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';

import { AccountEntity } from './account.entity';
import { BaseEntity } from './base.entity';
import { DateDTO } from 'src/dtos/date.dto';

@Entity('schedules')
export class ScheduleEntity extends BaseEntity {
  @ManyToOne(type => AccountEntity, user => user.userSchedules)
  @JoinColumn({ name: 'user_id' })
  user: AccountEntity;

  @Column({ name: 'user_id', nullable: false })
  userId: string;

  @ManyToOne(type => AccountEntity, pt => pt.ptSchedules)
  @JoinColumn({ name: 'pt_id' })
  pt: AccountEntity;

  @Column({ name: 'pt_id', nullable: false })
  ptId: string;

  @Column({ type: 'json', nullable: true })
  dates: DateDTO[];
}
