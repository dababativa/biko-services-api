/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateSecurityServiceDto {
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @IsPositive()
  groupSize: number;
}
