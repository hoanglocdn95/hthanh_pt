import { Exclude, Expose } from 'class-transformer';

import { BaseDTO } from './base.dto';

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
}
