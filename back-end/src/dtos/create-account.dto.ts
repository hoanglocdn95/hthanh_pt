import { IsNotEmpty, IsString, MaxLength, IsOptional, IsArray, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { Transform } from 'class-transformer';

import { EntityConstant } from 'src/constants/entity.constant';
import { appEncode } from 'src/common/encrypt';

export class CreateAccountDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(EntityConstant.ShortLength)
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(EntityConstant.ShortLength)
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(EntityConstant.ShortLength)
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Transform(value => appEncode(value))
  @MaxLength(EntityConstant.ShortLength)
  readonly password: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(EntityConstant.ArrayMinSize)
  @ArrayMaxSize(EntityConstant.ArrayMaxSize)
  readonly certification: string[];

  @IsOptional()
  @IsArray()
  @ArrayMinSize(EntityConstant.ArrayMinSize)
  @ArrayMaxSize(EntityConstant.ArrayMaxSize)
  readonly timesheetAvailable: string[];
}
