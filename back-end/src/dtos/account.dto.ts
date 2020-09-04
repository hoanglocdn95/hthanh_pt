import { Exclude, Expose, Transform } from 'class-transformer';

import { BaseDTO } from './base.dto';
import { RoleEnum } from 'src/enum/account.enum';
import { jwtSign } from 'src/common/encrypt';

@Exclude()
export class AccountDTO extends BaseDTO {
  @Expose()
  readonly name: string;

  @Expose()
  readonly address: string;

  @Expose()
  readonly username: string;

  @Expose()
  readonly certification: string[];

  @Expose()
  readonly timesheetAvailable: string[];

  @Expose()
  readonly role: RoleEnum;

  @Expose()
  @Transform((_, object) => jwtSign({ username: object.username, password: object.password }))
  readonly authentization: string;
}
