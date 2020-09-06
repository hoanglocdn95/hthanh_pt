import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { EntityConstant } from 'src/constants/entity.constant';
import { AccountEntity } from './account.entity';

@Entity('auth_tokens')
export class AuthTokenEntity extends BaseEntity {
  @ManyToOne(() => AccountEntity, account => account.authTokens)
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;

  @Column({ name: 'account_id' })
  accountId: string;

  @Column({ type: 'varchar', length: EntityConstant.LongLength, nullable: false })
  token: string;
}
