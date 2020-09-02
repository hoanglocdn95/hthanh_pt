import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class BaseDTO {
  @Expose()
  readonly id: string;

  @Expose()
  readonly created: Date;

  @Expose()
  readonly updated: Date;

  @Expose()
  readonly deleted: Date;
}
