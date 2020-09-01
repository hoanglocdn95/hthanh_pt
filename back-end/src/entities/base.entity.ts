import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { EntityConstant } from '../constants/entity.constant';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn()
  updated: Date;

  @CreateDateColumn()
  created: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted: Date;
}
