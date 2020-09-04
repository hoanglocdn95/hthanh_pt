import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { appEncode } from 'src/common/encrypt';

export class RequestLoginDTO {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Transform(value => appEncode(value))
  readonly password: string;
}
