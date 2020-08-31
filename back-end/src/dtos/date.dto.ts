import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class DateDTO {
  @Expose()
  readonly date: Date;

  @Expose()
  readonly acepted: boolean;
}
