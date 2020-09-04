import { Entity, Column, OneToMany, Unique } from 'typeorm';

import { BaseEntity } from './base.entity';
import { ScheduleEntity } from './schedule.entity';
import { EntityConstant } from 'src/constants/entity.constant';
import { RoleEnum } from 'src/enum/account.enum';

@Entity('accounts')
@Unique(['username'])
export class AccountEntity extends BaseEntity {
  @OneToMany(type => ScheduleEntity, schedule => schedule.user)
  userSchedules: ScheduleEntity[];

  @OneToMany(type => ScheduleEntity, schedule => schedule.pt)
  ptSchedules: ScheduleEntity[];

  @Column({ type: 'varchar', length: EntityConstant.ShortLength, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: EntityConstant.ShortLength, nullable: false })
  address: string;

  @Column({ type: 'varchar', length: EntityConstant.ShortLength, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: EntityConstant.ShortLength, nullable: false })
  password: string;

  @Column({ type: 'json', nullable: true })
  certification: string[];

  @Column({ type: 'json', name: 'timesheet_available', nullable: true })
  timesheetAvailable: string[];

  @Column({ type: 'enum', enum: RoleEnum, nullable: false })
  role: RoleEnum;

  @Column({ type: 'varchar', length: EntityConstant.ShortLength, nullable: true })
  phone: string;
}
